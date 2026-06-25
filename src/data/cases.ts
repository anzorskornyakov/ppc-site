import casesData from './cases.json';

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
  /** Hero flat-lay / product shot shown on the tee and as the first overlay image. */
  garment?: string;
  /** Optional override for the gallery-tile image only (defaults to garment). */
  tile?: string;
  /** Caption for the hero image (optional). */
  garmentLabel?: string;
  /** Additional media (images + video) with optional captions. */
  media?: CaseMedia[];
  /** Garment spec bullets. */
  details?: string[];
  /** Description shown in the overlay. */
  body?: string;
}

// Content lives in cases.json (edited via /admin). To add a project there,
// optimize photos first with: node scripts/optimize-case.mjs <dir> <slug>
export const cases: Case[] = (casesData as { cases: Case[] }).cases;
