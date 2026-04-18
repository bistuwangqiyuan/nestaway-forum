import { boardRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { BoardCard } from '@/components/common/BoardCard';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/boards',
  title: '主题板块',
  description: '签证、找房、二手、室友、远程工作与旅居日记等主题分区。',
});

export default function BoardsPage() {
  const boards = boardRepo.list();
  return (
    <AppShell rightRail={<RightRail />}>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">主题板块</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">像贴吧一样按主题聚合讨论。</p>
      </header>
      <div className="grid sm:grid-cols-2 gap-4">
        {boards.map((b) => (
          <BoardCard key={b.slug} board={b} />
        ))}
      </div>
    </AppShell>
  );
}
