'use client';

import * as React from 'react';
import { I18nProvider } from '@/lib/i18n';
import { ToastProvider } from '@/components/ui/Toast';
import { useUiStore, applyTheme } from '@/stores/useUiStore';

function ThemeBoot() {
  const theme = useUiStore((s) => s.theme);
  React.useEffect(() => {
    applyTheme(theme);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme(theme);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [theme]);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <ToastProvider>
        <ThemeBoot />
        {children}
      </ToastProvider>
    </I18nProvider>
  );
}
