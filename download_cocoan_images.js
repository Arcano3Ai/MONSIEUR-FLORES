import fs from 'fs';
import path from 'path';

const outDir = path.resolve('images', 'cocoan');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const itemsToDownload = [
  { id: 9368, file: 'chocolate-dubai.webp' },
  { id: 9077, file: 'chocobox-imperial.webp' },
  { id: 8653, file: 'fresas-amargo-docena.webp' },
  { id: 8654, file: 'fresas-leche-docena.webp' },
  { id: 9174, file: 'fresas-mixtas-docena.webp' },
  { id: 8876, file: 'megabox-25-fresas.webp' },
  { id: 9130, file: 'tortubox-8pz.webp' },
  { id: 9392, file: 'dubites-8pz.webp' },
  { id: 8501, file: 'tableta-santander-85.webp' },
  { id: 8396, file: 'tableta-praline-leche.webp' },
  { id: 8402, file: 'tableta-almendras-65.webp' },
  { id: 8594, file: 'tableta-frutos-rojos.webp' },
  { id: 9188, file: 'caja-bestsellers-mediana.webp' },
  { id: 8766, file: 'sampler-box.webp' }
];

async function downloadImages() {
  for (const item of itemsToDownload) {
    const url = `https://emperar.sfo3.digitaloceanspaces.com/cocoan/products/${item.id}/0.webp`;
    const dest = path.join(outDir, item.file);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`✓ Downloaded ${item.file} (${buffer.byteLength} bytes)`);
      } else {
        console.warn(`✗ Failed ${item.file}: HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(`Error downloading ${item.file}:`, err.message);
    }
  }
}

downloadImages();
