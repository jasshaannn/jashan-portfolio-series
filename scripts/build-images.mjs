// Builds optimized portrait assets from the new high-resolution photo.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const cutout = await sharp('pic.png').toBuffer();
const meta = await sharp(cutout).metadata();
console.log('Cutout dimensions:', meta.width, meta.height);

// Generate responsive webp portraits with lanczos3 resampling and subtle sharpening
for (const size of [
  { w: 1100, q: 94 },
  { w: 720, q: 92 },
  { w: 420, q: 90 },
]) {
  await sharp(cutout)
    .resize({ width: size.w, kernel: 'lanczos3' })
    .sharpen({ sigma: 0.9, m1: 1.2, m2: 2.2 })
    .webp({ quality: size.q, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${size.w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 590 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="76%" cy="45%" r="50%">
            <stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="60%" stop-color="#e5132b" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="275" font-family="Impact, Arial Black, sans-serif" font-size="124" fill="#f4f1ec" letter-spacing="4">JASHAN</text>
        <text x="78" y="328" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="390" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">FULL-STACK DEVELOPER • TIET PATIALA • KHANNA, PUNJAB</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Jashandeep portrait assets built successfully!');
