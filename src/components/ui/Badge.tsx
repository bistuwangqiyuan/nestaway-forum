import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const variants = cva(
  'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium leading-tight border',
  {
    variants: {
      tone: {
        neutral: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
        brand: 'bg-brand-50 text-brand-800 border-brand-200/80 dark:bg-brand-900/40 dark:text-brand-200 dark:border-brand-700/40',
        warm: 'bg-warm-50 text-warm-800 border-warm-200/80 dark:bg-warm-900/30 dark:text-warm-200 dark:border-warm-700/40',
        success: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700/40',
        danger: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700/40',
        info: 'bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-900/30 dark:text-sky-200 dark:border-sky-700/40',
        outline: 'bg-transparent text-slate-600 border-slate-300 dark:text-slate-400 dark:border-slate-600',
      },
      size: {
        sm: 'text-[10px] px-1.5 py-0',
        md: 'text-[11px] px-2 py-0.5',
        lg: 'text-xs px-2.5 py-1',
      },
    },
    defaultVariants: { tone: 'neutral', size: 'md' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof variants> {}

export function Badge({ className, tone, size, ...props }: BadgeProps) {
  return <span className={cn(variants({ tone, size }), className)} {...props} />;
}
