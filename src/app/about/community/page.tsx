import { AppShell } from '@/components/layout/AppShell';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/about/community', title: '社区准则' });

export default function CommunityPage() {
  return (
    <AppShell hideRightRail>
      <article className="prose dark:prose-invert max-w-3xl">
        <h1>社区准则</h1>
        <ul>
          <li>尊重与包容：禁止人身攻击、歧视与骚扰。</li>
          <li>真实与负责：分享签证与法律信息时请标注来源与更新时间。</li>
          <li>拒绝垃圾营销：禁止未经同意的导流与重复刷屏。</li>
          <li>隐私保护：勿公开他人联系方式与敏感个人信息。</li>
        </ul>
      </article>
    </AppShell>
  );
}
