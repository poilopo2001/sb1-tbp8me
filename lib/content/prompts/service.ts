import { Locale } from '@/lib/i18n';

export interface ServicePromptData {
  name: string;
  description: string;
  category: string;
  locale: Locale;
}

export function generateServicePrompt(data: ServicePromptData): string {
  const { name, description, category, locale } = data;
  
  const basePrompt = locale === 'fr' ? {
    title: `Contenu pour le service "${name}" au Luxembourg`,
    sections: [
      "Description détaillée du service",
      "Tarifs et facteurs de prix",
      "Processus et étapes",
      "Questions fréquentes",
      "Conseils et recommandations",
      "Garanties et assurances"
    ]
  } : {
    title: `Content for "${name}" service in Luxembourg`,
    sections: [
      "Detailed service description",
      "Pricing and cost factors",
      "Process and steps",
      "Frequently asked questions",
      "Tips and recommendations",
      "Guarantees and insurance"
    ]
  };

  return `
Generate comprehensive, SEO-optimized content for a professional service page.

CONTEXT:
Service Name: ${name}
Category: ${category}
Base Description: ${description}
Language: ${locale === 'fr' ? 'French' : 'English'}
Location: Luxembourg
Target Audience: Homeowners and property managers seeking professional services

REQUIRED SECTIONS:
${basePrompt.sections.map((section, i) => `${i + 1}. ${section}`).join('\n')}

CONTENT REQUIREMENTS:
1. Pricing Section:
   - Include price ranges for different service levels
   - List factors affecting costs
   - Provide example scenarios with estimated costs

2. FAQ Section:
   - Minimum 5 relevant questions and answers
   - Focus on common customer concerns
   - Include questions about pricing, timing, and process

3. Process Section:
   - Step-by-step explanation
   - Typical timeframes
   - Required preparations
   - What to expect

4. Tips Section:
   - Selection criteria for professionals
   - Important considerations
   - Common pitfalls to avoid
   - Best practices

FORMAT:
Return the content as a JSON object with the following structure:
{
  "metadata": {
    "title": "SEO-optimized title",
    "description": "Meta description",
    "keywords": ["keyword1", "keyword2", ...]
  },
  "content": {
    "pricing": {
      "basePrice": { "min": number, "max": number, "currency": "€" },
      "factors": [
        {
          "name": "string",
          "impact": "Low|Medium|High",
          "description": "string",
          "additionalCost": { "min": number, "max": number, "currency": "€" }
        }
      ]
    },
    "faqs": [
      {
        "question": "string",
        "answer": "string"
      }
    ],
    "process": {
      "steps": [
        {
          "title": "string",
          "description": "string",
          "duration": "string"
        }
      ],
      "totalDuration": "string"
    },
    "tips": [
      {
        "title": "string",
        "description": "string"
      }
    ]
  }
}

TONE AND STYLE:
- Professional but approachable
- Clear and concise
- Factual and informative
- Local market awareness
- Customer-focused
`;
}