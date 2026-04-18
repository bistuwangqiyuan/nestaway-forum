import { postRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/trending',
  title: '热门趋势',
  description: '按社区热度衰减算法排序的实时热门帖子。',
});

export default function TrendingPage() {
  const posts = postRepo.trending(24);
  return (
    <AppShell rightRail={<RightRail />}>
      <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">热门趋势</h1>
      <p className="text-sm text-slate-500 mb-8">热度 = 赞×2 + 收藏×3 + 评论×4 + 表情，并按时间衰减（演示算法）。</p>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}
