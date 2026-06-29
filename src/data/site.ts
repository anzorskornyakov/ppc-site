export const SITE = {
  name: 'Portugal Print Club',
  shortName: 'PPC',
  legalName: 'Printclub Collective, LDA',
  url: 'https://ppc.space',
  description: 'Custom print studio in Lisbon. Screen printing, embroidery, DTF. Ready in 3 business days.',
  nipc: '519336640',
  vatId: 'PT519336640',
  email: 'anzor@ppc.space',
  // Messaging only — we don't take phone calls. The number lives in the
  // WhatsApp link below; it is not shown as a dialable number anywhere.
  whatsapp: 'https://wa.me/351930548775',
  telegram: '@Anzors',
  telegramUrl: 'https://t.me/Anzors',
  instagram: '@ppcspace',
  instagramUrl: 'https://www.instagram.com/ppcspace',
  address: {
    street: 'Calçada dos Mestres 34',
    postal: '1070-178',
    city: 'Lisboa',
    district: 'Campolide',
    country: 'Portugal',
    countryCode: 'PT',
    full: 'Calçada dos Mestres 34, 1070-178 Lisboa',
  },
  geo: {
    lat: 38.7295,
    lon: -9.1623,
  },
  hours: {
    weekdays: '10:00 — 19:00',
    weekends: 'By appointment',
  },
  turnaround: '3 business days',
  foundingDate: '2026',
} as const;
