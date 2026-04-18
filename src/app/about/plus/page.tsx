import { AppShell } from '@/components/layout/AppShell';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/about/plus', title: 'NestAway Plus' });

export default function PlusPage() {
  return (
    <AppShell hideRightRail>
      <article className="prose dark:prose-invert max-w-3xl">
        <h1>NestAway Plus</h1>
        <p>会员权益、优先预订与增值服务为商业计划中的规划模块，此处为占位说明页。</p>
      </article>
    </AppShell>
  );
}
