import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { PopularQuotesSection } from "@/components/sections/PopularQuotesSection"
import { CraftsmenSection } from "@/components/sections/CraftsmenSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { CTASection } from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PopularQuotesSection />
        <CraftsmenSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}