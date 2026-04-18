import { groupRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { GroupCard } from '@/components/common/GroupCard';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/groups',
  title: '兴趣小组',
  description: '加入数字游民、瑜伽、摄影、家庭旅居等兴趣小组，找到同伴与灵感。',
});

export default function GroupsPage() {
  const groups = groupRepo.list();
  return (
    <AppShell rightRail={<RightRail />}>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">兴趣小组</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">按职业、兴趣与生活方式发现同好。</p>
      </header>
      <div className="grid sm:grid-cols-2 gap-4">
        {groups.map((g) => (
          <GroupCard key={g.slug} group={g} />
        ))}
      </div>
    </AppShell>
  );
}
