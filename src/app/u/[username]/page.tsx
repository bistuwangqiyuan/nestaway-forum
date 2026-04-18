import { notFound } from 'next/navigation';
import { userRepo, postRepo, cityRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { PostCard } from '@/components/common/PostCard';
import { UserCard } from '@/components/common/UserCard';
import { BadgeChip } from '@/components/common/BadgeChip';
import { buildMetadata } from '@/lib/utils/seo';

type Props = { params: Promise<{ username: string }> };

export function generateStaticParams() {
  return userRepo.list().map((u) => ({ username: u.username }));
}

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  const u = userRepo.byUsername(username);
  if (!u) return buildMetadata({ path: `/u/${username}`, title: '用户' });
  return buildMetadata({
    path: `/u/${username}`,
    title: u.displayName,
    description: u.bio ?? `${u.displayName} 的栖遇主页`,
    type: 'profile',
  });
}

export default async function UserPage({ params }: Props) {
  const { username } = await params;
  const user = userRepo.byUsername(username);
  if (!user) notFound();
  const posts = postRepo.byAuthor(user.id);

  return (
    <AppShell rightRail={<RightRail />}>
      <UserCard user={user} className="mb-8" />
      {user.visitedCities.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">旅居足迹</h2>
          <ul className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
            {user.visitedCities.map((v) => {
              const c = cityRepo.bySlug(v.citySlug);
              return (
                <li key={v.citySlug + v.from} className="pill">
                  {c?.flag} {c?.name.zh ?? v.citySlug}
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">徽章</h2>
        <div className="flex flex-wrap gap-2">
          {user.badges.map((b) => (
            <BadgeChip key={b} badgeKey={b} showName />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">发表</h2>
        <div className="flex flex-col gap-4">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
