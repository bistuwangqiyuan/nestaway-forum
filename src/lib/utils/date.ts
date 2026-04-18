import { formatDistanceToNowStrict, format } from 'date-fns';
import { zhCN, enUS } from 'date-fns/locale';
import type { Locale } from '@/types';

const locales = { zh: zhCN, en: enUS } as const;

export function relativeTime(iso: string, locale: Locale = 'zh') {
  try {
    return formatDistanceToNowStrict(new Date(iso), {
      addSuffix: true,
      locale: locales[locale],
    });
  } catch {
    return iso;
  }
}

export function fullDate(iso: string, locale: Locale = 'zh') {
  try {
    return format(new Date(iso), locale === 'zh' ? 'yyyy年M月d日 HH:mm' : 'PPp', {
      locale: locales[locale],
    });
  } catch {
    return iso;
  }
}

export const formatRelative = relativeTime;

export function shortDate(iso: string, locale: Locale = 'zh') {
  try {
    return format(new Date(iso), locale === 'zh' ? 'M月d日' : 'MMM d', {
      locale: locales[locale],
    });
  } catch {
    return iso;
  }
}
