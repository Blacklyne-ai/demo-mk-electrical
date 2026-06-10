// ─────────────────────────────────────────────────────────────
// Area-Pages — verbatim Template der alten Site (alle 5 Seiten
// waren bis auf den Ortsnamen identisch; per Diff verifiziert).
// Emoji-Überschriften der alten Site laufen hier als Lucide-Icons
// (No-Emoji-Regel, s. JUDGEMENT_CALLS.md).
// ─────────────────────────────────────────────────────────────

export interface Area {
  slug: string;
  name: string;
  image: string;
}

export const areaPages: Area[] = [
  { slug: 'fulham', name: 'Fulham', image: '/images/areas/fulham.jpg' },
  { slug: 'chelsea', name: 'Chelsea', image: '/images/areas/chelsea.jpg' },
  { slug: 'kensington', name: 'Kensington', image: '/images/areas/kensington.jpg' },
  { slug: 'clapham', name: 'Clapham', image: '/images/areas/clapham.jpg' },
  { slug: 'mayfair', name: 'Mayfair', image: '/images/areas/mayfair.jpg' },
];

// Verbatim-Template — [AREA] wird je Seite ersetzt
export const areaTemplate = {
  heroQuestion: (a: string) => `Looking for an Electrician in ${a}?`,
  heroAnswer: (a: string) =>
    `You've found the right team. MK Electrical London brings over 20 years of electrical expertise directly to your ${a} doorstep.`,
  whyTitle: (a: string) => `Why ${a} Residents Choose MK Electrical London`,
  whyBody: (a: string) =>
    `When electrical issues strike your ${a} home or business, you need more than just a quick fix – you need a reliable partner who understands the unique electrical demands of London properties. As a family-run business with over two decades of experience, we've built our reputation on delivering exceptional electrical services throughout ${a} and the surrounding areas.`,
  servicesTitle: (a: string) => `Our Complete Electrical Services in ${a}`,
  serviceGroups: [
    {
      icon: 'FileCheck',
      title: 'Electrical Testing & Safety',
      items: [
        'Professional PAT testing for your appliances',
        'Comprehensive EICRs (Electrical Installation Condition Reports)',
        'Full electrical safety inspections',
      ],
    },
    {
      icon: 'PlugZap',
      title: 'Expert Installations',
      items: [
        'Complete electrical installations for homes and businesses',
        'Smart home system integration',
        'EV charger installations for your electric vehicle',
      ],
    },
    {
      icon: 'Zap',
      title: 'Reliable Repair Work',
      items: ['Emergency electrical repairs', 'Fault finding and diagnostics', 'Electrical maintenance services'],
    },
  ],
  propertyTitle: (a: string) => `Serving ${a}’s Diverse Property Needs`,
  propertyBody:
    "Whether you're a homeowner upgrading your electrical systems, a landlord ensuring compliance with safety regulations, or a business owner maintaining your commercial property, we have the expertise to handle your electrical requirements with precision and care.",
  differenceTitle: 'The MK Electrical London Difference',
  difference: [
    { title: 'Family Heritage', body: 'Over 20 years of electrical expertise passed down through generations' },
    { title: 'Local Knowledge', body: (a: string) => `Deep understanding of ${a}'s unique property requirements` },
    { title: 'Professional Standards', body: 'Fully qualified and insured for your peace of mind' },
    { title: 'Comprehensive Service', body: 'From testing to installation to emergency repairs' },
  ],
  readyTitle: 'Ready to Get Started?',
  readyBody: (a: string) =>
    `Don't let electrical issues disrupt your ${a} property. Our experienced team is ready to provide the reliable, professional electrical services you deserve.`,
  readyCta: (a: string) =>
    `Contact MK Electrical London today for your free consultation and discover why ${a} residents trust us with their electrical needs.`,
};
