import { cityRepo } from '@/lib/repository';
import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { CityCard } from '@/components/common/CityCard';
import { buildMetadata } from '@/lib/utils/seo';
export const metadata = buildMetadata({
  path: '/cities',
  title: '城市频道',
  description: '按地区浏览全球旅居目的地，查看在地人数、成本、签证与社区讨论。',
});

const REGION_LABEL: Record<string, { zh: string; en: string }> = {
  'asia-china': { zh: '中国', en: 'China' },
  'asia-sea': { zh: '东南亚', en: 'Southeast Asia' },
  europe: { zh: '欧洲', en: 'Europe' },
  americas: { zh: '美洲', en: 'Americas' },
  others: { zh: '其他', en: 'Others' },
};

export default function CitiesPage() {
  const byRegion = cityRepo.byRegion();

  return (
    <AppShell rightRail={<RightRail />}>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">城市频道</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl">
          数据综合 Nomad List、Numbeo 与各国统计局公开指标；点击卡片进入城市讨论区。
        </p>
      </header>
      <div className="space-y-12">
        {Object.entries(byRegion).map(([region, cities]) => (
          <section key={region}>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
              {(REGION_LABEL[region] ?? { zh: region, en: region }).zh}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((c) => (
                <CityCard key={c.slug} city={c} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
