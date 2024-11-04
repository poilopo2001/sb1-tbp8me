import { services } from '../data/services';
import { locations } from '../data/locations';
import { contentQueue } from '../lib/content/queue';
import { contentCache } from '../lib/content/cache';
import { Locale } from '../lib/i18n';

const LOCALES: Locale[] = ['fr', 'en'];
const BATCH_SIZE = 50; // Process in smaller batches to avoid memory issues

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateAllContent() {
  console.log('Starting content generation...');
  const startTime = Date.now();
  let totalQueued = 0;
  let currentBatch = 0;

  // Generate service pages
  console.log('\nGenerating service pages...');
  for (const service of services) {
    for (const locale of LOCALES) {
      if (!contentCache.get('service', locale, service.slug[locale])) {
        await contentQueue.add({
          type: 'service',
          locale,
          data: {
            slug: service.slug[locale],
            name: service.name[locale],
            description: service.description[locale],
            category: service.id
          },
          priority: 1
        });
        totalQueued++;
        currentBatch++;

        if (currentBatch >= BATCH_SIZE) {
          console.log(`Processed ${totalQueued} items. Waiting for queue to process...`);
          await delay(5000); // Wait 5 seconds between batches
          currentBatch = 0;
        }
      }
    }
  }

  // Generate location pages
  console.log('\nGenerating location pages...');
  for (const location of locations) {
    for (const locale of LOCALES) {
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
        currentBatch++;

        if (currentBatch >= BATCH_SIZE) {
          console.log(`Processed ${totalQueued} items. Waiting for queue to process...`);
          await delay(5000);
          currentBatch = 0;
        }
      }
    }
  }

  // Generate service-location combinations
  console.log('\nGenerating service-location combinations...');
  for (const service of services) {
    for (const location of locations) {
      for (const locale of LOCALES) {
        const cacheKey = `${service.slug[locale]}-${location.slug[locale]}`;
        if (!contentCache.get('service-location', locale, cacheKey)) {
          await contentQueue.add({
            type: 'service-location',
            locale,
            data: {
              serviceSlug: service.slug[locale],
              locationSlug: location.slug[locale],
              serviceName: service.name[locale],
              locationName: location.name[locale],
              serviceDescription: service.description[locale],
              population: location.population
            },
            priority: 2
          });
          totalQueued++;
          currentBatch++;

          if (currentBatch >= BATCH_SIZE) {
            console.log(`Processed ${totalQueued} items. Waiting for queue to process...`);
            await delay(5000);
            currentBatch = 0;
          }
        }
      }
    }
  }

  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;

  console.log(`
Content Generation Summary:
-------------------------
Total pages queued: ${totalQueued}
Time taken: ${duration.toFixed(2)} seconds
Current queue length: ${contentQueue.getQueueLength()}
  `);

  // Wait for final batch to complete
  if (contentQueue.getQueueLength() > 0) {
    console.log('\nWaiting for final items to process...');
    await delay(10000);
  }

  console.log('\nContent generation completed!');
}

// Execute the generation
generateAllContent().catch(error => {
  console.error('Error during content generation:', error);
  process.exit(1);
});