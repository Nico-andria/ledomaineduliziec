import { EXPERIENCE } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Watermark } from "@/components/ui/Watermark";
import { ArrowRightIcon } from "@/components/ui/Icon";

/* ============================================================
   2. EXPÉRIENCE — layout asymétrique (texte / image décalée)
   ============================================================ */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background py-32"
    >
      {/* Filigrane logo en débordement (cf. design Stitch) */}
      <Watermark className="-right-20 -top-20 h-[600px] w-[600px] rotate-12 opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
        {/* Texte */}
        <Reveal className="relative z-10 space-y-gutter md:col-span-6">
          <h2 className="font-serif text-headline-lg leading-tight text-heritage-gold">
            {EXPERIENCE.title}
          </h2>
          <p className="max-w-lg font-sans text-body-lg text-on-surface-variant">
            {EXPERIENCE.text}
          </p>
          <div className="pt-8">
            <a
              href="#chef"
              className="group inline-flex items-center space-x-4"
            >
              <span className="font-sans text-label-caps uppercase tracking-widest text-heritage-gold">
                {EXPERIENCE.link}
              </span>
              <ArrowRightIcon className="text-heritage-gold transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </Reveal>

        {/* Image décalée + cadre décoratif en débordement */}
        <Reveal className="relative mt-12 md:col-span-6 md:mt-0">
          <div className="relief-card relative z-20 overflow-hidden rounded-xl md:translate-x-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={EXPERIENCE.image}
              alt={EXPERIENCE.imageAlt}
              loading="lazy"
              className="h-[500px] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 z-0 h-64 w-64 border border-heritage-gold/20" />
        </Reveal>
      </div>
    </section>
  );
}
