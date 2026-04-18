'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, PenSquare, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useT } from '@/lib/i18n';
import { useUserStore } from '@/stores/useUserStore';

export function BottomTabBar() {
  const pathname = usePathname();
  const { t } = useT();
  const me = useUserStore((s) => s.current());

  const items = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/cities', label: t('nav.cities'), icon: Map },
    { href: '/compose', label: t('nav.compose'), icon: PenSquare, emphasized: true },
    { href: '/notifications', label: t('nav.notifications'), icon: Bell },
    { href: `/u/${me.username}`, label: t('nav.profile'), icon: User },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200/80 dark:border-slate-800/80 glass"
      style={{ height: 'var(--tabbar-h)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid grid-cols-5 h-full max-w-md mx-auto">
        {items.map((it) => {
          const active = it.href === '/' ? pathname === '/' : pathname?.startsWith(it.href);
          return (
            <li key={it.href} className="flex">
              <Link
                href={it.href}
                className={cn(
                  'flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] transition-colors',
                  active ? 'text-brand-700 dark:text-brand-300' : 'text-slate-500 dark:text-slate-400',
                )}
              >
                {it.emphasized ? (
                  <span className="-mt-5 w-11 h-11 rounded-full bg-brand-600 text-white grid place-items-center shadow-pop ring-4 ring-white dark:ring-slate-950">
                    <it.icon className="h-5 w-5" />
                  </span>
                ) : (
                  <it.icon className={cn('h-5 w-5', active && 'stroke-[2.4]')} />
                )}
                <span>{it.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
