import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { BAR_A_VIN_PAGE, EXTERNAL_LINKS, RESERVATION_HREF } from "@/lib/content";

export const metadata: Metadata = {
  title: "Le Bar à Vin · La Table du Liziec",
  description:
    "Le bar à vin de La Table du Liziec à Vannes : crus d'exception, sélection à la coupe et découvertes de vignerons, guidés par notre sommelier.",
};

/* ============================================================
   PAGE BAR À VIN — concept, sélection à la coupe, cave, planches
   ============================================================ */
export default function BarAVinPage() {
  const page = BAR_A_VIN_PAGE;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32 pt-32 md:pt-44">
        {/* En-tête */}
        <header className="mx-auto mb-16 max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <p className="mb-4 font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
            {page.kicker}
          </p>
          <h1 className="font-serif text-headline-lg text-primary">
            {page.title}
          </h1>
          <div className="mx-auto mt-8 h-0.5 w-20 bg-heritage-gold" />
          <p className="mt-8 font-sans text-body-lg leading-relaxed text-on-surface-variant">
            {page.intro}
          </p>
        </header>

        {/* Image d'ambiance */}
        <section className="mx-auto mb-24 max-w-content px-margin-mobile md:px-margin-desktop">
          <div className="overflow-hidden rounded-xl border border-heritage-gold/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.image}
              alt={page.imageAlt}
              className="h-[300px] w-full object-cover md:h-[460px]"
            />
          </div>
        </section>

        {/* Sélection à la coupe */}
        <section className="mx-auto mb-24 max-w-content px-margin-mobile md:px-margin-desktop">
          <h2 className="mb-12 text-center font-serif text-headline-md text-heritage-gold">
            {page.byGlassTitle}
          </h2>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {page.byGlass.map((item) => (
              <div key={item.name} className="relief-card-static rounded-xl p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-headline-sm text-primary">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-sans text-body-md text-heritage-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 font-sans text-body-sm leading-relaxed text-on-surface-variant">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Au fil de la cave */}
        <section className="mx-auto mb-24 max-w-content px-margin-mobile md:px-margin-desktop">
          <h2 className="mb-12 text-center font-serif text-headline-md text-heritage-gold">
            {page.categoriesTitle}
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-heritage-gold/10 border-y border-heritage-gold/10">
            {page.categories.map((cat) => (
              <div
                key={cat.name}
                className="grid grid-cols-1 gap-2 py-6 md:grid-cols-3 md:gap-6"
              >
                <h3 className="font-serif text-headline-sm text-white">
                  {cat.name}
                </h3>
                <p className="font-sans text-body-sm leading-relaxed text-on-surface-variant md:col-span-2">
                  {cat.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pour accompagner */}
        <section className="mx-auto mb-24 max-w-content px-margin-mobile md:px-margin-desktop">
          <h2 className="mb-12 text-center font-serif text-headline-md text-heritage-gold">
            {page.platesTitle}
          </h2>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {page.plates.map((item) => (
              <div key={item.name} className="relief-card-static rounded-xl p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-headline-sm text-primary">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-sans text-body-md text-heritage-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 font-sans text-body-sm leading-relaxed text-on-surface-variant">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center font-sans text-body-sm italic text-on-surface-variant/70">
            {page.note}
          </p>
        </section>

        {/* CTA : carte complète + réservation */}
        <section className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-margin-mobile text-center sm:flex-row md:px-margin-desktop">
          <PrimaryButton
            href={EXTERNAL_LINKS.carteVinsPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4"
          >
            La carte des vins (PDF)
          </PrimaryButton>
          <SecondaryButton
            variant="gold"
            href={RESERVATION_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4"
          >
            Réserver une table
          </SecondaryButton>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
