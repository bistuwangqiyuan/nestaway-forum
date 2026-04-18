'use client';

import { useT } from '@/lib/i18n';
import { useUiStore } from '@/stores/useUiStore';
import { Button } from '@/components/ui/Button';

export function SettingsClient() {
  const { t, locale, setLocale } = useT();
  const theme = useUiStore((s) => s.theme);
  const setTheme = useUiStore((s) => s.setTheme);

  return (
    <div className="max-w-lg space-y-8">
      <section>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">语言</h2>
        <div className="flex gap-2">
          <Button variant={locale === 'zh' ? 'primary' : 'outline'} size="sm" onClick={() => setLocale('zh')}>
            {t('lang.zh')}
          </Button>
          <Button variant={locale === 'en' ? 'primary' : 'outline'} size="sm" onClick={() => setLocale('en')}>
            {t('lang.en')}
          </Button>
        </div>
      </section>
      <section>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">主题</h2>
        <div className="flex flex-wrap gap-2">
          {(['light', 'dark', 'system'] as const).map((th) => (
            <Button
              key={th}
              variant={theme === th ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setTheme(th)}
            >
              {th === 'light' ? t('theme.light') : th === 'dark' ? t('theme.dark') : t('theme.system')}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
