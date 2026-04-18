'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useT, pickLocalized } from '@/lib/i18n';
import { cityRepo, postRepo, groupRepo, boardRepo } from '@/lib/repository';
import { useFollowStore } from '@/stores/useFollowStore';
import { useLocalPostsStore, mergeWithSeed } from '@/stores/useLocalPostsStore';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PostCard } from '@/components/common/PostCard';
import { CityCard } from '@/components/common/CityCard';
import { GroupCard } from '@/components/common/GroupCard';
import { BoardCard } from '@/components/common/BoardCard';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';

const NomadWorldMap = dynamic(
  () => import('@/components/map/NomadWorldMap').then((m) => m.NomadWorldMap),
  { ssr: false, loading: () => <div className="card h-[320px] animate-pulse-soft bg-slate-100 dark:bg-slate-900" /> },
);

type Tab = 'hot' | 'latest' | 'featured' | 'following';

export function HomePage() {
  const { t, locale } = useT();
  const [tab, setTab] = React.useState<Tab>('hot');
  const localPosts = useLocalPostsStore((s) => s.posts);
  const followCities = useFollowStore((s) => s.cities);
  const followGroups = useFollowStore((s) => s.groups);
  const followTags = useFollowStore((s) => s.tags);
  const followUsers = useFollowStore((s) => s.users);

  const merged = React.useMemo(() => mergeWithSeed(localPosts, postRepo.all()), [localPosts]);

  const feed = React.useMemo(() => {
    if (tab === 'latest') return [...merged].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)).slice(0, 20);
    if (tab === 'featured') return merged.filter((p) => p.isFeatured).slice(0, 20);
    if (tab === 'following') {
      return merged
        .filter(
          (p) =>
            (p.citySlug && followCities[p.citySlug]) ||
            p.groupSlugs.some((g) => followGroups[g]) ||
            p.tags.some((tg) => followTags[tg]) ||
            followUsers[p.authorId],
        )
        .slice(0, 20);
    }
    return postRepo.trending(20).map((p) => merged.find((m) => m.id === p.id) ?? p);
  }, [merged, tab, followCities, followGroups, followTags, followUsers]);

  const cities = cityRepo.list();
  const hotCities = cityRepo.hot();
  const groups = groupRepo.list().slice(0, 6);
  const boards = boardRepo.list();
  const diaryPosts = postRepo.byBoard('diary').slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 gradient-mesh opacity-90" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        />
        <div className="relative px-6 py-12 sm:py-16 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-800 dark:text-brand-200">
            {t('site.communityTagline')}
          </p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl text-balance">
            {t('home.hero.titleA')}
            <span className="text-brand-700 dark:text-brand-300"> {t('home.hero.titleB')}</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl text-pretty leading-relaxed">
            {t('home.hero.body')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cities" className="btn-base h-11 px-5 bg-brand-600 hover:bg-brand-700 text-white shadow-soft">
              {t('home.hero.cta1')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/compose"
              className="btn-base h-11 px-5 border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900"
            >
              {t('home.hero.cta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Feed */}
      <section>
        <SectionHeader title={locale === 'zh' ? '社区动态' : 'Community feed'} subtitle={t('home.section.mapSub')} />
        <Tabs
          variant="underline"
          value={tab}
          onChange={(k) => setTab(k as Tab)}
          items={[
            { key: 'hot', label: t('feed.recommended') },
            { key: 'latest', label: t('feed.latest') },
            { key: 'featured', label: t('feed.featured') },
            { key: 'following', label: t('feed.following') },
          ]}
          className="mb-4"
        />
        {feed.length === 0 ? (
          <div className="card p-8 text-center text-sm text-slate-500 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-200">{t('feed.empty.title')}</p>
            <p className="mt-1">{t('feed.empty.body')}</p>
            <Link href="/cities" className="mt-4 inline-block">
              <Button variant="primary">{t('home.hero.cta1')}</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {feed.map((p, i) => (
              <PostCard key={p.id} post={p} variant={i === 0 && tab === 'hot' ? 'feature' : 'default'} />
            ))}
          </div>
        )}
      </section>

      {/* Map */}
      <section>
        <SectionHeader title={t('home.section.map')} subtitle={t('home.section.mapSub')} href="/cities" hrefLabel={t('common.viewAll')} />
        <NomadWorldMap cities={cities} />
      </section>

      {/* Cities */}
      <section>
        <SectionHeader title={t('home.section.cities')} subtitle={t('home.section.citiesSub')} href="/cities" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotCities.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>
      </section>

      {/* Groups + Boards */}
      <div className="grid lg:grid-cols-2 gap-10">
        <section>
          <SectionHeader title={t('home.section.groups')} href="/groups" />
          <div className="grid sm:grid-cols-2 gap-3">
            {groups.map((g) => (
              <GroupCard key={g.slug} group={g} />
            ))}
          </div>
        </section>
        <section>
          <SectionHeader title={t('home.section.boards')} href="/boards" />
          <div className="grid sm:grid-cols-2 gap-3">
            {boards.slice(0, 6).map((b) => (
              <BoardCard key={b.slug} board={b} />
            ))}
          </div>
        </section>
      </div>

      {/* Diary */}
      <section>
        <SectionHeader title={t('home.section.diary')} href="/diary" />
        <div className="grid sm:grid-cols-2 gap-4">
          {diaryPosts.map((p) => (
            <PostCard key={p.id} post={p} variant="mini" />
          ))}
        </div>
      </section>

      {/* Data provenance */}
      <section className="card p-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        <p className="font-semibold text-slate-700 dark:text-slate-200 mb-2">数据与来源说明</p>
        <p>
          城市「在地旅居者」人数、网速、宜居与治安主观分：综合 Nomad List 公开榜单与 Numbeo 生活成本/安全指数，并按各国统计局 CPI、租金中位数做交叉校验后写入演示数据集；月生活成本与租金为估算区间（USD/CNY），随汇率波动，不构成投资或签证法律建议。
        </p>
      </section>
    </div>
  );
}
