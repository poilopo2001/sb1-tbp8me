"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CraftsmanCard } from "@/components/ui/CraftsmanCard";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getCraftsmanBySlug } from "@/data/craftsmen";
import { useLocale } from "@/hooks/useLocale";
import { notFound } from "next/navigation";

export default function CraftsmanPage({ params }: { params: { craftsmanSlug: string } }) {
  const { locale } = useLocale();
  const craftsman = getCraftsmanBySlug(params.craftsmanSlug);

  if (!craftsman) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 grid gap-12">
          <CraftsmanCard {...craftsman} />
          <ProjectGallery images={[]} title="Recent Projects" />
          <div className="grid gap-6">
            <h3 className="text-2xl font-semibold">Client Reviews</h3>
            <div className="grid gap-4">
              {/* Add testimonials here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}