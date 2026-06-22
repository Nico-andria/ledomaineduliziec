---
name: Heritage Gastronomique
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d2c4b4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9b8f80'
  outline-variant: '#4f4539'
  surface-tint: '#eebf7a'
  primary: '#eebf7a'
  on-primary: '#442c00'
  primary-container: '#b88e4e'
  on-primary-container: '#402900'
  inverse-primary: '#7b581d'
  secondary: '#f1bc8c'
  on-secondary: '#492905'
  secondary-container: '#66411b'
  on-secondary-container: '#e2ae7f'
  tertiary: '#c9c6c1'
  on-tertiary: '#31312d'
  tertiary-container: '#979590'
  on-tertiary-container: '#2e2e2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb0'
  primary-fixed-dim: '#eebf7a'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#604105'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#f1bc8c'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#633f19'
  tertiary-fixed: '#e5e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
  deep-charcoal: '#1A1A1A'
  antique-cream: '#F9F6F0'
  heritage-gold: '#B88E4E'
  burnished-copper: '#8C6239'
typography:
  headline-display:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 32px
  margin-mobile: 24px
  margin-desktop: 80px
  max-width: 1440px
---

## Brand & Style

This design system embodies the "La Table" experience: sophisticated, immersive, and deeply rooted in the luxury of Domaine du Liziec. The brand personality is prestigious yet welcoming, evoking the sensory delight of a 1-star Michelin dining room.

The aesthetic follows a **Tactile / Skeuomorphic** approach blended with **Modern Minimalism**. We move away from flat design, favoring depth, relief, and physical metaphors. The UI should feel like high-quality stationery or a finely set table—using overlapping layers, subtle gradients that mimic the sheen of silk or copper, and soft shadows that provide a tangible sense of hierarchy. The interface invites the user to linger, mirroring the unhurried pace of a fine-dining experience.

## Colors

The palette is anchored in **Deep Charcoal (#1A1A1A)** to create a canvas of intimacy and prestige. This dark base allows the secondary colors to glow with an internal warmth. 

**Heritage Gold** and **Burnished Copper** are used exclusively for accents, interactive states, and decorative flourishes, reflecting the metallic details found in the restaurant’s interior. **Antique Cream** serves as the primary surface color for high-contrast "light mode" sections or "printed" menu components, providing a softer alternative to pure white. 

Gradients should be used sparingly but effectively, transitioning between #B88E4E and #8C6239 to simulate the reflection of light on metal.

## Typography

The typographic hierarchy relies on the tension between the classic authority of **EB Garamond** and the modern precision of **Montserrat**.

- **Headlines:** Use EB Garamond for all editorial titles. It should feel literary and timeless. For display sizes, tighter letter spacing and optical sizing should be applied to enhance the "high-end" feel.
- **Body:** Montserrat provides excellent legibility at smaller scales. It should be set with generous line-height to maintain an airy, premium feel.
- **Micro-copy:** Labels and navigation items use Montserrat in uppercase with increased tracking (letter-spacing) to signify deliberate design and luxury branding.

## Layout & Spacing

This design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). However, to achieve the "non-linear" request, the grid serves as a foundation for intentional offsets. 

- **Asymmetry:** Content blocks (images and text cards) should frequently overlap or be offset by 1–2 columns to create a dynamic, editorial flow.
- **Whitespace:** Use whitespace as a luxury element. Deep margins (80px+) on desktop ensure the content feels framed and exclusive.
- **Vertical Rhythm:** A strict 8px baseline grid maintains order amidst the asymmetric layouts.

## Elevation & Depth

Depth is the defining characteristic of the interface. We avoid the "floating" appearance of standard Material Design in favor of **Tonal Layers and Subtle Textures**.

- **Surfaces:** Use subtle linear gradients (top-left to bottom-right) on cards to simulate a slightly curved or beveled surface.
- **Shadows:** Use large-spread, low-opacity shadows (#000000 at 15-20%) to create a soft "lift." Avoid sharp shadows.
- **Overlap:** Elements like high-quality photography of dishes should "break" the container of a card, overlapping text or background sections to create a sense of three-dimensional relief.
- **Glassmorphism:** Use backdrop blurs for navigation bars and overlaying menus to maintain a sense of environmental depth without losing the background context.

## Shapes

The shape language is primarily **Soft (0.25rem - 0.75rem)**. While sharp corners feel too aggressive and pill-shapes feel too "tech-oriented," the soft radius suggests the quality of hand-crafted leather or fine cardstock. 

Images should maintain a slightly larger radius (`rounded-lg`) to soften the visual impact of photography against the dark background. Interactive elements like buttons use a subtle "relief" bevel—achieved through a 1px top highlight and a 1px bottom shadow.

## Components

- **Buttons:** Primary buttons feature a "sunken" or "raised" effect. Use a subtle gradient of Heritage Gold. Upon hover, the shadow deepens and the gradient shifts slightly to simulate a physical button being pressed.
- **Cards:** Cards for menu items or rooms should use "Antique Cream" for light backgrounds or a slightly lighter "Charcoal" for dark backgrounds. Apply a soft border (1px) in a slightly lighter shade than the background to define the edge.
- **Inputs:** Text fields are underlined with a 1px Copper line rather than fully enclosed boxes, maintaining an elegant, minimalist aesthetic.
- **Lists:** Menu lists (Carte) use wide spacing and EB Garamond for item names, with Montserrat for descriptions. Use dotted "leaders" to connect items to prices, a nod to traditional high-end physical menus.
- **Chips/Badges:** Used for dietary labels (e.g., Vegetarian, Signature). These should be rendered as "Ghost" chips with a thin Gold border and capitalized Montserrat text.
- **Navigation:** The main menu uses an "Immersive Overlay" style. When triggered, the menu expands to fill the screen with a blurred background, treating the navigation items like a curated table of contents.