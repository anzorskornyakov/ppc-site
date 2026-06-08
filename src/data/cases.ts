export interface Case {
  slug: string;
  client: string;
  technique: string;
  item: string;
  quantity?: string;
  /**
   * Flat-lay garment photo on transparent/white — shown on the tee in the
   * gallery stream and as the first (enlarged) image in the project overlay.
   * When omitted the shared base tee is used.
   */
  garment?: string;
  /** Additional case images, shown after the tee in the overlay. */
  media?: string[];
  /** Description shown beside the images in the overlay. */
  body?: string;
}

// To add a project: drop raw photos in a folder, then run
//   node scripts/optimize-case.mjs <sourceDir> <slug>
// It compresses them to /public/photos/cases/<slug>/ and prints the paths to
// paste below as `garment` (the tee) and `media` (the rest).
export const cases: Case[] = [
  {
    slug: 'ppc-cap',
    client: 'PPC Cap',
    technique: 'Embroidery',
    item: 'AS Colour camo cap',
    garment: '/photos/cases/ppc-cap/ppc-cap-1.webp',
    body: 'Our own cap on an AS Colour blank — the PPC mark stitched in orange thread on realtree camo. Flat embroidery that stays crisp on a structured front panel. June 2026.',
  },
  {
    slug: 'ulu',
    client: '.ulu',
    technique: 'Screen printing',
    item: 'crew t-shirts',
    body: 'ulu needed a small run of crew tees that felt closer to a clothing drop than staff merch. We moved them onto a heavier organic blank with a softer hand, then printed a two-colour design with a water-based ink that sits in the fabric rather than on top of it.',
  },
  {
    slug: 'pils',
    client: 'Pils',
    technique: 'Embroidery',
    item: 'staff merch',
    body: 'Staff pieces that had to survive daily wear and washing. We chose a mid-weight blank that holds its shape and stitched the mark in flat embroidery, keeping the logo crisp at small sizes where a print would have blurred.',
  },
  {
    slug: 'cyberpulse',
    client: 'Cyberpulse Detailing',
    technique: 'DTF',
    item: 'workwear',
  },
  {
    slug: 'health-samurai',
    client: 'Health Samurai',
    technique: 'Screen printing',
    item: 'team hoodies',
  },
  {
    slug: 'ceejays',
    client: 'CeeJays Couture',
    technique: 'DTF',
    item: 'apparel drop',
    body: 'A full-colour apparel drop with photographic artwork that no single print technique handles cleanly at small volume. We used DTF for exact colour and fine detail with no setup cost, on blanks selected to keep the transfer flexible.',
  },
  {
    slug: 'joom',
    client: 'Joom',
    technique: 'Screen printing & DTF',
    item: 'Boxy WATC tee',
    quantity: '80 pieces',
    garment: '/photos/cases/joom/joom-1-package.webp',
    media: [
      '/photos/cases/joom/joom-2-front.webp',
      '/photos/cases/joom/joom-3-back.webp',
      '/photos/cases/joom/joom-video.mp4',
    ],
    body: 'Management Week 2026 for Joom — 80 pieces on a boxy WATC blank, packaged one per name. The front graphic is screen-printed from a single frame; the back carries six different printed lines, each run in DTF so every batch could vary without new screens. PPC, May 2026.',
  },
];
