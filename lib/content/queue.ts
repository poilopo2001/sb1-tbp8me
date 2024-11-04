import { ContentRequest } from './types';
import { batchProcessor } from './batch';
import { contentCache } from './cache';

const QUEUE_BATCH_SIZE = 5;
const QUEUE_PROCESS_INTERVAL = 5000; // 5 seconds

export class ContentQueue {
  private queue: ContentRequest[] = [];
  private processing: boolean = false;
  private interval: NodeJS.Timer | null = null;

  constructor() {
    this.startProcessing();
  }

  async add(request: ContentRequest): Promise<void> {
    // Check cache first
    const cached = contentCache.get(
      request.type,
      request.locale,
      request.data.slug
    );

    if (cached) {
      return;
    }

    this.queue.push(request);
  }

  private startProcessing() {
    if (this.interval) {
      return;
    }

    this.interval = setInterval(() => {
      this.processQueue();
    }, QUEUE_PROCESS_INTERVAL);
  }

  private async processQueue() {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;

    try {
      // Sort by priority (higher priority first)
      this.queue.sort((a, b) => b.priority - a.priority);

      // Take batch of requests
      const requests = this.queue.splice(0, QUEUE_BATCH_SIZE);
      
      // Create and process batch
      await batchProcessor.createBatch(requests);
    } catch (error) {
      console.error('Error processing queue:', error);
      
      // On error, return requests to queue
      this.queue.unshift(...this.queue.splice(0, QUEUE_BATCH_SIZE));
    } finally {
      this.processing = false;
    }
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  getQueueLength(): number {
    return this.queue.length;
  }
}

export const contentQueue = new ContentQueue();