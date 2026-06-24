import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Politique de Confidentialité · La Table du Liziec",
  description:
    "Politique de confidentialité et gestion des données personnelles de La Table du Liziec.",
  robots: { index: false, follow: true },
};

/* ⚠️ CONTENU PLACEHOLDER — à faire valider/compléter (DPO, finalités réelles, cookies). */
export default function ConfidentialitePage() {
  return (
    <PageShell kicker="Vos données" title="Politique de Confidentialité">
      <p>
        La Table du Liziec accorde une grande importance à la protection de vos données
        personnelles. Cette page décrit les informations collectées et l'usage qui en est fait.
      </p>

      <h2>Données collectées</h2>
      <p>
        Lors d'une demande de réservation ou de contact, nous pouvons collecter vos nom,
        prénom, adresse email, numéro de téléphone et les informations nécessaires au
        traitement de votre demande.
      </p>

      <h2>Finalités</h2>
      <p>
        Ces données sont utilisées exclusivement pour traiter vos réservations, répondre à
        vos demandes et, avec votre consentement, vous adresser nos actualités.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD), vous
        disposez d'un droit d'accès, de rectification, d'opposition et de suppression de
        vos données. Pour l'exercer, écrivez-nous à{" "}
        <a href="mailto:domaineduliziec@accor.com">domaineduliziec@accor.com</a>.
      </p>

      <h2>Cookies</h2>
      <p>À compléter (liste des cookies utilisés et finalités).</p>
    </PageShell>
  );
}
