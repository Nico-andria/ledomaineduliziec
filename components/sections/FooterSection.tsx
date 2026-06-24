import {
  FOOTER,
  NAV_LINKS,
  CONTACT,
  EXTERNAL_LINKS,
  RESERVATION_HREF,
} from "@/lib/content";

/* ============================================================
   8. FOOTER — multi-colonnes : marque, navigation, infos
      légales, contact, réseaux sociaux, copyright.
   ============================================================ */

const colTitle =
  "mb-5 font-sans text-label-caps uppercase tracking-[0.2em] text-heritage-gold";
const linkCls =
  "font-sans text-body-sm text-on-surface-variant transition-colors hover:text-primary";

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="border-t border-heritage-gold/10 bg-surface-container-lowest pt-12 md:pt-20"
    >
      <div className="mx-auto max-w-content px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12 md:gap-gutter">
          {/* Marque */}
          <div className="space-y-6 md:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-white.svg"
              alt="Logo La Table du Liziec"
              className="h-20 w-auto"
            />
            <p className="font-serif text-headline-sm uppercase tracking-[0.2em] text-heritage-gold">
              {FOOTER.brand}
            </p>
            <p className="max-w-xs font-sans text-body-sm leading-relaxed text-on-surface-variant">
              {FOOTER.tagline}
            </p>
            <div className="flex space-x-6 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-on-surface-variant transition-colors hover:text-heritage-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-on-surface-variant transition-colors hover:text-heritage-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation (menu du header) */}
          <nav aria-label="Le restaurant" className="md:col-span-3">
            <h3 className={colTitle}>{FOOTER.navLabel}</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkCls}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESERVATION_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Réserver une table
                </a>
              </li>
            </ul>
          </nav>

          {/* Informations légales */}
          <nav aria-label="Informations" className="md:col-span-2">
            <h3 className={colTitle}>{FOOTER.legalLabel}</h3>
            <ul className="space-y-3">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkCls}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className={colTitle}>{FOOTER.contactLabel}</h3>
            <address className="space-y-3 not-italic">
              <p className="font-sans text-body-sm leading-relaxed text-on-surface-variant">
                {CONTACT.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a href={CONTACT.phoneHref} className={`block ${linkCls}`}>
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className={`block ${linkCls}`}>
                {CONTACT.email}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                <a
                  href={EXTERNAL_LINKS.emporter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  À emporter
                </a>
                <a
                  href={EXTERNAL_LINKS.offrir}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Offrir
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-heritage-gold/10 py-8 text-center">
          <p className="font-sans text-body-sm text-on-surface-variant">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
