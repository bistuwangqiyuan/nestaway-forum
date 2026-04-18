// 数据访问层（Repository）
// V1：基于本地 Mock 数据；V2：可一对一替换为 fetch API 实现，UI 层零修改。

import { CITIES, CITY_BY_SLUG } from '@/lib/data/cities';
import { GROUPS, GROUP_BY_SLUG } from '@/lib/data/groups';
import { BOARDS, BOARD_BY_SLUG } from '@/lib/data/boards';
import { TAGS, TAG_BY_SLUG } from '@/lib/data/tags';
import { USERS, USER_BY_ID, USER_BY_NAME } from '@/lib/data/users';
import { POSTS, POST_BY_ID } from '@/lib/data/posts';
import { COMMENTS, COMMENTS_BY_POST } from '@/lib/data/comments';
import { NOTIFICATIONS } from '@/lib/data/notifications';
import { BADGES, BADGE_BY_KEY } from '@/lib/data/badges';
import type { BoardSlug, City, Comment, Group, Notification, Post, PostType, User } from '@/types';

// ─── Cities ─────────────────────────────────────────
export const cityRepo = {
  list: (): City[] => CITIES,
  hot: (): City[] => CITIES.filter((c) => c.isHot),
  byRegion: () => {
    const map: Record<string, City[]> = {};
    for (const c of CITIES) (map[c.region] ??= []).push(c);
    return map;
  },
  bySlug: (slug: string): City | undefined => CITY_BY_SLUG[slug],
  byCountry: (code: string): City[] => CITIES.filter((c) => c.countryCode === code),
};

// ─── Groups ─────────────────────────────────────────
export const groupRepo = {
  list: (): Group[] => GROUPS,
  bySlug: (slug: string): Group | undefined => GROUP_BY_SLUG[slug],
  byCategory: () => {
    const map: Record<string, Group[]> = {};
    for (const g of GROUPS) (map[g.category] ??= []).push(g);
    return map;
  },
};

// ─── Boards ─────────────────────────────────────────
export const boardRepo = {
  list: () => BOARDS,
  bySlug: (slug: BoardSlug | string) => BOARD_BY_SLUG[slug as BoardSlug],
};

// ─── Tags ───────────────────────────────────────────
export const tagRepo = {
  list: () => TAGS,
  hot: () => TAGS.filter((t) => t.hot),
  bySlug: (slug: string) => TAG_BY_SLUG[slug],
};

// ─── Users ──────────────────────────────────────────
export const userRepo = {
  list: () => USERS,
  byId: (id: string): User | undefined => USER_BY_ID[id],
  byUsername: (u: string): User | undefined => USER_BY_NAME[u],
  current: (): User => USERS.find((u) => u.id === 'u-current')!,
  topByReputation: (n = 8) => [...USERS].sort((a, b) => b.reputation - a.reputation).slice(0, n),
};

// ─── Posts ──────────────────────────────────────────
export const postRepo = {
  all: () => POSTS,
  byId: (id: string): Post | undefined => POST_BY_ID[id],
  byCity: (slug: string): Post[] => POSTS.filter((p) => p.citySlug === slug),
  byGroup: (slug: string): Post[] => POSTS.filter((p) => p.groupSlugs.includes(slug)),
  byBoard: (slug: BoardSlug): Post[] => POSTS.filter((p) => p.boardSlug === slug),
  byTag: (slug: string): Post[] => POSTS.filter((p) => p.tags.includes(slug)),
  byAuthor: (id: string): Post[] => POSTS.filter((p) => p.authorId === id),
  byType: (t: PostType): Post[] => POSTS.filter((p) => p.type === t),
  trending: (limit = 8) =>
    [...POSTS]
      .filter((p) => !p.isPinned)
      .sort((a, b) => trendingScore(b) - trendingScore(a))
      .slice(0, limit),
  latest: (limit = 12) =>
    [...POSTS].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)).slice(0, limit),
  featured: (limit = 6) => POSTS.filter((p) => p.isFeatured).slice(0, limit),
  related: (post: Post, limit = 4): Post[] => {
    const score = (p: Post) => {
      let s = 0;
      if (p.id === post.id) return -1;
      if (p.citySlug && p.citySlug === post.citySlug) s += 5;
      if (p.boardSlug && p.boardSlug === post.boardSlug) s += 2;
      if (p.authorId === post.authorId) s += 2;
      s += p.tags.filter((t) => post.tags.includes(t)).length * 2;
      s += p.groupSlugs.filter((g) => post.groupSlugs.includes(g)).length;
      return s;
    };
    return [...POSTS].sort((a, b) => score(b) - score(a)).slice(0, limit);
  },
  search: (q: string, limit = 30): Post[] => {
    const k = q.trim().toLowerCase();
    if (!k) return [];
    return POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(k) ||
        p.excerpt.toLowerCase().includes(k) ||
        p.tags.some((t) => t.toLowerCase().includes(k)),
    ).slice(0, limit);
  },
};

function trendingScore(p: Post): number {
  const ageHours = (Date.now() - +new Date(p.createdAt)) / 36e5;
  const decay = 1 / Math.pow(ageHours + 2, 0.6);
  const reactions = Object.values(p.stats.reactions).reduce((a, b) => a + (b ?? 0), 0);
  const heat = p.stats.likes * 2 + p.stats.favorites * 3 + p.stats.comments * 4 + reactions;
  return heat * decay + (p.isFeatured ? 30 : 0);
}

// ─── Comments ───────────────────────────────────────
export const commentRepo = {
  all: () => COMMENTS,
  byPost: (postId: string): Comment[] => COMMENTS_BY_POST[postId] ?? [],
};

// ─── Notifications ──────────────────────────────────
export const notificationRepo = {
  list: (): Notification[] => NOTIFICATIONS,
  unreadCount: (): number => NOTIFICATIONS.filter((n) => !n.isRead).length,
};

// ─── Badges ─────────────────────────────────────────
export const badgeRepo = {
  list: () => BADGES,
  byKey: (k: keyof typeof BADGE_BY_KEY) => BADGE_BY_KEY[k],
};
