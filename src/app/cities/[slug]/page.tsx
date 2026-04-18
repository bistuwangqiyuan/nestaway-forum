import { notFound } from 'next/navigation';
import { cityRepo, postRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { CityCard } from '@/components/common/CityCard';
import { PostCard } from '@/components/common/PostCard';
import { buildMetadata } from '@/lib/utils/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cityRepo.list().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = cityRepo.bySlug(slug);
  if (!city) return buildMetadata({ path: `/cities/${slug}`, title: '城市' });
  return buildMetadata({
    path: `/cities/${slug}`,
    title: `${city.name.zh} · ${city.name.en}`,
    description: city.description.zh,
    ogImage: city.cover,
  });
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cityRepo.bySlug(slug);
  if (!city) notFound();
  const posts = postRepo.byCity(slug);

  return (
    <AppShell rightRail={<RightRail />}>
      <CityCard city={city} variant="feature" className="mb-8" />
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">数据口径</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          「在地旅居者」为基于 Nomad List 同类城市热度与社区样本的演示估值；月成本、租金、网速、治安与宜居分为 Numbeo 与公开统计交叉后的区间值，用于产品演示，请以官方政策与实时行情为准。
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">本城讨论</h2>
        <div className="flex flex-col gap-4">
          {posts.length === 0 ? (
            <p className="text-sm text-slate-500">暂无帖子</p>
          ) : (
            posts.map((p) => <PostCard key={p.id} post={p} />)
          )}
        </div>
      </section>
    </AppShell>
  );
}
