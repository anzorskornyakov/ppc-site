export interface Case {
  slug: string;
  client: string;
  technique: string;
  item: string;
  quantity?: string;
  cover: string;
  gallery?: string[];
  body?: string;
}

// NOTE: covers/galleries currently reuse existing studio photos as placeholders.
// Body copy is provisional — replace with real project details.
export const cases: Case[] = [
  {
    slug: 'ulu',
    client: '.ulu',
    technique: 'Screen printing',
    item: 'crew t-shirts',
    cover: '/photos/cases/ulu-01.jpg',
    gallery: [
      '/photos/cases/ulu-01.jpg',
      '/photos/cases/ulu-02.jpg',
      '/photos/cases/ulu-03.jpg',
    ],
    body: 'ulu needed a small run of crew tees that felt closer to a clothing drop than staff merch. We moved them onto a heavier organic blank with a softer hand, then printed a two-colour design with a water-based ink that sits in the fabric rather than on top of it.',
  },
  {
    slug: 'pils',
    client: 'Pils',
    technique: 'Embroidery',
    item: 'staff merch',
    cover: '/photos/cases/pils-01.jpg',
    gallery: [
      '/photos/cases/pils-01.jpg',
      '/photos/cases/pils-02.jpg',
    ],
    body: 'Staff pieces that had to survive daily wear and washing. We chose a mid-weight blank that holds its shape and stitched the mark in flat embroidery, keeping the logo crisp at small sizes where a print would have blurred.',
  },
  {
    slug: 'cyberpulse',
    client: 'Cyberpulse Detailing',
    technique: 'DTF',
    item: 'workwear',
    cover: '/photos/cases/cyberpulse-01.jpg',
  },
  {
    slug: 'health-samurai',
    client: 'Health Samurai',
    technique: 'Screen printing',
    item: 'team hoodies',
    cover: '/photos/cases/health-samurai-01.jpg',
  },
  {
    slug: 'ceejays',
    client: 'CeeJays Couture',
    technique: 'DTF',
    item: 'apparel drop',
    cover: '/photos/cases/ceejays-01.jpg',
    gallery: [
      '/photos/cases/ceejays-01.jpg',
      '/photos/cases/ceejays-02.jpg',
    ],
    body: 'A full-colour apparel drop with photographic artwork that no single print technique handles cleanly at small volume. We used DTF for exact colour and fine detail with no setup cost, on blanks selected to keep the transfer flexible.',
  },
  {
    slug: 'joom',
    client: 'Joom',
    technique: 'Embroidery',
    item: 'corporate merch',
    cover: '/photos/cases/joom-01.jpg',
  },
];
