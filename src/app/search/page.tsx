import { Suspense } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { SearchClient } from '@/components/search/SearchClient';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/search',
  title: '搜索',
  description: '搜索帖子、用户、城市与兴趣小组。',
});

export default function SearchPage() {
  return (
    <AppShell rightRail={<RightRail />}>
      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">搜索</h1>
      <Suspense fallback={<div className="card h-40 animate-pulse-soft bg-slate-100 dark:bg-slate-900" />}>
        <SearchClient />
      </Suspense>
    </AppShell>
  );
}
