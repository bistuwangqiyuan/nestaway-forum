import { notFound } from 'next/navigation';
import { groupRepo, postRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return groupRepo.list().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const g = groupRepo.bySlug(slug);
  if (!g) return buildMetadata({ path: `/groups/${slug}`, title: '小组' });
  return buildMetadata({
    path: `/groups/${slug}`,
    title: g.name.zh,
    description: g.description.zh,
  });
}

export default async function GroupDetailPage({ params }: Props) {
  const { slug } = await params;
  const group = groupRepo.bySlug(slug);
  if (!group) notFound();
  const posts = postRepo.byGroup(slug);

  return (
    <AppShell rightRail={<RightRail />}>
      <header
        className="mb-8 rounded-2xl p-8 text-white"
        style={{ background: `linear-gradient(135deg, ${group.gradient[0]} 0%, ${group.gradient[1]} 100%)` }}
      >
        <div className="text-4xl mb-2">{group.emoji}</div>
        <h1 className="font-display text-3xl font-bold">{group.name.zh}</h1>
        <p className="mt-2 max-w-2xl text-white/90">{group.description.zh}</p>
      </header>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}
