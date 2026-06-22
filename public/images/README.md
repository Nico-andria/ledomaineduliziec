# Images de « La Table du Liziec »

Correspondance **réelle** entre les fichiers présents et leur emplacement sur le site
(mappée dans `lib/content.ts`). Tu peux remplacer un fichier par un autre visuel en
gardant le même nom — aucune autre modification nécessaire.

| Fichier                                   | Contenu                                                       | Emplacement                     |
| ----------------------------------------- | ------------------------------------------------------------- | ------------------------------- |
| `interior.png`                            | Salle du restaurant, lustres en cristal                       | Hero — slide 1                  |
| `carte.png`                               | Saint-Jacques poêlée sur ardoise sombre, verre de vin blanc   | Hero — slide 2                  |
| `hero-dish.png`                           | Magret de canard, fleurs, nappe dorée (vue de dessus)         | Hero — slide 3                  |
| `degustation.png`                         | Millefeuille à la feuille d'or + sorbet framboise             | Section « Expérience »          |
| `chef.jpg`                                | Le chef (lunettes), bibliothèque design                       | Section « Chef »                |
| `domaine-de-liziec-11-24_165_fa.jpg`      | Trio d'amuse-bouches sur supports blancs                      | Carte « Menu Dégustation »      |
| `gastro_plats_71.jpg`                     | Homard / viande nacrée, sauce safranée                        | Carte « Menu Déjeuner »         |
| `wine.png`                                | Bouteille de Château Margaux 2012 + verre                     | Carte « La Cave »               |
| `gastro_vin_08.jpg`                       | Cave à vin verticale + armagnacs millésimés                   | Section « Bar à Vin » (parallax)|
| `logo-watermark.svg`                      | Logo doré de la marque                                        | Filigranes + footer             |

## Fichiers présents mais NON utilisés

- **`chef.png`** — chef généré par IA avec texte déformé sur la veste (« Michael Vance »,
  médaille « Guide Michelin »). Écarté au profit de `chef.jpg` (vraie photo). À supprimer.
- **`plats_gastro_020.jpg`** — second trio d'amuse-bouches (fond clair, sarrasin). Gardé en
  réserve pour une future page « menu détaillé » ou une galerie.

## Non remplacés (toujours sur les URLs Stitch, vont expirer)

Les logos de distinctions (Michelin, Gault & Millau) de la section Contact restent sur
les URLs de l'export Stitch. Ajoute les fichiers officiels ici puis mets à jour le
tableau `AWARDS` dans `lib/content.ts`.

## Conseil perf

Les `.png` de plats sont lourds : convertis-les en `.webp` (Squoosh / `sharp`) et mets
à jour les extensions dans `lib/content.ts`. Vise < 300 Ko par image.
