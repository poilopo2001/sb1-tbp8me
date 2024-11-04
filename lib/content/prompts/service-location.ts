import { Locale } from '@/lib/i18n';

export interface ServiceLocationPromptData {
  serviceName: string;
  locationName: string;
  serviceDescription: string;
  population: number;
  locale: Locale;
}

export function generateServiceLocationPrompt(data: ServiceLocationPromptData): string {
  const { serviceName, locationName, serviceDescription, population, locale } = data;
  
  const basePrompt = locale === 'fr' ? {
    title: `Contenu pour ${serviceName} à ${locationName}`,
    sections: [
      "Aperçu du service local",
      "Tarifs locaux",
      "Professionnels disponibles",
      "Projets récents",
      "Spécificités locales"
    ]
  } : {
    title: `Content for ${serviceName} in ${locationName}`,
    sections: [
      "Local service overview",
      "Local pricing",
      "Available professionals",
      "Recent projects",
      "Local specifics"
    ]
  };

  return `
Generate comprehensive, SEO-optimized content for a service in a specific location in Luxembourg.

CONTEXT:
Service: ${serviceName}
Location: ${locationName}
Service Description: ${serviceDescription}
Local Population: ${population}
Language: ${locale === 'fr' ? 'French' : 'English'}

REQUIRED SECTIONS:
${basePrompt.sections.map((section, i) => `${i + 1}. ${section}`).join('\n')}

CONTENT REQUIREMENTS:
1. Local Market Analysis:
   - Service availability
   - Local demand
   - Competitive analysis
   - Market rates

2. Local Pricing:
   - Area-specific rates
   - Cost factors
   - Price comparisons
   - Special considerations

3. Service Delivery:
   - Local coverage
   - Response times
   - Special requirements
   - Local regulations

4. Local Projects:
   - Recent examples
   - Success stories
   - Common scenarios
   - Local challenges

FORMAT:
Return the content as a JSON object with the following structure:
{
  "metadata": {
    "title": "SEO-optimized title",
    "description": "Meta description",
    "keywords": ["keyword1", "keyword2", ...]
  },
  "content": {
    "marketAnalysis": {
      "availability": "High|Medium|Low",
      "demand": "High|Medium|Low",
      "competitionLevel": "High|Medium|Low",
      "averageWaitTime": "string"
    },
    "pricing": {
      "basePrice": { "min": number, "max": number, "currency": "€" },
      "locationFactor": {
        "impact": "Higher|Lower|Average",
        "percentage": number,
        "reason": "string"
      },
      "localFactors": [
        {
          "name": "string",
          "impact": "Low|Medium|High",
          "description": "string"
        }
      ]
    },
    "serviceDelivery": {
      "coverage": ["string"],
      "responseTime": "string",
      "requirements": ["string"],
      "regulations": ["string"]
    },
    "projects": [
      {
        "type": "string",
        "description": "string",
        "duration": "string",
        "cost": number
      }
    ]
  }
}

TONE AND STYLE:
- Locally relevant
- Specific to area needs
- Professional expertise
- Customer-focused
- Data-driven insights
`;
}