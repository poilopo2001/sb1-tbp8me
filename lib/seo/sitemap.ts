import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { tradeTasks } from '@/data/trades';
import { blogPosts } from '@/data/blog';

const SITE_URL = 'https://quoteease.com';
const SITEMAP_SIZE_LIMIT = 45000; // Keep under 50k URLs per sitemap
const LOCALES = ['fr', 'en'];

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: { [key: string]: string };
}

export async function generateSitemaps() {
  const urls: SitemapURL[] = [];

  // Add static pages
  LOCALES.forEach(locale => {
    urls.push({
      loc: `${SITE_URL}/${locale}`,
      changefreq: 'daily',
      priority: 1.0,
      alternates: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`
      }
    });
  });

  // Add service pages
  services.forEach(service => {
    LOCALES.forEach(locale => {
      urls.push({
        loc: `${SITE_URL}/${locale}/services/${service.slug[locale]}`,
        changefreq: 'weekly',
        priority: 0.9,
        alternates: {
          fr: `${SITE_URL}/fr/services/${service.slug.fr}`,
          en: `${SITE_URL}/en/services/${service.slug.en}`
        }
      });
    });
  });

  // Add location pages
  locations.forEach(location => {
    LOCALES.forEach(locale => {
      urls.push({
        loc: `${SITE_URL}/${locale}/locations/${location.slug[locale]}`,
        changefreq: 'weekly',
        priority: 0.8,
        alternates: {
          fr: `${SITE_URL}/fr/locations/${location.slug.fr}`,
          en: `${SITE_URL}/en/locations/${location.slug.en}`
        }
      });
    });
  });

  // Add service-location pages
  services.forEach(service => {
    locations.forEach(location => {
      LOCALES.forEach(locale => {
        urls.push({
          loc: `${SITE_URL}/${locale}/services/${service.slug[locale]}/locations/${location.slug[locale]}`,
          changefreq: 'weekly',
          priority: 0.7,
          alternates: {
            fr: `${SITE_URL}/fr/services/${service.slug.fr}/locations/${location.slug.fr}`,
            en: `${SITE_URL}/en/services/${service.slug.en}/locations/${location.slug.en}`
          }
        });
      });
    });
  });

  // Add trade task pages
  tradeTasks.forEach(task => {
    LOCALES.forEach(locale => {
      urls.push({
        loc: `${SITE_URL}/${locale}/tasks/${task.slug[locale]}`,
        changefreq: 'weekly',
        priority: 0.6,
        alternates: {
          fr: `${SITE_URL}/fr/tasks/${task.slug.fr}`,
          en: `${SITE_URL}/en/tasks/${task.slug.en}`
        }
      });
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    LOCALES.forEach(locale => {
      urls.push({
        loc: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastmod: post.publishDate,
        changefreq: 'monthly',
        priority: 0.5,
        alternates: {
          fr: `${SITE_URL}/fr/blog/${post.slug}`,
          en: `${SITE_URL}/en/blog/${post.slug}`
        }
      });
    });
  });

  // Split URLs into chunks
  const chunks = [];
  let currentChunk: SitemapURL[] = [];

  urls.forEach(url => {
    if (currentChunk.length >= SITEMAP_SIZE_LIMIT) {
      chunks.push([...currentChunk]);
      currentChunk = [];
    }
    currentChunk.push(url);
  });

  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }

  // Generate individual sitemaps
  const sitemaps = chunks.map((chunk, index) => ({
    filename: `sitemap-${index + 1}.xml`,
    content: generateSitemapXML(chunk)
  }));

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex(sitemaps.map(s => s.filename));

  return {
    sitemaps,
    sitemapIndex
  };
}

function generateSitemapXML(urls: SitemapURL[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
    ${Object.entries(url.alternates || {}).map(([lang, href]) => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${lang}" 
      href="${href}"
    />`).join('')}
  </url>`).join('')}
</urlset>`;
}

function generateSitemapIndex(filenames: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${filenames.map(filename => `
  <sitemap>
    <loc>${SITE_URL}/${filename}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;
}