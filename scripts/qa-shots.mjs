// QA: Full-Page-Screenshots der neuen Site (Desktop + Mobile) → docs/qa/
import { chromium } from 'playwright';
import fs from 'node:fs';

const OUT = '/Users/kosta/Kunden/demo-mk-electrical/docs/qa';
fs.mkdirSync(OUT, { recursive: true });
const BASE = 'http://localhost:4364';

const pages = [
  ['/', 'home'],
  ['/about', 'about'],
  ['/services', 'services'],
  ['/services/eicr-testing', 'service-eicr'],
  ['/services/ev-chargers', 'service-ev'],
  ['/reviews', 'reviews'],
  ['/guides', 'guides'],
  ['/trade-partners', 'trade-partners'],
  ['/contact', 'contact'],
  ['/areas/fulham', 'area-fulham'],
  ['/terms', 'terms'],
  ['/404', 'notfound'],
];

const browser = await chromium.launch();

for (const [vp, label] of [[{ width: 1440, height: 900 }, 'desktop'], [{ width: 375, height: 812 }, 'mobile']]) {
  const page = await browser.newPage({ viewport: vp });
  for (const [path, name] of pages) {
    if (label === 'mobile' && !['home', 'about', 'services', 'contact', 'area-fulham', 'reviews'].includes(name)) continue;
    try {
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 20000 });
      // Cookie-Banner weg + alle fade-ins sichtbar machen für den Shot
      await page.evaluate(() => {
        localStorage.setItem('mk-cookie-notice', 'ok');
        document.getElementById('cookie-banner')?.remove();
        document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('is-visible'));
        document.querySelector('astro-dev-toolbar')?.remove();
      });
      // Scroll-Pass, damit lazy Images vor dem Full-Page-Shot laden.
      // WICHTIG: behavior 'instant' — html hat scroll-behavior:smooth,
      // plain scrollTo/scrollBy animiert sonst und erreicht die Tiefe nie.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo({ top: y, behavior: 'instant' });
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
      await page.waitForTimeout(900);
      await page.screenshot({ path: `${OUT}/${label}-${name}.png`, fullPage: true });
      console.log('OK', label, name);
    } catch (e) {
      console.log('FAIL', label, name, e.message.split('\n')[0]);
    }
  }
  await page.close();
}

await browser.close();
console.log('QA SHOTS DONE');
