import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { MobileScrollCarousel } from "@/components/ui/MobileScrollCarousel";
import { ScrollTimeline } from "@/components/ui/ScrollTimeline";
import { CHEF, CHEF_PAGE, RESERVATION_HREF } from "@/lib/content";

/** Carte « produit signature » (réutilisée grille desktop + carousel mobile). */
function SignatureCard({
  index,
  name,
  detail,
}: {
  index: number;
  name: string;
  detail: string;
}) {
  return (
    <div className="relief-card flex h-full min-h-[16rem] flex-col items-center justify-center rounded-xl p-8 text-center">
      <span className="mx-auto mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-heritage-gold/40 font-serif text-heritage-gold">
        {index + 1}
      </span>
      <h3 className="font-serif text-headline-sm text-white">{name}</h3>
      <p className="mt-3 font-sans text-body-md leading-relaxed text-on-surface-variant">
        {detail}
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Le Chef Olivier Samson · La Table du Liziec",
  description:
    "Découvrez le parcours du Chef Olivier Samson, étoilé Michelin, à la tête de La Table du Liziec à Vannes : ses mentors, sa cuisine et ses distinctions.",
};

/* ============================================================
   PAGE LE CHEF — portrait immersif, citation, frise du parcours,
   philosophie, produits signatures et distinctions
   ============================================================ */
export default function LeChefPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32">
        {/* ───────────────────── HERO PORTRAIT plein cadre ───────────────────── */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CHEF_PAGE.image}
            alt={CHEF_PAGE.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-[10%_center] md:object-center"
          />
          {/* Voiles de lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-content px-margin-mobile pb-20 md:px-margin-desktop md:pb-28">
            <Reveal className="max-w-2xl space-y-6">
              <p className="font-sans text-label-caps uppercase tracking-[0.4em] text-heritage-gold">
                {CHEF_PAGE.kicker}
              </p>
              <h1 className="font-serif text-headline-display leading-tight text-white">
                {CHEF_PAGE.title}
              </h1>
              <div className="h-0.5 w-24 bg-heritage-gold" />
              <blockquote className="font-serif text-headline-sm italic leading-relaxed text-on-surface md:text-headline-md">
                « {CHEF.quote} »
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ───────────────────── ACCROCHE / VOCATION ───────────────────── */}
        <section className="mx-auto max-w-3xl px-margin-mobile pt-24 text-center md:px-margin-desktop md:pt-32">
          <Reveal>
            <p className="font-serif text-headline-sm italic leading-relaxed text-on-surface md:text-headline-md">
              {CHEF_PAGE.lead}
            </p>
          </Reveal>
        </section>

        {/* ───────────────────── PARCOURS : photo cuisine + frise ───────────────────── */}
        <section className="mt-24 md:mt-32">
          <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
              {/* Photo en cuisine — sticky sur desktop */}
              <Reveal className="md:col-span-5">
                <div className="relief-card-static overflow-hidden rounded-xl md:sticky md:top-28">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CHEF_PAGE.imageKitchen}
                    alt={CHEF_PAGE.imageKitchenAlt}
                    className="h-[420px] w-full object-cover md:h-[640px]"
                  />
                </div>
              </Reveal>

              {/* Intitulé + frise chronologique des mentors et maisons */}
              <div className="md:col-span-7 md:pl-8">
                <Reveal>
                  <p className="font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
                    Le parcours
                  </p>
                  <h2 className="mt-3 font-serif text-headline-md text-primary">
                    Aux côtés des plus grands
                  </h2>
                </Reveal>

                {/* Frise verticale — desktop uniquement */}
                <ol className="mt-12 hidden space-y-0 md:block">
                  {CHEF_PAGE.timeline.map((step, i) => (
                    <Reveal key={step.place} delay={0.04 * i}>
                      <li className="relative border-l border-heritage-gold/25 pb-10 pl-8 last:pb-0">
                        {/* Point sur la ligne */}
                        <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-heritage-gold bg-background" />
                        <p className="font-sans text-label-caps uppercase tracking-[0.2em] text-heritage-gold">
                          {step.year}
                        </p>
                        <h3 className="mt-2 font-serif text-headline-sm text-white">
                          {step.place}
                        </h3>
                        <p className="mt-1 font-sans text-body-sm uppercase tracking-wide text-on-surface-variant">
                          {step.mentor}
                        </p>
                        <p className="mt-3 font-sans text-body-md leading-relaxed text-on-surface-variant">
                          {step.detail}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Frise horizontale pilotée au scroll — mobile uniquement */}
          <ScrollTimeline steps={CHEF_PAGE.timeline} className="mt-8 md:hidden" />
        </section>

        {/* ───────────────────── PHILOSOPHIE ───────────────────── */}
        <section className="mx-auto mt-28 max-w-3xl px-margin-mobile md:mt-36 md:px-margin-desktop">
          <Reveal>
            <p className="font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
              Sa cuisine
            </p>
            <h2 className="mt-3 font-serif text-headline-md text-primary">
              {CHEF_PAGE.philosophyTitle}
            </h2>
            <div className="mt-6 h-0.5 w-20 bg-heritage-gold" />
          </Reveal>
          <div className="mt-8 space-y-6">
            {CHEF_PAGE.philosophy.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="font-sans text-body-lg leading-relaxed text-on-surface-variant">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────────────────── PRODUITS SIGNATURES ───────────────────── */}
        <section className="mt-24">
          <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
            <Reveal>
              <h2 className="mb-10 text-center font-serif text-headline-md text-primary">
                {CHEF_PAGE.signaturesTitle}
              </h2>
            </Reveal>

            {/* Desktop : grille classique */}
            <div className="hidden gap-gutter md:grid md:grid-cols-3">
              {CHEF_PAGE.signatures.map((s, i) => (
                <Reveal key={s.name} delay={0.08 * i}>
                  <SignatureCard index={i} name={s.name} detail={s.detail} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile : carousel piloté au scroll */}
          <MobileScrollCarousel className="md:hidden">
            {CHEF_PAGE.signatures.map((s, i) => (
              <SignatureCard key={s.name} index={i} name={s.name} detail={s.detail} />
            ))}
          </MobileScrollCarousel>
        </section>

        {/* ───────────────────── DISTINCTIONS ───────────────────── */}
        <section className="mx-auto mt-28 max-w-3xl px-margin-mobile md:mt-36 md:px-margin-desktop">
          <Reveal>
            <h2 className="mb-8 font-serif text-headline-md text-heritage-gold">
              Distinctions
            </h2>
          </Reveal>
          <ul className="space-y-4">
            {CHEF_PAGE.distinctions.map((d, i) => (
              <Reveal key={d} delay={0.05 * i}>
                <li className="flex items-start gap-4 border-b border-heritage-gold/15 pb-4 font-sans text-body-md text-on-surface">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-gold" />
                  {d}
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16 text-center">
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
