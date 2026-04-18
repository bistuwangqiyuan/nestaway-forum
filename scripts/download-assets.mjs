/**
 * 下载城市封面、Hero 与 OG 图（Unsplash，Unsplash License）。
 * 若某张 Unsplash 404，则回退到已验证可用的占位图，保证 CI/本地构建稳定。
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'images', 'cities');
const ogDir = join(root, 'public', 'og');

/** 已验证可访问的基准图（清迈古城） */
const FALLBACK =
  'https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=1600&q=82';

const CITY_IMAGES = {
  chiangmai: '1553603227-2358aabe821e',
  bali: '1537996194471-e657233845c8',
  danang: '1559592413-7cec4d0cae9b',
  'kuala-lumpur': '1596422846543-75c670ebc10d',
  hanoi: '1583417319070-43a6f6a84f91',
  dali: '1506905925346-21bda4d32df4',
  sanya: '1507525428030-b723cf961d3e',
  chengdu: '1590073840578-5436ea8d01a1',
  hangzhou: '1567137738821-eeca2fc5d4c2',
  xiamen: '1548915393-9f362e16849b',
  xishuangbanna: '1469474968028-56623ef02a42',
  lisbon: '1585208798179-7758f31f0d94',
  barcelona: '1583422400510-d289bae2fda0',
  berlin: '1560969184-12f9d1b12927',
  warsaw: '1519191544554-3c2f49f52c2b',
  'mexico-city': '1518655048521-e382988941f9',
  medellin: '1516486636079-2c5558b8b7c8',
  'buenos-aires': '1589909202272-29a831c7de57',
  tbilisi: '1565008570239-87651a777933',
  istanbul: '1524231757912-21f4b3d6172f',
};

const HERO = '1501785888041-af3ef285b470';
const OG = '1469474968028-56623ef02a42';

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=82`;

async function fetchBinary(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function fetchOrFallback(primaryUrl) {
  try {
    return await fetchBinary(primaryUrl);
  } catch {
    console.warn('fallback for', primaryUrl);
    return fetchBinary(FALLBACK);
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(ogDir, { recursive: true });

  for (const [slug, id] of Object.entries(CITY_IMAGES)) {
    const buf = await fetchOrFallback(unsplash(id));
    const dest = join(outDir, `${slug}.jpg`);
    await writeFile(dest, buf);
    console.log('wrote', dest);
  }

  await writeFile(join(root, 'public', 'images', 'hero.jpg'), await fetchOrFallback(unsplash(HERO)));
  console.log('wrote hero');

  await writeFile(join(ogDir, 'default.jpg'), await fetchOrFallback(unsplash(OG)));
  console.log('wrote og/default.jpg');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
