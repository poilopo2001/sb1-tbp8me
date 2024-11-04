import { ContentType } from '../types';
import { 
  serviceContentSchema, 
  locationContentSchema, 
  serviceLocationContentSchema 
} from './schemas';
import { ValidationError } from '../errors';

export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

export async function validateContent(
  type: ContentType,
  content: unknown
): Promise<ValidationResult> {
  try {
    switch (type) {
      case 'service':
        await serviceContentSchema.parseAsync(content);
        break;
      case 'location':
        await locationContentSchema.parseAsync(content);
        break;
      case 'service-location':
        await serviceLocationContentSchema.parseAsync(content);
        break;
      default:
        throw new ValidationError(`Unknown content type: ${type}`);
    }

    return { isValid: true };
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }

    const errors = error.errors?.map((e: any) => 
      `${e.path.join('.')}: ${e.message}`
    ) || ['Unknown validation error'];

    return {
      isValid: false,
      errors
    };
  }
}

export function validateMetadata(metadata: unknown): ValidationResult {
  try {
    const { title, description, keywords } = metadata as any;

    // Title validation
    if (!title || title.length < 10 || title.length > 60) {
      return {
        isValid: false,
        errors: ['Title must be between 10 and 60 characters']
      };
    }

    // Description validation
    if (!description || description.length < 50 || description.length > 160) {
      return {
        isValid: false,
        errors: ['Description must be between 50 and 160 characters']
      };
    }

    // Keywords validation
    if (!keywords || !Array.isArray(keywords) || keywords.length < 3 || keywords.length > 10) {
      return {
        isValid: false,
        errors: ['Must provide between 3 and 10 keywords']
      };
    }

    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      errors: ['Invalid metadata format']
    };
  }
}

export function validatePricing(pricing: unknown): ValidationResult {
  try {
    const { basePrice, factors } = pricing as any;

    if (!basePrice || typeof basePrice.min !== 'number' || typeof basePrice.max !== 'number') {
      return {
        isValid: false,
        errors: ['Invalid base price format']
      };
    }

    if (basePrice.min >= basePrice.max) {
      return {
        isValid: false,
        errors: ['Minimum price must be less than maximum price']
      };
    }

    if (!Array.isArray(factors) || factors.length < 2) {
      return {
        isValid: false,
        errors: ['Must provide at least 2 price factors']
      };
    }

    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      errors: ['Invalid pricing format']
    };
  }
}