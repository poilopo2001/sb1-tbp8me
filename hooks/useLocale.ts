"use client";

import { usePathname } from 'next/navigation';
import { defaultLocale, type Locale } from '@/lib/i18n';

export function useLocale() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/en') ? 'en' : 'fr';

  return {
    locale: locale as Locale,
    isDefault: locale === defaultLocale
  };
}