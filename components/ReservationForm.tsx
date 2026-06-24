"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/content";

/**
 * Formulaire de réservation.
 * ⚠️ Pas de backend : à la soumission, on ouvre le client mail de l'utilisateur
 *    avec une demande pré-remplie vers l'adresse du restaurant.
 *    À remplacer par un vrai moteur de réservation (TheFork, Zenchef…) ou une
 *    route API qui envoie l'email côté serveur.
 */
export function ReservationForm() {
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full border-b border-burnished-copper bg-transparent py-3 font-sans text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-heritage-gold focus:outline-none transition-colors";
  const labelCls =
    "mb-2 block font-sans text-label-caps uppercase tracking-widest text-on-surface-variant";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Demande de réservation : ${get("nom")} (${get("convives")} couverts)`;
    const body = [
      `Nom : ${get("nom")}`,
      `Email : ${get("email")}`,
      `Téléphone : ${get("telephone")}`,
      `Date souhaitée : ${get("date")}`,
      `Heure : ${get("heure")}`,
      `Nombre de convives : ${get("convives")}`,
      "",
      "Message :",
      get("message") || "Non renseigné",
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="relief-card-static rounded-xl p-10 text-center">
        <h3 className="font-serif text-headline-sm text-primary">
          Merci pour votre demande
        </h3>
        <p className="mt-4 font-sans text-body-md text-on-surface-variant">
          Votre client mail s'est ouvert avec votre demande pré-remplie. Si rien
          ne s'est passé, contactez-nous directement au{" "}
          <a href={CONTACT.phoneHref} className="text-primary hover:underline">
            {CONTACT.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relief-card-static rounded-xl p-8 md:p-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="nom">
            Nom complet
          </label>
          <input id="nom" name="nom" type="text" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="telephone">
            Téléphone
          </label>
          <input id="telephone" name="telephone" type="tel" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="date">
            Date souhaitée
          </label>
          <input id="date" name="date" type="date" required className={`${inputCls} [color-scheme:dark]`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="heure">
            Heure
          </label>
          <input id="heure" name="heure" type="time" required className={`${inputCls} [color-scheme:dark]`} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="convives">
            Nombre de convives
          </label>
          <select id="convives" name="convives" required className={inputCls} defaultValue="2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="bg-surface-container text-on-surface">
                {n} {n > 1 ? "personnes" : "personne"}
              </option>
            ))}
            <option value="9+ (privatisation)" className="bg-surface-container text-on-surface">
              9 et plus (privatisation)
            </option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Message (allergies, occasion…)
          </label>
          <textarea id="message" name="message" rows={3} className={inputCls} />
        </div>
      </div>

      <button
        type="submit"
        className="button-raised mt-10 w-full bg-heritage-gold px-12 py-5 font-sans text-label-caps uppercase tracking-widest text-on-primary-container transition-all hover:brightness-110"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
