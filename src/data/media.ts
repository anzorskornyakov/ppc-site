import type { Case, CaseMedia } from './cases';

// Default garment shown on a tee until a project gets its own flat-lay.
export const BASE_TEE = '/photos/base-tee.webp';

/**
 * Media shown in the project overlay, in order:
 * 1. the enlarged hero (the garment flat-lay / product shot, or the base tee)
 * 2. any additional case media
 */
export function caseImages(c: Case): CaseMedia[] {
  const hero: CaseMedia = { src: c.garment ?? BASE_TEE, label: c.garmentLabel };
  return [hero, ...(c.media ?? [])];
}
