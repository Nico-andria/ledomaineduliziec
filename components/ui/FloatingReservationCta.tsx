"use client";

import { useEffect, useState } from "react";
import { RESERVATION_HREF } from "@/lib/content";

/**
 * CTA flottant « Réservation » — visible uniquement en mobile.
 * Pilule fixée en bas à droite, fond or, au-dessus du contenu mais sous
 * l'overlay du menu mobile (z-[110]). Ouvre le moteur de réservation
 * GuestOnline dans un nouvel onglet.
 *
 * Sur la page d'accueil, il reste masqué tant que le hero (#hero) est visible
 * et n'apparaît qu'une fois passé, sur la section suivante. Sur les pages sans
 * hero, il s'affiche immédiatement.
 */
export function FloatingReservationCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    // Pas de hero (pages secondaires) : on affiche le CTA tout de suite.
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={RESERVATION_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver une table"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`button-raised fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-heritage-gold px-5 py-3.5 font-display text-label-caps font-bold uppercase tracking-widest text-on-primary-container shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:brightness-110 active:scale-95 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      Réservation
    </a>
  );
}
