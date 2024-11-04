export class ContentGenerationError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly retryable: boolean = true
  ) {
    super(message);
    this.name = 'ContentGenerationError';
  }
}

export class RateLimitError extends ContentGenerationError {
  constructor(message: string) {
    super(message, 'RATE_LIMIT_ERROR', true);
    this.name = 'RateLimitError';
  }
}

export class APIError extends ContentGenerationError {
  constructor(
    message: string,
    public readonly statusCode: number
  ) {
    super(
      message,
      'API_ERROR',
      statusCode >= 500 || statusCode === 429 // Retryable if server error or rate limit
    );
    this.name = 'APIError';
  }
}

export class ValidationError extends ContentGenerationError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', false);
    this.name = 'ValidationError';
  }
}

export class CacheError extends ContentGenerationError {
  constructor(message: string) {
    super(message, 'CACHE_ERROR', true);
    this.name = 'CacheError';
  }
}