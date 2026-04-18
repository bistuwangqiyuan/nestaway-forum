import { AppShell } from '@/components/layout/AppShell';
import { MeFavoritesClient } from '@/components/me/MeFavoritesClient';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/me/favorites', title: '我的收藏' });

export default function MeFavoritesPage() {
  return (
    <AppShell hideRightRail>
      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">我的收藏</h1>
      <MeFavoritesClient />
    </AppShell>
  );
}
