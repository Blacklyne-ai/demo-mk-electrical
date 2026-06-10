// ─────────────────────────────────────────────────────────────
// Alle 21 Reviews verbatim von der alten Site eingesammelt
// (Home 5 · About 4 · Services 4 (Google-Format) · T&Cs 4 ·
// Data-Protection 4). Nichts erfunden, nichts umgeschrieben.
// Einzige Anpassungen (No-Emoji-Regel, s. JUDGEMENT_CALLS.md):
// Hundert-Punkte-Emoji in Annabels Review als "100%" ausgeschrieben,
// Daumen-hoch-Emoji bei K Wyatt entfernt.
// ─────────────────────────────────────────────────────────────

export interface Review {
  name: string;
  location: string;
  postcode: string;
  text: string;
  source: 'site' | 'google';
  positives?: string;
  services?: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  // ── Featured (Homepage, im Briefing benannt) ──
  {
    name: 'Neil',
    location: 'Putney',
    postcode: 'SW15',
    text: 'Great service. Quick response to a technical issue with our wireless lighting system. All was resolved under warranty with no fuss. I am very pleased with MK Electrical London and am happy to recommend.',
    source: 'site',
    featured: true,
  },
  {
    name: 'Richard',
    location: 'Barnes',
    postcode: 'SW13',
    text: 'Great emergency service arrived quickly and sorted the problem fast very professional. Will definitely use on the future highly recommended',
    source: 'site',
    featured: true,
  },
  {
    name: 'Phyillis',
    location: 'Putney',
    postcode: 'SW15',
    text: 'A very professional company. Excellent service. Courteous and considerate professionals and service team. I felt very confident with the extensive electrical repairs and improvements they recommended to update wiring, plugs, fuse box and a number of things to improve the supply and usage. I would strongly recommend.',
    source: 'site',
    featured: true,
  },
  {
    name: 'Guy',
    location: 'Kensington',
    postcode: 'SW1X',
    text: "I only use this company for electrical work. Sometimes you have to wait for an appointment but it's worth it, because their attention to detail is good and they come prepared with what they need.",
    source: 'site',
    featured: true,
  },

  // ── Homepage-Carousel der alten Site ──
  {
    name: 'Elsa',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Thank you, thank you so much for your help only via phone. MK resolved my issue only by listening to my situation on the phone and helping me find a solution. Amazing support, thank you.',
    source: 'site',
  },
  {
    name: 'James',
    location: 'Putney',
    postcode: 'SW15',
    text: 'MK Electrical have carried out a number of jobs on our rental property in Putney. Communication was straightforward, arriving when agreed and the work was carried out to a very high standard. Thank you',
    source: 'site',
  },
  {
    name: 'Lynne',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Martin was very diligent in trying to locate the reason my downstairs light and power had gone off. 90 minutes later he found the gremlin, good work! I would definitely use MK again.',
    source: 'site',
  },
  {
    name: 'Faye',
    location: 'Clapham',
    postcode: 'SW4',
    text: 'Ceiling Light Inspection Due to Water Ingress — I have used MK Electrical before and had another great experience. Martin was extremely responsive, arriving punctually as scheduled. He took the time to thoroughly assess the ceiling light issue and provided a comprehensive report detailing his findings and recommendations. I highly recommend MK Electrical for their reliability, technical knowledge, and excellent service. Thank you again for your help!',
    source: 'site',
  },
  {
    name: 'Nicky',
    location: 'Hammersmith',
    postcode: 'W6',
    text: 'I had a small job that only required an electrician for one hour. Although not everyone is happy to accept small jobs like this, MK Electrical booked me in straight away. They were on time, courteous, tidy and got the job done perfectly! Would definitely recommend - and would definitely use myself again!',
    source: 'site',
  },

  // ── Services-Seite (Google-Format, Quelle markiert) ──
  {
    name: 'Annabel',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Have used MK electrical for home and office and would highly recommend. Great service and always happy with the results. The team is very polite and trustworthy. Have already recommended to neighbouring offices who also seemed very satisfied. Would 100% use again.',
    source: 'google',
    positives: 'Responsiveness, Punctuality, Quality, Professionalism, Value',
  },
  {
    name: 'Julia',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'We needed our smoke alarms replaced with similar sized ones that were not too visually imposing. MK provided perfect replacements and managed the job swiftly and professionally. We also needed a replacement dimmer switch that would be compatible with our LED light bulbs and this too was done too. We were very pleased with their friendly and efficient service.',
    source: 'google',
    positives: 'Responsiveness, Quality, Professionalism',
    services: 'General alarm installation, Electrical socket and switch repair',
  },
  {
    name: 'K Wyatt Decorators',
    location: 'Isleworth',
    postcode: 'TW3',
    text: 'Great communication from start to finish. Turned up on time, found the issue and got it all sorted. Will be using again in the future.',
    source: 'google',
    positives: 'Responsiveness',
    services: 'Electrical socket and switch installation',
  },
  {
    name: 'Ichiro',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Electricians from MK Electrical London are knowledgible and professional. I have a few issues with the fuse board and underfloor heating system. They identified the main issue in the first visit and fixed all the issues in the following two visits. They are very friend and efficient. Highly recommended!',
    source: 'google',
    positives: 'Responsiveness, Punctuality, Quality, Professionalism, Value',
    services: 'Electrical socket and switch relocation',
  },

  // ── T&Cs-Seite der alten Site ──
  {
    name: 'John',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'On recommendation i recently used MK Electrical to carry out a detailed Electrical inspection followed by a full installation and upgrade in an old London property. Martin and the Team were totally professional, efficient, thorough and did a outstanding job in updating the Electrical System and Fixing all the Numerous Faults that had been highlighted in the inspection. I would be very happy to recommend MK Electrical for any Electrical Jobs and the works were carried out quickly and competitively and also a bonus being able to use a reliable local firm.',
    source: 'site',
  },
  {
    name: 'Saadi',
    location: 'Knightsbridge',
    postcode: 'SW1W',
    text: 'I had an electrical problem in my flat on a Saturday. I gave them a call and they guided me through solving the problem. They are a very good firm. I recommend them.',
    source: 'site',
  },
  {
    name: 'Joe',
    location: 'Cafe Chain Owner',
    postcode: 'SW6',
    text: 'Amazing service, always friendly and communicate really well. And the work done is always to a top standard.',
    source: 'site',
  },
  {
    name: 'Jose',
    location: 'Fulham',
    postcode: 'SW6',
    text: "Very professional team, it shows that they know what they're doing. They've saved us from faulty installations a few times, at home and in our work as architects.",
    source: 'site',
  },

  // ── Data-Protection-Seite der alten Site ──
  {
    name: 'Joseph',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Worked with Martin and his team on a large refurbishment in West London, Martin and co were very easy to work with and have a wealth of knowledge all things electrical and were a pleasure to work with.',
    source: 'site',
  },
  {
    name: 'Christina',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Martin of MK electrical is excellent, friendly, efficient and very thorough!! Would highly recommend Martin and or one of his time anytime!! Very happy customer!!',
    source: 'site',
  },
  {
    name: 'Margaret',
    location: 'London',
    postcode: '',
    text: 'Excellent friendly reliable and efficient service... Used this company for years!',
    source: 'site',
  },
  {
    name: 'Luke',
    location: 'Fulham',
    postcode: 'SW6',
    text: 'Needed instant support for a few issues with some sockets in my apartment. Martin responded quickly and supported me on the same day. Also a great bloke & polite. Highly recommend, if you need a quick and reliable electrician.',
    source: 'site',
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
