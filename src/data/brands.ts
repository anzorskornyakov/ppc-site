export type Tier = 'premium' | 'standard' | 'economy' | 'headwear' | 'bags';

export interface Brand {
  name: string;
  slug: string;
  tier: Tier;
  url: string;
}

export const brands: Brand[] = [
  { name: 'WATC Studio',          slug: 'watc',           tier: 'premium',  url: 'https://watc.studio' },
  { name: 'Velour Garments',      slug: 'velour',         tier: 'premium',  url: 'https://velourgarments.eu' },
  { name: 'Continental Clothing', slug: 'continental',    tier: 'premium',  url: 'https://www.continentalclothing.com' },
  { name: 'EarthPositive',        slug: 'earthpositive',  tier: 'premium',  url: 'https://earthpositive.com' },
  { name: 'AS Colour',            slug: 'as-colour',      tier: 'premium',  url: 'https://ascolour.com' },
  { name: 'Stanley/Stella',       slug: 'stanley-stella', tier: 'standard', url: 'https://www.stanleystella.com' },
  { name: 'B&C Collection',       slug: 'bc',             tier: 'standard', url: 'https://www.bandc.eu' },
  { name: 'Native Spirit',        slug: 'native-spirit',  tier: 'standard', url: 'https://nativespirit-fashion.com' },
  { name: "Sol's",                slug: 'sols',           tier: 'standard', url: 'https://www.sols-europe.com' },
  { name: 'Mantis',               slug: 'mantis',         tier: 'standard', url: 'https://www.mantis-world.com' },
  { name: 'Russell',              slug: 'russell',        tier: 'standard', url: 'https://russelleurope.com' },
  { name: 'Tee Jays',             slug: 'tee-jays',       tier: 'standard', url: 'https://www.tee-jays.com' },
  { name: 'Gildan',               slug: 'gildan',         tier: 'economy',  url: 'https://www.gildan.com' },
  { name: 'Kariban',              slug: 'kariban',        tier: 'economy',  url: 'https://www.kariban.com' },
  { name: 'Fruit of the Loom',    slug: 'fotl',           tier: 'economy',  url: 'https://fotleurope.com' },
  { name: 'Just Hoods',           slug: 'just-hoods',     tier: 'economy',  url: 'https://www.justhoodsbyawdis.com' },
  { name: 'SG Originals',         slug: 'sg-originals',   tier: 'economy',  url: 'https://www.sgoriginals.eu' },
  { name: 'Atlantis',             slug: 'atlantis',       tier: 'headwear', url: 'https://www.atlantis-headwear.com' },
  { name: 'Beechfield',           slug: 'beechfield',     tier: 'headwear', url: 'https://www.beechfield.com' },
  { name: 'Flexfit',              slug: 'flexfit',        tier: 'headwear', url: 'https://flexfit.eu' },
  { name: 'Yupoong',              slug: 'yupoong',        tier: 'headwear', url: 'https://www.yupoong.eu' },
  { name: 'Result Headwear',      slug: 'result',         tier: 'headwear', url: 'https://www.resultclothing.com' },
  { name: 'Westford Mill',        slug: 'westford-mill',  tier: 'bags',     url: 'https://www.westfordmill.com' },
  { name: 'Bags by Jassz',        slug: 'jassz',          tier: 'bags',     url: 'https://www.jasszbags.com' },
];

export const tierLabels: Record<Tier, { num: string; label: string; desc: string }> = {
  premium:  { num: '01.000', label: 'PREMIUM',          desc: 'Heavyweight, organic, design-forward' },
  standard: { num: '02.000', label: 'STANDARD',         desc: 'The everyday workhorses' },
  economy:  { num: '03.000', label: 'ECONOMY',          desc: 'Best price-to-quality' },
  headwear: { num: '04.000', label: 'HEADWEAR',         desc: 'Caps, beanies, bucket hats' },
  bags:     { num: '05.000', label: 'BAGS & ACCESSORIES', desc: '' },
};

export const tierOrder: Tier[] = ['premium', 'standard', 'economy', 'headwear', 'bags'];
