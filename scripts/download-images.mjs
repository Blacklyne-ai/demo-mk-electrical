// Lädt alle Squarespace-CDN-Bilder in maximaler Auflösung nach docs/assets-raw/
import fs from 'node:fs';
import path from 'node:path';

const DOCS = '/Users/kosta/Kunden/demo-mk-electrical/docs';
const OUT = path.join(DOCS, 'assets-raw');
fs.mkdirSync(OUT, { recursive: true });

const urls = JSON.parse(fs.readFileSync(path.join(DOCS, 'images.json'), 'utf8'));
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

for (const url of urls) {
  if (!url.includes('squarespace-cdn.com')) continue;
  const base = decodeURIComponent(url.split('/').pop()).replace(/\+/g, ' ').replace(/[^\w.\- ]/g, '').replace(/\s+/g, '-');
  const dest = path.join(OUT, base);
  if (fs.existsSync(dest)) continue;
  try {
    const res = await fetch(url + '?format=2500w', { headers: { 'User-Agent': UA, Accept: 'image/jpeg,image/png,image/*,*/*' } });
    if (!res.ok) { console.log('FAIL', res.status, base); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log('OK', base, Math.round(buf.length / 1024) + 'kb');
  } catch (e) {
    console.log('ERR', base, e.message);
  }
}
console.log('DOWNLOAD DONE');
