import { ServiceType } from './services';

export interface TradeTask {
  id: string;
  tradeId: string;
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
}

export interface Trade extends ServiceType {
  tasks: TradeTask[];
}

export const tradeTasks: TradeTask[] = [
  // Plumbing Tasks
  {
    id: "plumb_leak",
    tradeId: "plumber",
    name: {
      fr: "Réparation de fuite",
      en: "Leak Repair"
    },
    slug: {
      fr: "reparation-fuite",
      en: "leak-repair"
    },
    description: {
      fr: "Détection et réparation de fuites d'eau sur tous types de canalisations",
      en: "Detection and repair of water leaks on all types of pipes"
    }
  },
  {
    id: "plumb_install",
    tradeId: "plumber",
    name: {
      fr: "Installation sanitaire",
      en: "Sanitary Installation"
    },
    slug: {
      fr: "installation-sanitaire",
      en: "sanitary-installation"
    },
    description: {
      fr: "Installation complète de sanitaires: lavabo, WC, douche, baignoire",
      en: "Complete installation of sanitary facilities: sink, toilet, shower, bathtub"
    }
  },
  {
    id: "plumb_heating",
    tradeId: "plumber",
    name: {
      fr: "Installation chauffage",
      en: "Heating Installation"
    },
    slug: {
      fr: "installation-chauffage",
      en: "heating-installation"
    },
    description: {
      fr: "Installation et remplacement de systèmes de chauffage",
      en: "Installation and replacement of heating systems"
    }
  },
  {
    id: "plumb_boiler",
    tradeId: "plumber",
    name: {
      fr: "Entretien chaudière",
      en: "Boiler Maintenance"
    },
    slug: {
      fr: "entretien-chaudiere",
      en: "boiler-maintenance"
    },
    description: {
      fr: "Maintenance et réparation de chaudières",
      en: "Boiler maintenance and repair"
    }
  },
  {
    id: "plumb_pipe",
    tradeId: "plumber",
    name: {
      fr: "Remplacement tuyauterie",
      en: "Pipe Replacement"
    },
    slug: {
      fr: "remplacement-tuyauterie",
      en: "pipe-replacement"
    },
    description: {
      fr: "Remplacement complet ou partiel de tuyauterie",
      en: "Complete or partial pipe replacement"
    }
  },

  // Electrical Tasks
  {
    id: "elec_install",
    tradeId: "electrician",
    name: {
      fr: "Installation électrique",
      en: "Electrical Installation"
    },
    slug: {
      fr: "installation-electrique",
      en: "electrical-installation"
    },
    description: {
      fr: "Installation électrique complète ou partielle",
      en: "Complete or partial electrical installation"
    }
  },
  {
    id: "elec_repair",
    tradeId: "electrician",
    name: {
      fr: "Dépannage électrique",
      en: "Electrical Troubleshooting"
    },
    slug: {
      fr: "depannage-electrique",
      en: "electrical-troubleshooting"
    },
    description: {
      fr: "Diagnostic et réparation de pannes électriques",
      en: "Diagnosis and repair of electrical failures"
    }
  },
  {
    id: "elec_upgrade",
    tradeId: "electrician",
    name: {
      fr: "Mise aux normes",
      en: "Electrical Compliance"
    },
    slug: {
      fr: "mise-aux-normes",
      en: "electrical-compliance"
    },
    description: {
      fr: "Mise en conformité d'installations électriques",
      en: "Bringing electrical installations up to standard"
    }
  },
  {
    id: "elec_light",
    tradeId: "electrician",
    name: {
      fr: "Installation éclairage",
      en: "Lighting Installation"
    },
    slug: {
      fr: "installation-eclairage",
      en: "lighting-installation"
    },
    description: {
      fr: "Installation et modification de systèmes d'éclairage",
      en: "Installation and modification of lighting systems"
    }
  },
  {
    id: "elec_smart",
    tradeId: "electrician",
    name: {
      fr: "Installation domotique",
      en: "Smart Home Installation"
    },
    slug: {
      fr: "installation-domotique",
      en: "smart-home-installation"
    },
    description: {
      fr: "Installation de systèmes domotiques",
      en: "Installation of home automation systems"
    }
  },

// Waterproofing Specialist subtasks
  {
    id: "water_roof",
    tradeId: "waterproof_spec",
    name: {
      fr: "Étanchéité toiture",
      en: "Roof Waterproofing"
    },
    slug: {
      fr: "etancheite-toiture",
      en: "roof-waterproofing"
    },
    description: {
      fr: "Étanchéité de toitures terrasses",
      en: "Flat roof waterproofing"
    }
  },
  {
    id: "water_found",
    tradeId: "waterproof_spec",
    name: {
      fr: "Étanchéité fondation",
      en: "Foundation Waterproofing"
    },
    slug: {
      fr: "etancheite-fondation",
      en: "foundation-waterproofing"
    },
    description: {
      fr: "Étanchéité de fondations",
      en: "Foundation waterproofing"
    }
  },
  {
    id: "water_terr",
    tradeId: "waterproof_spec",
    name: {
      fr: "Étanchéité terrasse",
      en: "Terrace Waterproofing"
    },
    slug: {
      fr: "etancheite-terrasse",
      en: "terrace-waterproofing"
    },
    description: {
      fr: "Étanchéité de terrasses extérieures",
      en: "Outdoor terrace waterproofing"
    }
  },
  {
    id: "water_pool",
    tradeId: "waterproof_spec",
    name: {
      fr: "Étanchéité piscine",
      en: "Pool Waterproofing"
    },
    slug: {
      fr: "etancheite-piscine",
      en: "pool-waterproofing"
    },
    description: {
      fr: "Étanchéité de piscines",
      en: "Swimming pool waterproofing"
    }
  },
  {
    id: "water_repair",
    tradeId: "waterproof_spec",
    name: {
      fr: "Réparation infiltration",
      en: "Leak Repair"
    },
    slug: {
      fr: "reparation-infiltration",
      en: "leak-repair"
    },
    description: {
      fr: "Réparation de problèmes d'étanchéité",
      en: "Waterproofing problem repair"
    }
  },

  // Alarm System Installer subtasks
  {
    id: "alarm_sys",
    tradeId: "alarm_install",
    name: {
      fr: "Installation alarme",
      en: "Alarm Installation"
    },
    slug: {
      fr: "installation-alarme",
      en: "alarm-installation"
    },
    description: {
      fr: "Installation de systèmes d'alarme",
      en: "Alarm system installation"
    }
  },
  {
    id: "alarm_cam",
    tradeId: "alarm_install",
    name: {
      fr: "Vidéosurveillance",
      en: "Video Surveillance"
    },
    slug: {
      fr: "videosurveillance",
      en: "video-surveillance"
    },
    description: {
      fr: "Installation de caméras de surveillance",
      en: "Surveillance camera installation"
    }
  },
  {
    id: "alarm_access",
    tradeId: "alarm_install",
    name: {
      fr: "Contrôle d'accès",
      en: "Access Control"
    },
    slug: {
      fr: "controle-acces",
      en: "access-control"
    },
    description: {
      fr: "Installation de contrôle d'accès",
      en: "Access control installation"
    }
  },
  {
    id: "alarm_smart",
    tradeId: "alarm_install",
    name: {
      fr: "Sécurité connectée",
      en: "Connected Security"
    },
    slug: {
      fr: "securite-connectee",
      en: "connected-security"
    },
    description: {
      fr: "Installation de sécurité intelligente",
      en: "Smart security installation"
    }
  },
  {
    id: "alarm_maint",
    tradeId: "alarm_install",
    name: {
      fr: "Maintenance système",
      en: "System Maintenance"
    },
    slug: {
      fr: "maintenance-systeme",
      en: "system-maintenance"
    },
    description: {
      fr: "Entretien des systèmes de sécurité",
      en: "Security system maintenance"
    }
  },

  // Metal Worker subtasks
  {
    id: "metal_gate",
    tradeId: "metal_worker",
    name: {
      fr: "Portail métallique",
      en: "Metal Gate"
    },
    slug: {
      fr: "portail-metallique",
      en: "metal-gate"
    },
    description: {
      fr: "Fabrication et pose de portails",
      en: "Gate fabrication and installation"
    }
  },
  {
    id: "metal_rail",
    tradeId: "metal_worker",
    name: {
      fr: "Garde-corps",
      en: "Railings"
    },
    slug: {
      fr: "garde-corps",
      en: "railings"
    },
    description: {
      fr: "Installation de garde-corps",
      en: "Railing installation"
    }
  },
  {
    id: "metal_struct",
    tradeId: "metal_worker",
    name: {
      fr: "Structure métallique",
      en: "Metal Structure"
    },
    slug: {
      fr: "structure-metallique",
      en: "metal-structure"
    },
    description: {
      fr: "Construction de structures métalliques",
      en: "Metal structure construction"
    }
  },
  {
    id: "metal_stair",
    tradeId: "metal_worker",
    name: {
      fr: "Escalier métallique",
      en: "Metal Stairs"
    },
    slug: {
      fr: "escalier-metallique",
      en: "metal-stairs"
    },
    description: {
      fr: "Fabrication d'escaliers métalliques",
      en: "Metal stair fabrication"
    }
  },
  {
    id: "metal_weld",
    tradeId: "metal_worker",
    name: {
      fr: "Soudure",
      en: "Welding"
    },
    slug: {
      fr: "soudure",
      en: "welding"
    },
    description: {
      fr: "Travaux de soudure",
      en: "Welding work"
    }
  },

  // Paving Specialist subtasks
  {
    id: "pave_drive",
    tradeId: "paving_spec",
    name: {
      fr: "Pavage allée",
      en: "Driveway Paving"
    },
    slug: {
      fr: "pavage-allee",
      en: "driveway-paving"
    },
    description: {
      fr: "Installation de pavés pour allées",
      en: "Driveway paving installation"
    }
  },
  {
    id: "pave_patio",
    tradeId: "paving_spec",
    name: {
      fr: "Pavage terrasse",
      en: "Patio Paving"
    },
    slug: {
      fr: "pavage-terrasse",
      en: "patio-paving"
    },
    description: {
      fr: "Création de terrasses en pavés",
      en: "Paved patio creation"
    }
  },
  {
    id: "pave_path",
    tradeId: "paving_spec",
    name: {
      fr: "Création chemin",
      en: "Path Creation"
    },
    slug: {
      fr: "creation-chemin",
      en: "path-creation"
    },
    description: {
      fr: "Construction de chemins pavés",
      en: "Paved path construction"
    }
  },
  {
    id: "pave_repair",
    tradeId: "paving_spec",
    name: {
      fr: "Réparation pavage",
      en: "Paving Repair"
    },
    slug: {
      fr: "reparation-pavage",
      en: "paving-repair"
    },
    description: {
      fr: "Réparation de zones pavées",
      en: "Paved area repair"
    }
  },
  {
    id: "pave_border",
    tradeId: "paving_spec",
    name: {
      fr: "Bordures",
      en: "Edging"
    },
    slug: {
      fr: "bordures",
      en: "edging"
    },
    description: {
      fr: "Installation de bordures",
      en: "Edging installation"
    }
  },

  // Construction Cleaner subtasks
  {
    id: "clean_post",
    tradeId: "cleaner_build",
    name: {
      fr: "Nettoyage fin chantier",
      en: "Post-Construction Cleaning"
    },
    slug: {
      fr: "nettoyage-fin-chantier",
      en: "post-construction-cleaning"
    },
    description: {
      fr: "Nettoyage après travaux",
      en: "Post-construction cleanup"
    }
  },
  {
    id: "clean_waste",
    tradeId: "cleaner_build",
    name: {
      fr: "Évacuation déchets",
      en: "Waste Removal"
    },
    slug: {
      fr: "evacuation-dechets",
      en: "waste-removal"
    },
    description: {
      fr: "Évacuation des déchets de chantier",
      en: "Construction waste removal"
    }
  },
  {
    id: "clean_indus",
    tradeId: "cleaner_build",
    name: {
      fr: "Nettoyage industriel",
      en: "Industrial Cleaning"
    },
    slug: {
      fr: "nettoyage-industriel",
      en: "industrial-cleaning"
    },
    description: {
      fr: "Nettoyage de sites industriels",
      en: "Industrial site cleaning"
    }
  },
  {
    id: "clean_facade",
    tradeId: "cleaner_build",
    name: {
      fr: "Nettoyage façades",
      en: "Facade Cleaning"
    },
    slug: {
      fr: "nettoyage-facades",
      en: "facade-cleaning"
    },
    description: {
      fr: "Nettoyage de façades de bâtiments",
      en: "Building facade cleaning"
    }
  },
  {
    id: "clean_window",
    tradeId: "cleaner_build",
    name: {
      fr: "Nettoyage vitres",
      en: "Window Cleaning"
    },
    slug: {
      fr: "nettoyage-vitres",
      en: "window-cleaning"
    },
    description: {
      fr: "Nettoyage de vitres post-construction",
      en: "Post-construction window cleaning"
    }
  },

  // Foundation Specialist subtasks
  {
    id: "found_new",
    tradeId: "foundation_spec",
    name: {
      fr: "Nouvelles fondations",
      en: "New Foundations"
    },
    slug: {
      fr: "nouvelles-fondations",
      en: "new-foundations"
    },
    description: {
      fr: "Construction de nouvelles fondations",
      en: "New foundation construction"
    }
  },
  {
    id: "found_repair",
    tradeId: "foundation_spec",
    name: {
      fr: "Réparation fondations",
      en: "Foundation Repair"
    },
    slug: {
      fr: "reparation-fondations",
      en: "foundation-repair"
    },
    description: {
      fr: "Réparation de fondations existantes",
      en: "Existing foundation repair"
    }
  },
  {
    id: "found_reinf",
    tradeId: "foundation_spec",
    name: {
      fr: "Renforcement",
      en: "Reinforcement"
    },
    slug: {
      fr: "renforcement",
      en: "reinforcement"
    },
    description: {
      fr: "Renforcement de fondations",
      en: "Foundation reinforcement"
    }
  },
  {
    id: "found_micro",
    tradeId: "foundation_spec",
    name: {
      fr: "Micropieux",
      en: "Micropiles"
    },
    slug: {
      fr: "micropieux",
      en: "micropiles"
    },
    description: {
      fr: "Installation de micropieux",
      en: "Micropile installation"
    }
  },
  {
    id: "found_drain",
    tradeId: "foundation_spec",
    name: {
      fr: "Drainage fondations",
      en: "Foundation Drainage"
    },
    slug: {
      fr: "drainage-fondations",
      en: "foundation-drainage"
    },
    description: {
      fr: "Installation de systèmes de drainage",
      en: "Drainage system installation"
    }
  },

  // Gutter Installer subtasks
  {
    id: "gutter_new",
    tradeId: "gutter_install",
    name: {
      fr: "Installation gouttières",
      en: "Gutter Installation"
    },
    slug: {
      fr: "installation-gouttieres",
      en: "gutter-installation"
    },
    description: {
      fr: "Installation de nouvelles gouttières",
      en: "New gutter installation"
    }
  },
  {
    id: "gutter_repair",
    tradeId: "gutter_install",
    name: {
      fr: "Réparation gouttières",
      en: "Gutter Repair"
    },
    slug: {
      fr: "reparation-gouttieres",
      en: "gutter-repair"
    },
    description: {
      fr: "Réparation de gouttières endommagées",
      en: "Damaged gutter repair"
    }
  },
  {
    id: "gutter_clean",
    tradeId: "gutter_install",
    name: {
      fr: "Nettoyage gouttières",
      en: "Gutter Cleaning"
    },
    slug: {
      fr: "nettoyage-gouttieres",
      en: "gutter-cleaning"
    },
    description: {
      fr: "Nettoyage et entretien de gouttières",
      en: "Gutter cleaning and maintenance"
    }
  },
  {
    id: "gutter_guard",
    tradeId: "gutter_install",
    name: {
      fr: "Protection gouttières",
      en: "Gutter Guards"
    },
    slug: {
      fr: "protection-gouttieres",
      en: "gutter-guards"
    },
    description: {
      fr: "Installation de protection anti-feuilles",
      en: "Gutter guard installation"
    }
  },
  {
    id: "gutter_down",
    tradeId: "gutter_install",
    name: {
      fr: "Descentes pluviales",
      en: "Downspouts"
    },
    slug: {
      fr: "descentes-pluviales",
      en: "downspouts"
    },
    description: {
      fr: "Installation de descentes d'eau",
      en: "Downspout installation"
    }
  },
  
// Kitchen Specialist subtasks
  {
    id: "kit_design",
    tradeId: "kitchen_spec",
    name: {
      fr: "Conception cuisine",
      en: "Kitchen Design"
    },
    slug: {
      fr: "conception-cuisine",
      en: "kitchen-design"
    },
    description: {
      fr: "Conception de cuisines sur mesure",
      en: "Custom kitchen design"
    }
  },
  {
    id: "kit_install",
    tradeId: "kitchen_spec",
    name: {
      fr: "Installation cuisine",
      en: "Kitchen Installation"
    },
    slug: {
      fr: "installation-cuisine",
      en: "kitchen-installation"
    },
    description: {
      fr: "Installation complète de cuisines",
      en: "Complete kitchen installation"
    }
  },
  {
    id: "kit_counter",
    tradeId: "kitchen_spec",
    name: {
      fr: "Plan de travail",
      en: "Countertop"
    },
    slug: {
      fr: "plan-de-travail",
      en: "countertop"
    },
    description: {
      fr: "Installation de plans de travail",
      en: "Countertop installation"
    }
  },
  {
    id: "kit_cabinet",
    tradeId: "kitchen_spec",
    name: {
      fr: "Installation meubles",
      en: "Cabinet Installation"
    },
    slug: {
      fr: "installation-meubles",
      en: "cabinet-installation"
    },
    description: {
      fr: "Installation de meubles de cuisine",
      en: "Kitchen cabinet installation"
    }
  },
  {
    id: "kit_appliance",
    tradeId: "kitchen_spec",
    name: {
      fr: "Installation électroménager",
      en: "Appliance Installation"
    },
    slug: {
      fr: "installation-electromenager",
      en: "appliance-installation"
    },
    description: {
      fr: "Installation d'appareils électroménagers",
      en: "Appliance installation"
    }
  },

  // Facade Specialist subtasks
  {
    id: "facade_clean",
    tradeId: "facade_spec",
    name: {
      fr: "Nettoyage façade",
      en: "Facade Cleaning"
    },
    slug: {
      fr: "nettoyage-facade",
      en: "facade-cleaning"
    },
    description: {
      fr: "Nettoyage de façades",
      en: "Facade cleaning"
    }
  },
  {
    id: "facade_paint",
    tradeId: "facade_spec",
    name: {
      fr: "Peinture façade",
      en: "Facade Painting"
    },
    slug: {
      fr: "peinture-facade",
      en: "facade-painting"
    },
    description: {
      fr: "Peinture de façades",
      en: "Facade painting"
    }
  },
  {
    id: "facade_repair",
    tradeId: "facade_spec",
    name: {
      fr: "Réparation façade",
      en: "Facade Repair"
    },
    slug: {
      fr: "reparation-facade",
      en: "facade-repair"
    },
    description: {
      fr: "Réparation de façades endommagées",
      en: "Damaged facade repair"
    }
  },
  {
    id: "facade_insul",
    tradeId: "facade_spec",
    name: {
      fr: "Isolation façade",
      en: "Facade Insulation"
    },
    slug: {
      fr: "isolation-facade",
      en: "facade-insulation"
    },
    description: {
      fr: "Isolation thermique par l'extérieur",
      en: "External thermal insulation"
    }
  },
  {
    id: "facade_render",
    tradeId: "facade_spec",
    name: {
      fr: "Enduit façade",
      en: "Facade Rendering"
    },
    slug: {
      fr: "enduit-facade",
      en: "facade-rendering"
    },
    description: {
      fr: "Application d'enduits de façade",
      en: "Facade rendering application"
    }
  },

  // Solar Panel Installer subtasks
  {
    id: "solar_panel",
    tradeId: "solar_install",
    name: {
      fr: "Installation panneaux",
      en: "Panel Installation"
    },
    slug: {
      fr: "installation-panneaux",
      en: "panel-installation"
    },
    description: {
      fr: "Installation de panneaux photovoltaïques",
      en: "Photovoltaic panel installation"
    }
  },
  {
    id: "solar_therm",
    tradeId: "solar_install",
    name: {
      fr: "Panneaux thermiques",
      en: "Thermal Panels"
    },
    slug: {
      fr: "panneaux-thermiques",
      en: "thermal-panels"
    },
    description: {
      fr: "Installation de panneaux solaires thermiques",
      en: "Solar thermal panel installation"
    }
  },
  {
    id: "solar_batt",
    tradeId: "solar_install",
    name: {
      fr: "Installation batteries",
      en: "Battery Installation"
    },
    slug: {
      fr: "installation-batteries",
      en: "battery-installation"
    },
    description: {
      fr: "Installation de systèmes de stockage",
      en: "Energy storage system installation"
    }
  },
  {
    id: "solar_maint",
    tradeId: "solar_install",
    name: {
      fr: "Maintenance panneaux",
      en: "Panel Maintenance"
    },
    slug: {
      fr: "maintenance-panneaux",
      en: "panel-maintenance"
    },
    description: {
      fr: "Entretien et nettoyage de panneaux",
      en: "Panel maintenance and cleaning"
    }
  },
  {
    id: "solar_audit",
    tradeId: "solar_install",
    name: {
      fr: "Audit énergétique",
      en: "Energy Audit"
    },
    slug: {
      fr: "audit-energetique",
      en: "energy-audit"
    },
    description: {
      fr: "Étude de faisabilité solaire",
      en: "Solar feasibility study"
    }
  },

  // Elevator Installer subtasks
  {
    id: "elev_install",
    tradeId: "elev_install",
    name: {
      fr: "Installation ascenseur",
      en: "Elevator Installation"
    },
    slug: {
      fr: "installation-ascenseur",
      en: "elevator-installation"
    },
    description: {
      fr: "Installation d'ascenseurs neufs",
      en: "New elevator installation"
    }
  },
  {
    id: "elev_modern",
    tradeId: "elev_install",
    name: {
      fr: "Modernisation",
      en: "Modernization"
    },
    slug: {
      fr: "modernisation",
      en: "modernization"
    },
    description: {
      fr: "Modernisation d'ascenseurs existants",
      en: "Existing elevator modernization"
    }
  },
  {
    id: "elev_maint",
    tradeId: "elev_install",
    name: {
      fr: "Maintenance préventive",
      en: "Preventive Maintenance"
    },
    slug: {
      fr: "maintenance-preventive",
      en: "preventive-maintenance"
    },
    description: {
      fr: "Entretien régulier d'ascenseurs",
      en: "Regular elevator maintenance"
    }
  },
  {
    id: "elev_repair",
    tradeId: "elev_install",
    name: {
      fr: "Dépannage ascenseur",
      en: "Elevator Repair"
    },
    slug: {
      fr: "depannage-ascenseur",
      en: "elevator-repair"
    },
    description: {
      fr: "Réparation d'urgence d'ascenseurs",
      en: "Emergency elevator repair"
    }
  },
  {
    id: "elev_access",
    tradeId: "elev_install",
    name: {
      fr: "Monte-escalier",
      en: "Stairlift"
    },
    slug: {
      fr: "monte-escalier",
      en: "stairlift"
    },
    description: {
      fr: "Installation de monte-escaliers",
      en: "Stairlift installation"
    }
  },

  // Demolition Specialist subtasks
  {
    id: "demo_int",
    tradeId: "demolition",
    name: {
      fr: "Démolition intérieure",
      en: "Interior Demolition"
    },
    slug: {
      fr: "demolition-interieure",
      en: "interior-demolition"
    },
    description: {
      fr: "Démolition de murs et cloisons",
      en: "Wall and partition demolition"
    }
  },
  {
    id: "demo_total",
    tradeId: "demolition",
    name: {
      fr: "Démolition totale",
      en: "Complete Demolition"
    },
    slug: {
      fr: "demolition-totale",
      en: "complete-demolition"
    },
    description: {
      fr: "Démolition complète de bâtiments",
      en: "Complete building demolition"
    }
  },
  {
    id: "demo_select",
    tradeId: "demolition",
    name: {
      fr: "Démolition sélective",
      en: "Selective Demolition"
    },
    slug: {
      fr: "demolition-selective",
      en: "selective-demolition"
    },
    description: {
      fr: "Démolition partielle et ciblée",
      en: "Partial and targeted demolition"
    }
  },
  {
    id: "demo_clean",
    tradeId: "demolition",
    name: {
      fr: "Déblaiement",
      en: "Clearing"
    },
    slug: {
      fr: "deblaiement",
      en: "clearing"
    },
    description: {
      fr: "Évacuation de gravats",
      en: "Debris removal"
    }
  },
  {
    id: "demo_asbestos",
    tradeId: "demolition",
    name: {
      fr: "Désamiantage",
      en: "Asbestos Removal"
    },
    slug: {
      fr: "desamiantage",
      en: "asbestos-removal"
    },
    description: {
      fr: "Retrait professionnel d'amiante",
      en: "Professional asbestos removal"
    }
  },
  
  // Pool Builder subtasks
  {
    id: "pool_build",
    tradeId: "pool_builder",
    name: {
      fr: "Construction piscine",
      en: "Pool Construction"
    },
    slug: {
      fr: "construction-piscine",
      en: "pool-construction"
    },
    description: {
      fr: "Construction de piscines neuves",
      en: "New pool construction"
    }
  },
  {
    id: "pool_reno",
    tradeId: "pool_builder",
    name: {
      fr: "Rénovation piscine",
      en: "Pool Renovation"
    },
    slug: {
      fr: "renovation-piscine",
      en: "pool-renovation"
    },
    description: {
      fr: "Rénovation de piscines existantes",
      en: "Existing pool renovation"
    }
  },
  {
    id: "pool_maint",
    tradeId: "pool_builder",
    name: {
      fr: "Entretien piscine",
      en: "Pool Maintenance"
    },
    slug: {
      fr: "entretien-piscine",
      en: "pool-maintenance"
    },
    description: {
      fr: "Entretien régulier de piscines",
      en: "Regular pool maintenance"
    }
  },
  {
    id: "pool_heat",
    tradeId: "pool_builder",
    name: {
      fr: "Chauffage piscine",
      en: "Pool Heating"
    },
    slug: {
      fr: "chauffage-piscine",
      en: "pool-heating"
    },
    description: {
      fr: "Installation de systèmes de chauffage",
      en: "Pool heating system installation"
    }
  },
  {
    id: "pool_cover",
    tradeId: "pool_builder",
    name: {
      fr: "Couverture piscine",
      en: "Pool Cover"
    },
    slug: {
      fr: "couverture-piscine",
      en: "pool-cover"
    },
    description: {
      fr: "Installation de couvertures de piscine",
      en: "Pool cover installation"
    }
  },

  // Locksmith subtasks
  {
    id: "lock_install",
    tradeId: "locksmith",
    name: {
      fr: "Installation serrure",
      en: "Lock Installation"
    },
    slug: {
      fr: "installation-serrure",
      en: "lock-installation"
    },
    description: {
      fr: "Installation de serrures et verrous",
      en: "Lock and bolt installation"
    }
  },
  {
    id: "lock_change",
    tradeId: "locksmith",
    name: {
      fr: "Changement serrure",
      en: "Lock Change"
    },
    slug: {
      fr: "changement-serrure",
      en: "lock-change"
    },
    description: {
      fr: "Remplacement de serrures",
      en: "Lock replacement"
    }
  },
  {
    id: "lock_repair",
    tradeId: "locksmith",
    name: {
      fr: "Réparation serrure",
      en: "Lock Repair"
    },
    slug: {
      fr: "reparation-serrure",
      en: "lock-repair"
    },
    description: {
      fr: "Réparation de serrures",
      en: "Lock repair"
    }
  },
  {
    id: "lock_security",
    tradeId: "locksmith",
    name: {
      fr: "Sécurisation porte",
      en: "Door Security"
    },
    slug: {
      fr: "securisation-porte",
      en: "door-security"
    },
    description: {
      fr: "Installation de systèmes de sécurité",
      en: "Security system installation"
    }
  },
  {
    id: "lock_safe",
    tradeId: "locksmith",
    name: {
      fr: "Installation coffre-fort",
      en: "Safe Installation"
    },
    slug: {
      fr: "installation-coffre-fort",
      en: "safe-installation"
    },
    description: {
      fr: "Installation de coffres-forts",
      en: "Safe installation"
    }
  },

  // Home Automation Specialist subtasks
  {
    id: "auto_system",
    tradeId: "home_autom",
    name: {
      fr: "Installation système",
      en: "System Installation"
    },
    slug: {
      fr: "installation-systeme",
      en: "system-installation"
    },
    description: {
      fr: "Installation de systèmes domotiques",
      en: "Home automation system installation"
    }
  },
  {
    id: "auto_light",
    tradeId: "home_autom",
    name: {
      fr: "Éclairage intelligent",
      en: "Smart Lighting"
    },
    slug: {
      fr: "eclairage-intelligent",
      en: "smart-lighting"
    },
    description: {
      fr: "Installation d'éclairage connecté",
      en: "Smart lighting installation"
    }
  },
  {
    id: "auto_heat",
    tradeId: "home_autom",
    name: {
      fr: "Thermostat intelligent",
      en: "Smart Thermostat"
    },
    slug: {
      fr: "thermostat-intelligent",
      en: "smart-thermostat"
    },
    description: {
      fr: "Installation de thermostats connectés",
      en: "Smart thermostat installation"
    }
  },
  {
    id: "auto_security",
    tradeId: "home_autom",
    name: {
      fr: "Sécurité connectée",
      en: "Connected Security"
    },
    slug: {
      fr: "securite-connectee",
      en: "connected-security"
    },
    description: {
      fr: "Installation de systèmes de sécurité connectés",
      en: "Connected security system installation"
    }
  },
  {
    id: "auto_voice",
    tradeId: "home_autom",
    name: {
      fr: "Contrôle vocal",
      en: "Voice Control"
    },
    slug: {
      fr: "controle-vocal",
      en: "voice-control"
    },
    description: {
      fr: "Installation de commandes vocales",
      en: "Voice control installation"
    }
  },

  // Bathroom Specialist subtasks
  {
    id: "bath_full",
    tradeId: "bathroom_spec",
    name: {
      fr: "Rénovation complète",
      en: "Complete Renovation"
    },
    slug: {
      fr: "renovation-complete",
      en: "complete-renovation"
    },
    description: {
      fr: "Rénovation complète de salle de bain",
      en: "Complete bathroom renovation"
    }
  },
  {
    id: "bath_shower",
    tradeId: "bathroom_spec",
    name: {
      fr: "Installation douche",
      en: "Shower Installation"
    },
    slug: {
      fr: "installation-douche",
      en: "shower-installation"
    },
    description: {
      fr: "Installation de douches et cabines",
      en: "Shower and enclosure installation"
    }
  },
  {
    id: "bath_tub",
    tradeId: "bathroom_spec",
    name: {
      fr: "Installation baignoire",
      en: "Bathtub Installation"
    },
    slug: {
      fr: "installation-baignoire",
      en: "bathtub-installation"
    },
    description: {
      fr: "Installation de baignoires",
      en: "Bathtub installation"
    }
  },
  {
    id: "bath_vanity",
    tradeId: "bathroom_spec",
    name: {
      fr: "Meuble vasque",
      en: "Vanity Unit"
    },
    slug: {
      fr: "meuble-vasque",
      en: "vanity-unit"
    },
    description: {
      fr: "Installation de meubles de salle de bain",
      en: "Bathroom furniture installation"
    }
  },
  {
    id: "bath_access",
    tradeId: "bathroom_spec",
    name: {
      fr: "Accessibilité PMR",
      en: "Disabled Access"
    },
    slug: {
      fr: "accessibilite-pmr",
      en: "disabled-access"
    },
    description: {
      fr: "Aménagement pour personnes à mobilité réduite",
      en: "Disabled access adaptation"
    }
  },
  
// Mason subtasks
  {
    id: "mason_wall",
    tradeId: "mason",
    name: {
      fr: "Construction mur",
      en: "Wall Construction"
    },
    slug: {
      fr: "construction-mur",
      en: "wall-construction"
    },
    description: {
      fr: "Construction de murs en briques ou parpaings",
      en: "Brick or block wall construction"
    }
  },
  {
    id: "mason_found",
    tradeId: "mason",
    name: {
      fr: "Fondations",
      en: "Foundations"
    },
    slug: {
      fr: "fondations",
      en: "foundations"
    },
    description: {
      fr: "Création et rénovation de fondations",
      en: "Foundation creation and renovation"
    }
  },
  {
    id: "mason_concrete",
    tradeId: "mason",
    name: {
      fr: "Dalle béton",
      en: "Concrete Slab"
    },
    slug: {
      fr: "dalle-beton",
      en: "concrete-slab"
    },
    description: {
      fr: "Coulage de dalles en béton",
      en: "Concrete slab pouring"
    }
  },
  {
    id: "mason_repair",
    tradeId: "mason",
    name: {
      fr: "Réparation maçonnerie",
      en: "Masonry Repair"
    },
    slug: {
      fr: "reparation-maconnerie",
      en: "masonry-repair"
    },
    description: {
      fr: "Réparation de structures en maçonnerie",
      en: "Masonry structure repair"
    }
  },
  {
    id: "mason_stairs",
    tradeId: "mason",
    name: {
      fr: "Escaliers béton",
      en: "Concrete Stairs"
    },
    slug: {
      fr: "escaliers-beton",
      en: "concrete-stairs"
    },
    description: {
      fr: "Construction d'escaliers en béton",
      en: "Concrete stairs construction"
    }
  },

  // Landscaper subtasks
  {
    id: "land_design",
    tradeId: "landscaper",
    name: {
      fr: "Conception jardin",
      en: "Garden Design"
    },
    slug: {
      fr: "conception-jardin",
      en: "garden-design"
    },
    description: {
      fr: "Conception et aménagement de jardins",
      en: "Garden design and landscaping"
    }
  },
  {
    id: "land_lawn",
    tradeId: "landscaper",
    name: {
      fr: "Installation pelouse",
      en: "Lawn Installation"
    },
    slug: {
      fr: "installation-pelouse",
      en: "lawn-installation"
    },
    description: {
      fr: "Création et rénovation de pelouses",
      en: "Lawn creation and renovation"
    }
  },
  {
    id: "land_tree",
    tradeId: "landscaper",
    name: {
      fr: "Élagage arbres",
      en: "Tree Trimming"
    },
    slug: {
      fr: "elagage-arbres",
      en: "tree-trimming"
    },
    description: {
      fr: "Taille et entretien d'arbres",
      en: "Tree trimming and maintenance"
    }
  },
  {
    id: "land_irrig",
    tradeId: "landscaper",
    name: {
      fr: "Système irrigation",
      en: "Irrigation System"
    },
    slug: {
      fr: "systeme-irrigation",
      en: "irrigation-system"
    },
    description: {
      fr: "Installation de systèmes d'arrosage",
      en: "Irrigation system installation"
    }
  },
  {
    id: "land_terrace",
    tradeId: "landscaper",
    name: {
      fr: "Création terrasse",
      en: "Terrace Creation"
    },
    slug: {
      fr: "creation-terrasse",
      en: "terrace-creation"
    },
    description: {
      fr: "Construction de terrasses extérieures",
      en: "Outdoor terrace construction"
    }
  },

  // Flooring Specialist subtasks
  {
    id: "floor_vinyl",
    tradeId: "flooring_spec",
    name: {
      fr: "Pose vinyle",
      en: "Vinyl Installation"
    },
    slug: {
      fr: "pose-vinyle",
      en: "vinyl-installation"
    },
    description: {
      fr: "Installation de revêtements vinyles",
      en: "Vinyl flooring installation"
    }
  },
  {
    id: "floor_lino",
    tradeId: "flooring_spec",
    name: {
      fr: "Pose linoleum",
      en: "Linoleum Installation"
    },
    slug: {
      fr: "pose-linoleum",
      en: "linoleum-installation"
    },
    description: {
      fr: "Installation de linoleum",
      en: "Linoleum flooring installation"
    }
  },
  {
    id: "floor_carpet",
    tradeId: "flooring_spec",
    name: {
      fr: "Pose moquette",
      en: "Carpet Installation"
    },
    slug: {
      fr: "pose-moquette",
      en: "carpet-installation"
    },
    description: {
      fr: "Installation de moquettes",
      en: "Carpet installation"
    }
  },
  {
    id: "floor_repair",
    tradeId: "flooring_spec",
    name: {
      fr: "Réparation sol",
      en: "Floor Repair"
    },
    slug: {
      fr: "reparation-sol",
      en: "floor-repair"
    },
    description: {
      fr: "Réparation de revêtements de sol",
      en: "Floor covering repair"
    }
  },
  {
    id: "floor_prep",
    tradeId: "flooring_spec",
    name: {
      fr: "Préparation sol",
      en: "Floor Preparation"
    },
    slug: {
      fr: "preparation-sol",
      en: "floor-preparation"
    },
    description: {
      fr: "Préparation des supports",
      en: "Floor preparation"
    }
  },

  // Window Fitter subtasks
  {
    id: "wind_install",
    tradeId: "window_fitter",
    name: {
      fr: "Installation fenêtre",
      en: "Window Installation"
    },
    slug: {
      fr: "installation-fenetre",
      en: "window-installation"
    },
    description: {
      fr: "Installation de fenêtres neuves",
      en: "New window installation"
    }
  },
  {
    id: "wind_replace",
    tradeId: "window_fitter",
    name: {
      fr: "Remplacement fenêtre",
      en: "Window Replacement"
    },
    slug: {
      fr: "remplacement-fenetre",
      en: "window-replacement"
    },
    description: {
      fr: "Remplacement de fenêtres anciennes",
      en: "Old window replacement"
    }
  },
  {
    id: "wind_door",
    tradeId: "window_fitter",
    name: {
      fr: "Installation porte-fenêtre",
      en: "French Door Installation"
    },
    slug: {
      fr: "installation-porte-fenetre",
      en: "french-door-installation"
    },
    description: {
      fr: "Installation de portes-fenêtres",
      en: "French door installation"
    }
  },
  {
    id: "wind_repair",
    tradeId: "window_fitter",
    name: {
      fr: "Réparation fenêtre",
      en: "Window Repair"
    },
    slug: {
      fr: "reparation-fenetre",
      en: "window-repair"
    },
    description: {
      fr: "Réparation de fenêtres",
      en: "Window repair"
    }
  },
  {
    id: "wind_seal",
    tradeId: "window_fitter",
    name: {
      fr: "Étanchéité fenêtre",
      en: "Window Sealing"
    },
    slug: {
      fr: "etancheite-fenetre",
      en: "window-sealing"
    },
    description: {
      fr: "Amélioration de l'étanchéité",
      en: "Window sealing improvement"
    }
  },
  
// Roofer subtasks
  {
    id: "roof_install",
    tradeId: "roofer",
    name: {
      fr: "Installation toiture",
      en: "Roof Installation"
    },
    slug: {
      fr: "installation-toiture",
      en: "roof-installation"
    },
    description: {
      fr: "Installation complète de toiture",
      en: "Complete roof installation"
    }
  },
  {
    id: "roof_repair",
    tradeId: "roofer",
    name: {
      fr: "Réparation toiture",
      en: "Roof Repair"
    },
    slug: {
      fr: "reparation-toiture",
      en: "roof-repair"
    },
    description: {
      fr: "Réparation de fuites et dégâts de toiture",
      en: "Repair of roof leaks and damage"
    }
  },
  {
    id: "roof_maintain",
    tradeId: "roofer",
    name: {
      fr: "Entretien toiture",
      en: "Roof Maintenance"
    },
    slug: {
      fr: "entretien-toiture",
      en: "roof-maintenance"
    },
    description: {
      fr: "Nettoyage et entretien de toiture",
      en: "Roof cleaning and maintenance"
    }
  },
  {
    id: "roof_gutter",
    tradeId: "roofer",
    name: {
      fr: "Installation gouttières",
      en: "Gutter Installation"
    },
    slug: {
      fr: "installation-gouttieres",
      en: "gutter-installation"
    },
    description: {
      fr: "Pose et remplacement de gouttières",
      en: "Installation and replacement of gutters"
    }
  },
  {
    id: "roof_insulate",
    tradeId: "roofer",
    name: {
      fr: "Isolation toiture",
      en: "Roof Insulation"
    },
    slug: {
      fr: "isolation-toiture",
      en: "roof-insulation"
    },
    description: {
      fr: "Installation d'isolation de toiture",
      en: "Installation of roof insulation"
    }
  },

  // HVAC Technician subtasks
  {
    id: "hvac_install",
    tradeId: "hvac_tech",
    name: {
      fr: "Installation climatisation",
      en: "AC Installation"
    },
    slug: {
      fr: "installation-climatisation",
      en: "ac-installation"
    },
    description: {
      fr: "Installation de systèmes de climatisation",
      en: "Installation of air conditioning systems"
    }
  },
  {
    id: "hvac_heat",
    tradeId: "hvac_tech",
    name: {
      fr: "Installation pompe à chaleur",
      en: "Heat Pump Installation"
    },
    slug: {
      fr: "installation-pompe-chaleur",
      en: "heat-pump-installation"
    },
    description: {
      fr: "Installation de pompes à chaleur",
      en: "Installation of heat pumps"
    }
  },
  {
    id: "hvac_maintain",
    tradeId: "hvac_tech",
    name: {
      fr: "Entretien climatisation",
      en: "AC Maintenance"
    },
    slug: {
      fr: "entretien-climatisation",
      en: "ac-maintenance"
    },
    description: {
      fr: "Maintenance de systèmes de climatisation",
      en: "Maintenance of air conditioning systems"
    }
  },
  {
    id: "hvac_vent",
    tradeId: "hvac_tech",
    name: {
      fr: "Installation VMC",
      en: "Ventilation Installation"
    },
    slug: {
      fr: "installation-vmc",
      en: "ventilation-installation"
    },
    description: {
      fr: "Installation de systèmes de ventilation",
      en: "Installation of ventilation systems"
    }
  },
  {
    id: "hvac_repair",
    tradeId: "hvac_tech",
    name: {
      fr: "Dépannage chauffage",
      en: "Heating Repair"
    },
    slug: {
      fr: "depannage-chauffage",
      en: "heating-repair"
    },
    description: {
      fr: "Réparation de systèmes de chauffage",
      en: "Repair of heating systems"
    }
  },

  // Tiler subtasks
  {
    id: "tile_floor",
    tradeId: "tiler",
    name: {
      fr: "Pose carrelage sol",
      en: "Floor Tiling"
    },
    slug: {
      fr: "pose-carrelage-sol",
      en: "floor-tiling"
    },
    description: {
      fr: "Installation de carrelage au sol",
      en: "Floor tile installation"
    }
  },
  {
    id: "tile_wall",
    tradeId: "tiler",
    name: {
      fr: "Pose carrelage mural",
      en: "Wall Tiling"
    },
    slug: {
      fr: "pose-carrelage-mural",
      en: "wall-tiling"
    },
    description: {
      fr: "Installation de carrelage mural",
      en: "Wall tile installation"
    }
  },
  {
    id: "tile_repair",
    tradeId: "tiler",
    name: {
      fr: "Réparation carrelage",
      en: "Tile Repair"
    },
    slug: {
      fr: "reparation-carrelage",
      en: "tile-repair"
    },
    description: {
      fr: "Réparation et remplacement de carreaux",
      en: "Tile repair and replacement"
    }
  },
  {
    id: "tile_mosaic",
    tradeId: "tiler",
    name: {
      fr: "Pose mosaïque",
      en: "Mosaic Installation"
    },
    slug: {
      fr: "pose-mosaique",
      en: "mosaic-installation"
    },
    description: {
      fr: "Installation de mosaïque décorative",
      en: "Decorative mosaic installation"
    }
  },
  {
    id: "tile_terrace",
    tradeId: "tiler",
    name: {
      fr: "Carrelage terrasse",
      en: "Terrace Tiling"
    },
    slug: {
      fr: "carrelage-terrasse",
      en: "terrace-tiling"
    },
    description: {
      fr: "Installation de carrelage extérieur",
      en: "Outdoor tile installation"
    }
  },

  // Plasterer subtasks
  {
    id: "plast_wall",
    tradeId: "plasterer",
    name: {
      fr: "Installation cloison",
      en: "Wall Installation"
    },
    slug: {
      fr: "installation-cloison",
      en: "wall-installation"
    },
    description: {
      fr: "Installation de cloisons sèches",
      en: "Drywall installation"
    }
  },
  {
    id: "plast_ceiling",
    tradeId: "plasterer",
    name: {
      fr: "Faux plafond",
      en: "Suspended Ceiling"
    },
    slug: {
      fr: "faux-plafond",
      en: "suspended-ceiling"
    },
    description: {
      fr: "Installation de faux plafonds",
      en: "Installation of suspended ceilings"
    }
  },
  {
    id: "plast_repair",
    tradeId: "plasterer",
    name: {
      fr: "Réparation plâtre",
      en: "Plaster Repair"
    },
    slug: {
      fr: "reparation-platre",
      en: "plaster-repair"
    },
    description: {
      fr: "Réparation de murs et plafonds",
      en: "Wall and ceiling repair"
    }
  },
  {
    id: "plast_finish",
    tradeId: "plasterer",
    name: {
      fr: "Enduit décoratif",
      en: "Decorative Coating"
    },
    slug: {
      fr: "enduit-decoratif",
      en: "decorative-coating"
    },
    description: {
      fr: "Application d'enduits décoratifs",
      en: "Application of decorative coatings"
    }
  },
  {
    id: "plast_insulate",
    tradeId: "plasterer",
    name: {
      fr: "Isolation intérieure",
      en: "Interior Insulation"
    },
    slug: {
      fr: "isolation-interieure",
      en: "interior-insulation"
    },
    description: {
      fr: "Installation d'isolation thermique intérieure",
      en: "Interior thermal insulation installation"
    }
  },
  
// Painter subtasks
  {
    id: "paint_interior",
    tradeId: "painter",
    name: {
      fr: "Peinture intérieure",
      en: "Interior Painting"
    },
    slug: {
      fr: "peinture-interieure",
      en: "interior-painting"
    },
    description: {
      fr: "Travaux de peinture intérieure et décoration",
      en: "Interior painting and decoration work"
    }
  },
  {
    id: "paint_exterior",
    tradeId: "painter",
    name: {
      fr: "Peinture extérieure",
      en: "Exterior Painting"
    },
    slug: {
      fr: "peinture-exterieure",
      en: "exterior-painting"
    },
    description: {
      fr: "Peinture de façades et extérieurs",
      en: "Painting of facades and exteriors"
    }
  },
  {
    id: "paint_wall",
    tradeId: "painter",
    name: {
      fr: "Pose papier peint",
      en: "Wallpaper Installation"
    },
    slug: {
      fr: "pose-papier-peint",
      en: "wallpaper-installation"
    },
    description: {
      fr: "Installation de papier peint et revêtements muraux",
      en: "Installation of wallpaper and wall coverings"
    }
  },
  {
    id: "paint_decor",
    tradeId: "painter",
    name: {
      fr: "Décoration murale",
      en: "Wall Decoration"
    },
    slug: {
      fr: "decoration-murale",
      en: "wall-decoration"
    },
    description: {
      fr: "Création de décors et effets spéciaux",
      en: "Creation of decorations and special effects"
    }
  },
  {
    id: "paint_repair",
    tradeId: "painter",
    name: {
      fr: "Réparation murs",
      en: "Wall Repair"
    },
    slug: {
      fr: "reparation-murs",
      en: "wall-repair"
    },
    description: {
      fr: "Préparation et réparation des surfaces",
      en: "Surface preparation and repair"
    }
  },
  
  // Carpentry Tasks
  {
    id: "carp_door",
    tradeId: "carpenter",
    name: {
      fr: "Installation portes",
      en: "Door Installation"
    },
    slug: {
      fr: "installation-portes",
      en: "door-installation"
    },
    description: {
      fr: "Installation et remplacement de portes intérieures",
      en: "Installation and replacement of interior doors"
    }
  },
  {
    id: "carp_floor",
    tradeId: "carpenter",
    name: {
      fr: "Parquet et plancher",
      en: "Flooring"
    },
    slug: {
      fr: "parquet-plancher",
      en: "flooring"
    },
    description: {
      fr: "Installation et rénovation de parquets",
      en: "Installation and renovation of wooden floors"
    }
  },
  {
    id: "carp_furniture",
    tradeId: "carpenter",
    name: {
      fr: "Meubles sur mesure",
      en: "Custom Furniture"
    },
    slug: {
      fr: "meubles-sur-mesure",
      en: "custom-furniture"
    },
    description: {
      fr: "Création de meubles sur mesure",
      en: "Creation of custom furniture"
    }
  },
  {
    id: "carp_kitchen",
    tradeId: "carpenter",
    name: {
      fr: "Installation cuisine",
      en: "Kitchen Installation"
    },
    slug: {
      fr: "installation-cuisine",
      en: "kitchen-installation"
    },
    description: {
      fr: "Montage et installation de cuisines",
      en: "Assembly and installation of kitchens"
    }
  },
  {
    id: "carp_repair",
    tradeId: "carpenter",
    name: {
      fr: "Réparation boiserie",
      en: "Woodwork Repair"
    },
    slug: {
      fr: "reparation-boiserie",
      en: "woodwork-repair"
    },
    description: {
      fr: "Réparation de menuiseries et boiseries",
      en: "Repair of carpentry and woodwork"
    }
  }
];

export function getTradeTasksByTradeId(tradeId: string): TradeTask[] {
  return tradeTasks.filter(task => task.tradeId === tradeId);
}

export function getTradeTaskBySlug(slug: string, locale: 'fr' | 'en'): TradeTask | undefined {
  return tradeTasks.find(task => task.slug[locale] === slug);
}

export function getLocalizedTradeTask(task: TradeTask, locale: 'fr' | 'en') {
  return {
    id: task.id,
    tradeId: task.tradeId,
    name: task.name[locale],
    slug: task.slug[locale],
    description: task.description[locale]
  };
}</content>