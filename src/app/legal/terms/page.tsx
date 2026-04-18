import { AppShell } from '@/components/layout/AppShell';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/legal/terms', title: '服务条款' });

export default function TermsPage() {
  return (
    <AppShell hideRightRail>
      <article className="prose dark:prose-invert max-w-3xl text-sm">
        <h1>服务条款（摘要）</h1>
        <p>本演示站点按「现状」提供，内容不构成法律、医疗或投资建议。正式服务条款以栖遇科技集团有限公司公示文本为准。</p>
      </article>
    </AppShell>
  );
}
