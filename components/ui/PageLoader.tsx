"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Écran de chargement affiché à l'ouverture de chaque page.
 *
 * - Fond noir (background) + logo de marque centré qui « respire ».
 * - Visible au premier rendu, puis réapparaît brièvement à chaque changement
 *   de route (navigation interne), avant de se fondre.
 *
 * Monté une seule fois dans le layout racine : il persiste entre les pages.
 */
export function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/images/logo-white.svg"
            alt="Domaine du Liziec"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: [0.96, 1, 0.96] }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-44 md:w-56"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
