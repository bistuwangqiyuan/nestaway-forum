import type { Metadata } from 'next';
import { postRepo } from '@/lib/repository';
import { buildMetadata } from '@/lib/utils/seo';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostDetailView } from '@/components/post/PostDetailView';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = postRepo.byId(id);
  if (!post) {
    return buildMetadata({
      path: `/post/${id}`,
      title: '旅居讨论',
      description: '栖遇 NestAway 社区帖子',
    });
  }
  return buildMetadata({
    path: `/post/${id}`,
    title: post.title,
    description: post.excerpt,
    type: 'article',
    publishedTime: post.createdAt,
    ogImage: post.cover ?? '/og/default.jpg',
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return (
    <AppShell rightRail={<RightRail />}>
      <PostDetailView id={id} />
    </AppShell>
  );
}
