export type Tier = 'luxe' | 'premium';

export interface Brand {
  name: string;
  slug: string;
  tier: Tier;
  url: string;
}

export const brands: Brand[] = [
  { name: 'WATC Studio',     slug: 'watc',      tier: 'luxe',    url: 'https://watc.studio' },
  { name: 'Velour Garments', slug: 'velour',    tier: 'luxe',    url: 'https://velourgarments.eu' },
  { name: 'AS Colour',       slug: 'as-colour', tier: 'premium', url: 'https://ascolour.com' },
];

export const tierLabels: Record<Tier, { num: string; label: string; desc: string }> = {
  luxe:    { num: '', label: 'Luxe',    desc: 'Heavyweight, design-forward blanks from Barcelona' },
  premium: { num: '', label: 'Premium', desc: 'Clean, consistent staples' },
};

export const tierOrder: Tier[] = ['luxe', 'premium'];
