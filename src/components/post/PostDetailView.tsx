'use client';

import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Heart, Bookmark, Share2, MessageCircle } from 'lucide-react';
import { postRepo, userRepo, commentRepo } from '@/lib/repository';
import { useLocalPostsStore } from '@/stores/useLocalPostsStore';
import { useReactionStore } from '@/stores/useReactionStore';
import { useT } from '@/lib/i18n';
import { Avatar } from '@/components/ui/Avatar';
import { TypeBadge } from '@/components/common/TypeBadge';
import { BadgeChip } from '@/components/common/BadgeChip';
import { MarkdownView } from '@/components/common/MarkdownView';
import { CommentTree } from '@/components/common/CommentTree';
import { PostCard } from '@/components/common/PostCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { fmtCount } from '@/lib/utils/format';
import { formatRelative } from '@/lib/utils/date';
import { useToast } from '@/components/ui/Toast';
import { cn } from '@/lib/utils/cn';

export function PostDetailView({ id }: { id: string }) {
  const localPosts = useLocalPostsStore((s) => s.posts);
  const post = React.useMemo(
    () => localPosts.find((p) => p.id === id) ?? postRepo.byId(id),
    [localPosts, id],
  );

  if (!post) {
    if (typeof window === 'undefined') {
      return <div className="card h-[min(60vh,480px)] animate-pulse-soft bg-slate-100 dark:bg-slate-900" />;
    }
    notFound();
  }

  const { t, locale } = useT();
  const author = userRepo.byId(post.authorId);
  const comments = commentRepo.byPost(post.id);
  const related = postRepo.related(post, 4);
  const { push } = useToast();

  const liked = useReactionStore((s) => s.isLiked(post.id));
  const fav = useReactionStore((s) => s.isFavorited(post.id));
  const toggleLike = useReactionStore((s) => s.toggleLike);
  const toggleFav = useReactionStore((s) => s.toggleFavorite);

  const likeCount = post.stats.likes + (liked ? 1 : 0);
  const favCount = post.stats.favorites + (fav ? 1 : 0);

  const onShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      await navigator.clipboard.writeText(url);
      push({ title: t('common.copied'), tone: 'success' });
    } catch {
      push({ title: t('common.share'), description: url, tone: 'info' });
    }
  };

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <TypeBadge type={post.type} />
          {post.isPinned && <span className="pill">{t('post.tag.pinned')}</span>}
          {post.isFeatured && <span className="pill pill-brand">{t('post.tag.featured')}</span>}
        </div>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 text-balance">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          {author && (
            <>
              <Link href={`/u/${author.username}`} className="inline-flex items-center gap-2 hover:text-brand-700">
                <Avatar size={32} name={author.displayName} gradient={author.avatarGradient} />
                <span className="font-medium text-slate-800 dark:text-slate-200">{author.displayName}</span>
              </Link>
              {author.badges[0] && <BadgeChip badgeKey={author.badges[0]} />}
            </>
          )}
          <span>·</span>
          <span>{formatRelative(post.createdAt, locale)}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" />{fmtCount(post.stats.comments)}</span>
        </div>
        {post.cover && (
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <img src={post.cover} alt="" className="w-full max-h-[420px] object-cover" />
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant={liked ? 'warm' : 'outline'} onClick={() => toggleLike(post.id)}>
            <Heart className={cn('h-4 w-4', liked && 'fill-current')} />
            {t('post.action.like')} {fmtCount(likeCount)}
          </Button>
          <Button size="sm" variant={fav ? 'secondary' : 'outline'} onClick={() => toggleFav(post.id)}>
            <Bookmark className={cn('h-4 w-4', fav && 'fill-current')} />
            {t('post.action.favorite')} {fmtCount(favCount)}
          </Button>
          <Button size="sm" variant="outline" onClick={onShare}>
            <Share2 className="h-4 w-4" />
            {t('post.action.share')}
          </Button>
        </div>
      </header>

      <MarkdownView content={post.content} className="max-w-none" />

      <section id="comments" className="scroll-mt-24">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('comment.title')}</h2>
        {comments.length === 0 ? (
          <EmptyState title={t('comment.empty')} />
        ) : (
          <CommentTree comments={comments} />
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {locale === 'zh' ? '相关推荐' : 'Related'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {related.map((p) => (
            <PostCard key={p.id} post={p} variant="mini" />
          ))}
        </div>
      </section>
    </article>
  );
}
