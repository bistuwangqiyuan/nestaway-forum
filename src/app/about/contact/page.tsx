import { AppShell } from '@/components/layout/AppShell';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/about/contact', title: '联系我们' });

export default function ContactPage() {
  return (
    <AppShell hideRightRail>
      <article className="prose dark:prose-invert max-w-3xl">
        <h1>联系我们</h1>
        <p>商务合作、媒体与社区事务请通过栖遇官方渠道联系（演示站点无真实收件箱）。</p>
      </article>
    </AppShell>
  );
}
