import type { MenuItem } from "@/lib/content";

/**
 * Carte de menu (Dégustation, Déjeuner, Cave...).
 * Surface vitrée + relief, image avec zoom au survol, prix et CTA.
 */
export function MenuCard({ menu }: { menu: MenuItem }) {
  return (
    <article
      className={`glass-effect relief-card group flex h-full flex-col rounded-xl ${
        menu.offset ? "md:-translate-y-8" : ""
      }`}
    >
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={menu.image}
          alt={menu.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Voile assombri qui se renforce au survol pour faire ressortir le logo */}
        <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        {/* Logo doré révélé au survol (rappel de l'overlay du site officiel) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-watermark.svg"
            alt=""
            aria-hidden
            className="h-24 w-24 scale-90 opacity-0 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        </div>
      </div>

      <div className="flex flex-grow flex-col p-8 text-center">
        <h3 className="mb-2 font-serif text-headline-sm text-primary">
          {menu.title}
        </h3>
        <p className="mb-6 font-sans text-body-sm text-on-surface">
          {menu.description}
        </p>
        <div className="mt-auto flex flex-col items-center pt-4">
          <span className="mb-4 font-serif text-headline-sm text-primary">
            {menu.price}
          </span>
          <button
            type="button"
            className="rounded-full bg-heritage-gold px-8 py-2 font-sans text-[10px] uppercase tracking-widest text-on-primary transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {menu.cta}
          </button>
        </div>
      </div>
    </article>
  );
}
