'use client';

import Link from 'next/link';
import { Avatar } from '@/components/ui/Avatar';
import { BadgeChip } from './BadgeChip';
import { Button } from '@/components/ui/Button';
import type { User } from '@/types';
import { useT, pickLocalized } from '@/lib/i18n';
import { useFollowStore } from '@/stores/useFollowStore';
import { fmtCount } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';
import { cityRepo } from '@/lib/repository';

type Variant = 'default' | 'compact';

export function UserCard({ user, variant = 'default', className }: { user: User; variant?: Variant; className?: string }) {
  const { t, locale } = useT();
  const isFollowed = useFollowStore((s) => s.isUser(user.id));
  const toggle = useFollowStore((s) => s.toggleUser);

  const city = user.currentCitySlug ? cityRepo.bySlug(user.currentCitySlug) : undefined;

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <Link href={`/u/${user.username}`}>
          <Avatar size={36} name={user.displayName} gradient={user.avatarGradient} />
        </Link>
        <div className="flex-1 min-w-0">
          <Link href={`/u/${user.username}`} className="block text-sm font-semibold text-slate-900 dark:text-slate-100 truncate hover:text-brand-700">
            {user.displayName}
          </Link>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
            {user.profession ?? `@${user.username}`}
            {city && <> · {city.flag} {pickLocalized(city.name, locale)}</>}
          </div>
        </div>
        <Button
          size="sm"
          variant={isFollowed ? 'outline' : 'primary'}
          onClick={() => toggle(user.id)}
        >
          {isFollowed ? t('user.action.unfollow') : t('user.action.follow')}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn('card p-4', className)}>
      <div className="flex items-start gap-4">
        <Link href={`/u/${user.username}`}>
          <Avatar size={56} name={user.displayName} gradient={user.avatarGradient} />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href={`/u/${user.username}`} className="font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-700">
              {user.displayName}
            </Link>
            {user.badges.slice(0, 3).map((b) => <BadgeChip key={b} badgeKey={b} />)}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">@{user.username} · {user.profession}</p>
          {user.bio && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 clip-2">{user.bio}</p>}
          <div className="mt-3 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span><b className="text-slate-800 dark:text-slate-200 num-tabular">{fmtCount(user.followers)}</b> {t('user.followers')}</span>
            <span><b className="text-slate-800 dark:text-slate-200 num-tabular">{user.visitedCities.length}</b> {t('user.cities')}</span>
            <span><b className="text-slate-800 dark:text-slate-200 num-tabular">{fmtCount(user.reputation)}</b> {t('user.reputation')}</span>
          </div>
        </div>
        <Button
          size="sm"
          variant={isFollowed ? 'outline' : 'primary'}
          onClick={() => toggle(user.id)}
          className="shrink-0"
        >
          {isFollowed ? t('user.action.unfollow') : t('user.action.follow')}
        </Button>
      </div>
    </div>
  );
}
