import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type Props = {
  size?: number;
  showWordmark?: boolean;
  wordmark?: 'zh' | 'en' | 'both';
  className?: string;
};

export function Logo({ size = 32, showWordmark = true, wordmark = 'zh', className }: Props) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Mark size={size} />
      {showWordmark && (
        <span className="leading-none">
          <span className="block font-display font-bold tracking-tight text-slate-900 dark:text-slate-50 text-[17px]">
            {wordmark === 'en' ? 'NestAway' : '栖遇'}
          </span>
          {wordmark === 'both' && (
            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">
              NestAway · World Living
            </span>
          )}
          {wordmark === 'zh' && (
            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">
              NestAway · 旅居社区
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export function Mark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nestaway-mark-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#0E7C66" />
          <stop offset="100%" stopColor="#3FB68D" />
        </linearGradient>
        <linearGradient id="nestaway-mark-roof" x1="32" y1="14" x2="32" y2="34">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#F4A258" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#nestaway-mark-bg)" />
      {/* Roof / nest */}
      <path
        d="M14 34 L32 16 L50 34 Z"
        fill="url(#nestaway-mark-roof)"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* House body */}
      <path
        d="M19 34 H45 V46 A4 4 0 0 1 41 50 H23 A4 4 0 0 1 19 46 Z"
        fill="#FFFFFF"
        opacity="0.95"
      />
      {/* Door + path = traveler trail */}
      <path d="M30 50 V42 H34 V50" fill="#0E7C66" />
      <circle cx="46" cy="22" r="2.6" fill="#FFFFFF" opacity="0.85" />
      <circle cx="50" cy="28" r="1.4" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
