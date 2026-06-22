import { INFOS, AWARDS, RESERVATION_HREF } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { InfoIconByKey } from "@/components/ui/Icon";
import { PrimaryButton } from "@/components/ui/Button";

/* ============================================================
   7. INFOS PRATIQUES — 4 cartes (adresse, horaires, tél, mail)
      + logos distinctions + CTA de réservation
   ============================================================ */
export function InfoSection() {
  return (
    <section id="contact" className="bg-surface-container-low py-32">
      <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        {/* Cartes d'information */}
        <div className="mb-16 grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-4">
          {INFOS.map((info, i) => (
            <Reveal key={info.title} delay={i * 0.1}>
              <div className="relief-card flex h-full flex-col items-center rounded-xl p-8 text-center">
                <InfoIconByKey
                  name={info.icon}
                  width={32}
                  height={32}
                  className="mb-4 text-heritage-gold"
                />
                <h3 className="mb-2 font-sans text-label-caps uppercase tracking-widest text-white">
                  {info.title}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  {info.lines.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Distinctions + CTA */}
        <Reveal className="flex flex-col items-center space-y-16">
          <div className="flex items-center space-x-12 opacity-80 grayscale transition-all duration-1000 hover:grayscale-0">
            {AWARDS.map((award) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={award.name}
                src={award.image}
                alt={`Distinction ${award.name}`}
                loading="lazy"
                className={`${award.cls} w-auto invert`}
              />
            ))}
          </div>

          <PrimaryButton href={RESERVATION_HREF} className="px-16 py-5 text-lg">
            Réserver une table
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
