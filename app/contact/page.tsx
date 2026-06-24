import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ContactForm } from "@/components/ContactForm";
import { InfoIconByKey } from "@/components/ui/Icon";
import { CONTACT_PAGE, RESERVATION_HREF } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact · La Table du Liziec",
  description:
    "Contactez La Table du Liziec, restaurant gastronomique 1 étoile Michelin au Domaine du Liziec à Vannes. Téléphone, email, adresse et formulaire de contact.",
};

/* ============================================================
   PAGE CONTACT — formulaire, coordonnées et plan d'accès
   ============================================================ */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32 pt-32 md:pt-44">
        <header className="mx-auto mb-12 max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <p className="mb-4 font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
            {CONTACT_PAGE.kicker}
          </p>
          <h1 className="font-serif text-headline-lg text-primary">
            {CONTACT_PAGE.title}
          </h1>
          <div className="mx-auto mt-8 h-0.5 w-20 bg-heritage-gold" />
          <p className="mt-8 font-sans text-body-md leading-relaxed text-on-surface-variant">
            {CONTACT_PAGE.intro}
          </p>
        </header>

        {/* Formulaire + coordonnées */}
        <section className="mx-auto grid max-w-content grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-3 md:px-margin-desktop">
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            {CONTACT_PAGE.cards.map((card) => (
              <div key={card.title} className="relief-card-static rounded-xl p-8">
                <span className="mb-4 inline-flex text-heritage-gold">
                  <InfoIconByKey name={card.icon} width={28} height={28} />
                </span>
                <h2 className="font-sans text-label-caps uppercase tracking-widest text-white">
                  {card.title}
                </h2>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block break-words font-serif text-headline-sm text-primary hover:underline"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 font-sans text-body-sm text-on-surface-variant">
                    {card.lines?.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </aside>
        </section>

        {/* Plan d'accès */}
        <section className="mx-auto mt-24 max-w-content px-margin-mobile md:px-margin-desktop">
          <h2 className="mb-8 text-center font-serif text-headline-md text-heritage-gold">
            Nous trouver
          </h2>
          <div className="overflow-hidden rounded-xl border border-heritage-gold/10">
            <iframe
              title="Plan d'accès : La Table du Liziec, 40 Route de Rennes, 56000 Vannes"
              src={CONTACT_PAGE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full grayscale-[0.3]"
            />
          </div>
        </section>

        {/* Rappel réservation */}
        <section className="mx-auto mt-24 max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-serif text-headline-md text-primary">
            Vous souhaitez réserver une table ?
          </h2>
          <p className="mt-6 font-sans text-body-md leading-relaxed text-on-surface-variant">
            Pour toute réservation, réservez en ligne en quelques clics via notre
            moteur de réservation.
          </p>
          <a
            href={RESERVATION_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="button-raised mt-8 inline-block bg-heritage-gold px-12 py-5 font-sans text-label-caps uppercase tracking-widest text-on-primary-container transition-all hover:brightness-110"
          >
            Réserver une table
          </a>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
