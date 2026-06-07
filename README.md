# Klippot — Four Corruptions

An inquiry in four movements. Each element — fire, water, earth, air — is shown
twice: as itself, and as the shell it becomes when it forgets what it was for.

Built with Next.js 15 (App Router), React 19, and `next/font` for Cormorant
Garamond + Inter. No CSS framework, no UI library — hand-written CSS and inline
SVG.

## Live

- Repo: <https://github.com/moshejs/kelipot>

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Interactions

- **Hover** any of the four elements to see its corrupt form.
- **Hold `space`** to invert all four at once. Release to return.
- **Side rail** (right edge, desktop ≥ 1100px) tracks the active section as you
  scroll and clicks jump to that section.
- **Touch** devices fall back to tap-to-toggle on each element.

## Structure

```
app/
├── layout.tsx              root layout, next/font, metadata
├── page.tsx                hero, four elements, coda
├── scroll-reveal.tsx       client component: reveals, rail spy,
│                           reading progress, parallax, keyboard
├── globals.css             all styles + keyframes
├── icon.svg                favicon (alchemical sigil)
└── opengraph-image.tsx     1200×630 OG / Twitter card
```

## Motion

Every animation is gated by `@media (prefers-reduced-motion: reduce)` — flame
drift, ember rise, ripples, vortex pull, wisp sway, halo pulse, core flicker,
parallax, and smooth-scroll all fall back to static / instant.

## Notes

- Decorative SVG art uses `aria-hidden="true"`; semantic content lives in the
  surrounding text.
- The reading progress bar at the top is 1px, ember-coloured, with a soft glow.
- The hexagram sigil in the hero and the favicon is fire (△, ember) + water (▽,
  indigo) bisected by the earth/air horizontal bar — the classical four-element
  symbol compressed into one mark.
