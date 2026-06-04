#!/usr/bin/env node
/**
 * Compress raw project photos into web-ready WebP and place them in
 * public/photos/cases/<slug>/.
 *
 * Usage:
 *   node scripts/optimize-case.mjs <sourceDirOrFile> <slug> [maxPx] [quality]
 *
 * Examples:
 *   node scripts/optimize-case.mjs ~/Downloads/ulu ulu
 *   node scripts/optimize-case.mjs "~/Downloads/ulu tee.png" ulu 1600 82
 *
 * It keeps transparency, resizes the longest side down to maxPx (default 1600),
 * encodes WebP at near-lossless quality (default 82), and prints the paths to
 * paste into src/data/cases.ts. Files are named <slug>-1.webp, <slug>-2.webp …
 * in alphabetical order of the source files — name a flat-lay "1-…" so it
 * becomes the tee (garment); the rest become media.
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import sharp from 'sharp';

const IMG_RE = /\.(png|jpe?g|webp|tiff?|heic|heif|avif)$/i;

function expandHome(p) {
  return p.startsWith('~') ? path.join(os.homedir(), p.slice(1)) : p;
}

async function listSources(input) {
  const s = await stat(input);
  if (s.isFile()) return [input];
  const entries = await readdir(input);
  return entries
    .filter((f) => IMG_RE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => path.join(input, f));
}

async function main() {
  let [, , src, slug, maxPx = '1600', quality = '82'] = process.argv;
  if (!src || !slug) {
    console.error('Usage: node scripts/optimize-case.mjs <sourceDirOrFile> <slug> [maxPx] [quality]');
    process.exit(1);
  }
  src = expandHome(src);
  if (!existsSync(src)) {
    console.error(`Source not found: ${src}`);
    process.exit(1);
  }
  maxPx = parseInt(maxPx, 10);
  quality = parseInt(quality, 10);

  const outDir = path.resolve('public/photos/cases', slug);
  await mkdir(outDir, { recursive: true });

  const sources = await listSources(src);
  if (sources.length === 0) {
    console.error('No images found.');
    process.exit(1);
  }

  const outPaths = [];
  let i = 0;
  for (const file of sources) {
    i += 1;
    const outName = `${slug}-${i}.webp`;
    const outFile = path.join(outDir, outName);
    const inMeta = await sharp(file).metadata();
    await sharp(file)
      .rotate() // respect EXIF orientation
      .resize({ width: maxPx, height: maxPx, fit: 'inside', withoutEnlargement: true })
      .webp({ quality, effort: 6, alphaQuality: 100 })
      .toFile(outFile);
    const outMeta = await stat(outFile);
    const inSize = (await stat(file)).size;
    console.log(
      `  ${path.basename(file)} (${(inSize / 1024).toFixed(0)}KB ${inMeta.width}×${inMeta.height})` +
        `  →  ${outName} (${(outMeta.size / 1024).toFixed(0)}KB)`
    );
    outPaths.push(`/photos/cases/${slug}/${outName}`);
  }

  console.log('\nPaste into src/data/cases.ts:');
  console.log(`    garment: '${outPaths[0]}',`);
  if (outPaths.length > 1) {
    console.log('    media: [');
    for (const p of outPaths.slice(1)) console.log(`      '${p}',`);
    console.log('    ],');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
