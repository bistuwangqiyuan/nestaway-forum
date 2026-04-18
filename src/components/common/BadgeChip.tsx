'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';
import type { BadgeKey } from '@/types';
import { BADGE_BY_KEY, tierColor } from '@/lib/data/badges';
import { useT, pickLocalized } from '@/lib/i18n';

type Props = {
  badgeKey: BadgeKey;
  size?: 'sm' | 'md';
  showName?: boolean;
  className?: string;
};

export function BadgeChip({ badgeKey, size = 'sm', showName = false, className }: Props) {
  const { locale } = useT();
  const def = BADGE_BY_KEY[badgeKey];
  if (!def) return null;
  const color = tierColor(def.tier);
  return (
    <span
      title={`${pickLocalized(def.name, locale)} · ${pickLocalized(def.description, locale)}`}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border font-medium',
        size === 'sm' ? 'px-1.5 py-0 text-[11px]' : 'px-2 py-0.5 text-xs',
        color,
        className,
      )}
    >
      <span aria-hidden>{def.emoji}</span>
      {showName && <span>{pickLocalized(def.name, locale)}</span>}
    </span>
  );
}
