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

// hrefs en `/#ancre` pour fonctionner aussi depuis les pages secondaires
export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "La Carte", href: "/la-carte" },
  { label: "Le Chef", href: "/le-chef" },
  { label: "Bar à Vin", href: "/bar-a-vin" },
  { label: "Contact", href: "/contact" },
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

/**
 * Section « Intro / Présentation » de la landing (sous le hero).
 * Reprend le style de la page officielle : logos de distinctions en couleur,
 * grand titre or en capitales, accroche courte, trois appels à l'action
 * à bouton circulaire, et l'origami doré de la marque en débordement.
 */
export const INTRO = {
  // Logos Gault & Millau affichés en couleur (le Michelin est rendu en inline dans la section).
  // TODO RÉEL : déposer le logo officiel Michelin dans public/images/ pour l'ajouter ici en image.
  awards: [
    { name: "Gault & Millau, 3 toques", image: "/images/bloc_3_toques_notation_gm_rouge.png", cls: "h-7 sm:h-9" },
    { name: "Gault & Millau, 16/20", image: "/images/note-16-rouge.png", cls: "h-8 sm:h-11" },
    { name: "Gault & Millau d'Or Bretagne 2026", image: "/images/gault-millau-or-logo.png", cls: "h-8 sm:h-11" },
  ],
  title: "La Table, restaurant gastronomique à Vannes",
  // Accroche volontairement courte : une seule ligne.
  text: "Une salle intimiste signée Olivier Samson, au rythme des saisons bretonnes.",
  ctas: [
    { label: "Découvrir la carte", href: "/la-carte", external: false },
    { label: "Réserver une table", href: "/reservation", external: false },
    { label: "Offrir un coffret cadeau", href: "https://ledomaineduliziec.secretbox.fr/", external: true },
  ],
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
  // Résumé court : le parcours complet vit sur la page dédiée /le-chef.
  bio: "Treize ans à la tête de La Gourmandière, une étoile Michelin dès 2011. Aujourd'hui Chef Exécutif du Domaine du Liziec, étoilé à nouveau en 2026.",
  cta: "Découvrir son parcours",
  image: "/images/chef.jpg",
  imageAlt: "Le chef Olivier Samson en veste blanche dans la salle du restaurant",
} as const;

export interface MenuItem {
  title: string;
  description: string;
  /** Prix OU libellé court affiché en gros (ex. « 6 à 30 convives ») */
  price: string;
  cta: string;
  /** Destination du bouton (route interne ou URL externe) */
  ctaHref: string;
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
    ctaHref: "/la-carte",
    image: "/images/domaine-de-liziec-11-24_165_fa.jpg",
    imageAlt: "Trio d'amuse-bouches gastronomiques dressés sur des supports en porcelaine",
  },
  {
    title: "Table Privatisée",
    description:
      "Une table d'exception pour 6 à 30 convives, dans une atmosphère élégante et intimiste. Possibilité de salon VIP privé.",
    price: "6 à 30 convives",
    cta: "Privatiser",
    ctaHref: "https://ib.guestonline.fr/instabook/bookings/fFge82j/selection",
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
    ctaHref: "/la-carte#vins",
    image: "/images/wine.png",
    imageAlt: "Bouteille de Château Margaux et verre de vin dans la cave",
  },
];

export const WINE = {
  kicker: "La Cave",
  title: "Le Bar à Vin",
  text: "Un espace intimiste dédié aux crus d’exception et aux découvertes de vignerons, idéal pour débuter ou prolonger votre voyage gastronomique.",
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

/** Section Témoignages : appel à l'action vers la plateforme d'avis. */
export const REVIEWS = {
  kicker: "L'émotion partagée",
  title: "Témoignages",
  cta: "Voir tous les avis",
  // TODO RÉEL : remplacer par le lien direct vers la fiche Google avis du restaurant
  href: "https://www.google.com/maps/search/?api=1&query=La+Table+du+Liziec+Vannes",
} as const;

/** Dernier appel à l'action (avant le footer), avec image de fond. */
export const FINAL_CTA = {
  kicker: "Votre table vous attend",
  title: "Vivez l'expérience La Table",
  text: "Réservez votre moment d'exception au cœur du Domaine du Liziec.",
  cta: "Réserver une table",
  image: "/images/interior.png",
  imageAlt: "Salle intimiste du restaurant, lustres en cristal",
} as const;

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
    name: "Guide Michelin, 1 Étoile 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtipFmU3D5mmrHtcAxYCcYm2nQPAXA4evewp8PquMRk9wg7RfPB00FEYvApNgFIVulzWems0YDOPIq9U-T5tD9hEGQ5Lt3HkDZX-Ui0VMKRsVgC0NdR2pySqbra4jPS5zHDcBAaSSskRTSk0mbVU3cuUXVgsCvT7wxzVmazm3pY7O7JAnq4VPkURsZqN4kKFe_Wu_OdGmLyUlyOMJ2S4nXc9MvvbDwp7zW5Qx9l_clXPiQC4bBWjkx_x9GcSmjlBvX0D_2xDABqCN_",
    cls: "h-16",
  },
  {
    name: "Gault & Millau, d'Or Bretagne 2026",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi5qAS92_9pdEp3sOdnGzWpztiOo2FaCpZliPro1ESOlHjwPORDLZM6TrbiFaXM7F2U0xEHAzOjgNwenyZ8xUatlfC6Vg7oPgD5lsaVKyqbmZHXcG-IuUzMXOVwZGRXur3OC8sp3edj9Pn4ZFHO1_celrKjlWGLja7kOXUqbpnfhPMVNJgiYreDy494BEbWI831DCFf2t5HKCFIU33ZSa3gOgCiFutSbXbt9qJke_dq4FUfrUqcrSO0-hhSE1xW4g9Og8S3m_Mjx-1",
    cls: "h-12 opacity-50",
  },
];

export const FOOTER = {
  brand: "La Table du Liziec",
  tagline:
    "Restaurant gastronomique étoilé au Domaine du Liziec, MGallery. Une cuisine bretonne au rythme des saisons, signée Olivier Samson.",
  legalLabel: "Informations",
  navLabel: "Le restaurant",
  contactLabel: "Nous trouver",
  links: [
    { label: "Mentions Légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Presse", href: "/presse" },
    { label: "Carrières", href: "/carrieres" },
    { label: "Contact", href: "/contact" },
  ],
  copyright:
    "© 2026 La Table du Liziec. Domaine du Liziec, MGallery. Tous droits réservés.",
} as const;

/** Routes internes du site */
export const ROUTES = {
  carte: "/la-carte",
  chef: "/le-chef",
  barAVin: "/bar-a-vin",
  reservation: "/reservation",
} as const;

/**
 * CTA de réservation global → moteur de réservation externe GuestOnline.
 * Les boutons « Réserver » ouvrent ce lien dans un nouvel onglet
 * (penser à `target="_blank" rel="noopener noreferrer"` côté composant).
 * NB : la page interne `/reservation` (ROUTES.reservation) existe toujours
 * mais n'est plus reliée aux CTA — la conserver ou la retirer au besoin.
 */
export const RESERVATION_HREF =
  "https://ib.guestonline.fr/instabook/bookings/fFge82j/selection";

/** Liens externes officiels du Domaine */
export const EXTERNAL_LINKS = {
  emporter: "https://domaineduliziec.shop-and-go.fr/",
  offrir: "https://ledomaineduliziec.secretbox.fr/",
  // TODO RÉEL : remplacer par le lien direct vers la fiche Google avis du restaurant
  avis: "https://www.google.com/maps/search/?api=1&query=La+Table+du+Liziec+Vannes",
  site: "https://ledomaineduliziec.com/fr/restaurant-bar/restaurant-gastronomique.html",
  // PDF officiels hébergés sur le site du Domaine
  carteMenuPdf:
    "https://ledomaineduliziec.com/media/original/68372438baaad/menu-la-table.pdf",
  carteVinsPdf:
    "https://ledomaineduliziec.com/media/original/68372438baaad/vins-la-table.pdf",
} as const;

/** Contacts réutilisés sur plusieurs pages */
export const CONTACT = {
  phone: "+33 2 22 07 50 15",
  phoneHref: "tel:+33222075015",
  email: "domaineduliziec@accor.com",
  address: ["40 Route de Rennes", "56000 Vannes"],
} as const;

/* ============================================================
   PAGE « LA CARTE » (/la-carte)
   ============================================================ */
export const CARTE_PAGE = {
  kicker: "Cartes & Menus",
  title: "La Carte",
  intro:
    "Dès la lecture de la carte, vous savez que vous allez vivre ici un moment qui n'existe nulle part ailleurs. Les menus évoluent au gré des vents et des marées, s'enrichissent des récoltes de nos jardins et de nos vergers, tout en explorant les saveurs des régions qui ont marqué le parcours du chef.",
  philosophy:
    "Chaque menu porte le nom d'une plante sauvage typique des sentiers côtiers de nos îles du Golfe du Morbihan, vous plongeant dans un univers poétique et iodé, intimement lié aux souvenirs d'enfance d'Olivier Samson. La carte cultive la subtile alliance de la tradition culinaire et de la modernité créative.",
  // TODO RÉEL : intitulés et prix exacts des menus (voir le PDF officiel ci-dessous)
  gallery: [
    { src: "/images/carte.png", alt: "Saint-Jacques poêlée, purée et fleurs comestibles" },
    { src: "/images/domaine-de-liziec-11-24_165_fa.jpg", alt: "Trio d'amuse-bouches sur supports en porcelaine" },
    { src: "/images/gastro_plats_71.jpg", alt: "Homard et viande nacrée, sauce safranée" },
    { src: "/images/plats_gastro_020.jpg", alt: "Amuse-bouches sur lit de sarrasin et tartelettes" },
    { src: "/images/hero-dish.png", alt: "Magret de canard, fleurs et jus corsé" },
    { src: "/images/degustation.png", alt: "Millefeuille à la feuille d'or et sorbet framboise" },
  ],
} as const;

/* ============================================================
   PAGE « LE CHEF » (/le-chef)
   ============================================================ */
export const CHEF_PAGE = {
  kicker: "Chef Exécutif",
  title: "Olivier Samson",
  // Image principale (portrait salon) et image secondaire (en cuisine)
  image: "/images/chef.jpg",
  imageAlt: "Le chef Olivier Samson en veste blanche dans le salon du Domaine du Liziec",
  imageKitchen: "/images/chef2.jpg",
  imageKitchenAlt: "Le chef Olivier Samson au cœur de sa brigade, en cuisine",
  // Phrase d'accroche affichée sur le portrait
  lead:
    "C'est en Côtes-d'Armor, lors d'un premier stage déterminant aux côtés de Patrick Jeffroy, qu'Olivier Samson décide de devenir grand chef. Une vocation née d'une rencontre, nourrie ensuite auprès des plus grandes maisons.",
  paragraphs: [
    "Des Côtes-d'Armor à la Côte d'Azur, au Club de Cavalière au Lavandou avec Marc Dach, puis à Courchevel (Le Bateau Ivre, avec Jean-Pierre Jacob), Verbier (Rosalp, avec Roland Pierroz), Valence (Maison Pic, avec Anne-Sophie Pic) ou encore Genève (Parc des Eaux-Vives, avec Fabrice Vulin), Olivier Samson a travaillé aux côtés des plus grands.",
    "À la tête du restaurant La Gourmandière à Vannes pendant treize ans, il y obtient une étoile au Guide Michelin en 2011 et trois toques au Gault & Millau en 2014.",
    "Chef Exécutif du Domaine du Liziec depuis l'ouverture de l'établissement en 2024, il y orchestre l'ensemble de l'expérience culinaire (le bar, la brasserie et le restaurant gastronomique) et décroche une nouvelle étoile Michelin en 2026, ainsi que la distinction Gault & Millau d'Or Bretagne.",
  ],
  // Frise chronologique du parcours (mentors et maisons)
  timeline: [
    {
      year: "Le déclic",
      place: "Côtes-d'Armor",
      mentor: "Patrick Jeffroy",
      detail: "Un premier stage décisif où naît la vocation : devenir grand chef.",
    },
    {
      year: "Le Lavandou",
      place: "Le Club de Cavalière",
      mentor: "Marc Dach",
      detail: "L'apprentissage de la grande cuisine sur la Côte d'Azur.",
    },
    {
      year: "Courchevel",
      place: "Le Bateau Ivre",
      mentor: "Jean-Pierre Jacob",
      detail: "La rigueur de la haute gastronomie alpine.",
    },
    {
      year: "Verbier",
      place: "Le Rosalp",
      mentor: "Roland Pierroz",
      detail: "L'exigence d'une maison étoilée suisse de référence.",
    },
    {
      year: "Valence",
      place: "Maison Pic",
      mentor: "Anne-Sophie Pic",
      detail: "Sous-chef dans l'une des plus grandes tables de France.",
    },
    {
      year: "2006 · Genève",
      place: "Parc des Eaux-Vives",
      mentor: "Fabrice Vulin",
      detail: "Chef d'une maison doublement étoilée Michelin.",
    },
    {
      year: "2011 à 2024 · Vannes",
      place: "La Gourmandière",
      mentor: "Sa première maison",
      detail: "Treize années à sa tête : une étoile Michelin en 2011, trois toques Gault & Millau en 2014.",
    },
    {
      year: "Depuis 2024 · Vannes",
      place: "Domaine du Liziec",
      mentor: "Chef Exécutif",
      detail: "Une nouvelle étoile Michelin en 2026 et le Gault & Millau d'Or Bretagne.",
    },
  ],
  // Philosophie culinaire
  philosophyTitle: "Une vision contemporaine du terroir breton",
  philosophy: [
    "Sa cuisine célèbre le terroir breton avec une audace contemporaine : chaque ingrédient est choisi pour sa noblesse et sa vérité, transformé avec une technicité millimétrée, au fil des saisons et de l'humeur changeante de cette Bretagne à laquelle il est tant attaché.",
    "Une cuisine sensorielle et inspirée, où le geste juste et le respect du produit priment sur l'effet : du gastronomique au plus généreux, chaque création raconte une mémoire et un savoir-faire.",
  ],
  // Produits signatures
  signaturesTitle: "Ses produits de prédilection",
  signatures: [
    {
      name: "La langoustine",
      detail: "Pêchée au large des côtes bretonnes, travaillée dans sa plus grande pureté.",
    },
    {
      name: "Le cochon noir « Kintoa »",
      detail: "Une viande rare et racée, choisie pour sa profondeur de goût.",
    },
    {
      name: "Le caviar",
      detail: "La note d'iode et d'élégance qui signe les assiettes gastronomiques.",
    },
  ],
  distinctions: [
    "Une étoile au Guide Michelin (2011, La Gourmandière)",
    "Trois toques au Gault & Millau (2014)",
    "Une étoile au Guide Michelin (2026, La Table du Liziec)",
    "Gault & Millau d'Or Bretagne (2026)",
  ],
} as const;

/* ============================================================
   PAGE « RÉSERVATION » (/reservation)
   ============================================================ */
export const RESERVATION_PAGE = {
  kicker: "Votre table vous attend",
  title: "Réserver une table",
  intro:
    "Pour toute réservation, remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone. Notre équipe vous recontacte pour confirmer votre venue.",
  privatisation: {
    title: "La magie d'une table privatisée",
    text: "Olivier Samson vous propose la privatisation d'une table d'exception pour des groupes de 6 à 30 convives, dans une atmosphère élégante et intimiste, avec possibilité de salon VIP privé. Le temps d'un moment privilégié, vous découvrez une cuisine sensorielle, singulière et inspirée, où chaque création célèbre l'authenticité des produits et le savoir-faire des producteurs locaux.",
  },
} as const;

/* ============================================================
   PAGE « CONTACT » (/contact)
   ============================================================ */
export const CONTACT_PAGE = {
  kicker: "Nous écrire",
  title: "Contact",
  intro:
    "Une question, une demande particulière ou l'envie d'organiser un événement ? Écrivez-nous via le formulaire ci-dessous ou contactez-nous directement. Pour réserver une table, rendez-vous sur notre page dédiée.",
  // Coordonnées affichées en colonne latérale
  cards: [
    { icon: "phone", title: "Par téléphone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: "mail", title: "Par email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: "map", title: "Adresse", lines: CONTACT.address },
    { icon: "clock", title: "Horaires", lines: ["Déjeuner & Dîner", "Sur réservation"] },
  ] as { icon: InfoIcon; title: string; value?: string; href?: string; lines?: readonly string[] }[],
  // Carte Google Maps (embed sans clé API)
  mapEmbed:
    "https://www.google.com/maps?q=40+Route+de+Rennes,+56000+Vannes&output=embed",
} as const;

/* ============================================================
   PAGE « BAR À VIN » (/bar-a-vin)
   ⚠️ TODO RÉEL : la sélection et les prix ci-dessous sont des
   placeholders. La carte officielle vit dans le PDF
   (EXTERNAL_LINKS.carteVinsPdf). À faire valider par le client /
   le sommelier avant mise en ligne.
   ============================================================ */
export const BAR_A_VIN_PAGE = {
  kicker: "La Cave",
  title: "Le Bar à Vin",
  intro:
    "Un écrin intimiste dédié aux crus d'exception et aux découvertes de vignerons. À la coupe ou à la bouteille, laissez notre sommelier vous guider, pour débuter, prolonger ou simplement savourer, en marge du voyage gastronomique.",
  image: "/images/gastro_vin_08.jpg",
  imageAlt: "Cave à vin du restaurant, bouteilles et millésimes d'exception",
  // Sélection au verre (TODO RÉEL : crus & prix exacts)
  byGlassTitle: "Notre sélection à la coupe",
  byGlass: [
    {
      name: "Champagne, Brut Premier Cru",
      detail: "Bulles fines et vineuses, pour ouvrir le bal.",
      price: "Sur demande",
    },
    {
      name: "Le blanc du moment",
      detail: "Choisi par le sommelier au gré des arrivages.",
      price: "Sur demande",
    },
    {
      name: "Le rouge du moment",
      detail: "Un vigneron coup de cœur, à découvrir.",
      price: "Sur demande",
    },
  ],
  // Grandes familles de la cave (présentation, sans prix)
  categoriesTitle: "Au fil de la cave",
  categories: [
    {
      name: "Champagnes & Bulles",
      detail:
        "Grandes maisons et vignerons récoltants, pour célébrer chaque instant.",
    },
    {
      name: "Vins Blancs",
      detail:
        "De la minéralité iodée des côtes bretonnes aux grands blancs de Bourgogne.",
    },
    {
      name: "Vins Rouges",
      detail:
        "Des crus structurés et profonds, sélectionnés pour accompagner la table.",
    },
    {
      name: "Découvertes & Vignerons",
      detail:
        "Une cave vivante : pépites locales, bios et nature, en perpétuel renouvellement.",
    },
  ],
  // Planches & accords pour accompagner (TODO RÉEL : compositions & prix)
  platesTitle: "Pour accompagner",
  plates: [
    {
      name: "Planche de fromages affinés",
      detail: "Sélection de la région, fruits secs et pain de campagne.",
      price: "Sur demande",
    },
    {
      name: "Charcuterie fine",
      detail: "Cochon noir Kintoa et spécialités, condiments maison.",
      price: "Sur demande",
    },
    {
      name: "Gougères & amuse-bouches",
      detail: "Les petites bouchées du chef, au gré de l'envie.",
      price: "Sur demande",
    },
  ],
  note:
    "Carte non contractuelle, susceptible d'évoluer selon les arrivages. Consultez la carte des vins complète ci-dessous.",
} as const;
