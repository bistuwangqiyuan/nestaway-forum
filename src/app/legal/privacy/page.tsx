import { AppShell } from '@/components/layout/AppShell';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({ path: '/legal/privacy', title: '隐私政策' });

export default function PrivacyPage() {
  return (
    <AppShell hideRightRail>
      <article className="prose dark:prose-invert max-w-3xl text-sm">
        <h1>隐私政策（摘要）</h1>
        <p>
          演示站点在浏览器本地存储主题、语言、草稿与互动状态；不上传个人数据至服务器。正式上线版本将另行提供完整隐私政策与同意机制（含 GDPR / PIPL 合规路径）。
        </p>
      </article>
    </AppShell>
  );
}
