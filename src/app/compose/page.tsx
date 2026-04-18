import { AppShell } from '@/components/layout/AppShell';
import { ComposeForm } from '@/components/compose/ComposeForm';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/compose',
  title: '发帖',
  description: '使用 Markdown 发布旅居讨论、攻略与日记。',
});

export default function ComposePage() {
  return (
    <AppShell hideRightRail>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">发帖</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">内容将保存在本机浏览器（演示），可对接后端 API。</p>
      </header>
      <ComposeForm />
    </AppShell>
  );
}
