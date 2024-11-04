export interface Craftsman {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  description: string;
  services: string[];
  location: {
    city: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  availability: boolean;
}

export const craftsmen: Craftsman[] = [
  {
    id: "1",
    name: "John Doe",
    slug: "john-doe",
    specialty: "Electrician",
    rating: 4.9,
    reviews: 127,
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000",
    description: "Master electrician with over 15 years of experience in residential and commercial projects.",
    services: ["Electrical installation", "Maintenance", "Safety inspections"],
    location: {
      city: "Luxembourg City",
      country: "Luxembourg"
    },
    contact: {
      email: "john.doe@example.com",
      phone: "+352 123 456 789"
    },
    availability: true
  },
  {
    id: "2",
    name: "Jane Smith",
    slug: "jane-smith",
    specialty: "Plumber",
    rating: 4.8,
    reviews: 98,
    imageUrl: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=1000",
    description: "Licensed plumber specializing in residential plumbing repairs and installations.",
    services: ["Pipe repair", "Installation", "Maintenance"],
    location: {
      city: "Esch-sur-Alzette",
      country: "Luxembourg"
    },
    contact: {
      email: "jane.smith@example.com",
      phone: "+352 987 654 321"
    },
    availability: true
  },
  {
    id: "3",
    name: "Mike Johnson",
    slug: "mike-johnson",
    specialty: "Carpenter",
    rating: 4.7,
    reviews: 84,
    imageUrl: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=1000",
    description: "Expert carpenter with a passion for custom furniture and home renovations.",
    services: ["Custom furniture", "Kitchen cabinets", "Wood repairs"],
    location: {
      city: "Differdange",
      country: "Luxembourg"
    },
    contact: {
      email: "mike.johnson@example.com",
      phone: "+352 456 789 123"
    },
    availability: true
  }
];

export function getCraftsmanBySlug(slug: string): Craftsman | undefined {
  return craftsmen.find(craftsman => craftsman.slug === slug);
}

export function getAllCraftsmen(): Craftsman[] {
  return craftsmen;
}

export function getCraftsmenBySpecialty(specialty: string): Craftsman[] {
  return craftsmen.filter(craftsman => craftsman.specialty === specialty);
}