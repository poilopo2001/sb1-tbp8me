"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';

interface TestimonialCardProps {
  clientName: string;
  rating: number;
  comment: {
    fr: string;
    en: string;
  };
  date: string;
  projectType: {
    fr: string;
    en: string;
  };
  verified: boolean;
}

export function TestimonialCard({
  clientName,
  rating,
  comment,
  date,
  projectType,
  verified
}: TestimonialCardProps) {
  const { locale } = useLocale();

  const translations = {
    fr: {
      verifiedProject: "Projet vérifié"
    },
    en: {
      verifiedProject: "Verified Project"
    }
  };

  const t = translations[locale];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">{clientName}</h4>
            <p className="text-sm text-gray-500">{projectType[locale]}</p>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 text-gray-600">{comment[locale]}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          {verified && (
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              {t.verifiedProject}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}