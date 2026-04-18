export function formatNumber(n: number, locale: 'zh' | 'en' = 'zh'): string {
  if (n < 1000) return String(n);
  if (locale === 'zh') {
    if (n < 10000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
    return `${(n / 10000).toFixed(1).replace(/\.0$/, '')}万`;
  }
  if (n < 1_000_000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
}

export function formatCurrency(value: number, currency: string = 'CNY', locale: 'zh' | 'en' = 'zh') {
  try {
    return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${currency} ${value}`;
  }
}

export function clampString(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + '…';
}

/** Compact number formatter (locale-agnostic, suitable for badges & feed counters). */
export function fmtCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10_000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  if (n < 1_000_000) return `${(n / 1000).toFixed(0)}k`;
  return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
}

export function pluralize(count: number, single: string, plural?: string) {
  if (count === 1) return single;
  return plural ?? `${single}s`;
}
