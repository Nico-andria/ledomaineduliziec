"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, RESERVATION_HREF } from "@/lib/content";
import { MenuIcon, CloseIcon } from "@/components/ui/Icon";

/**
 * Navigation principale.
 * - Desktop : barre « tubelight » flottante (glassmorphism, pilule).
 * - Mobile  : barre fine + menu plein écran (overlay immersif).
 * Le logo de la marque remplace l'ancien intitulé texte.
 */

/** Logo de marque réutilisé (desktop + mobile). */
function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <a href="/" aria-label="Domaine du Liziec, accueil" className="shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-horizontal-texte-blanc.svg"
        alt="Domaine du Liziec"
        className={`w-auto ${className}`}
      />
    </a>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  /**
   * Détermine si un lien du menu est actif :
   * - « Accueil » (`/`) : actif uniquement sur la page d'accueil ;
   * - lien de page (`/la-carte`, `/le-chef`, `/contact`…) : actif si l'URL
   *   courante correspond à la route (ou à une sous-route).
   */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Empêche le scroll de l'arrière-plan quand l'overlay mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ---------- Desktop : tubelight nav ---------- */}
      <nav
        aria-label="Navigation principale"
        className="glass-effect fixed left-1/2 top-6 z-[100] hidden max-w-[95vw] -translate-x-1/2 items-center rounded-full px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:flex"
      >
        <div className="mr-3 border-r border-heritage-gold/20 px-4">
          <BrandLogo className="h-7" />
        </div>

        <ul className="flex items-center space-x-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={`relative block whitespace-nowrap rounded-full px-5 py-2 font-sans text-[10px] uppercase tracking-[0.15em] transition-all ${
                    active
                      ? "bg-heritage-gold/10 text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_#eebf7a]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-3 border-l border-heritage-gold/20 pl-3">
          <a
            href={RESERVATION_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="block whitespace-nowrap rounded-full bg-heritage-gold px-5 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-on-primary-container transition-all hover:brightness-110"
          >
            Réservations
          </a>
        </div>
      </nav>

      {/* ---------- Mobile : barre fine ---------- */}
      <nav
        aria-label="Navigation principale"
        className="glass-effect fixed top-0 z-[101] flex w-full items-center justify-between border-b border-heritage-gold/10 p-4 md:hidden"
      >
        <BrandLogo className="h-7" />
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Ouvrir le menu"
          className="text-heritage-gold"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* ---------- Mobile : overlay immersif plein écran ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-effect fixed inset-0 z-[110] flex flex-col items-center justify-center md:hidden"
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
              className="absolute right-5 top-5 text-heritage-gold"
            >
              <CloseIcon width={28} height={28} />
            </button>

            <ul className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={`font-serif text-3xl transition-colors hover:text-primary ${
                        active ? "text-primary" : "text-on-surface"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.07 }}
              >
                <a
                  href={RESERVATION_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-block rounded-full bg-heritage-gold px-10 py-4 font-display text-label-caps font-bold uppercase tracking-widest text-on-primary-container"
                >
                  Réservations
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
