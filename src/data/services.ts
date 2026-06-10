// ─────────────────────────────────────────────────────────────
// Services — Liste und Texte von der echten Services-Seite der
// alten Site (inkl. der verbatim „Useful to know"-Blöcke zu
// PAT, EICR und EV-Chargern). Keine erfundenen Leistungen.
// ─────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  name: string;
  navName: string;
  icon: string;
  short: string;
  metaDescription: string;
  heroLine: string;
  intro: string[];
  includes: { label: string; detail?: string }[];
  knowBlocks?: { title: string; paragraphs: string[]; list?: string[]; listTitle?: string }[];
  image: string;
  imageAlt: string;
  emergency?: boolean;
}

// Verbatim von der alten Services-Seite: „We can help with:"
export const helpWithList = [
  'Fault finding and diagnostics',
  'Tripping fuse boards',
  'Light fitting replacements and bulb changes',
  'Socket and switch repairs',
  'Spotlight upgrades',
  'Fuse board (consumer unit) replacements',
  'Partial and full rewires',
  'EV charger installations',
  'Electrical testing and certification',
];

// Verbatim: Preis-Transparenz-Block der alten Services-Seite
export const pricingBlock = {
  intro: 'For larger projects, pricing is provided individually based on:',
  items: ['The scope of work required', 'The estimated time to complete', 'The materials needed'],
  outro:
    'Every property is different, so we ensure quotations are clear, transparent, and tailored to your specific job. If you’re unsure what you need, we’re always happy to advise.',
};

export const services: Service[] = [
  {
    slug: 'eicr-testing',
    name: 'EICR Testing',
    navName: 'EICR Testing',
    icon: 'FileCheck',
    short:
      'Electrical Installation Condition Reports for homeowners and landlords — tested at 50% per circuit, significantly more thorough than many lower-cost inspections.',
    metaDescription:
      'EICR testing in South West London by NICEIC Approved Contractors. We test 50% per circuit — significantly more thorough than many low-cost inspections. Family-run since 1994.',
    heroLine: 'Inspections that actually inspect.',
    intro: [
      'We are sometimes asked why our EICR prices are higher than some other companies. The reason is simple: our inspections are more thorough.',
      'We test 50% per circuit, which is significantly more comprehensive than many lower-cost inspections that may test only 15–20%.',
      'We also include clear descriptions and supporting photos where needed, helping ensure accurate remedial quotes and fewer surprises. For rental properties, EICRs are typically required every 3–5 years.',
    ],
    includes: [
      { label: '50% per circuit tested', detail: 'versus 15–20% on many lower-cost inspections' },
      { label: 'Clear descriptions and supporting photos', detail: 'for accurate remedial quotes and fewer surprises' },
      { label: 'Landlord certificates', detail: 'documented proof of safety for rental properties' },
      { label: 'Testing and remedials from one team', detail: 'clarity, compliance, and peace of mind' },
    ],
    knowBlocks: [
      {
        title: 'Why testing percentage matters',
        paragraphs: ['Lower testing percentages can result in:'],
        list: [
          'More faults being discovered later during remedial work',
          'Unexpected additional costs',
          'Limited reports that make it hard to compare quotes',
          'In some cases, re-testing being required',
        ],
      },
      {
        title: 'When comparing quotes, always ask:',
        paragraphs: [
          '“What percentage of the installation will be tested?”',
          'Price should reflect the level of inspection — not just the certificate.',
          'Our advice: choose a qualified electrician who can both test and carry out any remedial work properly, giving you clarity, compliance, and peace of mind.',
        ],
      },
    ],
    image: '/images/work/consumer-unit.jpg',
    imageAlt: 'Neatly wired consumer unit installed by MK Electrical London',
  },
  {
    slug: 'pat-testing',
    name: 'PAT Testing',
    navName: 'PAT Testing',
    icon: 'Plug',
    short:
      'Portable Appliance Testing for landlords and businesses — documented proof that your plug-in equipment is safe and in good working order.',
    metaDescription:
      'PAT testing in South West London for landlords and businesses. Documented proof of appliance safety for letting agents, councils, insurers and inspections. Family-run since 1994.',
    heroLine: 'Documented proof your appliances are safe.',
    intro: [
      'Portable Appliance Testing (PAT) involves checking electrical items that plug into a socket and can be moved.',
      'PAT testing helps landlords and businesses ensure that electrical equipment is safe and in good working order.',
      'Regular testing reduces risk, supports compliance, and gives peace of mind that your appliances are safe to use.',
    ],
    includes: [
      { label: 'Microwave, kettle, toaster', detail: 'and other kitchen appliances' },
      { label: 'Washing machine, tumble dryer, dishwasher' },
      { label: 'Food processors and plug-in devices' },
      { label: 'Office equipment', detail: 'for businesses, schools and commercial settings' },
    ],
    knowBlocks: [
      {
        title: 'Documented proof of safety',
        paragraphs: ['It can also provide documented proof of safety, which may be requested by:'],
        list: ['Letting agents', 'Local councils', 'Insurance providers', 'Health & safety inspections'],
      },
    ],
    image: '/images/work/under-cabinet-lighting.jpg',
    imageAlt: 'Kitchen electrical work with under-cabinet lighting by MK Electrical London',
  },
  {
    slug: 'rewiring',
    name: 'Rewiring',
    navName: 'Rewiring',
    icon: 'Cable',
    short:
      'Partial and full rewires for homes and businesses — from small jobs to full installations, no job is too minor or too complex.',
    metaDescription:
      'Partial and full rewiring in South West London. Clear, transparent quotations tailored to your property. NICEIC Approved Contractors, family-run since 1994.',
    heroLine: 'From partial fixes to full rewires.',
    intro: [
      'Covering most of London, we provide a wide range of electrical services for both homes and businesses. From small jobs to full installations, no job is too minor or too complex.',
      'Through ongoing training and years of hands-on experience, our engineers have developed strong expertise in modern electrical systems, trusted suppliers, and high-quality products that suit a wide range of clients.',
      'Every property is different, so we ensure quotations are clear, transparent, and tailored to your specific job.',
    ],
    includes: [
      { label: 'Partial and full rewires', detail: 'verbatim from our services list — the core of what we do' },
      { label: 'Complete electrical installations', detail: 'for homes and businesses' },
      { label: 'Domestic refurbishment wiring', detail: 'trusted on large refurbishments across West London' },
      { label: 'Transparent, tailored quotations', detail: 'scope, time and materials — agreed before we start' },
    ],
    image: '/images/work/bathroom-fulham.jpg',
    imageAlt: 'Finished bathroom refurbishment with new electrical installation',
  },
  {
    slug: 'fuse-boards',
    name: 'Fuse Board Replacements',
    navName: 'Fuse Boards',
    icon: 'PanelTop',
    short:
      'Fuse board (consumer unit) replacements and upgrades — the heart of a safe installation, fitted and certified properly.',
    metaDescription:
      'Fuse board and consumer unit replacements in South West London. Modern, safe, certified installations by NICEIC Approved Contractors. Family-run since 1994.',
    heroLine: 'The heart of a safe installation.',
    intro: [
      'A modern consumer unit protects every circuit in your property. We replace dated fuse boards with current-regulation units — fitted, tested and certified properly.',
      'Tripping fuse boards are one of the most common call-outs we attend. Sometimes the fix is simple; sometimes it points to a deeper fault that needs proper diagnosis.',
      'We can help with tripping fuse boards, fuse board (consumer unit) replacements, and electrical testing and certification — all from one team.',
    ],
    includes: [
      { label: 'Fuse board (consumer unit) replacements' },
      { label: 'Tripping fuse board diagnosis', detail: 'find the cause, not just the symptom' },
      { label: 'Electrical testing and certification', detail: 'documented and compliant' },
      { label: 'Building Control notifications', detail: 'submitted online on your behalf where required' },
    ],
    image: '/images/work/consumer-unit.jpg',
    imageAlt: 'New consumer unit with neatly arranged circuits',
  },
  {
    slug: 'ev-chargers',
    name: 'EV Charger Installation',
    navName: 'EV Chargers',
    icon: 'PlugZap',
    short:
      'Fully qualified, OLEV-registered EV charging point installation — faster charging and lower running costs at home.',
    metaDescription:
      'EV charger installation in South West London by OLEV-registered, fully qualified installers. Home charging points assessed, installed and certified. Family-run since 1994.',
    heroLine: 'Your charging point. Properly installed.',
    intro: [
      'We are fully qualified and experienced in installing electric vehicle (EV) charging points and are registered with OLEV.',
      'As more homes move toward electric heating and electric vehicles, installing a home charging point is becoming an increasingly practical and convenient solution.',
      'Installation is usually straightforward — provided your property meets the necessary electrical and space requirements. We are happy to assess your property and advise accordingly.',
    ],
    includes: [
      { label: 'Faster charging', detail: 'compared with a standard plug' },
      { label: 'Greater convenience', detail: 'charge overnight at home' },
      { label: 'Lower long-term running costs' },
      { label: 'Increased property appeal' },
    ],
    knowBlocks: [
      {
        title: 'Use a properly qualified installer',
        paragraphs: [
          'If you are considering installing an EV charging point, it’s important to use a properly qualified and approved installer to ensure safety, compliance, and eligibility for any available grants.',
          'Some useful places to visit when considering an EV charging installation: MyEnergi (Zappi), OZEV, NICEIC.',
        ],
      },
    ],
    image: '/images/work/van-fulham.jpg',
    imageAlt: 'MK Electrical London van on a Fulham street',
  },
  {
    slug: 'fault-finding',
    name: 'Fault Finding & Repairs',
    navName: 'Fault Finding',
    icon: 'Zap',
    short:
      'Fault finding, diagnostics and emergency electrical repairs — lights, sockets, switches and everything in between.',
    metaDescription:
      'Electrical fault finding and emergency repairs in South West London. Diagnostics, lighting, sockets and switches — family-run, NICEIC Approved, since 1994.',
    heroLine: 'We find the gremlin.',
    intro: [
      'Fault finding is investigative in nature — our job is to locate the cause, explain it clearly, and fix it properly.',
      'From tripping circuits to dead sockets and flickering lights: whatever you need — big or small, we’re here to help. No job is too minor or too complex.',
      'Emergency electrical repairs are part of our day-to-day work across South West London.',
    ],
    includes: [
      { label: 'Fault finding and diagnostics' },
      { label: 'Emergency electrical repairs' },
      { label: 'Light fitting replacements and bulb changes', detail: 'plus spotlight upgrades' },
      { label: 'Socket and switch repairs', detail: 'and electrical maintenance services' },
    ],
    image: '/images/work/church-lighting.jpg',
    imageAlt: 'Dramatic backlit lighting installation by MK Electrical London',
    emergency: true,
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
