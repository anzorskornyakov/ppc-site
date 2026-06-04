import type { Case } from './cases';

// Default garment shown on a tee until a project gets its own flat-lay.
export const BASE_TEE = '/photos/base-tee.webp';

/**
 * Images shown in the project overlay, in order:
 * 1. the enlarged tee itself (the garment flat-lay, or the shared base tee)
 * 2. any additional case media
 */
export function caseImages(c: Case): string[] {
  const first = c.garment ?? BASE_TEE;
  return [first, ...(c.media ?? [])];
}
