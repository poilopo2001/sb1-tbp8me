import { Locale } from '@/lib/i18n';

export interface LocationPromptData {
  name: string;
  type: string;
  population: number;
  locale: Locale;
}

export function generateLocationPrompt(data: LocationPromptData): string {
  const { name, type, population, locale } = data;
  
  const basePrompt = locale === 'fr' ? {
    title: `Contenu pour la zone "${name}" au Luxembourg`,
    sections: [
      "Présentation de la zone",
      "Services populaires",
      "Statistiques locales",
      "Professionnels recommandés",
      "Informations pratiques"
    ]
  } : {
    title: `Content for "${name}" area in Luxembourg`,
    sections: [
      "Area overview",
      "Popular services",
      "Local statistics",
      "Recommended professionals",
      "Practical information"
    ]
  };

  return `
Generate comprehensive, SEO-optimized content for a location page in Luxembourg.

CONTEXT:
Location Name: ${name}
Type: ${type}
Population: ${population}
Language: ${locale === 'fr' ? 'French' : 'English'}
Country: Luxembourg

REQUIRED SECTIONS:
${basePrompt.sections.map((section, i) => `${i + 1}. ${section}`).join('\n')}

CONTENT REQUIREMENTS:
1. Area Overview:
   - Geographic description
   - Key characteristics
   - Local infrastructure
   - Notable features

2. Service Statistics:
   - Number of active professionals
   - Popular service categories
   - Average response times
   - Customer satisfaction rates

3. Market Analysis:
   - Service demand trends
   - Price comparisons
   - Seasonal variations
   - Local specialties

4. Practical Information:
   - Coverage areas
   - Accessibility
   - Local regulations
   - Special considerations

FORMAT:
Return the content as a JSON object with the following structure:
{
  "metadata": {
    "title": "SEO-optimized title",
    "description": "Meta description",
    "keywords": ["keyword1", "keyword2", ...]
  },
  "content": {
    "overview": {
      "description": "string",
      "keyFeatures": ["string"],
      "infrastructure": ["string"]
    },
    "statistics": {
      "totalProfessionals": number,
      "averageRating": number,
      "responseTime": string,
      "completedProjects": number
    },
    "services": [
      {
        "category": "string",
        "demand": "High|Medium|Low",
        "averagePrice": number,
        "description": "string"
      }
    ],
    "practicalInfo": {
      "coverage": ["string"],
      "regulations": ["string"],
      "specialConsiderations": ["string"]
    }
  }
}

TONE AND STYLE:
- Professional and informative
- Local expertise
- Data-driven insights
- Community-focused
`;
}