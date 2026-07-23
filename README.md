# JDcorp — Junk Removal & Moving (website)

Marketing site for an Australian junk-removal and house-moving business. "JDcorp" is a
placeholder brand name pending the client's confirmed business name/ABN — see
`src/data/site.ts`.

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + React Router — same
approach as `qamira-web`, adapted to this brand's own color/type tokens
(`src/index.css`).

## Status (current)

- Homepage only: hero, services, how-it-works, before/after, why-us, service areas,
  reviews, and a quote-request form.
- The quote form is layout-only — it doesn't send anywhere yet.
- Placeholder content still to confirm/replace before launch:
  - Brand name, ABN, phone, email — `src/data/site.ts`
  - Service area / suburb list — `src/data/content/home.ts` (`serviceAreas`)
  - Hero/service photos are temporary Unsplash stock images — `src/data/content/images.ts`
  - Reviews section has no real reviews yet (business hasn't launched) — placeholders
    only, clearly labeled as such in `src/data/content/home.ts` (`reviews`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
