import Head from 'next/head';
import { useLocale } from '@/hooks/useLocale';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  schema?: string;
  canonical?: string;
  alternates?: {
    [key: string]: string;
  };
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
}

export function SEO({
  title,
  description,
  keywords,
  schema,
  canonical,
  alternates,
  openGraph
}: SEOProps) {
  const { locale } = useLocale();
  const siteName = 'QuoteEase';
  const defaultImage = 'https://quoteease.com/og-image.jpg';

  return (
    <Head>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Alternate language versions */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      
      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:image" content={openGraph?.image || defaultImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={openGraph?.image || defaultImage} />
      
      {/* Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
    </Head>
  );
}