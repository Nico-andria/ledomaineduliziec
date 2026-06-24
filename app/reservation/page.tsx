import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ReservationForm } from "@/components/ReservationForm";
import { InfoIconByKey } from "@/components/ui/Icon";
import { RESERVATION_PAGE, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réserver une table · La Table du Liziec",
  description:
    "Réservez votre table à La Table du Liziec, restaurant gastronomique 1 étoile Michelin à Vannes. Privatisation possible pour 6 à 30 convives.",
};

/* ============================================================
   PAGE RÉSERVATION — formulaire, coordonnées et privatisation
   ============================================================ */
export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32 pt-32 md:pt-44">
        <header className="mx-auto mb-12 max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <p className="mb-4 font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
            {RESERVATION_PAGE.kicker}
          </p>
          <h1 className="font-serif text-headline-lg text-primary">
            {RESERVATION_PAGE.title}
          </h1>
          <div className="mx-auto mt-8 h-0.5 w-20 bg-heritage-gold" />
          <p className="mt-8 font-sans text-body-md leading-relaxed text-on-surface-variant">
            {RESERVATION_PAGE.intro}
          </p>
        </header>

        {/* Formulaire + coordonnées */}
        <section className="mx-auto grid max-w-content grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-3 md:px-margin-desktop">
          <div className="md:col-span-2">
            <ReservationForm />
          </div>

          <aside className="space-y-6">
            <div className="relief-card-static rounded-xl p-8">
              <span className="mb-4 inline-flex text-heritage-gold">
                <InfoIconByKey name="phone" width={28} height={28} />
              </span>
              <h2 className="font-sans text-label-caps uppercase tracking-widest text-white">
                Par téléphone
              </h2>
              <a
                href={CONTACT.phoneHref}
                className="mt-2 block font-serif text-headline-sm text-primary hover:underline"
              >
                {CONTACT.phone}
              </a>
            </div>

            <div className="relief-card-static rounded-xl p-8">
              <span className="mb-4 inline-flex text-heritage-gold">
                <InfoIconByKey name="map" width={28} height={28} />
              </span>
              <h2 className="font-sans text-label-caps uppercase tracking-widest text-white">
                Adresse
              </h2>
              <p className="mt-2 font-sans text-body-sm text-on-surface-variant">
                {CONTACT.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="relief-card-static rounded-xl p-8">
              <span className="mb-4 inline-flex text-heritage-gold">
                <InfoIconByKey name="mail" width={28} height={28} />
              </span>
              <h2 className="font-sans text-label-caps uppercase tracking-widest text-white">
                Email
              </h2>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 block break-all font-sans text-body-sm text-on-surface-variant hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </div>
          </aside>
        </section>

        {/* Privatisation (ancre #privatisation) */}
        <section
          id="privatisation"
          className="mx-auto mt-24 max-w-3xl scroll-mt-32 px-margin-mobile text-center md:px-margin-desktop"
        >
          <h2 className="font-serif text-headline-md text-heritage-gold">
            {RESERVATION_PAGE.privatisation.title}
          </h2>
          <p className="mt-6 font-sans text-body-md leading-relaxed text-on-surface-variant">
            {RESERVATION_PAGE.privatisation.text}
          </p>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
