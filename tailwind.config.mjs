/** @type {import('tailwindcss').Config} */
// MK Electrical London — Brand-Palette aus der Pixel-Analyse beider
// Original-Logos: reines Monochrom (Schwarz #111113 auf Weiß), Light-BG
// #F5F5F4 wie die alte Site. KEINE Branchenfarbe — Akzent ist Fraunces
// Italic. Signal-Rot nur 24hrs/Emergency, Grün nur WhatsApp.
// Farben als RGB-Triplets, Single Source of Truth: src/styles/global.css :root.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          deep: 'rgb(var(--rgb-ink-deep) / <alpha-value>)',
          soft: 'rgb(var(--rgb-ink-soft) / <alpha-value>)',
        },
        paper: 'rgb(var(--rgb-paper) / <alpha-value>)',
        stone: 'rgb(var(--rgb-stone) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-light': 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        volt: {
          DEFAULT: 'rgb(var(--rgb-volt) / <alpha-value>)',
          bright: 'rgb(var(--rgb-volt-bright) / <alpha-value>)',
          deep: 'rgb(var(--rgb-volt-deep) / <alpha-value>)',
        },
        signal: 'rgb(var(--rgb-signal) / <alpha-value>)',
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
      },
      fontFamily: {
        // Originale der alten Site (Squarespace lud Manrope + Nunito Sans)
        sans: ['"Nunito Sans"', '"Work Sans"', 'system-ui', 'sans-serif'],
        display: ['Manrope', '"Work Sans"', 'system-ui', 'sans-serif'],
        serifit: ['Fraunces', 'Georgia', 'serif'],
        script: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
