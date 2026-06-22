import { MENUS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Watermark } from "@/components/ui/Watermark";
import { MenuCard } from "@/components/ui/MenuCard";

/* ============================================================
   4. MENUS — 3 cartes en relief, l'une décalée (asymétrie)
   ============================================================ */
export function MenusSection() {
  return (
    <section
      id="menus"
      className="relative overflow-hidden bg-surface-container-low py-32"
    >
      {/* Filigrane logo en débordement (cf. design Stitch) */}
      <Watermark className="-bottom-40 -left-20 h-[800px] w-[800px] -rotate-12 opacity-[0.03]" />

      <div className="relative mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        <Reveal className="mb-20 text-center">
          <h2 className="font-serif text-headline-lg text-primary">
            Nos Cartes &amp; Menus
          </h2>
          <p className="mt-4 font-sans text-label-caps uppercase tracking-[0.3em] text-antique-cream">
            Saisonnalité &amp; Créativité
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {MENUS.map((menu, i) => (
            <Reveal key={menu.title} delay={i * 0.12}>
              <MenuCard menu={menu} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
