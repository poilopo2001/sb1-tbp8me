import { ContentType, Locale } from './types';

interface PromptTemplate {
  title: string;
  description: string;
  sections: string[];
}

const templates: Record<ContentType, Record<Locale, PromptTemplate>> = {
  service: {
    fr: {
      title: "Générer du contenu pour la page de service",
      description: "Créez un contenu détaillé pour un service professionnel au Luxembourg",
      sections: [
        "Description détaillée du service",
        "Avantages et caractéristiques",
        "Prix moyens et facteurs de coût",
        "Questions fréquemment posées",
        "Conseils pour choisir un professionnel",
        "Processus typique et délais"
      ]
    },
    en: {
      title: "Generate service page content",
      description: "Create detailed content for a professional service in Luxembourg",
      sections: [
        "Detailed service description",
        "Benefits and features",
        "Average prices and cost factors",
        "Frequently asked questions",
        "Tips for choosing a professional",
        "Typical process and timeframes"
      ]
    }
  },
  location: {
    fr: {
      title: "Générer du contenu pour la page de localisation",
      description: "Créez un contenu détaillé pour une zone géographique au Luxembourg",
      sections: [
        "Présentation de la zone",
        "Services populaires",
        "Statistiques locales",
        "Artisans recommandés",
        "Projets récents",
        "Informations pratiques"
      ]
    },
    en: {
      title: "Generate location page content",
      description: "Create detailed content for a geographical area in Luxembourg",
      sections: [
        "Area overview",
        "Popular services",
        "Local statistics",
        "Recommended craftsmen",
        "Recent projects",
        "Practical information"
      ]
    }
  },
  'service-location': {
    fr: {
      title: "Générer du contenu pour la page service-localisation",
      description: "Créez un contenu détaillé pour un service dans une zone spécifique",
      sections: [
        "Service dans cette zone",
        "Tarifs locaux",
        "Professionnels disponibles",
        "Projets locaux",
        "Témoignages",
        "Informations spécifiques à la zone"
      ]
    },
    en: {
      title: "Generate service-location page content",
      description: "Create detailed content for a service in a specific area",
      sections: [
        "Service in this area",
        "Local rates",
        "Available professionals",
        "Local projects",
        "Testimonials",
        "Area-specific information"
      ]
    }
  }
};

export function generatePrompt(type: ContentType, locale: Locale, data: Record<string, any>): string {
  const template = templates[type][locale];
  
  let prompt = `${template.title}\n\n${template.description}\n\n`;
  prompt += `Context:\n`;
  
  switch (type) {
    case 'service':
      prompt += `Service: ${data.name}\n`;
      prompt += `Category: ${data.category}\n`;
      break;
    case 'location':
      prompt += `Location: ${data.name}\n`;
      prompt += `Type: ${data.type}\n`;
      prompt += `Population: ${data.population}\n`;
      break;
    case 'service-location':
      prompt += `Service: ${data.serviceName}\n`;
      prompt += `Location: ${data.locationName}\n`;
      break;
  }

  prompt += `\nRequired sections:\n`;
  template.sections.forEach((section, index) => {
    prompt += `${index + 1}. ${section}\n`;
  });

  prompt += `\nPlease generate content in ${locale === 'fr' ? 'French' : 'English'} for each section. Format the response as JSON with sections as keys.`;

  return prompt;
}