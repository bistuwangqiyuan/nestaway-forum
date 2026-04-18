'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type Props = {
  name: string;
  gradient?: [string, string];
  src?: string;
  size?: 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 80 | 96 | 128;
  ring?: boolean;
  className?: string;
};

export function Avatar({ name, gradient, src, size = 40, ring, className }: Props) {
  const initials = React.useMemo(() => {
    const trimmed = (name ?? '').trim();
    if (!trimmed) return 'NA';
    const parts = trimmed.split(/\s+|·|・/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    const first = trimmed[0];
    const second = trimmed.length > 1 ? trimmed[1] : '';
    return (first + second).toUpperCase();
  }, [name]);

  const px = `${size}px`;
  const fontSize = `${Math.round(size * 0.42)}px`;
  const bg = gradient
    ? { background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)` }
    : { background: 'linear-gradient(135deg,#0E7C66 0%,#3FB68D 100%)' };

  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-white shadow-soft select-none',
        ring && 'ring-2 ring-white dark:ring-slate-900',
        className,
      )}
      style={{ width: px, height: px, fontSize, ...bg }}
      aria-label={name}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        <span className="leading-none tracking-tight">{initials}</span>
      )}
    </span>
  );
}
