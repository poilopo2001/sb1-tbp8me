import { Locale } from '@/lib/i18n';

export type ContentType = 'service' | 'location' | 'service-location';

export interface ContentRequest {
  type: ContentType;
  locale: Locale;
  data: Record<string, any>;
  priority: number;
}

export interface ContentBatch {
  id: string;
  requests: ContentRequest[];
  status: 'pending' | 'processing' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface GeneratedContent {
  id: string;
  type: ContentType;
  locale: Locale;
  content: Record<string, any>;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  generatedAt: Date;
  expiresAt: Date;
}