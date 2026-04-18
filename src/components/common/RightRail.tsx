'use client';

import Link from 'next/link';
import { Sparkles, TrendingUp, Hash, Users } from 'lucide-react';
import { useT, pickLocalized } from '@/lib/i18n';
import { tagRepo, userRepo, postRepo } from '@/lib/repository';
import { Avatar } from '@/components/ui/Avatar';
import { fmtCount } from '@/lib/utils/format';

export function RightRail() {
  const { t, locale } = useT();
  const hotTags = tagRepo.hot().slice(0, 8);
  const topUsers = userRepo.topByReputation(5).filter((u) => u.id !== 'u-current');
  const trending = postRepo.trending(5);

  return (
    <>
      <div
        className="rounded-2xl p-4 text-white shadow-pop"
        style={{ background: 'linear-gradient(135deg,#0E7C66 0%,#3FB68D 50%,#F4A258 100%)' }}
      >
        <Sparkles className="h-5 w-5 mb-2" />
        <div className="text-base font-bold leading-tight">{t('rightside.plusBanner.title')}</div>
        <div className="mt-1 text-xs opacity-90 leading-snug">{t('rightside.plusBanner.body')}</div>
        <Link
          href="/about/plus"
          className="mt-3 inline-flex h-8 items-center px-3 rounded-full bg-white/20 hover:bg-white/30 text-xs font-medium transition-colors"
        >
          {t('rightside.plusBanner.cta')} →
        </Link>
      </div>

      <div className="card p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-warm-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('rightside.trending')}</h3>
        </div>
        <ol className="flex flex-col gap-2.5">
          {trending.map((p, i) => (
            <li key={p.id}>
              <Link href={`/post/${p.id}`} className="flex items-start gap-2 group">
                <span
                  className={`shrink-0 w-5 text-center text-[13px] font-bold leading-5 ${i < 3 ? 'text-warm-500' : 'text-slate-400'}`}
                >
                  {i + 1}
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-200 group-hover:text-brand-700 dark:group-hover:text-brand-300 leading-snug clip-2">
                  {p.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="card p-4">
        <div className="flex items-center gap-2 mb-3">
          <Users className="h-4 w-4 text-brand-600" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('rightside.activeUsers')}</h3>
        </div>
        <ul className="flex flex-col gap-3">
          {topUsers.map((u) => (
            <li key={u.id}>
              <Link href={`/u/${u.username}`} className="flex items-center gap-2.5">
                <Avatar size={32} name={u.displayName} gradient={u.avatarGradient} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{u.displayName}</div>
                  <div className="text-[11px] text-slate-400 truncate">{u.profession}</div>
                </div>
                <span className="text-[11px] text-brand-600 dark:text-brand-300 font-semibold num-tabular">
                  {fmtCount(u.reputation)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-4">
        <div className="flex items-center gap-2 mb-3">
          <Hash className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {locale === 'zh' ? '热门标签' : 'Hot tags'}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {hotTags.map((tg) => (
            <Link
              key={tg.slug}
              href={`/tags/${tg.slug}`}
              className="pill hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 dark:hover:bg-brand-900/30 dark:hover:text-brand-300 transition-colors"
            >
              #{pickLocalized(tg.name, locale)}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-400 px-2 leading-relaxed">
        数据口径：Nomad List（在地人数与网速）、Numbeo（生活成本与安全主观指数）、各国统计局公开 CPI / 租金统计；本页为演示聚合，非投资建议。
      </p>
    </>
  );
}
