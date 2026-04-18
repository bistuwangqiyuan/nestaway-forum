import { AppShell } from '@/components/layout/AppShell';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/about',
  title: '关于栖遇社区',
  description: '为中长期旅居者打造的社区与信息平台。',
});

export default function AboutPage() {
  return (
    <AppShell hideRightRail>
      <article className="prose dark:prose-invert max-w-3xl">
        <h1>关于栖遇社区</h1>
        <p>
          栖遇 NestAway 旅居社区面向数字游民、远程工作者、家庭旅居与候鸟人群，提供城市攻略、签证讨论、找房与二手、室友匹配、远程工作与旅居日记等内容形态。
        </p>
        <p>
          本站为论坛前端演示版本（V1），数据为基于公开来源整理的样本数据集，后续将对接账号体系与后端服务。
        </p>
      </article>
    </AppShell>
  );
}
