import { z } from 'zod';

// Common schemas
const metadataSchema = z.object({
  title: z.string().min(10).max(60),
  description: z.string().min(50).max(160),
  keywords: z.array(z.string()).min(3).max(10)
});

const priceSchema = z.object({
  min: z.number().positive(),
  max: z.number().positive(),
  currency: z.literal('€')
}).refine(data => data.max > data.min, {
  message: "Maximum price must be greater than minimum price"
});

const priceFactorSchema = z.object({
  name: z.string().min(3),
  impact: z.enum(['Low', 'Medium', 'High']),
  description: z.string().min(10),
  additionalCost: priceSchema
});

const faqSchema = z.object({
  question: z.string().min(10),
  answer: z.string().min(20)
});

// Service page schema
export const serviceContentSchema = z.object({
  metadata: metadataSchema,
  content: z.object({
    pricing: z.object({
      basePrice: priceSchema,
      factors: z.array(priceFactorSchema).min(2)
    }),
    faqs: z.array(faqSchema).min(3),
    process: z.object({
      steps: z.array(z.object({
        title: z.string().min(3),
        description: z.string().min(20),
        duration: z.string()
      })).min(3),
      totalDuration: z.string()
    }),
    tips: z.array(z.object({
      title: z.string().min(3),
      description: z.string().min(20)
    })).min(2)
  })
});

// Location page schema
export const locationContentSchema = z.object({
  metadata: metadataSchema,
  content: z.object({
    overview: z.object({
      description: z.string().min(100),
      keyFeatures: z.array(z.string()).min(3),
      infrastructure: z.array(z.string()).min(2)
    }),
    statistics: z.object({
      totalProfessionals: z.number().positive(),
      averageRating: z.number().min(0).max(5),
      responseTime: z.string(),
      completedProjects: z.number().positive()
    }),
    services: z.array(z.object({
      category: z.string(),
      demand: z.enum(['High', 'Medium', 'Low']),
      averagePrice: z.number().positive(),
      description: z.string().min(20)
    })).min(3),
    practicalInfo: z.object({
      coverage: z.array(z.string()).min(1),
      regulations: z.array(z.string()).min(1),
      specialConsiderations: z.array(z.string()).min(1)
    })
  })
});

// Service-Location page schema
export const serviceLocationContentSchema = z.object({
  metadata: metadataSchema,
  content: z.object({
    marketAnalysis: z.object({
      availability: z.enum(['High', 'Medium', 'Low']),
      demand: z.enum(['High', 'Medium', 'Low']),
      competitionLevel: z.enum(['High', 'Medium', 'Low']),
      averageWaitTime: z.string()
    }),
    pricing: z.object({
      basePrice: priceSchema,
      locationFactor: z.object({
        impact: z.enum(['Higher', 'Lower', 'Average']),
        percentage: z.number(),
        reason: z.string().min(10)
      }),
      localFactors: z.array(z.object({
        name: z.string().min(3),
        impact: z.enum(['Low', 'Medium', 'High']),
        description: z.string().min(20)
      })).min(2)
    }),
    serviceDelivery: z.object({
      coverage: z.array(z.string()).min(1),
      responseTime: z.string(),
      requirements: z.array(z.string()).min(1),
      regulations: z.array(z.string()).min(1)
    }),
    projects: z.array(z.object({
      type: z.string(),
      description: z.string().min(20),
      duration: z.string(),
      cost: z.number().positive()
    })).min(2)
  })
});