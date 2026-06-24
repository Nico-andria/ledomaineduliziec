import { FINAL_CTA, RESERVATION_HREF } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/Button";

/* ============================================================
   7. APPEL À L'ACTION FINAL — image de fond + réservation
   ============================================================ */
export function FinalCtaSection() {
  return (
    <section
      id="reserver"
      className="relative flex min-h-[70vh] items-center overflow-hidden"
    >
      {/* Image de fond + voile de lisibilité */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FINAL_CTA.image}
          alt={FINAL_CTA.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/70 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-margin-mobile text-center md:px-margin-desktop">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center space-y-8">
          <span className="font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
            {FINAL_CTA.kicker}
          </span>
          <h2 className="font-serif text-headline-display leading-tight text-white drop-shadow-2xl">
            {FINAL_CTA.title}
          </h2>
          <p className="max-w-md font-sans text-body-lg text-on-surface-variant">
            {FINAL_CTA.text}
          </p>
          <div className="pt-2">
            <PrimaryButton
              href={RESERVATION_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FINAL_CTA.cta}
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
