'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ulid } from 'ulid';
import { useDraftStore } from '@/stores/useDraftStore';
import { useLocalPostsStore } from '@/stores/useLocalPostsStore';
import { useUserStore } from '@/stores/useUserStore';
import { useT } from '@/lib/i18n';
import { scanContent } from '@/lib/utils/moderation';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Tabs } from '@/components/ui/Tabs';
import { MarkdownView } from '@/components/common/MarkdownView';
import type { Post, PostType } from '@/types';
import { POST_TYPE_MSG } from '@/lib/i18n/post-type-labels';
const TYPES: PostType[] = [
  'discussion',
  'question',
  'guide',
  'diary',
  'marketplace',
  'roommate',
  'event',
  'job',
];

export function ComposeForm() {
  const router = useRouter();
  const { t } = useT();
  const draft = useDraftStore((s) => s.draft);
  const setDraft = useDraftStore((s) => s.setDraft);
  const resetDraft = useDraftStore((s) => s.reset);
  const addPost = useLocalPostsStore((s) => s.add);
  const me = useUserStore((s) => s.current());
  const [tab, setTab] = React.useState<'edit' | 'preview'>('edit');
  const [err, setErr] = React.useState<string | null>(null);

  const submit = () => {
    setErr(null);
    const title = draft.title.trim();
    const content = draft.content.trim();
    if (title.length < 5 || title.length > 100) {
      setErr(t('compose.error.title'));
      return;
    }
    if (content.length < 30) {
      setErr(t('compose.error.content'));
      return;
    }
    const mod = scanContent(`${title}\n${content}`);
    if (!mod.ok) {
      setErr(t('compose.error.moderation'));
      return;
    }
    const id = `local-${ulid()}`;
    const excerpt = content.replace(/\s+/g, ' ').slice(0, 160) + (content.length > 160 ? '…' : '');
    const post: Post = {
      id,
      type: draft.type,
      title,
      excerpt,
      content,
      cover: draft.cover || undefined,
      authorId: me.id,
      citySlug: draft.citySlug,
      groupSlugs: draft.groupSlugs,
      boardSlug: draft.type === 'diary' ? 'diary' : undefined,
      tags: draft.tags,
      stats: { views: 0, likes: 0, favorites: 0, comments: 0, reactions: {} },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      visibility: draft.visibility,
    };
    addPost(post);
    resetDraft();
    router.push(`/post/${id}`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('compose.field.type')}</label>
        <select
          className="mt-1.5 block w-full h-10 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-sm"
          value={draft.type}
          onChange={(e) => setDraft({ type: e.target.value as PostType })}
        >
          {TYPES.map((tp) => (
            <option key={tp} value={tp}>
              {t(POST_TYPE_MSG[tp])}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('compose.titlePlaceholder')}</label>
        <Input className="mt-1.5" value={draft.title} onChange={(e) => setDraft({ title: e.target.value })} />
      </div>

      <div>
        <Tabs
          value={tab}
          onChange={(k) => setTab(k as 'edit' | 'preview')}
          items={[
            { key: 'edit', label: t('compose.editor') },
            { key: 'preview', label: t('compose.preview') },
          ]}
          className="mb-2"
        />
        {tab === 'edit' ? (
          <Textarea
            value={draft.content}
            onChange={(e) => setDraft({ content: e.target.value })}
            placeholder={t('compose.contentPlaceholder')}
            className="min-h-[280px] font-mono text-sm"
          />
        ) : (
          <div className="card p-4 min-h-[280px]">
            <MarkdownView content={draft.content || '_'} />
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">{t('compose.field.city')}</label>
          <Input
            className="mt-1.5"
            placeholder="dali / chiangmai …"
            value={draft.citySlug ?? ''}
            onChange={(e) => setDraft({ citySlug: e.target.value || undefined })}
          />
        </div>
        <div>
          <label className="text-sm font-medium">{t('compose.field.tags')}</label>
          <Input
            className="mt-1.5"
            placeholder="visa, co-working …"
            value={draft.tags.join(', ')}
            onChange={(e) =>
              setDraft({
                tags: e.target.value
                  .split(/[,，\s]+/)
                  .map((s) => s.trim())
                  .filter(Boolean),
              })
            }
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">{t('compose.field.cover')}</label>
        <Input className="mt-1.5" value={draft.cover ?? ''} onChange={(e) => setDraft({ cover: e.target.value || undefined })} />
      </div>

      {err && <p className="text-sm text-red-600 dark:text-red-400">{err}</p>}

      <div className="flex gap-3">
        <Button onClick={submit}>{t('compose.submit')}</Button>
        <Button variant="outline" type="button" onClick={() => setDraft({ title: '', content: '' })}>
          {t('common.cancel')}
        </Button>
      </div>
      <p className="text-xs text-slate-400">{t('compose.draft.saved')}</p>
    </div>
  );
}
