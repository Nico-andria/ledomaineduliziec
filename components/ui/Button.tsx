import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Boutons de la charte « La Table ».
 * - PrimaryButton  : fond or "Heritage Gold" avec effet relief + balayage lumineux.
 * - SecondaryButton: contour (bordure blanche ou or selon `variant`).
 *
 * Polymorphe : rendu en <Link> si `href` est fourni, sinon en <button>.
 */

type Common = {
  children: ReactNode;
  className?: string;
};

type AsButton = Common & ComponentProps<"button"> & { href?: undefined };
type AsLink = Common & { href: string } & Partial<ComponentProps<typeof Link>>;
type PolymorphicProps = AsButton | AsLink;

function Polymorphic({ href, className, children, ...rest }: PolymorphicProps) {
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
  "inline-flex items-center justify-center font-sans text-label-caps uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function PrimaryButton({ className = "", ...props }: PolymorphicProps) {
  return (
    <Polymorphic
      className={`${baseCls} button-raised bg-heritage-gold text-on-primary-container px-12 py-5 hover:brightness-110 ${className}`}
      {...props}
    />
  );
}

export function SecondaryButton({
  className = "",
  variant = "light",
  ...props
}: PolymorphicProps & { variant?: "light" | "gold" }) {
  const variantCls =
    variant === "gold"
      ? "border border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-on-primary button-raised"
      : "border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm shadow-xl";
  return (
    <Polymorphic
      className={`${baseCls} px-12 py-5 ${variantCls} ${className}`}
      {...props}
    />
  );
}
