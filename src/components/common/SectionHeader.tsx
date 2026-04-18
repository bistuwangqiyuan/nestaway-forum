import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  href?: string;
  hrefLabel?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, href, hrefLabel = '查看全部', className }: Props) {
  return (
    <div className={cn('flex items-end justify-between gap-4 mb-4', className)}>
      <div className="min-w-0">
        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 dark:text-brand-300 hover:gap-2 transition-all"
        >
          {hrefLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
