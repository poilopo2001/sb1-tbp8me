import { NextResponse } from 'next/server';
import { contentQueue } from '@/lib/content/queue';
import { contentCache } from '@/lib/content/cache';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { Locale } from '@/lib/i18n';

export async function POST(request: Request) {
  try {
    const { authorization } = request.headers;
    
    // Basic security check - in production, use proper authentication
    if (authorization !== `Bearer ${process.env.ADMIN_API_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { type } = await request.json();
    let totalQueued = 0;

    switch (type) {
      case 'all':
        // Generate all content types
        for (const service of services) {
          for (const locale of ['fr', 'en'] as Locale[]) {
            if (!contentCache.get('service', locale, service.slug[locale])) {
              await contentQueue.add({
                type: 'service',
                locale,
                data: {
                  slug: service.slug[locale],
                  name: service.name[locale],
                  description: service.description[locale]
                },
                priority: 1
              });
              totalQueued++;
            }
          }
        }

        for (const location of locations) {
          for (const locale of ['fr', 'en'] as Locale[]) {
            if (!contentCache.get('location', locale, location.slug[locale])) {
              await contentQueue.add({
                type: 'location',
                locale,
                data: {
                  slug: location.slug[locale],
                  name: location.name[locale],
                  type: location.type,
                  population: location.population
                },
                priority: 1
              });
              totalQueued++;
            }
          }
        }
        break;

      case 'services':
        // Generate only service pages
        for (const service of services) {
          for (const locale of ['fr', 'en'] as Locale[]) {
            if (!contentCache.get('service', locale, service.slug[locale])) {
              await contentQueue.add({
                type: 'service',
                locale,
                data: {
                  slug: service.slug[locale],
                  name: service.name[locale],
                  description: service.description[locale]
                },
                priority: 1
              });
              totalQueued++;
            }
          }
        }
        break;

      case 'locations':
        // Generate only location pages
        for (const location of locations) {
          for (const locale of ['fr', 'en'] as Locale[]) {
            if (!contentCache.get('location', locale, location.slug[locale])) {
              await contentQueue.add({
                type: 'location',
                locale,
                data: {
                  slug: location.slug[locale],
                  name: location.name[locale],
                  type: location.type,
                  population: location.population
                },
                priority: 1
              });
              totalQueued++;
            }
          }
        }
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid generation type' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      message: 'Content generation started',
      totalQueued,
      queueLength: contentQueue.getQueueLength()
    });

  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}