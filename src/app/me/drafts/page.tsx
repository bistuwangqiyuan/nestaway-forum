import { AppShell } from '@/components/layout/AppShell';
import { MeDraftsClient } from '@/components/me/MeDraftsClient';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/me/drafts', title: '我的草稿' });

export default function MeDraftsPage() {
  return (
    <AppShell hideRightRail>
      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">我的草稿</h1>
      <MeDraftsClient />
    </AppShell>
  );
}
