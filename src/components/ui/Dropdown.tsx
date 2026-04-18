'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export function Dropdown({
  trigger,
  children,
  align = 'right',
  className,
}: {
  trigger: React.ReactNode;
  children: (close: () => void) => React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn('relative inline-block', className)}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="inline-flex items-center">
        {trigger}
      </button>
      {open && (
        <div
          role="menu"
          className={cn(
            'absolute z-40 mt-2 min-w-[200px] rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-pop py-1 animate-fade-in-up',
            align === 'right' ? 'right-0' : 'left-0',
          )}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      role="menuitem"
      className={cn(
        'flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-left',
        className,
      )}
      {...props}
    />
  );
}

export function DropdownDivider() {
  return <div className="my-1 h-px bg-slate-100 dark:bg-slate-800" />;
}

export function DropdownLabel({ children }: { children: React.ReactNode }) {
  return <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{children}</div>;
}
