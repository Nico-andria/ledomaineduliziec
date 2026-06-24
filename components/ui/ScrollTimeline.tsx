"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineStep {
  year: string;
  place: string;
  mentor: string;
  detail: string;
}

/**
 * Frise chronologique HORIZONTALE pilotée au scroll — MOBILE uniquement.
 *
 * La section se « fige » (sticky) et le défilement vertical (molette / doigt)
 * fait avancer la frise horizontalement, une étape après l'autre, le long d'une
 * ligne or continue. Ce n'est qu'une fois la dernière étape atteinte que le
 * scroll reprend vers la section suivante.
 *
 * À masquer sur desktop via `className="md:hidden"` (la frise verticale prend
 * le relais). Doit être placé HORS de tout conteneur en `overflow-hidden`
 * (sinon le sticky ne s'accroche pas au viewport).
 */
export function ScrollTimeline({
  steps,
  className = "",
}: {
  steps: readonly TimelineStep[];
  className?: string;
}) {
  const n = Math.max(steps.length, 1);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 0 → translation finale : (n-1) panneaux pleine largeur vers la gauche.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(n - 1) * 100}vw`]);

  return (
    <div
      ref={ref}
      // Hauteur = 1 écran de pin + ~0,9 écran de scroll par transition d'étape.
      style={{ height: `${100 + (n - 1) * 90}vh` }}
      className={className}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        {/* Indicateur de progression */}
        <ProgressBar progress={scrollYProgress} />

        <motion.div style={{ x }} className="flex">
          {steps.map((step) => (
            <div
              key={step.place}
              className="relative w-screen shrink-0 px-margin-mobile"
            >
              {/* Ligne or continue (chaque panneau pleine largeur → ligne ininterrompue) */}
              <div className="absolute left-0 top-0 h-px w-full bg-heritage-gold/25" />
              {/* Point posé sur la ligne, aligné sur le contenu */}
              <span className="absolute left-margin-mobile top-0 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-heritage-gold bg-background" />

              <div className="max-w-sm pt-8">
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
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/** Barre de progression horizontale qui se remplit au fil du scroll. */
function ProgressBar({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="mx-margin-mobile mb-10 h-px bg-heritage-gold/15">
      <motion.div style={{ width }} className="h-full bg-heritage-gold" />
    </div>
  );
}
