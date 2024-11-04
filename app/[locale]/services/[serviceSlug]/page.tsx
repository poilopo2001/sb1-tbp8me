import { notFound } from 'next/navigation'
import { getServiceBySlug, getLocalizedService } from '@/data/services'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ServiceHeader } from "@/components/ui/ServiceHeader"
import { PriceGuideTable } from "@/components/ui/PriceGuideTable"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ProjectGallery } from "@/components/ui/ProjectGallery"
import { LocalCraftsmenList } from "@/components/ui/LocalCraftsmenList"
import { RelatedServicesGrid } from "@/components/ui/RelatedServicesGrid"
import { contentCache } from '@/lib/content/cache'
import { contentQueue } from '@/lib/content/queue'
import type { Metadata } from 'next'

export const dynamicParams = true
export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({ 
  params: { locale, serviceSlug } 
}: { 
  params: { locale: 'fr' | 'en'; serviceSlug: string } 
}): Promise<Metadata> {
  const service = getServiceBySlug(serviceSlug, locale)
  if (!service) return {}

  const content = contentCache.get('service', locale, serviceSlug)
  
  return {
    title: content?.metadata.title || `${service.name[locale]} | QuoteEase`,
    description: content?.metadata.description || service.description[locale],
    keywords: content?.metadata.keywords,
    alternates: {
      canonical: `/${locale}/services/${serviceSlug}`,
      languages: {
        'fr': `/fr/services/${service.slug.fr}`,
        'en': `/en/services/${service.slug.en}`
      }
    }
  }
}

export default async function ServicePage({
  params: { locale, serviceSlug }
}: {
  params: { locale: 'fr' | 'en'; serviceSlug: string }
}) {
  const service = getServiceBySlug(serviceSlug, locale)
  if (!service) notFound()

  const localizedService = getLocalizedService(service, locale)

  // Get cached content or generate new
  let content = contentCache.get('service', locale, serviceSlug)
  if (!content) {
    await contentQueue.add({
      type: 'service',
      locale,
      data: { 
        slug: serviceSlug,
        name: localizedService.name,
        description: localizedService.description
      },
      priority: 1
    })
    // Use default content until generated
    content = {
      id: '',
      type: 'service',
      locale,
      content: {
        pricing: {
          basePrice: { min: 500, max: 1500, currency: "€" },
          factors: []
        },
        faqs: [],
        gallery: [],
        craftsmen: [],
        relatedServices: []
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
          title={localizedService.name}
          description={localizedService.description}
          imageUrl="/images/services/default.jpg"
          averagePrice={`${content.content.pricing.basePrice.min}€ - ${content.content.pricing.basePrice.max}€`}
          completionTime={content.content.estimatedTime || "2-3 days"}
        />
        
        <div className="container mx-auto px-4 py-12 grid gap-12">
          <PriceGuideTable
            basePrice={content.content.pricing.basePrice}
            factors={content.content.pricing.factors}
            lastUpdated={content.generatedAt.toISOString().split('T')[0]}
          />

          <FAQAccordion 
            faqs={content.content.faqs}
            title={locale === 'fr' ? "Questions Fréquentes" : "Frequently Asked Questions"}
          />

          <ProjectGallery 
            images={content.content.gallery}
            title={locale === 'fr' ? "Projets Récents" : "Recent Projects"}
          />

          <LocalCraftsmenList 
            craftsmen={content.content.craftsmen}
            title={locale === 'fr' ? "Artisans Disponibles" : "Available Craftsmen"}
            showLoadMore
          />

          <RelatedServicesGrid 
            services={content.content.relatedServices}
            title={locale === 'fr' ? "Services Similaires" : "Related Services"}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}