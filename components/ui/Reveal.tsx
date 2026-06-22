"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wrapper d'animation "scroll reveal" (remplace les ScrollTrigger GSAP de Stitch).
 * Fade + translate + léger scale au passage dans le viewport, joué une seule fois.
 * Respecte automatiquement `prefers-reduced-motion` via Framer Motion.
 */

const variants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Délai d'apparition (s) — utile pour décaler des cartes en cascade */
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
