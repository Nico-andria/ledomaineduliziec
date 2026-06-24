"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, REVIEWS, type Testimonial } from "@/lib/content";
import { StarIcon, ArrowRightIcon } from "@/components/ui/Icon";
import { MobileScrollCarousel } from "@/components/ui/MobileScrollCarousel";

/* ============================================================
   6. TÉMOIGNAGES — fond doré, cartes sombres (couleurs inversées).
      Desktop : cartes en quinconce. Mobile : carousel au scroll.
   ============================================================ */

// Rotations / décalages par carte pour l'effet "posé à la main" (desktop only)
const layout = [
  "md:rotate-[-3deg] md:translate-y-10",
  "md:rotate-2 md:-translate-y-5",
  "md:rotate-[-2deg] md:translate-y-16",
];

/** Contenu d'une carte témoignage (réutilisé desktop + mobile). */
function TestimonialBody({ t }: { t: Testimonial }) {
  return (
    <>
      <div className="space-y-5">
        <div
          className="flex gap-1.5 text-heritage-gold [&_svg]:h-6 [&_svg]:w-6 md:[&_svg]:h-5 md:[&_svg]:w-5"
          aria-label={`Note : ${t.rating} sur 5`}
        >
          {Array.from({ length: t.rating }).map((_, s) => (
            <StarIcon key={s} width={20} height={20} aria-hidden />
          ))}
        </div>
        <blockquote className="font-sans text-[1.3rem] italic leading-relaxed text-on-surface md:text-body-md">
          {t.quote}
        </blockquote>
      </div>
      <figcaption className="border-t border-heritage-gold/20 pt-6">
        <span className="font-sans text-label-caps uppercase tracking-widest text-heritage-gold">
          {t.author}
        </span>
      </figcaption>
    </>
  );
}

export function ReviewsSection() {
  return (
    <section className="overflow-visible bg-gradient-to-b from-heritage-gold via-heritage-gold to-burnished-copper py-12 md:overflow-hidden md:py-32">
      <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center md:mb-24"
        >
          <h2 className="font-serif text-headline-lg text-deep-charcoal">
            {REVIEWS.title}
          </h2>
          <p className="mt-4 font-sans text-label-caps uppercase tracking-[0.4em] text-deep-charcoal/70">
            {REVIEWS.kicker}
          </p>
        </motion.div>

        {/* Desktop : grille en quinconce */}
        <div className="hidden pb-16 md:grid md:grid-cols-3 md:gap-gutter">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 100, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className={`relief-card flex flex-col justify-between space-y-6 rounded-xl p-10 ${layout[i] ?? ""}`}
            >
              <TestimonialBody t={t} />
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Mobile : carousel piloté au scroll. La carte remplit la hauteur du
          panneau (contenu réparti haut/bas) pour supprimer le vide doré autour. */}
      <MobileScrollCarousel className="md:hidden">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.author}
            className="relief-card flex min-h-[78svh] flex-col justify-center gap-8 rounded-xl p-8"
          >
            <TestimonialBody t={t} />
          </figure>
        ))}
      </MobileScrollCarousel>

      <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        {/* CTA vers la plateforme d'avis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex justify-center sm:mt-12"
        >
          <a
            href={REVIEWS.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button-raised group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-deep-charcoal px-6 py-3.5 font-sans text-label-caps uppercase tracking-[0.08em] text-primary transition-all hover:brightness-125 sm:gap-3 sm:px-10 sm:py-4 sm:tracking-widest"
          >
            {REVIEWS.cta}
            <ArrowRightIcon
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
