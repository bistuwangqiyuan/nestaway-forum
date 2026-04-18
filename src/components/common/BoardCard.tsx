'use client';

import Link from 'next/link';
import * as Lucide from 'lucide-react';
import type { Board } from '@/types';
import { useT, pickLocalized } from '@/lib/i18n';
import { fmtCount } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';

const palette: Record<string, string> = {
  visa: 'from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40 text-sky-800 dark:text-sky-200',
  rental: 'from-warm-100 to-amber-100 dark:from-warm-900/40 dark:to-amber-900/40 text-warm-800 dark:text-warm-200',
  marketplace: 'from-emerald-100 to-lime-100 dark:from-emerald-900/40 dark:to-lime-900/40 text-emerald-800 dark:text-emerald-200',
  roommate: 'from-violet-100 to-fuchsia-100 dark:from-violet-900/40 dark:to-fuchsia-900/40 text-violet-800 dark:text-violet-200',
  jobs: 'from-brand-100 to-emerald-100 dark:from-brand-900/40 dark:to-emerald-900/40 text-brand-800 dark:text-brand-200',
  'remote-work': 'from-indigo-100 to-cyan-100 dark:from-indigo-900/40 dark:to-cyan-900/40 text-indigo-800 dark:text-indigo-200',
  health: 'from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 text-rose-800 dark:text-rose-200',
  diary: 'from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-800 dark:text-purple-200',
  feedback: 'from-slate-100 to-slate-200 dark:from-slate-800/60 dark:to-slate-700/60 text-slate-700 dark:text-slate-200',
};

export function BoardCard({ board, className }: { board: Board; className?: string }) {
  const { locale } = useT();
  const Icon = (Lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>)[board.icon] ?? Lucide.Hash;

  return (
    <Link
      href={`/boards/${board.slug}`}
      className={cn(
        'card card-hover p-4 flex items-start gap-3 bg-gradient-to-br',
        palette[board.slug] ?? 'from-slate-50 to-white text-slate-700',
        className,
      )}
    >
      <div className="w-10 h-10 rounded-lg grid place-items-center bg-white/70 dark:bg-slate-900/40 shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold leading-tight">{pickLocalized(board.name, locale)}</div>
        <p className="mt-0.5 text-[11px] leading-snug opacity-80 clip-2">
          {pickLocalized(board.description, locale)}
        </p>
        <div className="mt-2 text-[11px] opacity-70 num-tabular">{fmtCount(board.postCount)} 帖子</div>
      </div>
    </Link>
  );
}
