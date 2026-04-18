'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale } from '@/types';
import { zh, type MessageKey } from './messages.zh';
import { en } from './messages.en';

const dicts = { zh, en } as const;

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (k: MessageKey) => string;
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'nestaway-forum:v1:locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'zh';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'zh' || saved === 'en') return saved;
  const lang = navigator.language?.toLowerCase() ?? '';
  return lang.startsWith('zh') ? 'zh' : 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh');

  useEffect(() => {
    const l = detectLocale();
    setLocaleState(l);
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
    }
  }, []);

  const t = useCallback((k: MessageKey) => dicts[locale][k] ?? k, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // SSR fallback
    return { locale: 'zh' as Locale, setLocale: () => {}, t: (k: MessageKey) => zh[k] ?? k };
  }
  return ctx;
}

export function useLocale(): Locale {
  return useT().locale;
}

export function pickLocalized<T extends { zh: string; en: string }>(o: T, locale: Locale): string {
  return locale === 'zh' ? o.zh : o.en;
}
