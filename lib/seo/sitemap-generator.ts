import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { tradeTasks } from '@/data/trades';
import { contentCache } from '@/lib/content/cache';
import { contentQueue } from '@/lib/content/queue';
import { Locale } from '@/lib/i18n';

const SITE_URL = 'https://quoteease.com';
const BATCH_SIZE = 100;
const LOCALES: Locale[] = ['fr', 'en'];

export async function generateSitemapUrls() {
  const urls: string[] = [];
  const now = new Date().toISOString();

  // Generate service pages
  for (const service of services) {
    for (const locale of LOCALES) {
      const url = `/${locale}/services/${service.slug[locale]}`;
      urls.push(url);

      // Queue content generation if not cached
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
      }
    }
  }

  // Generate location pages
  for (const location of locations) {
    for (const locale of LOCALES) {
      const url = `/${locale}/locations/${location.slug[locale]}`;
      urls.push(url);

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
      }
    }
  }

  // Generate service-location pages
  for (const service of services) {
    for (const location of locations) {
      for (const locale of LOCALES) {
        const url = `/${locale}/services/${service.slug[locale]}/locations/${location.slug[locale]}`;
        urls.push(url);

        const cacheKey = `${service.slug[locale]}-${location.slug[locale]}`;
        if (!contentCache.get('service-location', locale, cacheKey)) {
          await contentQueue.add({
            type: 'service-location',
            locale,
            data: {
              serviceSlug: service.slug[locale],
              locationSlug: location.slug[locale],
              serviceName: service.name[locale],
              locationName: location.name[locale]
            },
            priority: 2
          });
        }
      }
    }
  }

  // Generate trade task pages
  for (const task of tradeTasks) {
    for (const locale of LOCALES) {
      urls.push(`/${locale}/tasks/${task.slug[locale]}`);
    }
  }

  return urls;
}

export async function generateSitemaps() {
  const urls = await generateSitemapUrls();
  const sitemaps: { filename: string; content: string }[] = [];

  // Split URLs into batches
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const sitemapContent = generateSitemapXml(batch);
    sitemaps.push({
      filename: `sitemap-${Math.floor(i / BATCH_SIZE) + 1}.xml`,
      content: sitemapContent
    });
  }

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex(sitemaps.map(s => s.filename));

  return {
    sitemaps,
    sitemapIndex
  };
}

function generateSitemapXml(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.map(url => `
  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url.includes('/locations/') ? '0.8' : '0.9'}</priority>
    ${LOCALES.map(locale => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${locale}" 
      href="${SITE_URL}${url.replace(/^\/(fr|en)/, `/${locale}`)}"
    />`).join('')}
  </url>`).join('')}
</urlset>`;
}

function generateSitemapIndex(filenames: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${filenames.map(filename => `
  <sitemap>
    <loc>${SITE_URL}/sitemaps/${filename}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;
}