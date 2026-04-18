import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/explore',
  title: '探索',
});

const links = [
  { href: '/trending', label: '热门趋势' },
  { href: '/featured', label: '精华' },
  { href: '/cities', label: '城市' },
  { href: '/groups', label: '小组' },
  { href: '/boards', label: '板块' },
  { href: '/diary', label: '日记' },
  { href: '/search', label: '搜索' },
];

export default function ExplorePage() {
  return (
    <AppShell rightRail={<RightRail />}>
      <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">探索</h1>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="card card-hover p-5 text-lg font-medium text-slate-800 dark:text-slate-100"
          >
            {l.label} →
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
