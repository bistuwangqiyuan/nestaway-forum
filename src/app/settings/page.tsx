import { AppShell } from '@/components/layout/AppShell';
import { SettingsClient } from '@/components/settings/SettingsClient';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/settings',
  title: '设置',
});

export default function SettingsPage() {
  return (
    <AppShell hideRightRail>
      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8">设置</h1>
      <SettingsClient />
    </AppShell>
  );
}
