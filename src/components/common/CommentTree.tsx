'use client';

import * as React from 'react';
import Link from 'next/link';
import { Heart, MessageSquare, CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useT } from '@/lib/i18n';
import { formatRelative } from '@/lib/utils/date';
import { fmtCount } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';
import { userRepo } from '@/lib/repository';
import type { Comment } from '@/types';
import { MarkdownView } from './MarkdownView';

type Node = Comment & { children: Node[] };

function buildTree(comments: Comment[]): Node[] {
  const map: Record<string, Node> = {};
  const roots: Node[] = [];
  for (const c of comments) map[c.id] = { ...c, children: [] };
  for (const c of comments) {
    if (c.parentId && map[c.parentId]) map[c.parentId].children.push(map[c.id]);
    else roots.push(map[c.id]);
  }
  return roots;
}

export function CommentTree({ comments }: { comments: Comment[] }) {
  const tree = React.useMemo(() => buildTree(comments), [comments]);
  if (comments.length === 0) {
    return <div className="text-sm text-slate-400 py-8 text-center">{/* empty handled outside */}</div>;
  }
  return (
    <ul className="flex flex-col gap-5">
      {tree.map((n) => (
        <CommentNode key={n.id} node={n} depth={0} />
      ))}
    </ul>
  );
}

function CommentNode({ node, depth }: { node: Node; depth: number }) {
  const { t, locale } = useT();
  const author = userRepo.byId(node.authorId);
  const [collapsed, setCollapsed] = React.useState(false);
  const [replying, setReplying] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const [liked, setLiked] = React.useState(false);

  const likeCount = node.likes + (liked ? 1 : 0);

  return (
    <li className="relative">
      <div className="flex items-start gap-3">
        {author && (
          <Link href={`/u/${author.username}`} className="shrink-0">
            <Avatar size={depth === 0 ? 36 : 32} name={author.displayName} gradient={author.avatarGradient} />
          </Link>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <Link href={`/u/${author?.username ?? '#'}`} className="font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-700">
              {author?.displayName ?? '匿名'}
            </Link>
            {node.isBestAnswer && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200 font-semibold">
                <CheckCircle2 className="h-3 w-3" />
                {t('comment.bestAnswer')}
              </span>
            )}
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400">{formatRelative(node.createdAt, locale)}</span>
            {node.children.length > 0 && (
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 inline-flex items-center gap-0.5"
                aria-label="toggle replies"
              >
                {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                <span className="text-[11px]">{node.children.length}</span>
              </button>
            )}
          </div>
          <div className="mt-1.5 text-sm">
            <MarkdownView content={node.content} className="prose-sm" />
          </div>
          <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <button
              onClick={() => setLiked((l) => !l)}
              className={cn(
                'inline-flex items-center gap-1 hover:text-rose-500 transition-colors',
                liked && 'text-rose-500',
              )}
            >
              <Heart className={cn('h-3.5 w-3.5', liked && 'fill-current')} />
              <span className="num-tabular">{fmtCount(likeCount)}</span>
            </button>
            <button
              onClick={() => setReplying((r) => !r)}
              className="inline-flex items-center gap-1 hover:text-brand-600"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              {t('comment.reply')}
            </button>
          </div>

          {replying && (
            <div className="mt-3">
              <Textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={t('comment.placeholder')}
                className="min-h-[80px] text-sm"
              />
              <div className="mt-2 flex items-center gap-2 justify-end">
                <Button size="sm" variant="ghost" onClick={() => { setReplying(false); setDraft(''); }}>
                  {t('common.cancel')}
                </Button>
                <Button size="sm" onClick={() => { setReplying(false); setDraft(''); }}>
                  {t('comment.submit')}
                </Button>
              </div>
            </div>
          )}

          {!collapsed && node.children.length > 0 && (
            <ul className="mt-4 pl-4 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              {node.children.map((c) => (
                <CommentNode key={c.id} node={c} depth={depth + 1} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
