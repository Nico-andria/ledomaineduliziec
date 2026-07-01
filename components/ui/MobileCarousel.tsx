"use client";

import { Children, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/Icon";

/**
 * Carousel horizontal à contrôles manuels — MOBILE uniquement.
 *
 * Une carte visible à la fois ; le client fait défiler via les flèches
 * précédent/suivant ou en tapant sur les points indicateurs. Remplace
 * l'ancien défilement piloté au scroll (cf. MobileScrollCarousel).
 *
 * À masquer sur desktop via `className="md:hidden"` (la grille prend le relais).
 *
 * `tone` ajuste la couleur des contrôles selon le fond de la section :
 *   - "dark"  → contrôles sombres (fond clair / doré).
 *   - "light" → contrôles clairs (fond sombre).
 */
export function MobileCarousel({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const items = Children.toArray(children);
  const n = Math.max(items.length, 1);
  const [index, setIndex] = useState(0);

  const go = (i: number) => setIndex(((i % n) + n) % n);

  const accent = tone === "dark" ? "text-deep-charcoal" : "text-primary";
  const button =
    tone === "dark"
      ? "border-deep-charcoal/30 hover:bg-deep-charcoal/10"
      : "border-primary/30 hover:bg-primary/10";
  const dotOn = tone === "dark" ? "bg-deep-charcoal" : "bg-primary";
  const dotOff = tone === "dark" ? "bg-deep-charcoal/25" : "bg-primary/25";

  return (
    <div className={className}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              // Padding par slide = marge sur les bords + espace entre les cartes.
              className="w-full shrink-0 px-margin-mobile"
              // `inert` sort les cartes hors-écran de l'ordre de tabulation et
              // de l'arbre d'accessibilité (React 18 : attribut non typé → cast).
              {...(i !== index ? ({ inert: "" } as Record<string, string>) : {})}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles : flèches + points indicateurs */}
      <div
        className={`mt-8 flex items-center justify-center gap-6 ${accent}`}
      >
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Carte précédente"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${button}`}
        >
          <ArrowRightIcon width={20} height={20} className="rotate-180" />
        </button>

        <div className="flex items-center gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Aller à la carte ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? `w-6 ${dotOn}` : `w-2.5 ${dotOff}`
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Carte suivante"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${button}`}
        >
          <ArrowRightIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
