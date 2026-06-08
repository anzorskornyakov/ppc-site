export interface CaseMedia {
  /** Image (webp/png/jpg) or video (mp4/webm/mov). */
  src: string;
  /** Short caption shown under the media, e.g. "Front — screen print". */
  label?: string;
}

export interface Case {
  slug: string;
  client: string;
  /** External link to the client (optional). */
  clientUrl?: string;
  /** May name several, e.g. "Screen printing & DTF" — each links to its page. */
  technique: string;
  item: string;
  quantity?: string;
  /** e.g. "May 2026". */
  date?: string;
  /** The blank used, e.g. "WATC Studio — Boxy". */
  blank?: string;
  /**
   * Hero flat-lay (or product shot) on transparent/white — shown on the tee in
   * the gallery stream and as the first enlarged image in the overlay. Falls
   * back to the shared base tee when omitted.
   */
  garment?: string;
  /** Caption for the hero image (optional). */
  garmentLabel?: string;
  /** Additional media (images + video) with optional captions. */
  media?: CaseMedia[];
  /** Garment spec bullets (e.g. the blank's tech sheet). */
  details?: string[];
  /** Description shown in the overlay. */
  body?: string;
}

// To add a project: drop raw photos in a folder, then run
//   node scripts/optimize-case.mjs <sourceDir> <slug>
// It compresses them to /public/photos/cases/<slug>/ and prints the paths to
// paste below as `garment` (the hero) and `media` (the rest).
export const cases: Case[] = [
  {
    slug: 'katsu',
    client: 'Katsu',
    clientUrl: 'https://www.instagram.com/katsu.lisbon/',
    technique: 'Embroidery',
    item: 'Uniform & signage',
    garment: '/photos/cases/katsu/katsu-1-sign.webp',
    garmentLabel: 'Hanging sign — machine embroidery',
    media: [
      { src: '/photos/cases/katsu/katsu-2-shirt.webp', label: 'Uniform shirt — embroidery' },
    ],
    body: 'Uniform and signage for Katsu, an Asian bistro in Lisbon — staff shirts and a hanging fabric sign, both in machine embroidery.',
  },
  {
    slug: 'pils',
    client: 'Pils',
    clientUrl: 'https://www.instagram.com/pils_lisboa/',
    technique: 'Embroidery & DTF',
    item: 'Merch & uniform',
    garment: '/photos/cases/pils/pils-1-cap.webp',
    garmentLabel: 'Pils cap — embroidery',
    media: [
      { src: '/photos/cases/pils/pils-2-pour.webp', label: 'On the night' },
      { src: '/photos/cases/pils/pils-3-apron.webp', label: 'Apron in the kitchen' },
      { src: '/photos/cases/pils/pils-video.mov', label: 'Tablecloth, in motion' },
    ],
    body: 'A full merch and uniform programme for Pils, a Lisbon spot — t-shirts, caps, hoodies, aprons and even a printed tablecloth. Mostly embroidery and DTF.',
  },
  {
    slug: 'ulu',
    client: '.ulu',
    clientUrl: 'https://www.instagram.com/ulu.cascais/',
    technique: 'Screen printing',
    item: 'Staff uniform',
    date: 'May 2026',
    blank: 'Stanley/Stella',
    garment: '/photos/cases/ulu/ulu-1-back.webp',
    garmentLabel: 'Back — STAFF print',
    media: [
      { src: '/photos/cases/ulu/ulu-2-front.webp', label: 'Front — .ulu mark' },
    ],
    body: 'Staff uniform for .ulu, a café in Cascais — the .ulu mark on the chest and a large STAFF graphic across the back with the address and "Inspired by the world, born in Cascais". Screen-printed front and back on Stanley/Stella blanks.',
  },
  {
    slug: 'heavy-drone',
    client: 'Heavy Drone',
    clientUrl: 'https://www.instagram.com/heavydrone_/',
    technique: 'Screen printing',
    item: 'Band tee',
    quantity: '20 pieces',
    blank: 'Gildan 2000 Ultra Cotton',
    garment: '/photos/cases/heavy-drone/heavy-drone-1-tee.webp',
    media: [
      { src: '/photos/cases/heavy-drone/heavy-drone-2-worn.webp', label: 'On location' },
      { src: '/photos/cases/heavy-drone/heavy-drone-3-record.webp', label: 'Same artwork on the record' },
    ],
    details: [
      '100% cotton',
      '6.0 oz / 203 GSM',
      'Classic fit',
      'Tubular body, no side seams',
      'Taped neck & shoulders',
      'Double-needle sleeves & hem',
    ],
    body: 'A 20-piece drop for drone band Heavy Drone — the orange artwork from their "Petrozavodsk / Forest Fire" record, hand-pulled in a single colour on a heavyweight Gildan 2000.',
  },
  {
    slug: 'ppc-cap',
    client: 'PPC Cap',
    technique: 'Embroidery',
    item: 'Camo cap',
    date: 'June 2026',
    blank: 'AS Colour',
    garment: '/photos/cases/ppc-cap/ppc-cap-1.webp',
    body: 'Our own cap on an AS Colour blank — the PPC mark stitched in orange thread on realtree camo. Flat embroidery that stays crisp on a structured front panel.',
  },
  {
    slug: 'joom',
    client: 'Joom',
    clientUrl: 'https://about.joom.com/en',
    technique: 'Screen printing & DTF',
    item: 'Boxy tee',
    quantity: '80 pieces',
    date: 'May 2026',
    blank: 'WATC Studio — Boxy',
    garment: '/photos/cases/joom/joom-1-package.webp',
    garmentLabel: 'Packaging — one per name',
    media: [
      { src: '/photos/cases/joom/joom-2-front.webp', label: 'Front — screen print, single frame' },
      { src: '/photos/cases/joom/joom-3-back.webp', label: 'Back — one of six DTF versions' },
      { src: '/photos/cases/joom/joom-video.mp4', label: 'In motion' },
    ],
    details: [
      'Made in Portugal',
      'Crafted in WATC ateliers',
      '100% organic cotton',
      '240 GSM heavyweight jersey',
      '10.4 oz / 0.295 kg',
      'Rib 1×1 with 5% lycra',
      'Oversized, boxy fit',
      'Dropped shoulders',
      'Untagged · unisex',
      'Pre-shrunk 0–3%',
    ],
    body: 'Management Week 2026 for Joom — 80 pieces on a boxy WATC blank, packaged one per name. The front graphic is screen-printed from a single frame; the back carries six different printed lines, each run in DTF so every batch could vary without new screens.',
  },
];
