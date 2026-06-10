# MK Electrical London — 2026 Redesign (Demo)

Blacklyne-Demo: Ablösung der Squarespace-Site von **MK Electrical London Ltd**
(mkelectricallondon.co.uk) durch eine statische Astro-5-Site.

Family-run electrical contractors, Fulham SW6 · seit 1994 · "From Mario to
Martin" · NICEIC Approved. Monochrome Editorial-CI direkt aus den
Original-Logos (siehe [docs/STYLE-GUIDE.md](docs/STYLE-GUIDE.md)).

## Stack

- **Astro 5** — statisch, kein SSR, kein Adapter
- **Tailwind v3.4** via `@astrojs/tailwind`
- **@lucide/astro** Icons (Instagram als inline SVG)
- **@fontsource** self-hosted: Manrope + Nunito Sans (Originale der alten
  Site) · Fraunces Italic (Akzent) · Caveat (Signatur) · JetBrains Mono

## Entwicklung

```bash
npm install
npm run dev        # localhost:4321
npm run build      # → dist/
```

## Deploy: Cloudflare Pages

PAGES-Tab · Framework preset **Astro** · Build `npm run build` · Output `dist`

## Inhalt

Alle Texte verbatim von der alten Site (21 Reviews, komplette About-Story
inkl. Yellow-Pages-Witz, T&Cs, Data Protection, Area-Templates). Alle Fotos,
Logos und Badges 1:1 von der alten Site übernommen. Nichts erfunden.

**Vor Live-Gang:** [docs/JUDGEMENT_CALLS.md](docs/JUDGEMENT_CALLS.md) lesen -
dort stehen die Operator-TODOs (Companies-House-Klärung, Öffnungszeiten,
Book-now-Ziel, Guide-PDF, Domain-E-Mail).

## Seiten (21)

Home · About · Services (+6 Service-Subpages) · Reviews · Guides ·
Trade Partners · Contact · 5 Area-Pages (Fulham, Chelsea, Kensington,
Clapham, Mayfair) · T's & C's · Data Protection · 404
