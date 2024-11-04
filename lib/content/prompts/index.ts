import { Locale } from '@/lib/i18n';
import { generateServicePrompt, type ServicePromptData } from './service';
import { generateLocationPrompt, type LocationPromptData } from './location';
import { generateServiceLocationPrompt, type ServiceLocationPromptData } from './service-location';

export type ContentType = 'service' | 'location' | 'service-location';

export function generatePrompt(
  type: ContentType,
  locale: Locale,
  data: ServicePromptData | LocationPromptData | ServiceLocationPromptData
): string {
  switch (type) {
    case 'service':
      return generateServicePrompt(data as ServicePromptData);
    case 'location':
      return generateLocationPrompt(data as LocationPromptData);
    case 'service-location':
      return generateServiceLocationPrompt(data as ServiceLocationPromptData);
    default:
      throw new Error(`Unknown content type: ${type}`);
  }
}