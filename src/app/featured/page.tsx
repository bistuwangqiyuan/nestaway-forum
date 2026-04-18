import { postRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/featured',
  title: '精华帖',
});

export default function FeaturedPage() {
  const posts = postRepo.featured(30);
  return (
    <AppShell rightRail={<RightRail />}>
      <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">精华帖</h1>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}
