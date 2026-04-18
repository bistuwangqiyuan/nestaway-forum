'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useUiStore } from '@/stores/useUiStore';
import { useT } from '@/lib/i18n';
import { Logo } from '@/components/brand/Logo';
import { cn } from '@/lib/utils/cn';
import {
  Compass,
  Map,
  Users,
  BookOpen,
  Sparkles,
  Globe2,
  TrendingUp,
  Star,
} from 'lucide-react';

export function MobileSidebar() {
  const open = useUiStore((s) => s.sidebarOpen);
  const setOpen = useUiStore((s) => s.setSidebarOpen);
  const { t, locale } = useT();

  if (!open) return null;

  const items = [
    { href: '/', label: t('nav.home'), icon: Compass },
    { href: '/trending', label: 'Trending', icon: TrendingUp },
    { href: '/featured', label: 'Featured', icon: Star },
    { href: '/cities', label: t('nav.cities'), icon: Map },
    { href: '/groups', label: t('nav.groups'), icon: Users },
    { href: '/boards', label: t('nav.boards'), icon: BookOpen },
    { href: '/diary', label: t('nav.diary'), icon: Sparkles },
    { href: '/explore', label: t('nav.explore'), icon: Globe2 },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-label="close overlay"
        onClick={() => setOpen(false)}
      />
      <div className="absolute left-0 top-0 bottom-0 w-[min(88vw,320px)] bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 shadow-pop flex flex-col animate-fade-in-up">
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
          <Logo size={28} showWordmark wordmark={locale === 'zh' ? 'zh' : 'en'} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 flex flex-col gap-0.5">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-2.5 px-3 h-11 rounded-lg text-sm font-medium',
                'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800',
              )}
            >
              <it.icon className="h-4 w-4 opacity-80" />
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
