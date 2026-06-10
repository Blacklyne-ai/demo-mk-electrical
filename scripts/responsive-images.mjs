// Erzeugt -480/-800-Varianten für alle Above-the-fold-Bilder (srcset).
import sharp from 'sharp';
import fs from 'node:fs';

const IMG = '/Users/kosta/Kunden/demo-mk-electrical/public/images';

const targets = [
  'hero-martin-zak.jpg',
  'family-selfie.jpg',
  'work/consumer-unit.jpg',
  'work/under-cabinet-lighting.jpg',
  'work/bathroom-fulham.jpg',
  'work/van-fulham.jpg',
  'work/church-lighting.jpg',
  'areas/fulham.jpg',
  'areas/chelsea.jpg',
  'areas/kensington.jpg',
  'areas/clapham.jpg',
  'areas/mayfair.jpg',
];

for (const t of targets) {
  const src = `${IMG}/${t}`;
  if (!fs.existsSync(src)) { console.log('MISSING', t); continue; }
  for (const w of [480, 800]) {
    const dest = src.replace(/\.jpg$/, `-${w}.jpg`);
    await sharp(src).resize({ width: w, withoutEnlargement: true }).jpeg({ quality: 75, mozjpeg: true }).toFile(dest);
  }
  // Basisbild zusätzlich auf q75 nachverdichten, falls > 250KB
  const stat = fs.statSync(src);
  if (stat.size > 250_000) {
    const buf = await sharp(src).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
    fs.writeFileSync(src, buf);
  }
  console.log('OK', t, Math.round(fs.statSync(src).size / 1024) + 'kb base');
}
console.log('RESPONSIVE DONE');
