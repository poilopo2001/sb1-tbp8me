export class RateLimiter {
  private timestamps: number[] = [];
  private readonly windowMs: number;
  private readonly maxRequests: number;
  private readonly retryDelayMs: number;
  private readonly maxRetries: number;

  constructor(
    windowMs: number = 60000, // 1 minute window
    maxRequests: number = 60, // 60 requests per minute
    retryDelayMs: number = 1000, // 1 second retry delay
    maxRetries: number = 3 // Maximum 3 retries
  ) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    this.retryDelayMs = retryDelayMs;
    this.maxRetries = maxRetries;
  }

  async waitForToken(retryCount = 0): Promise<void> {
    try {
      const now = Date.now();
      this.timestamps = this.timestamps.filter(t => now - t < this.windowMs);

      if (this.timestamps.length >= this.maxRequests) {
        const oldestTimestamp = this.timestamps[0];
        const waitTime = this.windowMs - (now - oldestTimestamp);
        
        if (retryCount >= this.maxRetries) {
          throw new Error('Rate limit exceeded: Maximum retries reached');
        }

        await new Promise(resolve => setTimeout(resolve, waitTime));
        return this.waitForToken(retryCount + 1);
      }

      this.timestamps.push(now);
    } catch (error) {
      throw new Error(`Rate limiter error: ${error.message}`);
    }
  }

  getRemainingRequests(): number {
    const now = Date.now();
    this.timestamps = this.timestamps.filter(t => now - t < this.windowMs);
    return Math.max(0, this.maxRequests - this.timestamps.length);
  }

  getResetTime(): number {
    const now = Date.now();
    if (this.timestamps.length === 0) return 0;
    const oldestTimestamp = this.timestamps[0];
    return Math.max(0, this.windowMs - (now - oldestTimestamp));
  }
}

export const rateLimiter = new RateLimiter();