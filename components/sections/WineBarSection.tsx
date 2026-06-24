"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WINE, ROUTES } from "@/lib/content";
import { PrimaryButton } from "@/components/ui/Button";

/* ============================================================
   5. BAR À VIN — image de fond en parallax (Framer useScroll)
   ============================================================ */
export function WineBarSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Déplace le fond de -15% à +15% pendant le défilement
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="wine"
      ref={sectionRef}
      className="relative flex h-[70vh] items-center overflow-hidden"
    >
      {/* Fond parallax (surdimensionné pour ne jamais laisser de bord vide) */}
      <motion.div
        aria-hidden
        style={{
          y,
          backgroundImage: `url("${WINE.image}")`,
        }}
        className="absolute inset-x-0 -top-[20%] z-0 h-[140%] bg-cover bg-center will-change-transform"
      />
      <div className="absolute inset-0 z-[1] bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-content px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-effect space-y-6 rounded-xl p-6 sm:p-10 md:w-1/2 md:p-16"
        >
          <span className="font-sans text-label-caps uppercase tracking-[0.2em] text-heritage-gold">
            {WINE.kicker}
          </span>
          <h2 className="font-serif text-headline-lg text-white">{WINE.title}</h2>
          <p className="font-sans text-body-lg text-on-surface-variant">
            {WINE.text}
          </p>
          <div className="pt-4">
            <PrimaryButton href={ROUTES.barAVin}>
              {WINE.cta}
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
