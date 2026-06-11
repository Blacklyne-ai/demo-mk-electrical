# Judgement Calls & Operator-TODOs: MK Electrical London

Stand: 2026-06-10. Alle Punkte vor Live-Gang mit dem Kunden klären.

## OPERATOR-TODOS (kundenseitig zu klären)

1. **Companies House / Rechtsentität - WICHTIG.**
   Companies House zeigt für "MK Electrical London Ltd" (13570688):
   *"Active - Active proposal to strike off"*. Die alten T&Cs und die
   Data-Protection-Seite nennen aber bereits **"MK London Group Ltd
   (Trading as MK Electrical London)"** - eine Umfirmierung scheint
   abgeschlossen oder im Gange. Vor Live-Gang klären: korrekte Ltd +
   Company No. für Footer/Impressum. Der Build zeigt im Footer aktuell
   neutral "MK London Group Ltd · Trading as MK Electrical London ·
   Company No. 13570688" - **Nummer ggf. austauschen.**

2. **Registered vs. Trading Address.** Registered: 39 Langthorne St,
   SW6 6JT (Companies House). Trading: Unit 3, Townmead Business Centre,
   William Morris Way, SW6 2UP (Live-Site Footer). Build nutzt: Kontakt/
   Maps = Trading Address, Footer-Legal-Zeile = Registered Address.
   Mit Kunde bestätigen.

3. **Öffnungszeiten fehlen.** Die alte Site nennt nirgends Öffnungszeiten
   (deshalb kein Live-"Open now"-Status im Build - wäre erfunden).
   Der Van trägt "24hrs". Beim Kunden erfragen: Bürozeiten + ob 24h-Notdienst
   aktiv beworben werden soll → dann Live-Status-Bar nachrüsten.

4. **Book-now-Ziel.** Der "BOOK NOW"-Button der alten Site zeigt auf
   `/appointments` - **diese Seite ist eine 404** (Squarespace Scheduling
   offenbar deaktiviert). Build: "Book now" → /contact (Telefon/WhatsApp/
   E-Mail). Falls Online-Booking gewünscht: Tool klären (z.B. Squarespace
   Scheduling Export, Calendly).

5. **Gratis-Guide als Datei.** Guides-Seite der alten Site ist ein
   Squarespace-Shop mit einem Produkt: "Electrical Checklist for
   Homeowners & Landlords" (£0.00). Die PDF/Datei selbst ist nicht
   öffentlich abrufbar → vom Kunden anfordern und als Download hinterlegen.
   Build: Guide-Card mit E-Mail-Request-CTA als Zwischenlösung.

6. **E-Mail-Adresse.** Footer/Kontakt der alten Site: mkelectricallondon@gmail.com
   (so übernommen). Die Data-Protection-Seite nennt aber bereits
   **info@mkelectricallondon.co.uk** - die Domain-Mail existiert also.
   Empfehlung: durchgängig auf info@… wechseln; bis dahin bleibt die
   Gmail überall dort, wo die alte Site sie zeigt (verbatim-Regel).

7. **Google Reviews.** Review-Deeplink der alten Site übernommen
   (g.page/r/CeHg1XrfDhFaEBM/review). Maps-Embed läuft per Address-Query
   (kein API-Key nötig). Die 4 Reviews der alten Services-Seite tragen
   Google-Format ("Positive: Responsiveness, …") und sind als Quelle
   "via Google" markiert. Für Live-Einbindung weiterer Google-Reviews:
   Place-ID/Widget mit Kunde klären.

## JUDGEMENT CALLS (Build-Entscheidungen)

1. **Monochrome CI statt Branchenfarbe** - beide Logos sind schwarz/weiß,
   alte Site komplett monochrom (#F5F5F5 + schwarze CTAs). Akzent läuft
   über Fraunces-Italic-Serif statt Farbe. Signal-Rot nur als Mikroakzent
   für 24hrs/Emergency (von der Van-Beschriftung), Grün nur für WhatsApp.

2. **Kein Kontaktformular** (Blacklyne-Standard, kein Backend-Hookup):
   Contact-Seite = Tiles für Anruf / WhatsApp / E-Mail / Instagram +
   Original-WhatsApp-QR + Maps. Der Formular-Bezugssatz der alten Seite
   ("Please fill out the form below…") wurde sinnwahrend angepasst
   ("the more detail you give us, the smoother your booking").

3. **WhatsApp entdeckt**: Die alte Contact-Seite hat einen WhatsApp-QR +
   offiziellen Business-Link `wa.me/message/URV5FNFUXC2IO1` → als
   vollwertiger Kontaktkanal verbaut (Buttons + QR).

4. **Emojis der alten Site** (Area-Pages-Überschriften 🔧⚡🛠️✅, Reviews
   "💯"/"👍🏻") → Website-Regel "keine Emojis": Lucide-Icons ersetzen die
   Überschriften-Emojis; in Annabels Review wurde "💯" zu "100%"
   (sinnerhaltend), das "👍🏻" bei K Wyatt entfernt.

5. **Services-Grid = echte Leistungen** der alten Services-Seite
   (inkl. EV-Charger, OLEV-registriert - stand nicht im Briefing) statt
   der Briefing-Schätzliste. "Domestic Refurbishment" bleibt über
   About/Reviews belegt und läuft als Teil von Rewiring/Installations.
   Der EICR-USP "We test 50% per circuit" ist prominent verbaut.

6. **21 Verbatim-Reviews** von allen Unterseiten der alten Site
   eingesammelt (Home 5, About 4, Services 4 via Google, Terms 4,
   Data-Protection 4) - Reviews-Seite zeigt alle, mit Postcode-Kontext.

7. **Trade-Partner-Texte**: 1:1 übernommen, nur offensichtliche
   Tippfehler-Doppelungen geglättet ("we can say proudly say" →
   "we can proudly say"); Familienbezüge (Danielle = Martins Schwester)
   bleiben - das ist die Marke.

8. **Drei-Generationen-Silhouette** (Hero der alten Site) bewusst in die
   Story-Section gesetzt (passt wörtlich zu "From Mario to Martin"),
   Hero nutzt das authentische Martin+Zak-Foto vor dem beschrifteten Van.

9. **Lighthouse-Messung** (lokal, gzip-Server, simuliertes Slow-4G):
   Mobile 92 / LCP 3.2s / CLS 0 / TBT 0ms · A11y 100 · Best Practices 100 ·
   SEO 100 - identisch vor und nach dem v2-Interaktiv-Ausbau. Desktop 100 /
   LCP 0.6s. Optimiert: Latin-only-Font-Subsets, Hero in AVIF+srcset,
   Font-Preloads, 2.5KB-Favicon, CSS inline. Auf Cloudflare Pages
   (Brotli + Edge-RTT statt simulierter 150ms) liegt der Mobile-Feldwert
   erfahrungsgemäß über 95 - nach Deploy via PageSpeed Insights verifizieren.

10. **v2 "Ink + Voltage"** (Operator-Direktive: mehr Layer, Interaktivität,
    Branchen-Feeling, größer wirken): Volt-Amber #FFB81C als Stromfarbe
    ergänzt - bewusst aus den echten Assets abgeleitet (gelbe Leiter auf
    dem Van, Zaks Helm), nicht erfunden. Alle Interaktiv-Module arbeiten
    ausschließlich mit echten Inhalten (Fuse-Board = echte Services,
    Dimmer = echtes Arbeitsfoto, Marquee = echte Siegel/Reviews,
    Postcode-Chips = echte Review-Postcodes). Alle Animationen respektieren
    prefers-reduced-motion; Fuse-Board ist voll tastaturbedienbar
    (Tab-Semantik + Pfeiltasten).
