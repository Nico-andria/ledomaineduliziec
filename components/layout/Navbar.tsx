"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, RESERVATION_HREF } from "@/lib/content";
import { MenuIcon, CloseIcon } from "@/components/ui/Icon";

/**
 * Navigation principale.
 * - Desktop : barre "tubelight" flottante (glassmorphism, pilule) avec scroll-spy.
 * - Mobile  : barre fine + menu plein écran (overlay immersif, cf. DESIGN.md).
 */
export function Navbar() {
  const [activeId, setActiveId] = useState<string>(NAV_LINKS[0].href.slice(1));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll-spy : met en surbrillance la section visible
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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
        className="glass-effect fixed left-1/2 top-6 z-[100] hidden -translate-x-1/2 items-center rounded-full px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:flex"
      >
        <div className="mr-2 border-r border-heritage-gold/20 px-4">
          <span className="font-serif text-sm uppercase tracking-widest text-heritage-gold">
            Liziec
          </span>
        </div>

        <ul className="flex items-center space-x-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const active = id === activeId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={`relative block rounded-full px-4 py-2 font-sans text-[10px] uppercase tracking-[0.15em] transition-all ${
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

        <div className="ml-4 border-l border-heritage-gold/20 pl-4">
          <a
            href={RESERVATION_HREF}
            className="block rounded-full bg-heritage-gold px-4 py-1.5 font-sans text-[10px] uppercase tracking-widest text-on-primary-container transition-all hover:brightness-110"
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
        <span className="font-serif text-sm uppercase tracking-widest text-heritage-gold">
          La Table du Liziec
        </span>
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
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl text-on-surface transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.07 }}
              >
                <a
                  href={RESERVATION_HREF}
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-block rounded-full bg-heritage-gold px-10 py-4 font-sans text-label-caps uppercase tracking-widest text-on-primary-container"
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
