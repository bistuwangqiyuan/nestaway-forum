import { notFound } from 'next/navigation';
import { tagRepo, postRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tagRepo.list().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tag = tagRepo.bySlug(slug);
  if (!tag) return buildMetadata({ path: `/tags/${slug}`, title: '标签' });
  return buildMetadata({
    path: `/tags/${slug}`,
    title: `#${tag.name.zh}`,
    description: `标签 ${tag.name.zh} 下的讨论与攻略`,
  });
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = tagRepo.bySlug(slug);
  if (!tag) notFound();
  const posts = postRepo.byTag(slug);

  return (
    <AppShell rightRail={<RightRail />}>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">#{tag.name.zh}</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{posts.length} 篇相关帖子（演示数据）</p>
      </header>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}
