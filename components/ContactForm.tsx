"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/content";

/**
 * Formulaire de contact général.
 * ⚠️ Pas de backend : à la soumission, on ouvre le client mail de l'utilisateur
 *    avec un message pré-rempli vers l'adresse du restaurant.
 *    À remplacer par une route API (envoi serveur) ou un service tiers.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full border-b border-burnished-copper bg-transparent py-3 font-sans text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-heritage-gold focus:outline-none transition-colors";
  const labelCls =
    "mb-2 block font-sans text-label-caps uppercase tracking-widest text-on-surface-variant";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Contact : ${get("sujet")} (${get("nom")})`;
    const body = [
      `Nom : ${get("nom")}`,
      `Email : ${get("email")}`,
      `Téléphone : ${get("telephone") || "Non renseigné"}`,
      `Sujet : ${get("sujet")}`,
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
          Merci pour votre message
        </h3>
        <p className="mt-4 font-sans text-body-md text-on-surface-variant">
          Votre client mail s'est ouvert avec votre message pré-rempli. Si rien
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
        <div>
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
            Téléphone (facultatif)
          </label>
          <input id="telephone" name="telephone" type="tel" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="sujet">
            Sujet
          </label>
          <select id="sujet" name="sujet" required className={inputCls} defaultValue="Question générale">
            {[
              "Question générale",
              "Événement / privatisation",
              "Presse",
              "Recrutement",
              "Autre",
            ].map((s) => (
              <option key={s} value={s} className="bg-surface-container text-on-surface">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Votre message
          </label>
          <textarea id="message" name="message" rows={5} required className={inputCls} />
        </div>
      </div>

      <button
        type="submit"
        className="button-raised mt-10 w-full bg-heritage-gold px-12 py-5 font-sans text-label-caps uppercase tracking-widest text-on-primary-container transition-all hover:brightness-110"
      >
        Envoyer mon message
      </button>
    </form>
  );
}
