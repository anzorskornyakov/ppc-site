export interface Service {
  id: 'screen-printing' | 'embroidery' | 'dtf';
  name: string;
  path: string;
  sectionNum: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  minOrder: string;
  turnaround: string;
  priceLow: number;
  priceHigh: number;
}

export const services: Service[] = [
  {
    id: 'screen-printing',
    name: 'Screen printing',
    path: '/screen-printing',
    sectionNum: '01.200',
    title: 'SCREEN PRINTING',
    subtitle: 'Manual screen printing in Lisbon, on a 6-color carousel, ready in 3 business days.',
    metaTitle: 'Custom screen printing in Lisbon — PPC',
    metaDescription: 'Manual screen printing on a 6-color carousel. From 10 pieces. Water-based and plastisol inks. Ready in 3 business days. Studio in Campolide, Lisbon.',
    ogImage: '/og-screen-printing.jpg',
    minOrder: '10 pieces',
    turnaround: '3 business days',
    priceLow: 4,
    priceHigh: 8,
  },
  {
    id: 'embroidery',
    name: 'Embroidery',
    path: '/embroidery',
    sectionNum: '01.300',
    title: 'EMBROIDERY',
    subtitle: 'Custom embroidery in Lisbon, from 1 piece, ready in 3 business days.',
    metaTitle: 'Custom embroidery in Lisbon — PPC',
    metaDescription: 'Single-piece custom embroidery in Lisbon. Flat and 3D puff. Up to 12 thread colors. From 1 piece, ready in 3 business days.',
    ogImage: '/og-embroidery.jpg',
    minOrder: '1 piece',
    turnaround: '3 business days',
    priceLow: 6,
    priceHigh: 22,
  },
  {
    id: 'dtf',
    name: 'DTF',
    path: '/dtf',
    sectionNum: '01.400',
    title: 'DTF',
    subtitle: 'Full-color digital transfer printing in Lisbon, from 1 piece, no setup fee, ready in 3 days.',
    metaTitle: 'DTF printing in Lisbon — PPC',
    metaDescription: 'Full-color DTF transfer printing on apparel. From 1 piece, no setup fee. Photo-realistic. Ready in 3 business days. Lisbon studio.',
    ogImage: '/og-dtf.jpg',
    minOrder: '1 piece',
    turnaround: '3 business days',
    priceLow: 5,
    priceHigh: 15,
  },
];
