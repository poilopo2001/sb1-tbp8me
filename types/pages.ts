import { ServiceType, TradeTask } from '@/data/services';
import { Location } from '@/data/locations';
import { Craftsman } from '@/data/craftsmen';
import { BlogPost } from '@/data/blog';

// Common interfaces
export interface FAQ {
  id: string;
  question: {
    fr: string;
    en: string;
  };
  answer: {
    fr: string;
    en: string;
  };
  category?: string;
}

export interface Testimonial {
  id: string;
  author: {
    name: string;
    location: string;
    avatar?: string;
  };
  rating: number;
  content: {
    fr: string;
    en: string;
  };
  date: string;
  serviceId: string;
  craftsmanId: string;
  verified: boolean;
  projectType: string;
  projectCost?: {
    amount: number;
    currency: string;
  };
}

export interface PriceGuide {
  basePrice: {
    min: number;
    max: number;
    currency: string;
  };
  factors: PriceFactor[];
  lastUpdated: string;
}

export interface PriceFactor {
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  impact: 'Low' | 'Medium' | 'High';
  additionalCost: {
    min: number;
    max: number;
    currency: string;
  };
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: {
    fr: string;
    en: string;
  };
  description?: {
    fr: string;
    en: string;
  };
  serviceId?: string;
  craftsmanId?: string;
  locationId?: string;
}

// Page specific interfaces
export interface ServicePage {
  service: ServiceType;
  relatedTasks: TradeTask[];
  popularLocations: Location[];
  featuredCraftsmen: Craftsman[];
  relatedArticles: BlogPost[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  pricing: PriceGuide;
  gallery: ProjectImage[];
  statistics: {
    totalProjects: number;
    averageRating: number;
    completionTime: {
      min: number;
      max: number;
      unit: 'hours' | 'days' | 'weeks';
    };
    satisfactionRate: number;
  };
}

export interface LocationPage {
  location: Location;
  statistics: {
    totalCraftsmen: number;
    averageRating: number;
    completedProjects: number;
    responseTime: number;
  };
  popularServices: ServiceType[];
  featuredCraftsmen: Craftsman[];
  recentProjects: ProjectImage[];
  testimonials: Testimonial[];
  nearbyLocations: Location[];
  blogPosts: BlogPost[];
}

export interface CraftsmanPage {
  craftsman: Craftsman;
  services: ServiceType[];
  gallery: ProjectImage[];
  testimonials: Testimonial[];
  statistics: {
    completedProjects: number;
    averageRating: number;
    responseRate: number;
    memberSince: string;
    verificationStatus: {
      identity: boolean;
      insurance: boolean;
      qualifications: boolean;
    };
  };
  availability: {
    nextAvailable: string;
    typicalResponseTime: string;
    workingHours: {
      [key: string]: {
        open: string;
        close: string;
      };
    };
  };
  coverage: {
    locations: Location[];
    maxDistance: number;
  };
}

export interface TradeTaskPage {
  task: TradeTask;
  parentService: ServiceType;
  relatedTasks: TradeTask[];
  pricing: PriceGuide;
  faqs: FAQ[];
  craftsmen: Craftsman[];
  testimonials: Testimonial[];
  gallery: ProjectImage[];
}