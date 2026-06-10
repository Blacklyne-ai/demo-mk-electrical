// Bereitet alle Original-Assets für die neue Site auf (resize + recompress).
// Quelle: docs/assets-raw/ → Ziel: public/images/
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const RAW = '/Users/kosta/Kunden/demo-mk-electrical/docs/assets-raw';
const PUB = '/Users/kosta/Kunden/demo-mk-electrical/public';
const IMG = path.join(PUB, 'images');

for (const d of ['', 'team', 'work', 'areas', 'badges', 'partners']) {
  fs.mkdirSync(path.join(IMG, d), { recursive: true });
}

const jobs = [
  // [src, dest, maxWidth, quality]
  ['Daddy-Zak.jpg', 'hero-martin-zak.jpg', 1300, 80],
  ['IMG_8962.JPG', 'story-generations.jpg', 1100, 82],
  ['IMG_8258.jpg', 'family-selfie.jpg', 1000, 80],
  ['IMG_8964.JPG', 'work/handshake.jpg', 1000, 80],
  ['a3cf9447-ea8e-47d2-aec0-372bf41db00a.JPG', 'work/van-fulham.jpg', 1500, 80],
  ['WhatsApp-Image-2020-07-16-at-16.55.58.jpg', 'work/consumer-unit.jpg', 1100, 80],
  ['WhatsApp-Image-2019-11-18-at-18.54.30.jpeg', 'work/church-lighting.jpg', 1100, 80],
  ['PHOTO-2025-06-03-07-52-27-2.jpg', 'work/bathroom-fulham.jpg', 1100, 80],
  ['Under-Cabinet-Lighting.jpeg', 'work/under-cabinet-lighting.jpg', 1100, 80],
  ['WORKING-TOMMY.jpg', 'work/commercial-garden.jpg', 1100, 80],
  ['ig-YR0KDKM1-image-asset.jpeg', 'team/martin.jpg', 900, 80],
  ['ig-FCBRGGHS-image-asset.jpeg', 'team/laura.jpg', 900, 80],
  ['ig-AU5PNQOS-image-asset.jpeg', 'team/zak.jpg', 900, 80],
  ['ig-GTH8RUR5-image-asset.jpeg', 'team/rory.jpg', 900, 80],
  ['fulham.jpg', 'areas/fulham.jpg', 1400, 78],
  ['chelsea-1024x768.png', 'areas/chelsea.jpg', 1400, 78],
  ['kensington.jpg', 'areas/kensington.jpg', 1400, 78],
  ['clapham-clapham-high.jpg', 'areas/clapham.jpg', 1400, 78],
  ['mayfair.jpg', 'areas/mayfair.jpg', 1400, 78],
  ['MKWA.jpg', 'whatsapp-qr.jpg', 600, 85],
];

for (const [src, dest, w, q] of jobs) {
  const s = path.join(RAW, src);
  if (!fs.existsSync(s)) { console.log('MISSING', src); continue; }
  const img = sharp(s).rotate();
  const meta = await img.metadata();
  await img
    .resize({ width: Math.min(w, meta.width), withoutEnlargement: true })
    .jpeg({ quality: q, mozjpeg: true })
    .toFile(path.join(IMG, dest));
  console.log('OK', dest);
}

// Badges + Partner-Logos: PNG mit Transparenz erhalten, nur verkleinern
const pngJobs = [
  ['nic_eic_transparent.png', 'badges/niceic.png', 400],
  ['269-2695199_niceic-napit-part-p-registered-electricians-part-p.png', 'badges/part-p.png', 400],
  ['tmp1krplhts.webp', 'partners/k-wyatt.png', 700],
  ['logonew-1.png', 'partners/london-efficiency.png', 500],
  ['Screenshot-2025-09-29-at-11.49.45.png', 'partners/liate.png', 500],
];
for (const [src, dest, w] of pngJobs) {
  const s = path.join(RAW, src);
  if (!fs.existsSync(s)) { console.log('MISSING', src); continue; }
  await sharp(s).resize({ width: w, withoutEnlargement: true }).png().toFile(path.join(IMG, dest));
  console.log('OK', dest);
}

// Logos: WebP → echtes PNG (Squarespace lieferte webp mit .png-Endung)
await sharp(path.join(PUB, 'logo.png')).png().toFile(path.join(PUB, 'logo-fixed.png'));
fs.renameSync(path.join(PUB, 'logo-fixed.png'), path.join(PUB, 'logo.png'));
await sharp(path.join(PUB, 'logo-2.png')).png().toFile(path.join(PUB, 'logo-2-fixed.png'));
fs.renameSync(path.join(PUB, 'logo-2-fixed.png'), path.join(PUB, 'logo-2.png'));

// Favicon aus dem runden Badge-Logo (logo-2), quadratisch beschnitten
await sharp(path.join(PUB, 'logo-2.png'))
  .resize(512, 512, { fit: 'contain', background: '#ffffff' })
  .png()
  .toFile(path.join(PUB, 'favicon.png'));
await sharp(path.join(PUB, 'logo-2.png'))
  .resize(180, 180, { fit: 'contain', background: '#ffffff' })
  .png()
  .toFile(path.join(PUB, 'apple-touch-icon.png'));

// OG-Image: Familienfoto vor dem Van, 1200x630
await sharp(path.join(RAW, 'Daddy-Zak.jpg'))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(IMG, 'og-image.jpg'));

console.log('PREP DONE');
