import { notFound } from 'next/navigation'
import { getServiceBySlug, getLocalizedService } from '@/data/services'
import { getLocationBySlug, getLocalizedLocation } from '@/data/locations'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ServiceHeader } from "@/components/ui/ServiceHeader"
import { LocalCraftsmenList } from "@/components/ui/LocalCraftsmenList"
import { PriceGuideTable } from "@/components/ui/PriceGuideTable"
import { TestimonialCard } from "@/components/ui/TestimonialCard"
import { contentCache } from '@/lib/content/cache'
import { contentQueue } from '@/lib/content/queue'
import type { Metadata } from 'next'

export const dynamicParams = true
export const revalidate = 3600

export async function generateMetadata({ 
  params: { locale, serviceSlug, locationSlug } 
}: { 
  params: { locale: 'fr' | 'en'; serviceSlug: string; locationSlug: string } 
}): Promise<Metadata> {
  const service = getServiceBySlug(serviceSlug, locale)
  const location = getLocationBySlug(locationSlug, locale)
  if (!service || !location) return {}

  const content = contentCache.get('service-location', locale, `${serviceSlug}-${locationSlug}`)
  
  return {
    title: content?.metadata.title || `${service.name[locale]} ${location.name[locale]} | QuoteEase`,
    description: content?.metadata.description,
    keywords: content?.metadata.keywords,
    alternates: {
      canonical: `/${locale}/services/${serviceSlug}/locations/${locationSlug}`,
      languages: {
        'fr': `/fr/services/${service.slug.fr}/locations/${location.slug.fr}`,
        'en': `/en/services/${service.slug.en}/locations/${location.slug.en}`
      }
    }
  }
}

export default async function ServiceLocationPage({
  params: { locale, serviceSlug, locationSlug }
}: {
  params: { locale: 'fr' | 'en'; serviceSlug: string; locationSlug: string }
}) {
  const service = getServiceBySlug(serviceSlug, locale)
  const location = getLocationBySlug(locationSlug, locale)
  if (!service || !location) notFound()

  const localizedService = getLocalizedService(service, locale)
  const localizedLocation = getLocalizedLocation(location, locale)

  // Get cached content or generate new
  let content = contentCache.get('service-location', locale, `${serviceSlug}-${locationSlug}`)
  if (!content) {
    await contentQueue.add({
      type: 'service-location',
      locale,
      data: {
        serviceSlug,
        locationSlug,
        serviceName: localizedService.name,
        locationName: localizedLocation.name
      },
      priority: 1
    })
    // Use default content until generated
    content = {
      id: '',
      type: 'service-location',
      locale,
      content: {
        pricing: {
          basePrice: { min: 500, max: 1500, currency: "€" },
          factors: []
        },
        craftsmen: [],
        testimonials: []
      },
      metadata: {
        title: '',
        description: '',
        keywords: []
      },
      generatedAt: new Date(),
      expiresAt: new Date()
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceHeader
          title={`${localizedService.name} - ${localizedLocation.name}`}
          description={localizedService.description}
          imageUrl="/images/services/default.jpg"
          averagePrice={`${content.content.pricing.basePrice.min}€ - ${content.content.pricing.basePrice.max}€`}
          completionTime={content.content.estimatedTime || "2-3 days"}
        />

        <div className="container mx-auto px-4 py-12 grid gap-12">
          <LocalCraftsmenList
            craftsmen={content.content.craftsmen}
            title={locale === 'fr' ? "Artisans Disponibles" : "Available Craftsmen"}
            showLoadMore
          />

          <PriceGuideTable
            basePrice={content.content.pricing.basePrice}
            factors={content.content.pricing.factors}
            lastUpdated={content.generatedAt.toISOString().split('T')[0]}
          />

          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">
              {locale === 'fr' ? "Avis Récents" : "Recent Reviews"}
            </h2>
            <div className="grid gap-4">
              {content.content.testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}