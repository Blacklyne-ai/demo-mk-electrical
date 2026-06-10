// ─────────────────────────────────────────────────────────────
// MK Electrical London — zentrale Site-Konfiguration.
// Jede Geschäftsangabe stammt von der alten Site
// (mkelectricallondon.co.uk) oder dem Briefing. Nichts erfunden.
// UK English durchgehend. Telefon-Display verbatim alte Site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'MK Electrical London',
  legalName: 'MK London Group Ltd', // lt. T&Cs/Data-Protection der alten Site
  companyNo: '13570688', // OPERATOR-TODO: ggf. neue Ltd-Nummer (siehe JUDGEMENT_CALLS.md)
  tagline: 'Family-run electrical contractors · South West London · Since 1994',
  description:
    'Family-run electrical contractors in Fulham since 1994. EICRs, PAT testing, rewiring, fuse boards, EV chargers and fault finding — over 5,000 happy customers across South West London. NICEIC Approved Contractors.',
  url: 'https://demo-mk-electrical.pages.dev',

  phone: '0207-385-5016',
  phoneIntl: '+442073855016',

  email: 'mkelectricallondon@gmail.com',

  instagram: 'mkelectricallondon',
  instagramUrl: 'https://www.instagram.com/mkelectricallondon/',

  // Offizieller WhatsApp-Business-Link der alten Contact-Seite
  whatsappUrl: 'https://wa.me/message/URV5FNFUXC2IO1',

  address: {
    unit: 'Unit 3',
    estate: 'Townmead Business Centre',
    street: 'William Morris Way',
    city: 'London',
    postcode: 'SW6 2UP',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  registeredAddress: '39 Langthorne Street, London SW6 6JT',

  // Zertifizierungen (Badges 1:1 von der alten Site)
  certifications: ['NICEIC Approved Contractors', 'Part P Registered'],

  stats: {
    since: 1994,
    happyCustomers: 5000,
    yearsHandedDown: '30+',
  },

  serviceAreaNote: 'Most London postcodes (excluding East London)',

  // „Leave a review"-Links, verbatim von der alten Reviews-Seite
  reviewLinks: {
    google: 'https://g.page/r/CeHg1XrfDhFaEBM/review',
    checkatrade: 'https://www.checkatrade.com/give-feedback/464028',
    trustatrader: 'https://www.trustatrader.com/leave-a-review/details?trader_advert=5ced3641a8b9b16a435d094d',
  },

  googleMapsEmbed:
    'https://www.google.com/maps?q=Townmead+Business+Centre,+William+Morris+Way,+London+SW6+2UP&z=15&output=embed',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Townmead+Business+Centre+William+Morris+Way+London+SW6+2UP',
};

// ── Link-Helper ───────────────────────────────────────────────
export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = site.whatsappUrl;

export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation (Nav-Map verbindlich von der alten Site) ───────
export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'All Services' },
      { href: '/services/eicr-testing', label: 'EICR Testing' },
      { href: '/services/pat-testing', label: 'PAT Testing' },
      { href: '/services/rewiring', label: 'Rewiring' },
      { href: '/services/fuse-boards', label: 'Fuse Boards' },
      { href: '/services/ev-chargers', label: 'EV Chargers' },
      { href: '/services/fault-finding', label: 'Fault Finding' },
    ],
  },
  { href: '/reviews', label: 'Reviews' },
  { href: '/guides', label: 'Guides' },
  { href: '/trade-partners', label: 'Trade Partners' },
  { href: '/contact', label: 'Contact' },
];

export const legalNav = [
  { href: '/terms', label: "T's & C's" },
  { href: '/data-protection', label: 'Data Protection' },
];

// ── Service-Gebiet ────────────────────────────────────────────
// 5 Area-Pages (wie alte Site) + Putney/Barnes (echte Review-Postcodes)
export const areas = [
  { slug: 'fulham', name: 'Fulham', linked: true },
  { slug: 'chelsea', name: 'Chelsea', linked: true },
  { slug: 'kensington', name: 'Kensington', linked: true },
  { slug: 'clapham', name: 'Clapham', linked: true },
  { slug: 'mayfair', name: 'Mayfair', linked: true },
  { slug: '', name: 'Putney', linked: false },
  { slug: '', name: 'Barnes', linked: false },
];

// ── Hero-Trust-Strip ──────────────────────────────────────────
export const trustStrip = [
  'Since 1994',
  '5,000+ happy customers',
  'NICEIC Approved',
  'Fulham SW6',
  'Most London postcodes',
];
