import type { Config } from "tailwindcss";

/**
 * Design tokens issus de DESIGN.md (source de vérité).
 * Couleurs Material + tokens de marque (heritage-gold, antique-cream...),
 * échelle typographique EB Garamond / Montserrat, radius "soft" et spacing 8px.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // --- Surfaces ---
        background: "#131313",
        surface: "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#20201f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "surface-variant": "#353535",
        // --- Texte / on-surface ---
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#d2c4b4",
        "on-background": "#e5e2e1",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        // --- Primary (or) ---
        primary: "#eebf7a",
        "on-primary": "#442c00",
        "primary-container": "#b88e4e",
        "on-primary-container": "#402900",
        "inverse-primary": "#7b581d",
        "primary-fixed": "#ffddb0",
        "primary-fixed-dim": "#eebf7a",
        // --- Secondary / tertiary ---
        secondary: "#f1bc8c",
        "on-secondary": "#492905",
        "secondary-container": "#66411b",
        "on-secondary-container": "#e2ae7f",
        tertiary: "#c9c6c1",
        "on-tertiary": "#31312d",
        // --- Outline & erreurs ---
        outline: "#9b8f80",
        "outline-variant": "#4f4539",
        error: "#ffb4ab",
        "on-error": "#690005",
        // --- Tokens de marque ---
        "deep-charcoal": "#1A1A1A",
        "antique-cream": "#F9F6F0",
        "heritage-gold": "#B88E4E",
        "burnished-copper": "#8C6239",
        "surface-tint": "#eebf7a",
      },
      fontFamily: {
        // Pilotés par next/font (variables CSS définies dans app/layout.tsx)
        // serif : Cormorant Garamond · sans : Jost · display : Cinzel (CTA)
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        "headline-display": [
          "clamp(1.75rem, 7vw, 4rem)", // 28px -> 64px : 2 lignes en mobile, plus présent
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "headline-lg": [
          "clamp(1.75rem, 5vw, 3rem)", // 28px -> 48px
          { lineHeight: "1.2", fontWeight: "400" },
        ],
        "headline-md": [
          "clamp(1.4rem, 4.5vw, 2rem)", // ~22px -> 32px
          { lineHeight: "1.25", fontWeight: "500" },
        ],
        "headline-sm": [
          "clamp(1.25rem, 3.5vw, 1.5rem)", // 20px -> 24px
          { lineHeight: "1.4", fontWeight: "500" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "600" },
        ],
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        unit: "8px",
        gutter: "32px",
        "margin-mobile": "24px",
        "margin-desktop": "80px",
      },
      maxWidth: {
        content: "1440px",
      },
      boxShadow: {
        relief:
          "10px 10px 30px #0a0a0a, -2px -2px 15px rgba(42, 42, 42, 0.4)",
        "relief-hover":
          "20px 25px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(184, 142, 78, 0.05)",
        raised: "0 4px 15px rgba(0,0,0,0.4)",
        "raised-hover": "0 12px 30px rgba(184, 142, 78, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
