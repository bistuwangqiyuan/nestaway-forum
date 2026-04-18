'use client';

import Link from 'next/link';
import { Wifi, ShieldCheck, Sun, Users } from 'lucide-react';
import type { City } from '@/types';
import { useT, pickLocalized } from '@/lib/i18n';
import { fmtCount } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';

type Props = { city: City; variant?: 'feature' | 'default' | 'compact'; className?: string };

export function CityCard({ city, variant = 'default', className }: Props) {
  const { locale } = useT();
  const stats = city.stats;

  if (variant === 'compact') {
    return (
      <Link
        href={`/cities/${city.slug}`}
        className={cn(
          'card card-hover flex items-center gap-3 p-3',
          className,
        )}
      >
        <div
          className="w-12 h-12 rounded-lg shrink-0"
          style={{ background: `linear-gradient(135deg, ${city.gradient[0]} 0%, ${city.gradient[1]} 100%)` }}
        />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            <span className="mr-1">{city.flag}</span>
            {pickLocalized(city.name, locale)}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
            {pickLocalized(city.country, locale)} · {fmtCount(stats.nomadsOnline)} 在线
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/cities/${city.slug}`}
      className={cn('card card-hover overflow-hidden block group', className)}
    >
      <div
        className={cn(
          'relative w-full overflow-hidden',
          variant === 'feature' ? 'aspect-[16/10]' : 'aspect-[16/9]',
        )}
        style={{ background: `linear-gradient(135deg, ${city.gradient[0]} 0%, ${city.gradient[1]} 100%)` }}
      >
        {city.cover && (
          <img
            src={city.cover}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.06]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-md bg-white/90 text-[11px] font-semibold text-slate-800 backdrop-blur">
            {city.flag} {pickLocalized(city.country, locale)}
          </span>
          {city.isHot && (
            <span className="px-2 py-0.5 rounded-md bg-warm-500 text-[11px] font-bold text-white">HOT</span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className={cn('font-display font-bold leading-tight drop-shadow', variant === 'feature' ? 'text-2xl' : 'text-lg')}>
            {pickLocalized(city.name, locale)}
          </div>
          <p className="mt-1 text-[12px] leading-snug text-white/85 clip-2">
            {pickLocalized(city.description, locale)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 divide-x divide-slate-100 dark:divide-slate-800 text-center text-[11px]">
        <Stat icon={<Users className="h-3 w-3" />} value={fmtCount(stats.nomadsOnline)} label="在地" />
        <Stat icon={<Wifi className="h-3 w-3" />} value={`${stats.internetMbps}M`} label="网速" />
        <Stat icon={<Sun className="h-3 w-3" />} value={`${stats.weatherScore}°`} label="宜居" />
        <Stat icon={<ShieldCheck className="h-3 w-3" />} value={`${stats.safetyScore}`} label="治安" />
      </div>
    </Link>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="px-1 py-2.5">
      <div className="inline-flex items-center gap-0.5 text-slate-500 dark:text-slate-400 text-[10px]">{icon}{label}</div>
      <div className="font-bold text-slate-900 dark:text-slate-100 num-tabular text-sm">{value}</div>
    </div>
  );
}
