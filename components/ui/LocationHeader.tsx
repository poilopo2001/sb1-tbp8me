"use client";

import { MapPin, Users, Clock } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';

interface LocationHeaderProps {
  city: {
    fr: string;
    en: string;
  };
  postalCode: string;
  activeCraftsmen: number;
  averageResponse: {
    fr: string;
    en: string;
  };
  coverImage: string;
}

export function LocationHeader({ 
  city, 
  postalCode, 
  activeCraftsmen, 
  averageResponse, 
  coverImage 
}: LocationHeaderProps) {
  const { locale } = useLocale();

  const translations = {
    fr: {
      activeCraftsmen: "Artisans actifs",
      responseTime: "Temps de réponse moyen"
    },
    en: {
      activeCraftsmen: "Active Craftsmen",
      responseTime: "Avg. Response Time"
    }
  };

  const t = translations[locale];

  return (
    <div className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{city[locale]}</h1>
            <p className="text-gray-600 flex items-center mt-2">
              <MapPin className="h-4 w-4 mr-2" /> {postalCode}
            </p>
          </div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">{t.activeCraftsmen}</p>
                <p className="font-semibold">{activeCraftsmen}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">{t.responseTime}</p>
                <p className="font-semibold">{averageResponse[locale]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}