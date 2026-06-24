import { CHEF, ROUTES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SecondaryButton } from "@/components/ui/Button";

/* ============================================================
   3. CHEF
   - Mobile : photo en haut, bloc texte en dessous (meilleure lisibilité).
   - Desktop : image plein cadre + carte texte alignée à droite.
   ============================================================ */

/** Contenu texte réutilisé (mobile + desktop). */
function ChefText() {
  return (
    <>
      <div className="space-y-4">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-heritage-gold sm:tracking-[0.4em]">
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

      <div className="pt-2">
        <SecondaryButton variant="gold" href={ROUTES.chef}>
          {CHEF.cta}
        </SecondaryButton>
      </div>
    </>
  );
}

export function ChefSection() {
  return (
    <section
      id="chef"
      className="relative overflow-hidden bg-surface-container-lowest md:min-h-screen"
    >
      {/* ---------- MOBILE : photo en haut, texte en dessous ---------- */}
      <div className="md:hidden">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CHEF.image}
            alt={CHEF.imageAlt}
            className="aspect-[4/5] w-full object-cover object-[12%_center]"
          />
          {/* Fondu vers le bloc texte */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-container-lowest to-transparent" />
        </div>
        <Reveal className="space-y-8 px-margin-mobile pb-12 pt-2">
          <ChefText />
        </Reveal>
      </div>

      {/* ---------- DESKTOP : image plein cadre + carte texte à droite ---------- */}
      <div className="hidden md:block">
        {/* Image de fond + dégradés de lisibilité */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CHEF.image}
            alt={CHEF.imageAlt}
            className="h-full w-full object-cover object-center"
          />
          {/* Fond opaque dégradé UNIQUEMENT derrière le texte (à droite).
              La photo du chef reste nette et bien visible à gauche. */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_42%,rgba(19,19,19,0.88)_57%,#131313_80%)]" />
        </div>

        {/* Carte texte */}
        <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-12 gap-gutter px-margin-desktop">
          <Reveal className="col-span-5 col-start-8 flex flex-col justify-center space-y-10 py-20">
            <ChefText />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
