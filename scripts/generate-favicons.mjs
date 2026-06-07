import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const SVG = 'public/favicon.svg';

const sizes = [
  { size: 48, file: 'public/favicon-48x48.png' },
  { size: 96, file: 'public/favicon-96x96.png' },
  { size: 180, file: 'public/apple-touch-icon.png' },
];

const svg = await readFile(SVG);

for (const { size, file } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(file);
}

// Root favicon.ico — 48x48 PNG (Google minimum for search result icons)
await sharp(svg).resize(48, 48).png().toFile('public/favicon.ico');

console.log('Favicons generated in public/');
