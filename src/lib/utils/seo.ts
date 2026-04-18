import type { Metadata } from 'next';

const SITE_NAME = '栖遇 NestAway · 旅居社区';
const SITE_URL = 'https://nestaway-forum.netlify.app';
const DEFAULT_DESC =
  '全球首个中长期旅居者社区。来自 200+ 城市的数字游民、远程工作者、家庭旅居者与候鸟在此分享攻略、寻找同伴、交流经验。';

export function buildMetadata(opts: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
}): Metadata {
  const title = opts.title ? `${opts.title} · 栖遇 NestAway` : SITE_NAME;
  const description = opts.description ?? DEFAULT_DESC;
  const url = `${SITE_URL}${opts.path ?? ''}`;
  const ogImage = opts.ogImage ?? '/og/default.jpg';
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: opts.type ?? 'website',
      locale: 'zh_CN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export const SITE = { name: SITE_NAME, url: SITE_URL, description: DEFAULT_DESC };
