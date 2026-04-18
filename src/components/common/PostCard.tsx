'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Eye,
  Pin,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Avatar } from '@/components/ui/Avatar';
import { TypeBadge } from './TypeBadge';
import { BadgeChip } from './BadgeChip';
import type { Post } from '@/types';
import { userRepo, cityRepo, tagRepo } from '@/lib/repository';
import { useT, pickLocalized } from '@/lib/i18n';
import { formatRelative } from '@/lib/utils/date';
import { fmtCount } from '@/lib/utils/format';
import { useReactionStore } from '@/stores/useReactionStore';

type Variant = 'default' | 'compact' | 'feature' | 'mini';

type Props = {
  post: Post;
  variant?: Variant;
  className?: string;
};

export function PostCard({ post, variant = 'default', className }: Props) {
  const { locale, t } = useT();
  const author = userRepo.byId(post.authorId);
  const city = post.citySlug ? cityRepo.bySlug(post.citySlug) : undefined;
  const tagObjs = post.tags.map((s) => tagRepo.bySlug(s)).filter(Boolean).slice(0, 3);

  const liked = useReactionStore((s) => s.isLiked(post.id));
  const fav = useReactionStore((s) => s.isFavorited(post.id));
  const toggleLike = useReactionStore((s) => s.toggleLike);
  const toggleFav = useReactionStore((s) => s.toggleFavorite);

  const likeCount = post.stats.likes + (liked ? 1 : 0);
  const favCount = post.stats.favorites + (fav ? 1 : 0);

  if (variant === 'mini') {
    return (
      <Link
        href={`/post/${post.id}`}
        className={cn('flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors', className)}
      >
        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 text-brand-700 text-[11px] font-bold dark:bg-brand-900/40 dark:text-brand-300">
          {post.type === 'question' ? 'Q' : post.type === 'guide' ? 'G' : '#'}
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 clip-2 leading-snug">{post.title}</h4>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
            <span>{author?.displayName ?? '匿名'}</span>
            <span>·</span>
            <span>{formatRelative(post.createdAt, locale)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-0.5"><Heart className="h-3 w-3" />{fmtCount(likeCount)}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article
      className={cn(
        'card card-hover relative',
        variant === 'feature' && 'shadow-pop',
        className,
      )}
    >
      {/* cover for feature & default-with-cover */}
      {post.cover && variant !== 'compact' && (
        <Link href={`/post/${post.id}`} className="block aspect-[16/8] overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img src={post.cover} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
        </Link>
      )}

      <div className="p-4 sm:p-5">
        {/* header */}
        <div className="flex items-start gap-3">
          {author && (
            <Link href={`/u/${author.username}`} className="shrink-0">
              <Avatar size={36} name={author.displayName} gradient={author.avatarGradient} />
            </Link>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link href={`/u/${author?.username ?? '#'}`} className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-700 dark:hover:text-brand-300 truncate max-w-[180px]">
                {author?.displayName ?? '匿名旅居者'}
              </Link>
              {author?.role === 'verified' && (
                <ShieldCheck className="h-3.5 w-3.5 text-brand-500" aria-label="verified" />
              )}
              {author?.badges?.[0] && <BadgeChip badgeKey={author.badges[0]} />}
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400">{formatRelative(post.createdAt, locale)}</span>
              {city && (
                <>
                  <span className="text-xs text-slate-400">·</span>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-0.5"
                  >
                    <MapPin className="h-3 w-3" />
                    {city.flag} {pickLocalized(city.name, locale)}
                  </Link>
                </>
              )}
            </div>
            {/* type & flags row */}
            <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
              <TypeBadge type={post.type} />
              {post.isPinned && (
                <span className="inline-flex items-center gap-1 px-2 h-6 rounded-md text-[11px] font-medium bg-warm-100 text-warm-800 dark:bg-warm-900/30 dark:text-warm-200">
                  <Pin className="h-3 w-3" />
                  {t('post.tag.pinned')}
                </span>
              )}
              {post.isFeatured && (
                <span className="inline-flex items-center gap-1 px-2 h-6 rounded-md text-[11px] font-medium bg-gradient-to-r from-warm-400/80 to-brand-500/80 text-white">
                  <Sparkles className="h-3 w-3" />
                  {t('post.tag.featured')}
                </span>
              )}
              {post.isVerifiedAuthor && (
                <span className="inline-flex items-center gap-1 px-2 h-6 rounded-md text-[11px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                  <ShieldCheck className="h-3 w-3" />
                  {t('post.tag.verified')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* body */}
        <Link href={`/post/${post.id}`} className="block mt-3 group">
          <h2
            className={cn(
              'font-semibold text-slate-900 dark:text-slate-50 leading-snug clip-2 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors',
              variant === 'feature' ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg',
            )}
          >
            {post.title}
          </h2>
          <p
            className={cn(
              'mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed',
              variant === 'feature' ? 'clip-3' : 'clip-2',
            )}
          >
            {post.excerpt}
          </p>
        </Link>

        {/* tags */}
        {tagObjs.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5 flex-wrap">
            {tagObjs.map((tg) => (
              <Link
                key={tg!.slug}
                href={`/tags/${tg!.slug}`}
                className="pill hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 dark:hover:bg-brand-900/30 dark:hover:text-brand-300 transition-colors"
              >
                #{pickLocalized(tg!.name, locale)}
              </Link>
            ))}
            {post.tags.length > 3 && (
              <span className="text-[11px] text-slate-400">+{post.tags.length - 3}</span>
            )}
          </div>
        )}

        {/* footer */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => { e.preventDefault(); toggleLike(post.id); }}
              className={cn(
                'inline-flex items-center gap-1 hover:text-rose-500 transition-colors',
                liked && 'text-rose-500',
              )}
              aria-label={t('post.action.like')}
            >
              <Heart className={cn('h-4 w-4', liked && 'fill-current')} />
              <span className="num-tabular">{fmtCount(likeCount)}</span>
            </button>
            <Link href={`/post/${post.id}#comments`} className="inline-flex items-center gap-1 hover:text-brand-600 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="num-tabular">{fmtCount(post.stats.comments)}</span>
            </Link>
            <button
              onClick={(e) => { e.preventDefault(); toggleFav(post.id); }}
              className={cn(
                'inline-flex items-center gap-1 hover:text-warm-500 transition-colors',
                fav && 'text-warm-500',
              )}
              aria-label={t('post.action.favorite')}
            >
              <Bookmark className={cn('h-4 w-4', fav && 'fill-current')} />
              <span className="num-tabular">{fmtCount(favCount)}</span>
            </button>
            <span className="hidden sm:inline-flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span className="num-tabular">{fmtCount(post.stats.views)}</span>
            </span>
          </div>
          <Link
            href={`/post/${post.id}`}
            className="inline-flex items-center gap-0.5 text-brand-700 dark:text-brand-300 font-medium hover:gap-1.5 transition-all"
          >
            {t('common.viewMore')}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
