# Dorothy's Flower Shop

A family. A storefront. A way of doing things.

This repo holds the website for Dorothy's Flower Shop — part family story,
part brand world, part visual moodboard.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS for the design tokens (cream, ink, shop-red, retro-green, sepia)
- next/font (Cormorant Garamond + EB Garamond)
- Static assets in `public/` — sign, family photo, newspaper ad, patches,
  apparel ("Working Mans," "Water Your Flowers," the Marine hat), the intro
  video, and Pop-Pop's gnocchi recipe

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx        ← global fonts + cream bg
  page.tsx          ← homepage (sections composed here)
  globals.css       ← halftone treatment + type rhythm
components/
  Hero.tsx
  Prologue.tsx
  OurStory.tsx
  Represents.tsx    ← five medallions = five values
  Archive.tsx
  World.tsx         ← apparel + objects
  Letter.tsx        ← newsletter signup
  Footer.tsx
  Plate.tsx         ← reusable halftone plate (landscape + medallion)
  PlateBand.tsx     ← full-bleed section divider
  MedallionMark.tsx ← SVG flower placeholders for the value cameos
  SectionEyebrow.tsx
public/
  archive/          ← sign, newspaper ad, drive-through, patches, photos
  world/            ← apparel and hat assets
  video/            ← intro.mp4
  logo/             ← logo files
```

## Deploy

This deploys to Vercel automatically when connected to the GitHub repo —
push to `main` deploys to production; push to a feature branch creates a
preview URL. No `vercel.json` needed; Next.js is auto-detected.
