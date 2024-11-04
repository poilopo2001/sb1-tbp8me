export type Locale = 'fr' | 'en';

export const defaultLocale: Locale = 'fr';

export function getLocale(locale?: string): Locale {
  if (locale && ['fr', 'en'].includes(locale)) {
    return locale as Locale;
  }
  return defaultLocale;
}