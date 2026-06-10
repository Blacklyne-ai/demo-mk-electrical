# Style Guide: MK Electrical London

Stand: 2026-06-10 · Quelle: Pixel-Analyse beider Original-Logos (sharp) +
Playwright-Scrape der kompletten Squarespace-Site (www.mkelectricallondon.co.uk).

## Logo-Analyse (pixel-extrahiert)

Beide Logos (`/public/logo.png` Wortmarke im Rahmen, `/public/logo-2.png` runder
Badge) sind **rein monochrom**: Schwarz `#111` auf Weiß, Tracking-starke
Versalien, "EST: 1994". Top-Farben der Pixel-Analyse: `#ffffff`, Grautöne
(Anti-Aliasing), Schwarz. **Es gibt keine Brand-Buntfarbe.**

Die alte Site bestätigt das: Body-Hintergrund `#F5F5F5`, CTAs schwarz
(`rgb(0,0,0)` auf Weiß), keinerlei Akzentfarbe im Layout.

→ Konsequenz (Logo-Analyse vor Branchen-Klischee): **kein erfundenes
Elektriker-Blau/Gelb.** Die Marke ist ein monochromes Editorial-System.
Differenzierung gegen den Checkatrade-Einheitsbrei entsteht genau dadurch.

## Farbpalette

| Element | Hex | Quelle |
|---|---|---|
| Ink (Brand Primary, Text, CTAs) | `#111113` | Logo-Schwarz / CTAs alte Site |
| Ink Deep (Dark Sections, Footer) | `#0B0B0D` | abgeleitet aus Ink |
| Paper (Light BG) | `#F5F5F4` | Body-BG alte Site `#F5F5F5` |
| Card White | `#FFFFFF` | Logo-Weiß |
| Muted (Body-Text) | `#5F6368` | neutralgrau, AA auf Weiß |
| Border | `#E5E5E2` | hairline |
| Signal Red (NUR 24hrs/Emergency-Mikroakzent) | `#D92D20` | Van-Beschriftung "24hrs" (Foto a3cf9447) |
| Green (NUR WhatsApp-Button) | `#1FA968` | WhatsApp-Funktionsfarbe |

Akzent-Logik im Monochrom-System: Akzentwörter in Headlines laufen als
**Fraunces Italic** (Serif-Kontrast statt Farbkontrast) - exakt das Muster von
astonservicehamburg.de, übersetzt in Schwarz/Weiß.

## Schrift

Squarespace-Site lädt (aus `meta.json` / Google-Fonts-Link der alten Site):
- **Manrope** 500/700 - alle Headings (h2: 50.56px, letter-spacing -2%)
- **Nunito Sans** 400/700 - Body

Modern equivalent: **identisch, self-hosted** via `@fontsource/manrope` +
`@fontsource/nunito-sans` (die Originale sind freie Google Fonts).
Ergänzt um (Design-Additionen, dokumentiert):
- `@fontsource/fraunces` Italic - Akzentwörter in Editorial-Headlines
- `@fontsource/caveat` - einzig für das "All the best, Laura & Martin" Signatur-Element
- `@fontsource/jetbrains-mono` - Eyebrows, Stats, Postcodes (technischer Zertifikats-Charakter)

Fallback: Work Sans → system-ui Stack.

## Brand-Charakter

Familie · 2 Generationen (Mario 1994 → Martin 2010, mit Laura) · ehrlich ·
leiser Humor (Yellow-Pages-Witz) · Community-verwurzelt (Fulham SW6 /
South West London) · NICEIC-professionell · monochrom-editorial wie das Logo.

## Bild-Assets (alle von der alten Site, 1:1 übernommen)

- `hero-martin-zak.jpg` - Martin + Zak (gelber Helm!) vor dem schwarzen MK-Van, Fulham
- `story-generations.jpg` - Drei-Generationen-Silhouette (Hero der alten Site)
- `family-selfie.jpg` - Martin, Zak, Rory, Laura
- `team/{martin,laura,zak,rory}.jpg` - die B&W "Meet the team"-Portraits vom Instagram-Grid
- `work/*` - echte Arbeitsfotos (Consumer Unit, Kirchen-Lichtinstallation, Bad Fulham, Under-Cabinet, Commercial, Van)
- `areas/*` - die 5 Original-Area-Bilder der alten Site
- `badges/niceic.png` + `badges/part-p.png` - offizielle Badges von der alten Site
- `partners/*` - K Wyatt / London Efficiency / LIATE Logos von der Trade-Partners-Seite
- `whatsapp-qr.jpg` - Original-QR ("Scan with your phone", Contact-Seite)

## tailwind.config.mjs

Tokens als RGB-Triplets in `src/styles/global.css :root`, gemappt in
`tailwind.config.mjs` (`ink`, `paper`, `signal`, `muted`, `line`, …).
Im ersten Commit enthalten.

## Section-Rhythmus

~80% Light (Paper/White im Wechsel) · Dark (Ink Deep) nur: Services-Grid,
Final CTA-Band, Footer. Editorial-Headlines mit Fraunces-Italic-Akzentwort,
Trust-Strips mit `·`-Trennern, Floating Cards auf Hero-Bild, "MK"
Ghost-Watermark, JetBrains-Mono-Eyebrows.
