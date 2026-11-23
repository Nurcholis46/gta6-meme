// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
// The meme itself is the X post named in POST.json. This program's only job
// is to hand that address to the grader: read POST.json at the repository
// root, check it names an X post, and copy it unchanged to /output/POST.json.
//
// Grader-style run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Success prints nothing.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

const raw = readFileSync(source, 'utf8');
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== 'string' || !post.url.startsWith('https://x.com/')) {
  console.error('POST.json must name an X post address, got: ' + JSON.stringify(post));
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Read back what was written: the grader reads /output/POST.json, so it must
// be byte-for-byte the address this repository names.
const written = readFileSync(target, 'utf8');
if (written !== raw) {
  console.error('POST.json written to /output does not match the repository copy');
  process.exit(1);
}
