'use client';

import Link from 'next/link';
import { useDraftStore } from '@/stores/useDraftStore';
import { useT } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';

export function MeDraftsClient() {
  const { t } = useT();
  const draft = useDraftStore((s) => s.draft);
  const hasContent = draft.title.trim().length > 0 || draft.content.trim().length > 0;

  return (
    <div className="card p-6">
      {hasContent ? (
        <>
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">{draft.title || '（无标题）'}</h2>
          <p className="text-xs text-slate-400 mt-1">更新于 {draft.updatedAt}</p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 clip-4">{draft.content}</p>
          <Link href="/compose" className="mt-4 inline-block">
            <Button>{t('nav.compose')}</Button>
          </Link>
        </>
      ) : (
        <p className="text-slate-500">{t('common.empty')}</p>
      )}
    </div>
  );
}
