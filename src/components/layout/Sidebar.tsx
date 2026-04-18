'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  TrendingUp,
  Star,
  Map,
  Users,
  BookOpen,
  Sparkles,
  Bookmark,
  PenSquare,
  Award,
  Globe2,
} from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils/cn';
import { useT, pickLocalized } from '@/lib/i18n';
import { useFollowStore } from '@/stores/useFollowStore';
import { cityRepo, groupRepo } from '@/lib/repository';

type Item = { href: string; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string };

export function Sidebar() {
  const pathname = usePathname();
  const { t, locale } = useT();
  const followCities = useFollowStore((s) => s.cities);
  const followGroups = useFollowStore((s) => s.groups);

  const main: Item[] = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/trending', label: '热门 · Trending', icon: TrendingUp },
    { href: '/featured', label: '精华 · Featured', icon: Star },
    { href: '/cities', label: t('nav.cities'), icon: Map },
    { href: '/groups', label: t('nav.groups'), icon: Users },
    { href: '/boards', label: t('nav.boards'), icon: BookOpen },
    { href: '/diary', label: t('nav.diary'), icon: Sparkles },
    { href: '/explore', label: t('nav.explore'), icon: Globe2 },
  ];
  const personal: Item[] = [
    { href: '/me/favorites', label: t('sidebar.myFavorites'), icon: Bookmark },
    { href: '/me/drafts', label: t('sidebar.myDrafts'), icon: PenSquare },
    { href: '/me/badges', label: '我的徽章 · Badges', icon: Award },
  ];

  const followedCities = Object.keys(followCities).map((s) => cityRepo.bySlug(s)).filter(Boolean);
  const followedGroups = Object.keys(followGroups).map((s) => groupRepo.bySlug(s)).filter(Boolean);

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="px-3 mt-5">
      <div className="px-2 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );

  const Row = ({ href, label, icon: Icon, badge, emoji }: Item & { emoji?: string }) => {
    const active = href === '/' ? pathname === '/' : pathname?.startsWith(href);
    return (
      <Link
        href={href}
        className={cn(
          'group flex items-center gap-2.5 px-2 h-9 rounded-md text-sm transition-colors',
          active
            ? 'bg-brand-50 text-brand-800 dark:bg-brand-900/30 dark:text-brand-200 font-semibold'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
        )}
      >
        {emoji ? (
          <span className="w-5 text-center">{emoji}</span>
        ) : (
          Icon && <Icon className="h-4 w-4 opacity-80" />
        )}
        <span className="truncate">{label}</span>
        {badge && (
          <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-warm-100 text-warm-700 dark:bg-warm-900/30 dark:text-warm-200">
            {badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside className="hidden lg:block w-[260px] shrink-0">
      <div className="sticky top-[calc(var(--header-h)+1rem)] h-[calc(100vh-var(--header-h)-2rem)] overflow-y-auto pr-2">
        <div className="py-2">
          {main.map((it) => (
            <div key={it.href} className="px-3">
              <Row {...it} />
            </div>
          ))}
        </div>

        <Section title={t('sidebar.followingCities')}>
          {followedCities.length === 0 ? (
            <p className="px-2 text-xs text-slate-400">{t('sidebar.empty.cities')}</p>
          ) : (
            followedCities.map((c) => (
              <Row
                key={c!.slug}
                href={`/cities/${c!.slug}`}
                label={pickLocalized(c!.name, locale)}
                icon={Map}
                emoji={c!.flag}
              />
            ))
          )}
        </Section>

        <Section title={t('sidebar.followingGroups')}>
          {followedGroups.length === 0 ? (
            <p className="px-2 text-xs text-slate-400">{t('sidebar.empty.groups')}</p>
          ) : (
            followedGroups.map((g) => (
              <Row
                key={g!.slug}
                href={`/groups/${g!.slug}`}
                label={pickLocalized(g!.name, locale)}
                icon={Users}
                emoji={g!.emoji}
              />
            ))
          )}
        </Section>

        <Section title="个人 · Personal">
          {personal.map((it) => (
            <Row key={it.href} {...it} />
          ))}
        </Section>

        <div className="px-5 mt-6 mb-8">
          <PlusBanner />
        </div>
      </div>
    </aside>
  );
}

function PlusBanner() {
  const { t } = useT();
  return (
    <Link
      href="/about/plus"
      className="block rounded-xl p-4 text-white shadow-pop relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#0E7C66 0%,#3FB68D 50%,#F4A258 100%)',
      }}
    >
      <Sparkles className="h-5 w-5 mb-2" />
      <div className="text-sm font-bold leading-tight">{t('rightside.plusBanner.title')}</div>
      <div className="mt-1 text-[11px] leading-snug opacity-90">{t('rightside.plusBanner.body')}</div>
      <div className="mt-3 inline-flex h-7 items-center px-3 rounded-full bg-white/15 hover:bg-white/25 text-xs font-medium transition-colors">
        {t('rightside.plusBanner.cta')} →
      </div>
    </Link>
  );
}
