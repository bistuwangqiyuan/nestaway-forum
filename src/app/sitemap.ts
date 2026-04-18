import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/utils/seo';
import { postRepo, cityRepo, groupRepo, tagRepo, userRepo, boardRepo } from '@/lib/repository';

const STATIC = [
  '',
  '/cities',
  '/groups',
  '/boards',
  '/search',
  '/compose',
  '/notifications',
  '/settings',
  '/trending',
  '/featured',
  '/diary',
  '/explore',
  '/about',
  '/about/plus',
  '/about/community',
  '/about/contact',
  '/legal/privacy',
  '/legal/terms',
  '/me/favorites',
  '/me/drafts',
  '/me/badges',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = STATIC.map((path) => ({
    url: `${base}${path === '' ? '/' : path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));

  for (const p of postRepo.all()) {
    entries.push({ url: `${base}/post/${p.id}`, lastModified: new Date(p.updatedAt), changeFrequency: 'weekly', priority: 0.6 });
  }
  for (const c of cityRepo.list()) {
    entries.push({ url: `${base}/cities/${c.slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 });
  }
  for (const g of groupRepo.list()) {
    entries.push({ url: `${base}/groups/${g.slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 });
  }
  for (const b of boardRepo.list()) {
    entries.push({ url: `${base}/boards/${b.slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 });
  }
  for (const b of tagRepo.list()) {
    entries.push({ url: `${base}/tags/${b.slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.55 });
  }
  for (const u of userRepo.list()) {
    entries.push({ url: `${base}/u/${u.username}`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 });
  }

  return entries;
}
