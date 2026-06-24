import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Carrières & Emploi · La Table du Liziec",
  description:
    "Rejoignez les équipes de La Table du Liziec, restaurant gastronomique étoilé à Vannes.",
};

/* ⚠️ CONTENU PLACEHOLDER — remplacer par les vraies offres / process de recrutement. */
export default function CarrieresPage() {
  return (
    <PageShell kicker="Rejoignez-nous" title="Carrières & Emploi">
      <p>
        Intégrer La Table du Liziec, c'est rejoindre une maison étoilée où l'exigence
        rime avec passion. Salle, cuisine, sommellerie : nous recherchons des talents
        animés par le goût du détail et le sens de l'accueil.
      </p>

      <h2>Nos métiers</h2>
      <p>
        Chef de partie, commis, maître d'hôtel, chef de rang, sommelier… À compléter avec
        les postes réellement ouverts.
      </p>

      <h2>Candidature</h2>
      <p>
        Envoyez votre CV et votre lettre de motivation à{" "}
        <a href="mailto:domaineduliziec@accor.com">domaineduliziec@accor.com</a>. Nous
        étudions chaque candidature avec attention.
      </p>
    </PageShell>
  );
}
