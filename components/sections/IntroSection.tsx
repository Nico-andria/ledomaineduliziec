import { INTRO, RESERVATION_HREF } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Watermark } from "@/components/ui/Watermark";
import { PrimaryButton } from "@/components/ui/Button";
import { StarIcon } from "@/components/ui/Icon";

/* ============================================================
   1 bis. INTRO — présentation de la maison
   Distinctions · titre or en capitales (2 lignes) · accroche ·
   1 CTA principal · héron doré en relief débordant.
   ============================================================ */

/** Distinction Michelin rendue en inline (pas de fichier logo officiel disponible). */
function MichelinBadge() {
  return (
    <span className="flex shrink-0 items-center gap-1.5 sm:gap-2">
      <StarIcon className="michelin-star h-6 w-6 sm:h-7 sm:w-7" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.18em]">
          Michelin
        </span>
        <span className="mt-0.5 font-sans text-[9px] uppercase tracking-[0.14em] text-on-surface-variant sm:text-[10px] sm:tracking-[0.18em]">
          1 étoile · 2026
        </span>
      </span>
    </span>
  );
}

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative z-20 bg-background py-12 md:py-24"
    >
      {/* Halo doré ambiant (profondeur) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[360px] w-[360px] rounded-full bg-heritage-gold/10 blur-[110px]"
      />

      {/* Héron doré en relief : déborde en bas à droite vers la section suivante */}
      <Watermark className="-right-16 -bottom-24 hidden h-[520px] w-[520px] opacity-90 [filter:drop-shadow(0_18px_28px_rgba(0,0,0,0.55))_drop-shadow(0_0_36px_rgba(184,142,78,0.22))] md:block" />
      {/* Rappel discret en fond sur mobile */}
      <Watermark className="-right-12 bottom-2 h-[240px] w-[240px] opacity-[0.07] md:hidden" />

      <div className="relative z-10 mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            {/* Distinctions, en couleur */}
            <div className="mb-8 flex flex-nowrap items-center gap-x-3 gap-y-4 sm:flex-wrap sm:gap-x-6">
              <MichelinBadge />
              {INTRO.awards.map((award) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={award.name}
                  src={award.image}
                  alt={award.name}
                  loading="lazy"
                  className={`${award.cls} w-auto shrink-0`}
                />
              ))}
            </div>

            {/* Titre or en capitales (2 lignes max) */}
            <h2 className="text-gold-gradient max-w-2xl font-serif text-headline-md uppercase leading-[1.15] md:text-headline-lg">
              {INTRO.title}
            </h2>

            {/* Accroche courte */}
            <p className="mt-6 max-w-xl font-sans text-body-lg leading-relaxed text-on-surface-variant">
              {INTRO.text}
            </p>

            {/* CTA principal unique */}
            <div className="mt-10">
              <PrimaryButton
                href={RESERVATION_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver une table
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
