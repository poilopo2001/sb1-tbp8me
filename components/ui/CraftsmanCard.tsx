"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Shield, CheckCircle } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';

interface CraftsmanCardProps {
  name: string;
  specialty: {
    fr: string;
    en: string;
  };
  rating: number;
  reviews: number;
  imageUrl?: string;
  verified: boolean;
  experience: {
    fr: string;
    en: string;
  };
  badges: {
    fr: string[];
    en: string[];
  };
}

export function CraftsmanCard({ 
  name,
  specialty,
  rating,
  reviews,
  imageUrl,
  verified,
  experience,
  badges
}: CraftsmanCardProps) {
  const { locale } = useLocale();

  const translations = {
    fr: {
      reviews: "avis",
      requestQuote: "Demander un devis",
      viewProfile: "Voir le profil"
    },
    en: {
      reviews: "reviews",
      requestQuote: "Request Quote",
      viewProfile: "View Profile"
    }
  };

  const t = translations[locale];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold">{name}</h3>
              {verified && (
                <Shield className="h-4 w-4 text-blue-500 ml-2" />
              )}
            </div>
            <p className="text-gray-600">{specialty[locale]}</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
              <span className="ml-1 text-sm text-gray-500">
                ({reviews} {t.reviews})
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {badges[locale].map((badge, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button variant="default" className="w-full">{t.requestQuote}</Button>
        <Button variant="outline" className="w-full">{t.viewProfile}</Button>
      </CardFooter>
    </Card>
  );
}