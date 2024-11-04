import { Location } from '@/types/pages';

export const locations: Location[] = [
  // Luxembourg City and districts
  {
    id: "luxembourg_ville",
    name: {
      fr: "Luxembourg-Ville",
      en: "Luxembourg City"
    },
    slug: {
      fr: "luxembourg-ville",
      en: "luxembourg-city"
    },
    type: "commune",
    canton: "Luxembourg",
    population: 128514
  },
  {
    id: "luxembourg_gare",
    name: {
      fr: "Gare",
      en: "Station District"
    },
    slug: {
      fr: "gare",
      en: "station-district"
    },
    type: "quartier",
    canton: "Luxembourg",
    parentMunicipality: "luxembourg_ville",
    population: 12000
  },
  // ... rest of the locations array
];

export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id);
}

export function getLocationBySlug(slug: string, locale: 'fr' | 'en'): Location | undefined {
  return locations.find(location => location.slug[locale] === slug);
}

export function getLocationsByType(type: Location['type']): Location[] {
  return locations.filter(location => location.type === type);
}

export function getDistrictsByMunicipality(municipalityId: string): Location[] {
  return locations.filter(location => 
    (location.type === 'quartier' || location.type === 'localite') && 
    location.parentMunicipality === municipalityId
  );
}

export function getLocalizedLocation(location: Location, locale: 'fr' | 'en') {
  return {
    id: location.id,
    name: location.name[locale],
    slug: location.slug[locale],
    type: location.type,
    canton: location.canton,
    parentMunicipality: location.parentMunicipality,
    population: location.population
  };
}