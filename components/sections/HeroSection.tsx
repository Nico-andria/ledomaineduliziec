"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { HERO, RESERVATION_HREF } from "@/lib/content";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { StarIcon } from "@/components/ui/Icon";

/* ============================================================
   1. HERO — carrousel plein écran + titre animé en cascade
   ============================================================ */

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Carrousel auto (5 s par image)
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % HERO.slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden pt-20">
      {/* Carrousel de fond (cross-fade) */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {HERO.slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{
              backgroundImage: `url("${src}")`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Formes flottantes (profondeur) */}
      <div className="pointer-events-none absolute left-[-2.5rem] top-1/4 z-[15] h-40 w-40 rotate-45 animate-pulse border border-heritage-gold/20 blur-[2px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[-2.5rem] z-[15] h-60 w-60 -rotate-12 border border-heritage-gold/10 blur-[2px]" />

      {/* Contenu */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-margin-mobile text-center"
      >
        <motion.div variants={item} className="mb-6 flex items-center space-x-2">
          <StarIcon className="michelin-star" width={28} height={28} />
          <span className="font-sans text-lg uppercase tracking-[0.2em] text-heritage-gold">
            {HERO.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-10 font-serif text-headline-display leading-tight text-white drop-shadow-2xl"
        >
          {HERO.titleLine1} <br />
          <span className="text-gold-gradient font-light italic">
            {HERO.titleAccent}
          </span>{" "}
          {HERO.titleLine2}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col gap-6 md:flex-row md:gap-8"
        >
          <PrimaryButton href={RESERVATION_HREF}>{HERO.ctaPrimary}</PrimaryButton>
          <SecondaryButton href="#menus">{HERO.ctaSecondary}</SecondaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
