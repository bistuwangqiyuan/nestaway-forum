import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center px-6 py-14 rounded-xl border border-dashed border-slate-200 dark:border-slate-700',
        className,
      )}
    >
      {icon && (
        <div className="mb-4 grid place-items-center w-14 h-14 rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      {description && (
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 max-w-md">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
