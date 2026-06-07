import sharp from 'sharp';

const SOURCE = 'public/favicon-source.png';

const sizes = [
  { size: 48, file: 'public/favicon-48x48.png' },
  { size: 96, file: 'public/favicon-96x96.png' },
  { size: 180, file: 'public/apple-touch-icon.png' },
];

for (const { size, file } of sizes) {
  await sharp(SOURCE)
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(file);
}

await sharp(SOURCE)
  .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile('public/favicon.ico');

console.log('Favicons generated from public/favicon-source.png');
