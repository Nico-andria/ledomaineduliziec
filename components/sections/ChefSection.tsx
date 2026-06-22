import { CHEF } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SecondaryButton } from "@/components/ui/Button";

/* ============================================================
   3. CHEF — image plein cadre + carte texte alignée à droite
   ============================================================ */
export function ChefSection() {
  return (
    <section
      id="chef"
      className="relative min-h-screen overflow-hidden bg-surface-container-lowest"
    >
      {/* Image de fond + dégradés de lisibilité */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={CHEF.image}
          alt={CHEF.imageAlt}
          className="h-full w-full object-cover grayscale-[20%] transition-all duration-1000 hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/80 md:bg-gradient-to-l md:from-surface-container-lowest md:via-transparent md:to-transparent" />
      </div>

      {/* Carte texte */}
      <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
        <Reveal className="flex flex-col justify-center space-y-10 py-20 md:col-span-5 md:col-start-8">
          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-heritage-gold">
              {CHEF.kicker}
            </span>
            <h2 className="font-serif text-headline-lg leading-tight text-white">
              {CHEF.name}
            </h2>
            <div className="h-0.5 w-20 bg-heritage-gold" />
          </div>

          <div className="space-y-6">
            <blockquote className="font-sans text-body-lg italic leading-relaxed text-on-surface">
              {CHEF.quote}
            </blockquote>
            <p className="font-sans text-body-md leading-relaxed text-on-surface-variant">
              {CHEF.bio}
            </p>
          </div>

          <div className="pt-6">
            <SecondaryButton variant="gold" href="#menus" className="px-10 py-4">
              {CHEF.cta}
            </SecondaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
