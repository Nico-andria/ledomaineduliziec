"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
}

/** Sensibilité de la molette : delta cumulé avant de changer d'image. */
const WHEEL_THRESHOLD = 30;
/** Délai minimal entre deux transitions déclenchées à la molette (ms). */
const WHEEL_COOLDOWN_MS = 450;

/* ============================================================
   GALERIE DE PLATS
   · Mobile  → carousel « coverflow » 3D piloté au swipe gauche/droite
     (adapté de feature-carousel · ravikatiyar / 21st.dev, sans boutons)
   · Desktop → galerie masonry à colonnes, apparition au scroll
     (adapté de image-gallery · efferd / 21st.dev)
   ============================================================ */
export function CarteGallery({ photos }: { photos: readonly Photo[] }) {
  return (
    <>
      <FeatureCarousel photos={photos} className="md:hidden" />

      {/* Desktop : galerie masonry, apparition au défilement */}
      <div className="mx-auto hidden max-w-content px-margin-desktop md:block">
        <MasonryGallery photos={photos} />
      </div>
    </>
  );
}

/* ----------------------- MOBILE : coverflow 3D au swipe ----------------------- */
function FeatureCarousel({
  photos,
  className = "",
}: {
  photos: readonly Photo[];
  className?: string;
}) {
  const total = photos.length;
  const [currentIndex, setCurrentIndex] = useState(Math.floor(total / 2));
  const startX = useRef<number | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const cooldown = useRef(false);
  // Miroir de l'index pour lire la valeur courante dans le listener natif
  // sans réabonner la molette à chaque transition.
  const indexRef = useRef(currentIndex);
  indexRef.current = currentIndex;

  const next = () => setCurrentIndex((p) => (p + 1) % total);
  const prev = () => setCurrentIndex((p) => (p - 1 + total) % total);

  // Défilement à la molette : on confisque le scroll de page pour faire
  // tourner le carousel, et on ne le relâche qu'aux extrémités (première /
  // dernière image). Listener natif en { passive: false } pour pouvoir
  // appeler preventDefault().
  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;

    let accum = 0;

    const onWheel = (e: WheelEvent) => {
      const idx = indexRef.current;
      const down = e.deltaY > 0;
      const atStart = idx === 0;
      const atEnd = idx === total - 1;

      // À l'extrémité dans le sens de sortie → on laisse la page scroller.
      if ((atEnd && down) || (atStart && !down)) return;

      // Sinon, la molette pilote le carousel sans bouger la page.
      e.preventDefault();
      if (cooldown.current) return;

      // Reset si l'utilisateur inverse le sens en cours d'accumulation.
      if (accum !== 0 && Math.sign(e.deltaY) !== Math.sign(accum)) accum = 0;
      accum += e.deltaY;
      if (Math.abs(accum) < WHEEL_THRESHOLD) return;

      if (down) next();
      else prev();

      accum = 0;
      cooldown.current = true;
      window.setTimeout(() => {
        cooldown.current = false;
      }, WHEEL_COOLDOWN_MS);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
    startX.current = null;
  };

  return (
    <div ref={wheelRef} className={`relative w-full ${className}`}>
      <div
        className="relative flex h-[26rem] w-full touch-pan-y items-center justify-center overflow-hidden [perspective:1000px]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {photos.map((image, index) => {
          // Position circulaire par rapport à la carte centrale.
          const offset = index - currentIndex;
          let pos = (offset + total) % total;
          if (pos > Math.floor(total / 2)) pos = pos - total;

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <figure
              key={image.src}
              className="absolute flex h-[22rem] w-52 items-center justify-center transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${pos * 45}%) scale(${
                  isCenter ? 1 : isAdjacent ? 0.85 : 0.7
                }) rotateY(${pos * -10}deg)`,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="h-full w-full rounded-3xl border border-heritage-gold/20 object-cover shadow-2xl"
              />
              {isCenter && (
                <figcaption className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-background/90 via-background/30 to-transparent p-5 font-serif text-body-md text-white">
                  {image.alt}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* Indicateurs de position */}
      <div className="mt-6 flex justify-center gap-2">
        {photos.map((p, i) => (
          <span
            key={p.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-7 bg-heritage-gold" : "w-1.5 bg-heritage-gold/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ----------------------- DESKTOP : galerie masonry ----------------------- */
function MasonryGallery({ photos }: { photos: readonly Photo[] }) {
  // Répartition des photos sur 3 colonnes + ratios alternés (rythme masonry).
  const columns: { photo: Photo; ratio: number }[][] = [[], [], []];
  photos.forEach((photo, i) => {
    const ratio = i % 2 === 0 ? 4 / 3 : 3 / 4; // paysage / portrait
    columns[i % 3].push({ photo, ratio });
  });

  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {columns.map((col, ci) => (
        <div key={ci} className="grid gap-6">
          {col.map(({ photo, ratio }) => (
            <AnimatedImage
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              ratio={ratio}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Image qui apparaît en fondu une fois entrée dans le viewport. */
function AnimatedImage({
  src,
  alt,
  ratio,
}: {
  src: string;
  alt: string;
  ratio: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      ref={ref}
      className="relief-card-static group relative w-full overflow-hidden rounded-xl"
      style={{ aspectRatio: ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 ${
          isInView && loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
      />
    </figure>
  );
}
