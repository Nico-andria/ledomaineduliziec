import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

/**
 * Coquille des pages secondaires (mentions légales, presse, carrières…).
 * Reprend la navbar et le footer du site, avec un en-tête éditorial cohérent.
 */
export function PageShell({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32 pt-32 md:pt-44">
        <header className="mx-auto mb-16 max-w-content px-margin-mobile text-center md:px-margin-desktop">
          {kicker && (
            <p className="mb-4 font-sans text-label-caps uppercase tracking-[0.3em] text-heritage-gold">
              {kicker}
            </p>
          )}
          <h1 className="font-serif text-headline-lg text-primary">{title}</h1>
          <div className="mx-auto mt-8 h-0.5 w-20 bg-heritage-gold" />
        </header>

        <div className="mx-auto max-w-3xl space-y-6 px-margin-mobile font-sans text-body-md leading-relaxed text-on-surface-variant md:px-margin-desktop [&_a]:text-primary [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-headline-sm [&_h2]:text-on-surface [&_strong]:text-on-surface">
          {children}
        </div>
      </main>
      <FooterSection />
    </>
  );
}
