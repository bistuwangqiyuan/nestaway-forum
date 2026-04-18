'use client';

import * as React from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { Logo } from '@/components/brand/Logo';

export function Footer() {
  const { t, locale } = useT();
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40">
      <div className="container-fluid py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo showWordmark wordmark="both" size={32} />
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {locale === 'zh'
              ? '栖遇 NestAway · 全球首个中长期旅居者社区，分享城市攻略、寻找生活同伴、记录旅居人生。'
              : 'NestAway · The first global community for long-term nomads & slow travelers. Share city guides, find your tribe, log your living journey.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <FooterCol title={locale === 'zh' ? '社区' : 'Community'}>
            <Link href="/cities" className="link-soft">{t('nav.cities')}</Link>
            <Link href="/groups" className="link-soft">{t('nav.groups')}</Link>
            <Link href="/boards" className="link-soft">{t('nav.boards')}</Link>
            <Link href="/diary" className="link-soft">{t('nav.diary')}</Link>
          </FooterCol>
          <FooterCol title={locale === 'zh' ? '关于' : 'About'}>
            <Link href="/about" className="link-soft">{t('footer.about')}</Link>
            <Link href="/about/community" className="link-soft">{t('footer.community')}</Link>
            <Link href="/about/contact" className="link-soft">{t('footer.contact')}</Link>
          </FooterCol>
          <FooterCol title="Legal">
            <Link href="/legal/privacy" className="link-soft">{t('footer.privacy')}</Link>
            <Link href="/legal/terms" className="link-soft">{t('footer.terms')}</Link>
          </FooterCol>
        </div>
      </div>
      <div className="border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="container-fluid py-4 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>{t('footer.copyright')}</span>
          <span className="opacity-70">v1.0 · forum-edition · 由 Next.js 与 Tailwind 强力驱动</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[12px] font-semibold uppercase tracking-wider text-slate-500 mb-3">
        {title}
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
