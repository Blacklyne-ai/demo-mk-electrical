# Verbatim-Audit: prüft jeden inhaltlichen Satz der alten Site
# (docs/text-*.txt) gegen den gebauten Output (dist/**/*.html).
import glob
import html as htmllib
import re

def norm(s: str) -> str:
    s = htmllib.unescape(s)
    s = s.replace('’', "'").replace('‘', "'")
    s = s.replace('“', '"').replace('”', '"')
    s = s.replace('–', '-').replace('—', '-')
    s = re.sub(r'[\U0001F300-\U0001FAFF☀-➿️]', '', s)
    s = re.sub(r'[^a-z0-9]+', ' ', s.lower())
    return s.strip()

# ── Korpus: kompletter Build-Text ──
corpus = []
for f in glob.glob('dist/**/*.html', recursive=True):
    t = open(f, encoding='utf8').read()
    t = re.sub(r'<script[\s\S]*?</script>|<style[\s\S]*?</style>', ' ', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    corpus.append(t)
CORPUS = norm(' '.join(corpus))

# ── Boilerplate der alten Site (Nav/Footer/Form), wird übersprungen ──
SKIP_EXACT = {
    'skip to content', 'home', 'about', 'services', 'reviews', 'guides',
    'trade partners', 'contact', "t's & c's", 'data protection', 'book now',
    'follow us on instagram', 'copyright 2025', 'location',
    'mkelectricallondon@gmail.com', '0207-385-5016', '02073855016',
    'send', 'name', 'first name', 'last name', 'email', 'phone', 'address',
    'message', '(required)', 'country', 'postcode', 'city / town',
    'address line 1', 'address line 2', 'sign up for news and updates',
    'all', '|', 'free guides', '£0.00',
}
SKIP_PATTERNS = [
    re.compile(r'^item \d+ of \d+$', re.I),
    re.compile(r'^unit 3, townmead', re.I),
]

# Bewusste Anpassungen (JUDGEMENT_CALLS.md) — als "erklärt" gelistet
EXPLAINED = [
    ('please fill out the form below', 'Kein Formular (Blacklyne-Standard) - Satz sinnwahrend auf die Kontakt-Tiles verteilt'),
    ("as a family member's we can say proudly say", 'Tippfehler der alten Site geglättet ("we can proudly say")'),
    ('her project are absolutely stunning', 'Tippfehler der alten Site geglättet ("her projects are")'),
    ('would 100 use again', None),  # Emoji-Ersatz, matcht als 100%
    ('click here to leave us', 'Link-Zeilen als Review-Karten umgesetzt (Google/Checkatrade/TrustATrader-Links 1:1 übernommen)'),
    ('whatsapp us directly', None),
    ('scan with your phone', None),
    ('hello & welcome', 'Welcome-Blurb der alten Minimal-Homepage - durch echte Startseite ersetzt, Kernsatz lebt im Guides-CTA'),
    ('take a look around', 'dito'),
    ('we hope you find all the information you need on our site', 'dito'),
]

results = {'ok': 0, 'missing': [], 'explained': []}
checked = set()

for tf in sorted(glob.glob('docs/text-*.txt')):
    if 'appointments' in tf:
        continue  # 404-Seite der alten Site
    page = tf.split('text-')[1].replace('.txt', '')
    # Area-Pages: identisches Template, nur Fulham prüfen
    if page.startswith('area-') and page != 'area-fulham':
        continue
    raw = open(tf, encoding='utf8').read()
    # Länderliste der alten Contact-Form überspringen
    if page == 'contact':
        raw = re.sub(r'Afghanistan[\s\S]*?Zimbabwe', '', raw)
    for line in raw.splitlines():
        line = line.strip()
        if not line or len(line) < 25:
            continue
        n = norm(line)
        if not n or n in SKIP_EXACT or len(n) < 25 or n in checked:
            continue
        if any(p.match(line.strip()) for p in SKIP_PATTERNS):
            continue
        checked.add(n)
        if n in CORPUS:
            results['ok'] += 1
            continue
        # Teilstück-Check: 8-Wort-Fenster (fängt Umbruch-Unterschiede ab)
        words = n.split()
        windows = [' '.join(words[i:i+8]) for i in range(0, max(1, len(words)-7), 4)]
        hits = sum(1 for w in windows if w in CORPUS)
        if windows and hits / len(windows) >= 0.7:
            results['ok'] += 1
            continue
        expl = next((e for key, e in EXPLAINED if norm(key) in n), 'NOPE')
        if expl != 'NOPE':
            results['explained'].append((page, line[:90], expl))
        else:
            results['missing'].append((page, line[:130], f'{hits}/{len(windows)} Fenster'))

print(f"✓ verbatim übernommen: {results['ok']} Sätze/Zeilen")
print(f"\n── BEWUSSTE ANPASSUNGEN ({len(results['explained'])}) ──")
seen_expl = set()
for page, line, expl in results['explained']:
    if expl and expl not in seen_expl:
        seen_expl.add(expl)
        print(f"  [{page}] {line}\n    → {expl}")
print(f"\n── FEHLT / PRÜFEN ({len(results['missing'])}) ──")
for page, line, info in results['missing']:
    print(f"  [{page}] ({info}) {line}")
