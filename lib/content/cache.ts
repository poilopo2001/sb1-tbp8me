import { GeneratedContent } from './types';

class ContentCache {
  private cache: Map<string, GeneratedContent> = new Map();

  getCacheKey(type: string, locale: string, slug: string): string {
    return `${type}:${locale}:${slug}`;
  }

  get(type: string, locale: string, slug: string): GeneratedContent | undefined {
    const key = this.getCacheKey(type, locale, slug);
    const content = this.cache.get(key);

    if (content && content.expiresAt > new Date()) {
      return content;
    }

    if (content) {
      this.cache.delete(key);
    }

    return undefined;
  }

  set(content: GeneratedContent): void {
    const key = this.getCacheKey(content.type, content.locale, content.content.slug);
    this.cache.set(key, content);
  }

  clear(): void {
    this.cache.clear();
  }

  clearExpired(): void {
    const now = new Date();
    for (const [key, content] of this.cache.entries()) {
      if (content.expiresAt <= now) {
        this.cache.delete(key);
      }
    }
  }
}

export const contentCache = new ContentCache();