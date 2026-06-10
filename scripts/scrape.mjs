// Phase 0 — Scrape der alten Squarespace-Site + Referenz-Screenshots
import { chromium } from 'playwright';
import fs from 'node:fs';

const OUT = '/Users/kosta/Kunden/demo-mk-electrical/docs';
fs.mkdirSync(OUT, { recursive: true });

const BASE = 'https://www.mkelectricallondon.co.uk';
const pages = [
  [`${BASE}/home`, 'home'],
  [`${BASE}/about`, 'about'],
  [`${BASE}/services`, 'services'],
  [`${BASE}/reviews`, 'reviews'],
  [`${BASE}/guides`, 'guides'],
  [`${BASE}/trade-partners`, 'trade-partners'],
  [`${BASE}/contact`, 'contact'],
  [`${BASE}/ts-cs`, 'terms'],
  [`${BASE}/data-protection`, 'data-protection'],
  [`${BASE}/appointments`, 'appointments'],
  [`${BASE}/mkelectricallondon-fulham`, 'area-fulham'],
  [`${BASE}/mkelectricallondon-chelsea`, 'area-chelsea'],
  [`${BASE}/mkelectricallondon-kensington`, 'area-kensington'],
  [`${BASE}/mkelectricallondon-clapham`, 'area-clapham'],
  [`${BASE}/mkelectricallondon-mayfair`, 'area-mayfair'],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const allImages = new Set();
const meta = {};

async function lazyScroll(p) {
  await p.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, 700);
        y += 700;
        if (y >= document.body.scrollHeight + 1400) resolve();
        else setTimeout(step, 120);
      };
      step();
    });
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(900);
}

for (const [url, name] of pages) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(1200);
    await lazyScroll(page);
    await page.screenshot({ path: `${OUT}/old-${name}.png`, fullPage: true });
    fs.writeFileSync(`${OUT}/scrape-${name}.html`, await page.content());
    const text = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync(`${OUT}/text-${name}.txt`, text);
    const imgs = await page.evaluate(() => {
      const urls = new Set();
      document.querySelectorAll('img').forEach((i) => {
        if (i.currentSrc) urls.add(i.currentSrc);
        if (i.src) urls.add(i.src);
        const d = i.getAttribute('data-src') || i.getAttribute('data-image');
        if (d) urls.add(d);
      });
      document.querySelectorAll('[style*="background-image"]').forEach((el) => {
        const m = el.getAttribute('style').match(/url\(["']?([^"')]+)/);
        if (m) urls.add(m[1]);
      });
      return [...urls];
    });
    imgs.forEach((u) => allImages.add(u.split('?')[0]));
    if (name === 'home') {
      meta.fonts = await page.evaluate(() => {
        const pick = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const cs = getComputedStyle(el);
          return { family: cs.fontFamily, weight: cs.fontWeight, size: cs.fontSize, transform: cs.textTransform, spacing: cs.letterSpacing };
        };
        return { body: pick('body'), h1: pick('h1'), h2: pick('h2'), h3: pick('h3'), p: pick('main p, p'), button: pick('a.btn, .sqs-block-button-element, a[href*="appointment"], a') };
      });
      meta.colors = await page.evaluate(() => {
        const out = {};
        const btn = document.querySelector('.sqs-block-button-element, a.btn');
        if (btn) { const cs = getComputedStyle(btn); out.button = { bg: cs.backgroundColor, color: cs.color }; }
        out.body = { bg: getComputedStyle(document.body).backgroundColor, color: getComputedStyle(document.body).color };
        const header = document.querySelector('header');
        if (header) out.header = { bg: getComputedStyle(header).backgroundColor };
        return out;
      });
      meta.stylesheets = await page.evaluate(() => [...document.querySelectorAll('link[rel="stylesheet"]')].map((l) => l.href));
    }
    console.log('OK:', name);
  } catch (e) {
    console.log('SKIP:', name, '—', e.message.split('\n')[0]);
  }
}

fs.writeFileSync(`${OUT}/images.json`, JSON.stringify([...allImages].sort(), null, 2));
fs.writeFileSync(`${OUT}/meta.json`, JSON.stringify(meta, null, 2));

// Referenz-Screenshots (Maßstab)
for (const [url, name] of [
  ['https://www.route66-hh.de/', 'ref-route66'],
  ['https://www.auto-motorrad-freigang.de/', 'ref-amf'],
  ['https://www.astonservicehamburg.de/', 'ref-aston'],
]) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${OUT}/${name}.png` });
    await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });
    console.log('OK:', name);
  } catch (e) {
    console.log('SKIP:', name);
  }
}

await browser.close();
console.log('SCRAPE DONE —', allImages.size, 'image urls');
