import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';

export default function NotFound() {
  return (
    <AppShell hideRightRail>
      <div className="py-20 text-center space-y-4">
        <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-100">404</h1>
        <p className="text-slate-500 dark:text-slate-400">页面未找到 · Page not found</p>
        <Link href="/" className="text-brand-700 dark:text-brand-300 font-medium hover:underline">
          返回首页
        </Link>
      </div>
    </AppShell>
  );
}
