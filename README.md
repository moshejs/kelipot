# Klippot — Four Corruptions

> *The shell is not the spark.*

## The piece

**Klippot** (קליפות, "shells" / "husks") is a term from Lurianic Kabbalah —
the residue of vessels that could not hold their light. When the vessels
broke (*Shevirat HaKelim*), the light scattered; what remained was outer
form without inner purpose. A shell remembers the shape of the thing it
held, but no longer holds it.

This piece names four such shells. Each takes one of the classical
elements — fire, water, earth, air — and shows it twice: as itself, and
as the form it becomes when it forgets what it was *for*.

It is an inquiry, not an argument. There is no thesis except the one in
the coda.

## The four

| # | Element | Its purpose | Its corruption |
| - | ------- | ----------- | -------------- |
| I | **Fire** | warmth, light, the room it keeps | the same heat, set against the room |
| II | **Water** | the well that rises to meet you | what gave breath, taking it back |
| III | **Earth** | the ground that holds | the ground that has learned to refuse |
| IV | **Air** | the breath that makes a space *a room* | the space where you used to be |

Each pair shares a silhouette. The corrupt form is not a different
thing, only the same thing turned. Every flame, every well, every
monolith, every wisp begins from the same point as its counterpart and
arrives somewhere it should not have gone. That, more than anything,
is the piece's claim: corruption is not the absence of the original.
It is the original, mis-oriented.

## Reading it

A few of the choices, in case they're invisible:

- **The page is dark** because shells are seen by what little light
  they don't yet hold.
- **Hover is the act of looking inside.** The motion answering hover
  isn't decoration — it's the shell responding to being seen.
- **Holding `space`** is a longer act: sustaining attention on all four
  at once. It asks a real hold — a quick tap keeps Space's ordinary
  meaning and simply turns the page. Releasing returns them, IV back
  to I. The piece lets them be.
- **Each element carries its Hebrew name** — אש, מים, עפר, רוח — the
  tradition the word *klippot* comes from, kept in its own letters.
- **The rail** (I — IV) is a count more than a navigation. A witness
  keeps the count.
- **The animations have characters.** Pure fire breathes; corrupt fire
  thrashes. Water ripples outward, or pulls inward. Earth holds, or
  fractures from the crown down. Air rises and elongates, or freezes
  mid-rise under a clean horizontal cut. The same energy, two
  orientations.
- **The coda is the only place the piece speaks plainly:**

  > The shell is not the spark. What was warm is warm still —
  > somewhere a witness keeps the count.

- **The signature** — *Witnessed · Held · Released* — is the ritual
  shape of the whole thing in three words.

## Live

- **Site:** <https://moshejs.github.io/kelipot/>
- **Repo:** <https://github.com/moshejs/kelipot>

Built and deployed automatically on every push to `main` by the
GitHub Actions workflow in `.github/workflows/deploy.yml` — Next.js
static export → GitHub Pages.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # local production build
npm run start        # serve the local production build
npm run build:pages  # the exact static export GitHub Pages serves (out/)
```

## Structure

```
app/
├── layout.tsx              root layout, next/font, metadata
├── page.tsx                hero, four elements, coda
├── scroll-reveal.tsx       client: reveals, rail spy,
│                           reading progress, parallax, keyboard
├── globals.css             all styles + keyframes
├── icon0.png               favicon, raster (Safari tabs)
├── icon1.svg               favicon, vector (the sigil)
├── apple-icon.png          iOS home-screen tile
├── not-found.tsx           custom 404 — "a shell, but no spark"
├── opengraph-image.png     1200×630 OG / Twitter card
└── opengraph-image.alt.txt alt text for the card
```

No CSS framework, no UI library. Just Next.js 15 (App Router), React 19,
`next/font` for Cormorant Garamond + Inter + Frank Ruhl Libre (the
Hebrew), and hand-written CSS + inline SVG. The art is text. The text
is art.

## Motion & accessibility

Every animation is gated by `@media (prefers-reduced-motion: reduce)` —
flame drift, ember rise, ripples, vortex pull, wisp sway, halo pulse,
core flicker, parallax, smooth-scroll. The piece falls back to a still
form for anyone who needs it to. The shells are still shells when they
do not move; their meaning does not depend on motion.

Each element's art is a labeled image (`role="img"` with a one-line
description of both forms), so the piece reads aloud as well as it
renders. Purely ornamental marks — the corner glyphs, the sigil, the
Hebrew name spans — stay `aria-hidden`. The rail is a real `nav` with
`aria-current` marking the section in view. Without JavaScript nothing
is hidden: the reveal styles apply only under
`@media (scripting: enabled)`. And the piece prints — a print
stylesheet remaps the palette onto paper.

## The sigil

The mark above the hero — and the favicon, and the open-graph image — is
the hexagram of two overlapping triangles, fire (△, ember) and water (▽,
indigo), bisected by a horizontal line standing in for earth and air.
The classical four-element symbol, compressed.

There is also a quiet pun: the *Magen David* hides inside it. Not the
subject of the piece — only a reminder of whose tradition the word
*klippot* comes from.

## Rights

© Moshe Malka. The text, artwork, and code of this piece are all rights
reserved. It is published to be read, not reused.

## A note

The piece does not advocate looking at the shells. Only at not mistaking
them for the spark.

> Witnessed · Held · Released
