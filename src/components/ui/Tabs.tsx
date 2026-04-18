'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type TabItem = { key: string; label: React.ReactNode; count?: number };

type Props = {
  items: TabItem[];
  value: string;
  onChange: (key: string) => void;
  variant?: 'pill' | 'underline';
  className?: string;
};

export function Tabs({ items, value, onChange, variant = 'pill', className }: Props) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex items-center gap-1 overflow-x-auto no-scrollbar',
        variant === 'underline' &&
          'border-b border-slate-200 dark:border-slate-800',
        className,
      )}
    >
      {items.map((it) => {
        const active = it.key === value;
        return (
          <button
            key={it.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.key)}
            className={cn(
              'whitespace-nowrap inline-flex items-center gap-1.5 transition-colors',
              variant === 'pill'
                ? cn(
                    'px-3 h-8 rounded-full text-sm font-medium',
                    active
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
                  )
                : cn(
                    'px-1.5 sm:px-3 h-10 -mb-px border-b-2 text-sm',
                    active
                      ? 'border-brand-600 text-slate-900 dark:text-slate-100 dark:border-brand-400 font-semibold'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200',
                  ),
            )}
          >
            <span>{it.label}</span>
            {typeof it.count === 'number' && (
              <span
                className={cn(
                  'inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full text-[10px] font-semibold',
                  active
                    ? 'bg-white/20 text-current dark:bg-slate-900/20'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
                )}
              >
                {it.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
