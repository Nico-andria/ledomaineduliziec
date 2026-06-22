"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import { StarIcon } from "@/components/ui/Icon";

/* ============================================================
   6. TÉMOIGNAGES — cartes inclinées en quinconce (staggered)
   ============================================================ */

// Rotations / décalages par carte pour l'effet "posé à la main"
const layout = [
  "md:rotate-[-3deg] md:translate-y-10",
  "md:rotate-2 md:-translate-y-5",
  "md:rotate-[-2deg] md:translate-y-16",
];

export function ReviewsSection() {
  return (
    <section className="overflow-hidden bg-background py-32">
      <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-serif text-headline-lg text-heritage-gold">
            Témoignages
          </h2>
          <p className="mt-4 font-sans text-label-caps uppercase tracking-[0.4em] text-on-surface-variant">
            L&apos;Émotion Partagée
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-3 md:gap-gutter">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 100, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className={`relief-card flex flex-col justify-between space-y-6 rounded-xl p-10 ${layout[i] ?? ""}`}
            >
              <div className="space-y-4">
                <div
                  className="flex gap-1 text-heritage-gold"
                  aria-label={`Note : ${t.rating} sur 5`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon key={s} width={20} height={20} aria-hidden />
                  ))}
                </div>
                <blockquote className="font-sans text-body-md italic leading-relaxed text-on-surface">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="border-t border-heritage-gold/20 pt-6">
                <span className="font-sans text-label-caps uppercase tracking-widest text-heritage-gold">
                  — {t.author}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
