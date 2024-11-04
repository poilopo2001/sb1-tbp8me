import { 
  Droplet, Zap, Hammer, Paintbrush, Home, Building2, Wall, Grid,
  Thermometer, Shield, Tree, Square, Windows, Waves, Door, Lock,
  Cpu, Bath, Utensils, Building, Sun, ArrowUpDown, Droplets, Bell,
  Tool, Trash2, Shovel, Cloud, LucideIcon
} from 'lucide-react';

export interface ServiceType {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  slug: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  icon: LucideIcon;
}

export const services: ServiceType[] = [
  {
    id: "plumber",
    name: {
      fr: "Plombier",
      en: "Plumber"
    },
    slug: {
      fr: "plombier",
      en: "plumber"
    },
    description: {
      fr: "Spécialiste en installation et réparation de plomberie, chauffage et sanitaires",
      en: "Specialist in plumbing installation and repair, heating and sanitary systems"
    },
    icon: Droplet
  },
  {
    id: "electrician",
    name: {
      fr: "Électricien",
      en: "Electrician"
    },
    slug: {
      fr: "electricien",
      en: "electrician"
    },
    description: {
      fr: "Expert en installation électrique, mise aux normes et dépannage",
      en: "Expert in electrical installation, compliance and troubleshooting"
    },
    icon: Zap
  },
  {
    id: "carpenter",
    name: {
      fr: "Menuisier",
      en: "Carpenter"
    },
    slug: {
      fr: "menuisier",
      en: "carpenter"
    },
    description: {
      fr: "Création et réparation d'ouvrages en bois, installation de meubles",
      en: "Creation and repair of wooden structures, furniture installation"
    },
    icon: Hammer
  },
  {
    id: "painter",
    name: {
      fr: "Peintre",
      en: "Painter"
    },
    slug: {
      fr: "peintre",
      en: "painter"
    },
    description: {
      fr: "Travaux de peinture intérieure et extérieure, revêtements muraux",
      en: "Interior and exterior painting, wall coverings"
    },
    icon: Paintbrush
  },
  {
    id: "roofer",
    name: {
      fr: "Couvreur",
      en: "Roofer"
    },
    slug: {
      fr: "couvreur",
      en: "roofer"
    },
    description: {
      fr: "Installation et réparation de toitures, isolation et étanchéité",
      en: "Roof installation and repair, insulation and waterproofing"
    },
    icon: Home
  },
  {
    id: "mason",
    name: {
      fr: "Maçon",
      en: "Mason"
    },
    slug: {
      fr: "macon",
      en: "mason"
    },
    description: {
      fr: "Construction de murs, fondations et structures en béton",
      en: "Construction of walls, foundations and concrete structures"
    },
    icon: Building2
  },
  {
    id: "plasterer",
    name: {
      fr: "Plâtrier",
      en: "Plasterer"
    },
    slug: {
      fr: "platrier",
      en: "plasterer"
    },
    description: {
      fr: "Travaux de plâtrerie, cloisons et faux-plafonds",
      en: "Plastering work, partitions and suspended ceilings"
    },
    icon: Wall
  },
  {
    id: "tiler",
    name: {
      fr: "Carreleur",
      en: "Tiler"
    },
    slug: {
      fr: "carreleur",
      en: "tiler"
    },
    description: {
      fr: "Pose de carrelage, faïence et mosaïque",
      en: "Installation of tiles, earthenware and mosaic"
    },
    icon: Grid
  },
  {
    id: "hvac_tech",
    name: {
      fr: "Chauffagiste",
      en: "HVAC Technician"
    },
    slug: {
      fr: "chauffagiste",
      en: "hvac-technician"
    },
    description: {
      fr: "Installation et maintenance de systèmes de chauffage et climatisation",
      en: "Installation and maintenance of heating and air conditioning systems"
    },
    icon: Thermometer
  },
  {
    id: "insulator",
    name: {
      fr: "Isolateur",
      en: "Insulator"
    },
    slug: {
      fr: "isolateur",
      en: "insulator"
    },
    description: {
      fr: "Isolation thermique et acoustique des bâtiments",
      en: "Thermal and acoustic insulation of buildings"
    },
    icon: Shield
  },
  {
    id: "landscaper",
    name: {
      fr: "Paysagiste",
      en: "Landscaper"
    },
    slug: {
      fr: "paysagiste",
      en: "landscaper"
    },
    description: {
      fr: "Aménagement et entretien d'espaces verts",
      en: "Landscaping and maintenance of green spaces"
    },
    icon: Tree
  },
  {
    id: "flooring_spec",
    name: {
      fr: "Solier",
      en: "Flooring Specialist"
    },
    slug: {
      fr: "solier",
      en: "flooring-specialist"
    },
    description: {
      fr: "Installation de tous types de revêtements de sol",
      en: "Installation of all types of floor coverings"
    },
    icon: Square
  },
  {
    id: "window_fitter",
    name: {
      fr: "Fenêtrier",
      en: "Window Fitter"
    },
    slug: {
      fr: "fenetrier",
      en: "window-fitter"
    },
    description: {
      fr: "Installation et remplacement de fenêtres et portes",
      en: "Window and door installation and replacement"
    },
    icon: Windows
  },
  {
    id: "pool_builder",
    name: {
      fr: "Pisciniste",
      en: "Pool Builder"
    },
    slug: {
      fr: "pisciniste",
      en: "pool-builder"
    },
    description: {
      fr: "Construction et rénovation de piscines",
      en: "Swimming pool construction and renovation"
    },
    icon: Waves
  },
  {
    id: "garage_door",
    name: {
      fr: "Installateur de portes de garage",
      en: "Garage Door Installer"
    },
    slug: {
      fr: "installateur-porte-garage",
      en: "garage-door-installer"
    },
    description: {
      fr: "Installation et réparation de portes de garage",
      en: "Garage door installation and repair"
    },
    icon: Door
  },
  {
    id: "locksmith",
    name: {
      fr: "Serrurier",
      en: "Locksmith"
    },
    slug: {
      fr: "serrurier",
      en: "locksmith"
    },
    description: {
      fr: "Installation et dépannage de serrures et systèmes de sécurité",
      en: "Lock installation and security system repair"
    },
    icon: Lock
  },
  {
    id: "home_autom",
    name: {
      fr: "Domoticien",
      en: "Home Automation Specialist"
    },
    slug: {
      fr: "domoticien",
      en: "home-automation-specialist"
    },
    description: {
      fr: "Installation de systèmes domotiques et automatismes",
      en: "Installation of home automation systems"
    },
    icon: Cpu
  },
  {
    id: "bathroom_spec",
    name: {
      fr: "Installateur salle de bain",
      en: "Bathroom Specialist"
    },
    slug: {
      fr: "installateur-salle-de-bain",
      en: "bathroom-specialist"
    },
    description: {
      fr: "Rénovation complète de salles de bain",
      en: "Complete bathroom renovation"
    },
    icon: Bath
  },
  {
    id: "kitchen_spec",
    name: {
      fr: "Cuisiniste",
      en: "Kitchen Specialist"
    },
    slug: {
      fr: "cuisiniste",
      en: "kitchen-specialist"
    },
    description: {
      fr: "Conception et installation de cuisines",
      en: "Kitchen design and installation"
    },
    icon: Utensils
  },
  {
    id: "facade_spec",
    name: {
      fr: "Façadier",
      en: "Facade Specialist"
    },
    slug: {
      fr: "facadier",
      en: "facade-specialist"
    },
    description: {
      fr: "Ravalement et isolation de façades",
      en: "Facade renovation and insulation"
    },
    icon: Building
  },
  {
    id: "solar_install",
    name: {
      fr: "Installateur panneaux solaires",
      en: "Solar Panel Installer"
    },
    slug: {
      fr: "installateur-panneaux-solaires",
      en: "solar-panel-installer"
    },
    description: {
      fr: "Installation de panneaux solaires et systèmes photovoltaïques",
      en: "Solar panel and photovoltaic system installation"
    },
    icon: Sun
  },
  {
    id: "elev_install",
    name: {
      fr: "Ascensoriste",
      en: "Elevator Installer"
    },
    slug: {
      fr: "ascensoriste",
      en: "elevator-installer"
    },
    description: {
      fr: "Installation et maintenance d'ascenseurs",
      en: "Elevator installation and maintenance"
    },
    icon: ArrowUpDown
  },
  {
    id: "demolition",
    name: {
      fr: "Démolisseur",
      en: "Demolition Specialist"
    },
    slug: {
      fr: "demolisseur",
      en: "demolition-specialist"
    },
    description: {
      fr: "Travaux de démolition et déblaiement",
      en: "Demolition and clearing work"
    },
    icon: Hammer
  },
  {
    id: "waterproof_spec",
    name: {
      fr: "Étanchéiste",
      en: "Waterproofing Specialist"
    },
    slug: {
      fr: "etancheiste",
      en: "waterproofing-specialist"
    },
    description: {
      fr: "Travaux d'étanchéité toiture et terrasse",
      en: "Roof and terrace waterproofing"
    },
    icon: Droplets
  },
  {
    id: "alarm_install",
    name: {
      fr: "Installateur alarme",
      en: "Alarm System Installer"
    },
    slug: {
      fr: "installateur-alarme",
      en: "alarm-system-installer"
    },
    description: {
      fr: "Installation de systèmes d'alarme et vidéosurveillance",
      en: "Alarm system and video surveillance installation"
    },
    icon: Bell
  },
  {
    id: "metal_worker",
    name: {
      fr: "Métallier-Serrurier",
      en: "Metal Worker"
    },
    slug: {
      fr: "metallier-serrurier",
      en: "metal-worker"
    },
    description: {
      fr: "Fabrication et pose d'ouvrages métalliques",
      en: "Manufacture and installation of metal works"
    },
    icon: Tool
  },
  {
    id: "paving_spec",
    name: {
      fr: "Paveur",
      en: "Paving Specialist"
    },
    slug: {
      fr: "paveur",
      en: "paving-specialist"
    },
    description: {
      fr: "Installation de pavés et dallages extérieurs",
      en: "Installation of outdoor paving and tiling"
    },
    icon: Grid
  },
  {
    id: "cleaner_build",
    name: {
      fr: "Nettoyeur de chantier",
      en: "Construction Cleaner"
    },
    slug: {
      fr: "nettoyeur-chantier",
      en: "construction-cleaner"
    },
    description: {
      fr: "Nettoyage de chantiers et débarras",
      en: "Construction site cleaning and clearing"
    },
    icon: Trash2
  },
  {
    id: "foundation_spec",
    name: {
      fr: "Fondateur spécialisé",
      en: "Foundation Specialist"
    },
    slug: {
      fr: "fondateur-specialise",
      en: "foundation-specialist"
    },
    description: {
      fr: "Travaux de fondations spéciales",
      en: "Special foundation work"
    },
    icon: Shovel
  },
  {
    id: "gutter_install",
    name: {
      fr: "Installateur gouttières",
      en: "Gutter Installer"
    },
    slug: {
      fr: "installateur-gouttieres",
      en: "gutter-installer"
    },
    description: {
      fr: "Installation et réparation de gouttières",
      en: "Gutter installation and repair"
    },
    icon: Cloud
  }
];

export function getServiceById(id: string): ServiceType | undefined {
  return services.find(service => service.id === id);
}

export function getServiceBySlug(slug: string, locale: 'fr' | 'en'): ServiceType | undefined {
  return services.find(service => service.slug[locale] === slug);
}

export function getAllServices(): ServiceType[] {
  return services;
}

export function getLocalizedService(service: ServiceType, locale: 'fr' | 'en') {
  return {
    id: service.id,
    name: service.name[locale],
    slug: service.slug[locale],
    description: service.description[locale],
    icon: service.icon
  };
}