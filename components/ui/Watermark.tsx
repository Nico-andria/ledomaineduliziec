/**
 * Filigrane décoratif : le logo de marque en très faible opacité, en débordement.
 * Reproduit les watermarks `{{DATA:DOCUMENT}}` laissés (cassés) par l'export Stitch
 * dans les sections Expérience et Menus.
 */
export function Watermark({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 select-none ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-watermark.svg"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>
  );
}
