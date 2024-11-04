import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { contentQueue } from '@/lib/content/queue'

const LOCALES = ['fr', 'en']
const DEFAULT_LOCALE = 'fr'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return matchLocale(languages, LOCALES, DEFAULT_LOCALE)
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  // Check if this is a search engine crawler
  const userAgent = request.headers.get('user-agent') || ''
  const isCrawler = /bot|crawler|spider|crawling/i.test(userAgent)

  // Extract route parameters
  const matches = {
    service: pathname.match(/\/(?:fr|en)\/services\/([^\/]+)$/),
    location: pathname.match(/\/(?:fr|en)\/locations\/([^\/]+)$/),
    serviceLocation: pathname.match(/\/(?:fr|en)\/services\/([^\/]+)\/locations\/([^\/]+)$/)
  }

  if (isCrawler && (matches.service || matches.location || matches.serviceLocation)) {
    // Queue content generation for crawler requests
    const locale = pathname.startsWith('/en') ? 'en' : 'fr'
    
    if (matches.service) {
      await contentQueue.add({
        type: 'service',
        locale,
        data: { slug: matches.service[1] },
        priority: 1
      })
    } else if (matches.location) {
      await contentQueue.add({
        type: 'location',
        locale,
        data: { slug: matches.location[1] },
        priority: 1
      })
    } else if (matches.serviceLocation) {
      await contentQueue.add({
        type: 'service-location',
        locale,
        data: { 
          serviceSlug: matches.serviceLocation[1],
          locationSlug: matches.serviceLocation[2]
        },
        priority: 2
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}