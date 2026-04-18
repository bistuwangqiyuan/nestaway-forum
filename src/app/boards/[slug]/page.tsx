import { notFound } from 'next/navigation';
import { boardRepo, postRepo } from '@/lib/repository';
import type { BoardSlug } from '@/types';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

type Props = { params: Promise<{ slug: string }> };

const SLUGS: BoardSlug[] = [
  'visa',
  'rental',
  'marketplace',
  'roommate',
  'jobs',
  'remote-work',
  'health',
  'diary',
  'feedback',
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const b = boardRepo.bySlug(slug);
  if (!b) return buildMetadata({ path: `/boards/${slug}`, title: '板块' });
  return buildMetadata({
    path: `/boards/${slug}`,
    title: b.name.zh,
    description: b.description.zh,
  });
}

export default async function BoardPage({ params }: Props) {
  const { slug } = await params;
  const board = boardRepo.bySlug(slug as BoardSlug);
  if (!board) notFound();
  const posts = postRepo.byBoard(board.slug);

  return (
    <AppShell rightRail={<RightRail />}>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">{board.name.zh}</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl">{board.description.zh}</p>
      </header>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}
