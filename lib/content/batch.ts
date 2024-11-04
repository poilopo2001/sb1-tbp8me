import { ContentRequest, ContentBatch } from './types';
import { generateContent } from './openrouter';
import { contentCache } from './cache';
import { validateContent } from './validation';
import { RateLimitError, ValidationError } from './errors';

const MAX_BATCH_SIZE = 5;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

class BatchProcessor {
  private activeBatches: Map<string, ContentBatch> = new Map();

  async createBatch(requests: ContentRequest[]): Promise<void> {
    const batchId = `batch-${Date.now()}`;
    const batch: ContentBatch = {
      id: batchId,
      requests,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.activeBatches.set(batchId, batch);

    try {
      batch.status = 'processing';
      this.activeBatches.set(batchId, { ...batch, updatedAt: new Date() });

      // Process requests in parallel with rate limiting
      await Promise.all(
        requests.map(request => this.processRequestWithRetry(request))
      );

      batch.status = 'completed';
      this.activeBatches.set(batchId, { ...batch, updatedAt: new Date() });
    } catch (error) {
      console.error(`Batch ${batchId} failed:`, error);
      throw error;
    } finally {
      // Cleanup old batches
      setTimeout(() => {
        this.activeBatches.delete(batchId);
      }, 3600000); // Remove after 1 hour
    }
  }

  private async processRequestWithRetry(
    request: ContentRequest,
    retryCount = 0
  ): Promise<void> {
    try {
      // Check cache first
      const cached = contentCache.get(
        request.type,
        request.locale,
        this.getCacheKey(request)
      );

      if (cached) {
        return;
      }

      const content = await generateContent(request);
      
      if (!content) {
        throw new Error('No content generated');
      }

      // Validate generated content
      const validationResult = await validateContent(request.type, content);
      
      if (!validationResult.isValid) {
        if (retryCount < MAX_RETRIES) {
          console.warn(
            `Content validation failed for ${request.type}. Retrying...`,
            validationResult.errors
          );
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * Math.pow(2, retryCount)));
          return this.processRequestWithRetry(request, retryCount + 1);
        }
        
        throw new ValidationError(
          `Content validation failed after ${MAX_RETRIES} attempts: ${
            validationResult.errors?.join(', ')
          }`
        );
      }

      // Store in cache
      contentCache.set({
        id: `${request.type}-${request.locale}-${Date.now()}`,
        type: request.type,
        locale: request.locale,
        content,
        metadata: content.metadata,
        generatedAt: new Date(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
      });

    } catch (error) {
      if (error instanceof RateLimitError || retryCount >= MAX_RETRIES) {
        throw error;
      }

      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * Math.pow(2, retryCount)));
      return this.processRequestWithRetry(request, retryCount + 1);
    }
  }

  private getCacheKey(request: ContentRequest): string {
    switch (request.type) {
      case 'service':
        return request.data.slug;
      case 'location':
        return request.data.slug;
      case 'service-location':
        return `${request.data.serviceSlug}-${request.data.locationSlug}`;
      default:
        throw new Error(`Unknown content type: ${request.type}`);
    }
  }

  getBatchStatus(batchId: string): ContentBatch | undefined {
    return this.activeBatches.get(batchId);
  }
}

export const batchProcessor = new BatchProcessor();