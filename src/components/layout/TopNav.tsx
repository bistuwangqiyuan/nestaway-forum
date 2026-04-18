'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import {
  Search,
  Bell,
  PenSquare,
  Menu,
  Moon,
  Sun,
  Languages,
  Globe2,
  Compass,
  Users,
  Map,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Logo } from '@/components/brand/Logo';
import { useT } from '@/lib/i18n';
import { useUiStore } from '@/stores/useUiStore';
import { useUserStore } from '@/stores/useUserStore';
import { Avatar } from '@/components/ui/Avatar';
import { Dropdown, DropdownItem, DropdownDivider, DropdownLabel } from '@/components/ui/Dropdown';
import { notificationRepo } from '@/lib/repository';
import { Button } from '@/components/ui/Button';

export function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { t, locale, setLocale } = useT();
  const theme = useUiStore((s) => s.theme);
  const setTheme = useUiStore((s) => s.setTheme);
  const toggleSidebar = useUiStore((s) => s.toggleSidebar);
  const userId = useUserStore((s) => s.userId);
  const current = useUserStore((s) => s.current);

  const [q, setQ] = React.useState('');
  const unread = notificationRepo.unreadCount();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const items: { href: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { href: '/', label: t('nav.home'), icon: Compass },
    { href: '/cities', label: t('nav.cities'), icon: Map },
    { href: '/groups', label: t('nav.groups'), icon: Users },
    { href: '/boards', label: t('nav.boards'), icon: BookOpen },
    { href: '/diary', label: t('nav.diary'), icon: Sparkles },
  ];

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  const me = userId ? current() : null;

  return (
    <header
      className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 glass"
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container-fluid h-full flex items-center gap-3">
        {/* Logo + Mobile sidebar */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center" aria-label="栖遇 NestAway">
          <Logo size={30} showWordmark wordmark={locale === 'zh' ? 'zh' : 'en'} />
        </Link>

        {/* Primary nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-3">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 h-9 rounded-md text-sm font-medium transition-colors',
                isActive(it.href)
                  ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
              )}
            >
              <it.icon className="h-4 w-4 opacity-80" />
              <span>{it.label}</span>
            </Link>
          ))}
        </nav>

        {/* Search */}
        <form onSubmit={onSubmit} className="flex-1 max-w-xl ml-2">
          <label className="relative block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('search.placeholder')}
              className="w-full h-10 pl-9 pr-4 rounded-full border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-sm placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-950 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 outline-none transition"
            />
          </label>
        </form>

        {/* Right side */}
        <div className="flex items-center gap-1.5 ml-auto">
          <Link
            href="/compose"
            className="hidden sm:inline-flex btn-base h-9 px-3 text-sm bg-brand-600 hover:bg-brand-700 text-white"
          >
            <PenSquare className="h-4 w-4" />
            <span className="hidden md:inline">{t('nav.compose')}</span>
          </Link>

          <Link
            href="/notifications"
            className="relative inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label={t('nav.notifications')}
          >
            <Bell className="h-5 w-5" />
            {unread > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-warm-500 text-[10px] font-bold text-white grid place-items-center">
                {unread}
              </span>
            )}
          </Link>

          {/* Lang */}
          <Dropdown
            trigger={
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                <Languages className="h-5 w-5" />
              </span>
            }
          >
            {(close) => (
              <>
                <DropdownLabel>Language · 语言</DropdownLabel>
                <DropdownItem onClick={() => { setLocale('zh'); close(); }}>
                  <span className="mr-1">🇨🇳</span> 简体中文 {locale === 'zh' && <span className="ml-auto text-brand-600">✓</span>}
                </DropdownItem>
                <DropdownItem onClick={() => { setLocale('en'); close(); }}>
                  <span className="mr-1">🇬🇧</span> English {locale === 'en' && <span className="ml-auto text-brand-600">✓</span>}
                </DropdownItem>
              </>
            )}
          </Dropdown>

          {/* Theme */}
          <Dropdown
            trigger={
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </span>
            }
          >
            {(close) => (
              <>
                <DropdownItem onClick={() => { setTheme('light'); close(); }}>
                  <Sun className="h-4 w-4" /> {t('theme.light')} {theme === 'light' && <span className="ml-auto text-brand-600">✓</span>}
                </DropdownItem>
                <DropdownItem onClick={() => { setTheme('dark'); close(); }}>
                  <Moon className="h-4 w-4" /> {t('theme.dark')} {theme === 'dark' && <span className="ml-auto text-brand-600">✓</span>}
                </DropdownItem>
                <DropdownItem onClick={() => { setTheme('system'); close(); }}>
                  <Globe2 className="h-4 w-4" /> {t('theme.system')} {theme === 'system' && <span className="ml-auto text-brand-600">✓</span>}
                </DropdownItem>
              </>
            )}
          </Dropdown>

          {/* User avatar */}
          {me ? (
            <Dropdown
              trigger={
                <span className="ml-1">
                  <Avatar size={32} name={me.displayName} gradient={me.avatarGradient} ring />
                </span>
              }
            >
              {(close) => (
                <>
                  <DropdownLabel>{me.displayName}</DropdownLabel>
                  <DropdownItem onClick={() => { router.push(`/u/${me.username}`); close(); }}>
                    {t('nav.profile')}
                  </DropdownItem>
                  <DropdownItem onClick={() => { router.push('/compose'); close(); }}>
                    {t('nav.compose')}
                  </DropdownItem>
                  <DropdownItem onClick={() => { router.push('/notifications'); close(); }}>
                    {t('nav.notifications')}
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem onClick={() => { router.push('/settings'); close(); }}>
                    设置 · Settings
                  </DropdownItem>
                </>
              )}
            </Dropdown>
          ) : (
            <Button size="sm" variant="primary" onClick={() => router.push('/u/me')}>
              {t('nav.signIn')}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
