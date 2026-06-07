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
  at once. Releasing returns them. The piece lets them be.
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

Repo: <https://github.com/moshejs/kelipot>

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
app/
├── layout.tsx              root layout, next/font, metadata
├── page.tsx                hero, four elements, coda
├── scroll-reveal.tsx       client: reveals, rail spy,
│                           reading progress, parallax, keyboard
├── globals.css             all styles + keyframes
├── icon.svg                favicon (the sigil)
└── opengraph-image.tsx     1200×630 OG / Twitter card
```

No CSS framework, no UI library. Just Next.js 15 (App Router), React 19,
`next/font` for Cormorant Garamond + Inter, and hand-written CSS + inline
SVG. The art is text. The text is art.

## Motion & accessibility

Every animation is gated by `@media (prefers-reduced-motion: reduce)` —
flame drift, ember rise, ripples, vortex pull, wisp sway, halo pulse,
core flicker, parallax, smooth-scroll. The piece falls back to a still
form for anyone who needs it to. The shells are still shells when they
do not move; their meaning does not depend on motion.

Decorative SVG carries `aria-hidden="true"`; the semantic content is in
the surrounding text, which can be read on its own without losing the
piece.

## The sigil

The mark above the hero — and the favicon, and the open-graph image — is
the hexagram of two overlapping triangles, fire (△, ember) and water (▽,
indigo), bisected by a horizontal line standing in for earth and air.
The classical four-element symbol, compressed.

There is also a quiet pun: the *Magen David* hides inside it. Not the
subject of the piece — only a reminder of whose tradition the word
*klippot* comes from.

## A note

The piece does not advocate looking at the shells. Only at not mistaking
them for the spark.

> Witnessed · Held · Released
