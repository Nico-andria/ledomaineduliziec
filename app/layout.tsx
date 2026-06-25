import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Cinzel } from "next/font/google";
import "./globals.css";
import { PageLoader } from "@/components/ui/PageLoader";
import { FloatingReservationCta } from "@/components/ui/FloatingReservationCta";

/* Fonts via next/font (self-hosted, zéro requête vers Google Fonts)
   - Cormorant Garamond : serif à fort contraste, signature « fine dining ».
   - Jost : sans géométrique racé, idéal pour les labels en capitales espacées.
   - Cinzel : capitales romaines gravées, réservées au CTA de réservation. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://ledomaineduliziec.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Restaurant Gastronomique 1 Étoile Michelin & Bar à Vin Vannes · La Table du Liziec (56)",
  description:
    "OFFICIEL · La Table du Liziec · Restaurant Gastronomique 1 Étoile Michelin & Bar à Vin à Vannes dans le Golfe du Morbihan. Découvrez la carte et les menus du Chef Olivier Samson, et réservez votre table.",
  keywords: [
    "restaurant gastronomique Vannes",
    "étoile Michelin Bretagne",
    "Domaine du Liziec",
    "Olivier Samson",
    "Gault et Millau Bretagne",
    "bar à vin Vannes",
    "Golfe du Morbihan",
  ],
  alternates: {
    canonical: "/fr/restaurant-bar/restaurant-gastronomique.html",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${siteUrl}/fr/restaurant-bar/restaurant-gastronomique.html`,
    siteName: "La Table du Liziec",
    title:
      "Restaurant Gastronomique 1 Étoile Michelin & Bar à Vin Vannes · La Table du Liziec (56)",
    description:
      "La Table du Liziec · Restaurant Gastronomique 1 Étoile Michelin & Bar à Vin à Vannes, dans le Golfe du Morbihan. Le Chef Olivier Samson sublime la Bretagne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Table du Liziec | 1 Étoile Michelin à Vannes",
    description:
      "Restaurant gastronomique au Domaine du Liziec. Le Chef Olivier Samson, 1 étoile Michelin 2026.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#131313",
  width: "device-width",
  initialScale: 1,
};

/**
 * JSON-LD (Schema.org) — aide au référencement local + rich results.
 * Adapte téléphone, géo et horaires aux données réelles.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "La Table du Liziec",
  servesCuisine: "Gastronomique française",
  priceRange: "€€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 Route de Rennes",
    addressLocality: "Vannes",
    postalCode: "56000",
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  telephone: "+33 2 22 07 50 15",
  email: "domaineduliziec@accor.com",
  url: `${siteUrl}/fr/restaurant-bar/restaurant-gastronomique.html`,
  award: [
    "1 étoile au Guide Michelin 2026",
    "Gault & Millau d'Or Bretagne 2026 (3 toques)",
  ],
  // TODO RÉEL : horaires précis (non publiés sur le site officiel)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`dark ${cormorant.variable} ${jost.variable} ${cinzel.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        {children}
        <FloatingReservationCta />
      </body>
    </html>
  );
}
