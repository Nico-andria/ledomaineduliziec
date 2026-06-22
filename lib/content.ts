/**
 * ============================================================
 *  CONTENU DE LA LANDING PAGE — « La Table du Liziec »
 * ============================================================
 *  Textes alignés sur le site officiel ledomaineduliziec.com.
 *  C'est le SEUL fichier à éditer pour le contenu.
 *
 *  ⚠️ TROUS À COMPLÉTER (non publiés sur le site, dans un PDF
 *     ou absents) — repérés par le commentaire « TODO RÉEL » :
 *       - prix et noms exacts des menus (cf. PDF « Carte »)
 *       - horaires d'ouverture précis
 *       - témoignages clients (aucun sur le site officiel)
 * ============================================================
 */

export const NAV_LINKS = [
  { label: "Expérience", href: "#experience" },
  { label: "Le Chef", href: "#chef" },
  { label: "La Carte", href: "#menus" },
  { label: "Bar à Vin", href: "#wine" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  badge: "Une Étoile Michelin · Gault & Millau d'Or 2026",
  // Carrousel d'images de fond (5 s par slide)
  slides: [
    "/images/interior.png",
    "/images/carte.png",
    "/images/hero-dish.png",
  ],
  titleLine1: "Restaurant gastronomique",
  titleAccent: "1 étoile Michelin",
  titleLine2: "à Vannes",
  ctaPrimary: "Réserver une table",
  ctaSecondary: "Découvrir la carte",
} as const;

export const EXPERIENCE = {
  title: "Une expérience culinaire et sensorielle unique au Domaine du Liziec",
  text: "Le restaurant gastronomique étoilé vous accueille dans un décor aux tons chauds, nuancés de reflets dorés et cuivrés : une salle intimiste et raffinée. Chaque repas est une fête des sens, porté par des menus qui épousent les saisons et l'humeur changeante de cette Bretagne à laquelle Olivier Samson est tant attaché.",
  link: "En savoir plus",
  image: "/images/degustation.png",
  imageAlt: "Millefeuille à la feuille d'or et sorbet framboise, dressé sur une table en bois",
} as const;

export const CHEF = {
  kicker: "Chef Exécutif",
  name: "Le Chef Olivier Samson",
  quote:
    "Dès la lecture de la carte, vous savez que vous allez vivre ici un moment qui n'existe nulle part ailleurs.",
  bio: "Des Côtes-d'Armor à la Côte d'Azur, de Courchevel à la Maison Pic d'Anne-Sophie Pic, Olivier Samson a travaillé aux côtés des plus grands. À la tête de La Gourmandière à Vannes pendant treize ans, il y décroche une étoile Michelin en 2011 et trois toques au Gault & Millau. Chef Exécutif du Domaine du Liziec depuis son ouverture en 2024, il obtient une nouvelle étoile Michelin en 2026.",
  cta: "Découvrir son parcours",
  image: "/images/chef.jpg",
  imageAlt: "Le chef Olivier Samson en veste blanche dans la salle du restaurant",
} as const;

export interface MenuItem {
  title: string;
  description: string;
  /** Prix OU libellé court affiché en gros (ex. « 6 — 30 convives ») */
  price: string;
  cta: string;
  image: string;
  imageAlt: string;
  /** Décale la carte verticalement sur desktop (layout asymétrique) */
  offset?: boolean;
}

export const MENUS: MenuItem[] = [
  {
    title: "La Carte",
    description:
      "Des menus qui épousent les saisons, chacun portant le nom d'une plante sauvage des sentiers côtiers du Golfe du Morbihan.",
    price: "Au gré des saisons", // TODO RÉEL : prix exacts (PDF « Carte »)
    cta: "Découvrir la carte",
    image: "/images/domaine-de-liziec-11-24_165_fa.jpg",
    imageAlt: "Trio d'amuse-bouches gastronomiques dressés sur des supports en porcelaine",
  },
  {
    title: "Table Privatisée",
    description:
      "Une table d'exception pour 6 à 30 convives, dans une atmosphère élégante et intimiste. Possibilité de salon VIP privé.",
    price: "6 — 30 convives",
    cta: "Privatiser",
    image: "/images/gastro_plats_71.jpg",
    imageAlt: "Plat de homard et viande nacrée, sauce safranée, dressage épuré",
    offset: true,
  },
  {
    title: "La Cave",
    description:
      "Une carte des vins d'exception, sélectionnée pour accompagner et sublimer chaque création du chef.",
    price: "À la carte",
    cta: "Voir la carte des vins",
    image: "/images/wine.png",
    imageAlt: "Bouteille de Château Margaux et verre de vin dans la cave",
  },
];

export const WINE = {
  kicker: "La Cave",
  title: "Le Bar à Vin",
  text: "Un espace intimiste pour prolonger l'expérience autour de crus d'exception et de belles découvertes de vignerons. L'endroit idéal pour débuter ou conclure votre voyage gastronomique.",
  cta: "Découvrir le bar",
  image: "/images/gastro_vin_08.jpg",
  imageAlt: "Cave à vin du restaurant, bouteilles et armagnacs millésimés",
} as const;

export interface Testimonial {
  rating: number;
  quote: string;
  author: string;
}

// TODO RÉEL : le site officiel ne publie aucun témoignage.
// Remplacer par de vrais avis (Google, TripAdvisor…) ou supprimer la section.
export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Une précision millimétrée dans les saveurs. Le Chef Samson sublime la Bretagne avec une élégance rare. Un moment hors du temps.",
    author: "Jean-Pierre D.",
  },
  {
    rating: 5,
    quote:
      "L'accueil est à la hauteur de l'assiette. Le sommelier a su nous faire découvrir des pépites locales insoupçonnées, parfaitement accordées aux plats.",
    author: "Sophie M.",
  },
  {
    rating: 5,
    quote:
      "Une expérience sensorielle complète. De la vaisselle à la décoration, tout respire le luxe discret et le bon goût absolu.",
    author: "Marc L.",
  },
];

export type InfoIcon = "map" | "clock" | "phone" | "mail";

export interface InfoItem {
  icon: InfoIcon;
  title: string;
  lines: string[];
}

export const INFOS: InfoItem[] = [
  { icon: "map", title: "Adresse", lines: ["40 Route de Rennes", "56000 Vannes"] },
  // TODO RÉEL : horaires précis (non publiés sur le site)
  { icon: "clock", title: "Horaires", lines: ["Déjeuner & Dîner", "Sur réservation"] },
  { icon: "phone", title: "Téléphone", lines: ["+33 2 22 07 50 15"] },
  { icon: "mail", title: "Email", lines: ["domaineduliziec@accor.com"] },
];

export const AWARDS = [
  {
    name: "Guide Michelin — 1 Étoile 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtipFmU3D5mmrHtcAxYCcYm2nQPAXA4evewp8PquMRk9wg7RfPB00FEYvApNgFIVulzWems0YDOPIq9U-T5tD9hEGQ5Lt3HkDZX-Ui0VMKRsVgC0NdR2pySqbra4jPS5zHDcBAaSSskRTSk0mbVU3cuUXVgsCvT7wxzVmazm3pY7O7JAnq4VPkURsZqN4kKFe_Wu_OdGmLyUlyOMJ2S4nXc9MvvbDwp7zW5Qx9l_clXPiQC4bBWjkx_x9GcSmjlBvX0D_2xDABqCN_",
    cls: "h-16",
  },
  {
    name: "Gault & Millau — d'Or Bretagne 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi5qAS92_9pdEp3sOdnGzWpztiOo2FaCpZliPro1ESOlHjwPORDLZM6TrbiFaXM7F2U0xEHAzOjgNwenyZ8xUatlfC6Vg7oPgD5lsaVKyqbmZHXcG-IuUzMXOVwZGRXur3OC8sp3edj9Pn4ZFHO1_celrKjlWGLja7kOXUqbpnfhPMVNJgiYreDy494BEbWI831DCFf2t5HKCFIU33ZSa3gOgCiFutSbXbt9qJke_dq4FUfrUqcrSO0-hhSE1xW4g9Og8S3m_Mjx-1",
    cls: "h-12 opacity-50",
  },
];

export const FOOTER = {
  brand: "La Table du Liziec",
  links: ["Mentions Légales", "Confidentialité", "Presse", "Carrières", "Contact"],
  copyright:
    "© 2026 La Table du Liziec — Domaine du Liziec, MGallery. Tous droits réservés.",
} as const;

/** CTA de réservation global (ancre, widget de réservation ou URL externe) */
export const RESERVATION_HREF = "#contact";

/** Liens externes officiels du Domaine */
export const EXTERNAL_LINKS = {
  emporter: "https://domaineduliziec.shop-and-go.fr/",
  offrir: "https://ledomaineduliziec.secretbox.fr/",
  site: "https://ledomaineduliziec.com/fr/restaurant-bar/restaurant-gastronomique.html",
} as const;
