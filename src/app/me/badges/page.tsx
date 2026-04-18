import { AppShell } from '@/components/layout/AppShell';
import { MeBadgesClient } from '@/components/me/MeBadgesClient';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/me/badges', title: '我的徽章' });

export default function MeBadgesPage() {
  return (
    <AppShell hideRightRail>
      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">我的徽章</h1>
      <MeBadgesClient />
    </AppShell>
  );
}
