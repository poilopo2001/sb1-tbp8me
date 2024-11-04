import { ServiceType } from '@/data/services';
import { Location } from '@/data/locations';
import { Craftsman } from '@/data/craftsmen';
import { Locale } from '@/lib/i18n';

export function generateServiceSchema(
  service: ServiceType,
  locale: Locale,
  location?: Location
) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name[locale],
    description: service.description[locale],
    provider: {
      '@type': 'Organization',
      name: 'QuoteEase',
      url: 'https://quoteease.com'
    },
    areaServed: location ? {
      '@type': 'City',
      name: location.name[locale],
      containedInPlace: {
        '@type': 'Country',
        name: 'Luxembourg'
      }
    } : {
      '@type': 'Country',
      name: 'Luxembourg'
    },
    category: service.category
  };

  return JSON.stringify(schema);
}

export function generateLocationSchema(location: Location, locale: Locale) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: location.name[locale],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Luxembourg',
      addressRegion: location.canton
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates?.latitude,
      longitude: location.coordinates?.longitude
    }
  };

  return JSON.stringify(schema);
}

export function generateCraftsmanSchema(craftsman: Craftsman) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: craftsman.name,
    description: craftsman.description,
    image: craftsman.imageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: craftsman.location.city,
      addressCountry: craftsman.location.country
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: craftsman.rating,
      reviewCount: craftsman.reviews
    },
    priceRange: '€€',
    telephone: craftsman.contact.phone,
    email: craftsman.contact.email
  };

  return JSON.stringify(schema);
}

export function generateOrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QuoteEase',
    url: 'https://quoteease.com',
    logo: 'https://quoteease.com/logo.png',
    sameAs: [
      'https://facebook.com/quoteease',
      'https://twitter.com/quoteease',
      'https://linkedin.com/company/quoteease'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+352-123-456-789',
      contactType: 'customer service',
      areaServed: 'LU',
      availableLanguage: ['French', 'English']
    }
  };

  return JSON.stringify(schema);
}