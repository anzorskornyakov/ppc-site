import brandsData from './brands.json';

export type Tier = 'luxe' | 'premium';

export interface Brand {
  name: string;
  slug: string;
  tier: Tier;
  url: string;
  /** One-line positioning. */
  tagline: string;
  /** Short factual description. */
  description: string;
  /** Quick facts (origin, fabrics, range). */
  facts: string[];
}

// Content lives in brands.json (edited via /admin).
export const brands: Brand[] = (brandsData as { brands: Brand[] }).brands;

export const tierLabels: Record<Tier, { label: string; desc: string }> = {
  luxe: { label: 'Luxe', desc: 'Made-to-last heavyweight & organic blanks' },
  premium: { label: 'Premium', desc: 'Dependable premium staples' },
};

// AS Colour (Premium) leads — it's the blank we reach for most.
export const tierOrder: Tier[] = ['premium', 'luxe'];
