import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Mentions Légales · La Table du Liziec",
  description: "Mentions légales du restaurant La Table du Liziec, Domaine du Liziec à Vannes.",
  robots: { index: false, follow: true },
};

/* ⚠️ CONTENU PLACEHOLDER — à faire valider/compléter par le client ou un juriste.
   Les coordonnées éditeur sont reprises du site officiel ; l'hébergeur est à confirmer. */
export default function MentionsLegalesPage() {
  return (
    <PageShell kicker="Informations" title="Mentions Légales">
      <h2>Éditeur du site</h2>
      <p>
        <strong>La Table du Liziec</strong>, Domaine du Liziec, MGallery (groupe Accor).
        <br />
        40 Route de Rennes, 56000 Vannes, France.
        <br />
        Téléphone : <a href="tel:+33222075015">+33 2 22 07 50 15</a>
        <br />
        Email : <a href="mailto:domaineduliziec@accor.com">domaineduliziec@accor.com</a>
      </p>

      <h2>Directeur de la publication</h2>
      <p>À compléter (nom du responsable de la publication).</p>

      <h2>Hébergement</h2>
      <p>À compléter (nom, adresse et téléphone de l'hébergeur du site).</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, photographies, logos,
        identité visuelle) est protégé par le droit d'auteur. Toute reproduction,
        représentation ou diffusion, totale ou partielle, sans autorisation préalable
        est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
        suppression de vos données. Voir la page{" "}
        <a href="/confidentialite">Politique de confidentialité</a>.
      </p>
    </PageShell>
  );
}
