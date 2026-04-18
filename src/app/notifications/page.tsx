import { AppShell } from '@/components/layout/AppShell';
import { NotificationsClient } from '@/components/notifications/NotificationsClient';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/notifications',
  title: '通知中心',
});

export default function NotificationsPage() {
  return (
    <AppShell hideRightRail>
      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">通知中心</h1>
      <NotificationsClient />
    </AppShell>
  );
}
