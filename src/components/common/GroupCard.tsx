'use client';

import Link from 'next/link';
import { Users, MessageCircle } from 'lucide-react';
import type { Group } from '@/types';
import { useT, pickLocalized } from '@/lib/i18n';
import { fmtCount } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';
import { useFollowStore } from '@/stores/useFollowStore';

export function GroupCard({ group, className }: { group: Group; className?: string }) {
  const { locale, t } = useT();
  const isJoined = useFollowStore((s) => s.isGroup(group.slug));
  const toggle = useFollowStore((s) => s.toggleGroup);

  return (
    <div className={cn('card card-hover p-4 flex flex-col', className)}>
      <Link href={`/groups/${group.slug}`} className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-xl grid place-items-center text-2xl shrink-0"
          style={{ background: `linear-gradient(135deg, ${group.gradient[0]} 0%, ${group.gradient[1]} 100%)` }}
        >
          {group.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            {pickLocalized(group.name, locale)}
          </div>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-snug clip-2">
            {pickLocalized(group.description, locale)}
          </p>
        </div>
      </Link>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" />{fmtCount(group.memberCount)}</span>
          <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" />{fmtCount(group.postCount)}</span>
        </div>
        <button
          onClick={() => toggle(group.slug)}
          className={cn(
            'btn-base h-7 px-3 text-[11px]',
            isJoined
              ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              : 'bg-brand-600 hover:bg-brand-700 text-white',
          )}
        >
          {isJoined ? t('group.action.leave') : t('group.action.join')}
        </button>
      </div>
    </div>
  );
}
