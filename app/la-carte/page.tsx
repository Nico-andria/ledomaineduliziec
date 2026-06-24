import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { CarteGallery } from "@/components/ui/CarteGallery";
import { CARTE_PAGE, EXTERNAL_LINKS, RESERVATION_HREF } from "@/lib/content";

export const metadata: Metadata = {
  title: "La Carte & les Menus · La Table du Liziec",
  description:
    "Découvrez la carte saisonnière du Chef Olivier Samson à La Table du Liziec, restaurant gastronomique 1 étoile Michelin à Vannes.",
};

/* ============================================================
   PAGE LA CARTE — présentation, galerie de plats, PDF officiels
   ============================================================ */
export default function LaCartePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32 pt-32 md:pt-44">
        {/* En-tête */}
        <header className="mx-auto mb-12 max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <p className="mb-4 font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
            {CARTE_PAGE.kicker}
          </p>
          <h1 className="font-serif text-headline-lg text-primary">
            {CARTE_PAGE.title}
          </h1>
          <div className="mx-auto mt-8 h-0.5 w-20 bg-heritage-gold" />
          <p className="mt-8 font-sans text-body-lg leading-relaxed text-on-surface-variant">
            {CARTE_PAGE.intro}
          </p>
        </header>

        {/* Téléchargement des cartes (PDF officiels) */}
        <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center justify-center gap-6 px-margin-mobile sm:flex-row md:px-margin-desktop">
          <PrimaryButton
            href={EXTERNAL_LINKS.carteMenuPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4"
          >
            La carte (PDF)
          </PrimaryButton>
          <SecondaryButton
            variant="gold"
            href={EXTERNAL_LINKS.carteVinsPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4"
          >
            La carte des vins (PDF)
          </SecondaryButton>
        </div>

        {/* Galerie de plats — carousel scroll (mobile) / panneaux extensibles (desktop) */}
        <section className="mb-24">
          <CarteGallery photos={CARTE_PAGE.gallery} />
        </section>

        {/* Philosophie + cave (ancre #vins) */}
        <section
          id="vins"
          className="mx-auto max-w-3xl scroll-mt-32 px-margin-mobile text-center md:px-margin-desktop"
        >
          <h2 className="font-serif text-headline-md text-heritage-gold">
            Une cuisine au fil des saisons
          </h2>
          <p className="mt-6 font-sans text-body-md leading-relaxed text-on-surface-variant">
            {CARTE_PAGE.philosophy}
          </p>
          <div className="mt-12">
            <PrimaryButton
              href={RESERVATION_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5"
            >
              Réserver une table
            </PrimaryButton>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
