import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Presse · La Table du Liziec",
  description:
    "Espace presse de La Table du Liziec : actualités, distinctions et contact médias.",
};

/* ⚠️ CONTENU PLACEHOLDER — remplacer par le vrai dossier de presse / contact médias. */
export default function PressePage() {
  return (
    <PageShell kicker="Médias" title="Presse">
      <p>
        Bienvenue dans l'espace presse de La Table du Liziec, restaurant gastronomique
        une étoile Michelin du Chef Olivier Samson, au Domaine du Liziec à Vannes.
      </p>

      <h2>Distinctions</h2>
      <p>
        Une étoile au Guide Michelin 2026 et la distinction Gault &amp; Millau d'Or
        Bretagne 2026 (trois toques).
      </p>

      <h2>Dossier de presse</h2>
      <p>
        Le dossier de presse et les visuels haute définition sont disponibles sur demande.
        À compléter (lien de téléchargement).
      </p>

      <h2>Contact presse</h2>
      <p>
        Pour toute demande d'interview ou de reportage :{" "}
        <a href="mailto:domaineduliziec@accor.com">domaineduliziec@accor.com</a> ou{" "}
        <a href="tel:+33222075015">+33 2 22 07 50 15</a>.
      </p>
    </PageShell>
  );
}
