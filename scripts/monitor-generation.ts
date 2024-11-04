import { contentQueue } from '../lib/content/queue';
import { contentCache } from '../lib/content/cache';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { Locale } from '../lib/i18n';

const LOCALES: Locale[] = ['fr', 'en'];

interface GenerationStats {
  total: number;
  completed: number;
  failed: number;
  remaining: number;
}

async function monitorGeneration() {
  console.log('Starting content generation monitoring...');

  const stats = calculateTotalPages();
  let lastProgress = -1;

  while (true) {
    const currentStats = await getGenerationProgress(stats.total);
    const progress = Math.round((currentStats.completed / stats.total) * 100);

    if (progress !== lastProgress) {
      console.clear();
      console.log(`Content Generation Progress:
----------------------------------------
Total pages: ${stats.total}
Completed: ${currentStats.completed}
Failed: ${currentStats.failed}
Remaining: ${currentStats.remaining}
Queue length: ${contentQueue.getQueueLength()}

Progress: ${progress}% [${getProgressBar(progress)}]
`);
      lastProgress = progress;
    }

    if (currentStats.completed + currentStats.failed === stats.total) {
      console.log('\nContent generation completed!');
      break;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

function calculateTotalPages() {
  const servicePages = services.length * LOCALES.length;
  const locationPages = locations.length * LOCALES.length;
  const combinationPages = services.length * locations.length * LOCALES.length;

  return {
    total: servicePages + locationPages + combinationPages,
    completed: 0,
    failed: 0,
    remaining: servicePages + locationPages + combinationPages
  };
}

async function getGenerationProgress(total: number): Promise<GenerationStats> {
  let completed = 0;
  let failed = 0;

  // Check service pages
  for (const service of services) {
    for (const locale of LOCALES) {
      const content = contentCache.get('service', locale, service.slug[locale]);
      if (content) completed++;
    }
  }

  // Check location pages
  for (const location of locations) {
    for (const locale of LOCALES) {
      const content = contentCache.get('location', locale, location.slug[locale]);
      if (content) completed++;
    }
  }

  // Check service-location combinations
  for (const service of services) {
    for (const location of locations) {
      for (const locale of LOCALES) {
        const cacheKey = `${service.slug[locale]}-${location.slug[locale]}`;
        const content = contentCache.get('service-location', locale, cacheKey);
        if (content) completed++;
      }
    }
  }

  return {
    total,
    completed,
    failed,
    remaining: total - completed - failed
  };
}

function getProgressBar(progress: number): string {
  const width = 30;
  const filled = Math.round((progress / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

// Start monitoring if run directly
if (require.main === module) {
  monitorGeneration().catch(error => {
    console.error('Monitoring failed:', error);
    process.exit(1);
  });
}

export { monitorGeneration };