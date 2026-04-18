'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

type Toast = { id: number; title: string; description?: string; tone?: 'success' | 'error' | 'info' };

type Ctx = {
  push: (t: Omit<Toast, 'id'>) => void;
};

const ToastContext = React.createContext<Ctx | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<Toast[]>([]);
  const push = React.useCallback((t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random();
    setItems((s) => [...s, { ...t, id }]);
    setTimeout(() => setItems((s) => s.filter((i) => i.id !== id)), 3500);
  }, []);
  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
        {items.map((t) => (
          <div
            key={t.id}
            className={cn(
              'card shadow-pop px-4 py-3 animate-fade-in-up',
              t.tone === 'success' && 'border-emerald-200 dark:border-emerald-800',
              t.tone === 'error' && 'border-red-200 dark:border-red-800',
            )}
          >
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.title}</div>
            {t.description && (
              <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  return ctx ?? { push: () => undefined };
}
