"use client";

import { Children, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Carousel horizontal piloté au scroll — MOBILE uniquement.
 *
 * La section se « fige » (sticky) et le défilement vertical (molette / doigt)
 * fait défiler les cartes horizontalement, l'une après l'autre, jusqu'à la
 * dernière. Ce n'est qu'une fois la dernière carte atteinte que le scroll
 * reprend vers la section suivante.
 *
 * À masquer sur desktop via `className="md:hidden"` (la grille classique prend
 * le relais). Doit être placé HORS de tout conteneur en `overflow-hidden`
 * (sinon le sticky ne s'accroche pas au viewport).
 */
export function MobileScrollCarousel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const items = Children.toArray(children);
  const n = Math.max(items.length, 1);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 0 → translation finale : (n-1) panneaux pleine largeur vers la gauche.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(n - 1) * 100}vw`],
  );

  return (
    <div
      ref={ref}
      // Hauteur = 1 écran de pin + ~0,9 écran de scroll par transition de carte.
      style={{ height: `${100 + (n - 1) * 90}vh` }}
      className={className}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex h-[100svh] w-screen shrink-0 items-center justify-center px-margin-mobile"
            >
              <div className="w-full max-w-sm">{item}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
