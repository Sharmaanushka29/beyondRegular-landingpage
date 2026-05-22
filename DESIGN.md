---
name: Heritage Modernist
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#574145'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#8a7175'
  outline-variant: '#ddbfc3'
  surface-tint: '#aa2f55'
  primary: '#5b0024'
  on-primary: '#ffffff'
  primary-container: '#810b38'
  on-primary-container: '#ff88a3'
  inverse-primary: '#ffb1c0'
  secondary: '#6b5c4c'
  on-secondary: '#ffffff'
  secondary-container: '#f4dfcb'
  on-secondary-container: '#716252'
  tertiary: '#4b1b1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#66302f'
  on-tertiary-container: '#e49896'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c0'
  on-primary-fixed: '#3f0017'
  on-primary-fixed-variant: '#8a143e'
  secondary-fixed: '#f4dfcb'
  secondary-fixed-dim: '#d7c3b0'
  on-secondary-fixed: '#241a0e'
  on-secondary-fixed-variant: '#524436'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#380c0d'
  on-tertiary-fixed-variant: '#6e3635'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system embodies a "Heritage Luxury" aesthetic, merging the precision of technical documentation with the warmth of traditional craftsmanship. It is designed for a discerning audience that values permanence, quality, and intellectual depth. 

The visual narrative is **Editorial Minimalism**. It rejects the ephemeral nature of "tech" trends in favor of a cinematic, high-fidelity atmosphere. The interface should feel like a bespoke digital archive—intentional, quiet, and authoritative. Emotional responses should range from a sense of calm reliability to the appreciation of fine-grained detail.

## Colors

The palette is anchored by a deep, sophisticated **Burgundy** (#810B38) used sparingly for primary actions, critical branding, and high-impact headlines. This is balanced against a foundational layer of **Warm Cream** and **Parchment** tones which provide a soft, tactile background that reduces eye strain and evokes high-end stationery.

- **Backgrounds:** Use the lightest cream for primary surfaces and the parchment tone for secondary containers or recessed areas.
- **Typography:** Primary body text should utilize a very dark, warm charcoal or deep bean brown rather than pure black to maintain the heritage feel.
- **Accents:** The Burgundy is the "signature" color. It should be treated with reverence—appearing on key interactive elements and editorial markers.

## Typography

Using **Hanken Grotesk** across all levels ensures a "Cinematic Technical" clarity. The luxury feel is achieved through exaggerated whitespace and specific typesetting rules:

- **Display & Headlines:** Use tight letter-spacing and heavier weights to create a sense of structural permanence.
- **Editorial Labels:** Use the `label-caps` style for section headers and small metadata. The increased letter-spacing provides an "engraved" quality.
- **Body Text:** Maintain generous line-heights (1.5x minimum) to ensure a comfortable, bookish reading experience.
- **Contrast:** High-contrast color pairings (Burgundy on Cream) should be reserved for the most important information.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy within a centered container to evoke the structured feel of a printed broadsheet or luxury catalog.

- **Grid:** A 12-column system is used for desktop, collapsing to 6 for tablet and 2 for mobile.
- **Rhythm:** All margins and paddings are multiples of 8px.
- **Whitespace:** Emphasize "luxury through emptiness." Components should be surrounded by generous margins (`margin-desktop`) to prevent the UI from feeling cluttered or "app-like."
- **Reflow:** On mobile, margins tighten to 20px, and horizontal lists should transition to vertical stacks or side-scrolling carousels to maintain the high-fidelity component structure.

## Elevation & Depth

To maintain the "timeless artisan" feel, the system avoids heavy, fuzzy shadows. Instead, depth is communicated through **Tonal Layers** and **Fine Lines**:

- **Hairline Borders:** Use 1px or 0.5px borders in a muted version of the secondary color (#D9C5B2) to define sections.
- **Tonal Stepping:** Elevate components by placing them on a slightly lighter or darker cream background rather than using a shadow.
- **Interaction Depth:** When an element is pressed or active, use a subtle "inset" border or a slight shift in background saturation to imply physical movement.
- **Object Shadows:** If a shadow is absolutely necessary (e.g., for a modal), use a very sharp, low-opacity shadow that mimics the look of paper stacked on a desk.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle "human" touch to the technical precision of the typography.

- **Primary Elements:** Buttons and input fields use a 4px corner radius.
- **Large Containers:** Cards or modal windows can scale up to 8px (`rounded-lg`) but should never become "pill-shaped," as this would undermine the architectural integrity of the design system.
- **Iconography:** Use light-weight (2pt) stroke icons with slightly rounded caps to match the Hanken Grotesk typeface.

## Components

- **Buttons:** Primary buttons are solid Burgundy (#810B38) with Cream text. Secondary buttons use a fine 1px border with Burgundy text. All buttons use `label-caps` for a formal appearance.
- **Input Fields:** Use a minimalist "underlined" style or a very thin border. The focus state is indicated by a weight increase in the bottom border or a subtle parchment-tinted fill.
- **Cards:** Cards are borderless, utilizing a shift to the secondary cream background color to distinguish themselves from the main canvas.
- **Chips & Tags:** Use the `label-caps` style with a parchment background and deep brown text. No heavy colors should be used here to avoid distracting from the primary CTA.
- **Lists:** Use generous vertical padding and fine horizontal dividers between items to create a high-end menu or index feel.
- **Selection Controls:** Checkboxes and radios should be custom-styled to be ultra-thin and precise, avoiding the default bulky "OS" look.