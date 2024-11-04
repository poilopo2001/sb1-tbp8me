import { notFound } from 'next/navigation'
import { getLocationBySlug, getLocalizedLocation } from '@/data/locations'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { LocationHeader } from "@/components/ui/LocationHeader"
import { StatisticsDisplay } from "@/components/ui/StatisticsDisplay"
import { LocalCraftsmenList } from "@/components/ui/LocalCraftsmenList"
import { ServiceCard } from "@/components/ServiceCard"
import { contentCache } from '@/lib/content/cache'
import { contentQueue } from '@/lib/content/queue'
import type { Metadata } from 'next'

export const dynamicParams = true
export const revalidate = 3600

export async function generateMetadata({ 
  params: { locale, locationSlug } 
}: { 
  params: { locale: 'fr' | 'en'; locationSlug: string } 
}): Promise<Metadata> {
  const location = getLocationBySlug(locationSlug, locale)
  if (!location) return {}

  const content = contentCache.get('location', locale, locationSlug)
  
  return {
    title: content?.metadata.title || `${location.name[locale]} | QuoteEase`,
    description: content?.metadata.description,
    keywords: content?.metadata.keywords,
    alternates: {
      canonical: `/${locale}/locations/${locationSlug}`,
      languages: {
        'fr': `/fr/locations/${location.slug.fr}`,
        'en': `/en/locations/${location.slug.en}`
      }
    }
  }
}

export default async function LocationPage({
  params: { locale, locationSlug }
}: {
  params: { locale: 'fr' | 'en'; locationSlug: string }
}) {
  const location = getLocationBySlug(locationSlug, locale)
  if (!location) notFound()

  const localizedLocation = getLocalizedLocation(location, locale)

  // Get cached content or generate new
  let content = contentCache.get('location', locale, locationSlug)
  if (!content) {
    await contentQueue.add({
      type: 'location',
      locale,
      data: {
        slug: locationSlug,
        name: localizedLocation.name,
        type: localizedLocation.type,
        population: localizedLocation.population
      },
      priority: 1
    })
    // Use default content until generated
    content = {
      id: '',
      type: 'location',
      locale,
      content: {
        statistics: {
          totalCraftsmen: 0,
          averageRating: 0,
          completedProjects: 0,
          responseTime: 0
        },
        services: [],
        craftsmen: []
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
        <LocationHeader
          city={localizedLocation.name}
          postalCode={content.content.postalCode || "L-1234"}
          activeCraftsmen={content.content.statistics.totalCraftsmen}
          averageResponse={`${content.content.statistics.responseTime}h`}
          coverImage="/images/locations/default.jpg"
        />

        <div className="container mx-auto px-4 py-12 grid gap-12">
          <StatisticsDisplay
            statistics={[
              {
                label: locale === 'fr' ? "Artisans Actifs" : "Active Craftsmen",
                value: content.content.statistics.totalCraftsmen
              },
              {
                label: locale === 'fr' ? "Note Moyenne" : "Average Rating",
                value: content.content.statistics.averageRating.toFixed(1)
              },
              {
                label: locale === 'fr' ? "Projets Réalisés" : "Completed Projects",
                value: content.content.statistics.completedProjects
              }
            ]}
          />

          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">
              {locale === 'fr' ? "Services Populaires" : "Popular Services"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.content.services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          <LocalCraftsmenList
            craftsmen={content.content.craftsmen}
            title={locale === 'fr' ? "Artisans Locaux" : "Local Craftsmen"}
            showLoadMore
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}