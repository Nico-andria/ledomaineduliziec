import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/Icon";

/**
 * Boutons unifiés de la charte « La Table ».
 * Tous les CTA du site partagent la MÊME forme (pilule), la même typo
 * (sans-serif, capitales) et la même flèche, pour un style cohérent.
 * - PrimaryButton  : fond or plein (action principale).
 * - SecondaryButton: contour or ou blanc (action secondaire).
 *
 * Polymorphe : rendu en <Link> si `href` est fourni, sinon en <button>.
 * `hideArrow` permet de retirer la flèche dans de rares cas (formulaires).
 */

type Common = { children: ReactNode; className?: string };
type AsButton = Common & ComponentProps<"button"> & { href?: undefined };
type AsLink = Common & { href: string } & Partial<ComponentProps<typeof Link>>;
type PolymorphicProps = (AsButton | AsLink) & { hideArrow?: boolean };

function Polymorphic({
  href,
  className,
  children,
  ...rest
}: AsButton | AsLink) {
  if (typeof href === "string") {
    return (
      <Link
        {...(rest as Omit<ComponentProps<typeof Link>, "href">)}
        href={href}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...(rest as ComponentProps<"button">)}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
}

const baseCls =
  "group inline-flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap rounded-full font-sans text-label-caps uppercase tracking-[0.08em] sm:tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function Arrow() {
  return (
    <ArrowRightIcon
      width={18}
      height={18}
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
    />
  );
}

export function PrimaryButton({
  className = "",
  children,
  hideArrow = false,
  ...props
}: PolymorphicProps) {
  return (
    <Polymorphic
      className={`${baseCls} button-raised bg-heritage-gold px-6 py-3.5 sm:px-10 sm:py-4 text-on-primary-container hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
      {!hideArrow && <Arrow />}
    </Polymorphic>
  );
}

export function SecondaryButton({
  className = "",
  children,
  variant = "light",
  hideArrow = false,
  ...props
}: PolymorphicProps & { variant?: "light" | "gold" }) {
  const variantCls =
    variant === "gold"
      ? "border border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-on-primary button-raised"
      : "border-2 border-white/80 text-white backdrop-blur-sm hover:bg-white/10 shadow-xl";
  return (
    <Polymorphic
      className={`${baseCls} px-6 py-3.5 sm:px-10 sm:py-4 ${variantCls} ${className}`}
      {...props}
    >
      {children}
      {!hideArrow && <Arrow />}
    </Polymorphic>
  );
}
