import { postRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/diary',
  title: '旅居日记',
});

export default function DiaryPage() {
  const posts = postRepo.byBoard('diary');
  return (
    <AppShell rightRail={<RightRail />}>
      <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">旅居日记</h1>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}
