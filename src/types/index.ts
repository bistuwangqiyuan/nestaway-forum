// ─────────────────────────────────────────────────────────────────────────────
// 全局领域模型 — 与 design.md §5 完全对齐
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = 'zh' | 'en';
export type LocalizedText = { zh: string; en: string };

// ─── 城市 ──────────────────────────────────────────────────────────────────
export type CityRegion = 'asia-china' | 'asia-sea' | 'europe' | 'americas' | 'others';

export type City = {
  slug: string;
  name: LocalizedText;
  country: LocalizedText;
  countryCode: string; // ISO-3166-1 alpha-2
  flag: string;        // emoji
  region: CityRegion;
  coords: { lat: number; lng: number };
  cover: string;       // /images/cities/xxx.jpg or gradient hint
  gradient: [string, string]; // 2-stop gradient for fallback hero
  description: LocalizedText;
  stats: {
    nomadsOnline: number;
    monthlyCostUsd: number;
    rentMonthlyCny: number;
    internetMbps: number;
    safetyScore: number;        // 0-100
    weatherScore: number;       // 0-100
    visa: LocalizedText;
    bestMonths: number[];
  };
  tags: string[];
  isHot: boolean;
};

// ─── 帖子 ──────────────────────────────────────────────────────────────────
export type PostType =
  | 'discussion'
  | 'question'
  | 'guide'
  | 'diary'
  | 'marketplace'
  | 'roommate'
  | 'event'
  | 'job';

export type ReactionKey = 'thumbs' | 'heart' | 'fire' | 'haha' | 'thinking' | 'pray';

export type PostMeta = {
  price?: { value: number; currency: 'CNY' | 'USD' | 'EUR' | 'THB' };
  deadline?: string;
  location?: string;
  contact?: string;
  eventStart?: string;
  eventEnd?: string;
  jobType?: 'full-time' | 'part-time' | 'contract' | 'volunteer';
};

export type Post = {
  id: string;
  type: PostType;
  title: string;
  excerpt: string;       // 1-2 行摘要
  content: string;       // markdown
  cover?: string;
  authorId: string;
  citySlug?: string;
  groupSlugs: string[];
  boardSlug?: BoardSlug;
  tags: string[];
  meta?: PostMeta;
  stats: {
    views: number;
    likes: number;
    favorites: number;
    comments: number;
    reactions: Partial<Record<ReactionKey, number>>;
  };
  createdAt: string;
  updatedAt: string;
  isPinned?: boolean;
  isFeatured?: boolean;
  isVerifiedAuthor?: boolean;
  visibility: 'public' | 'followers' | 'plus';
};

// ─── 评论 ──────────────────────────────────────────────────────────────────
export type Comment = {
  id: string;
  postId: string;
  parentId?: string;
  authorId: string;
  content: string;
  likes: number;
  dislikes: number;
  isBestAnswer?: boolean;
  isCollapsed?: boolean;
  createdAt: string;
  updatedAt?: string;
  mentions: string[];
};

// ─── 用户 ──────────────────────────────────────────────────────────────────
export type UserRole = 'user' | 'verified' | 'plus' | 'host' | 'ambassador' | 'admin';

export type User = {
  id: string;
  username: string;
  displayName: string;
  bio?: string;
  avatar: string;        // /avatars/xxx.png 或 dicebear url 或 渐变 fallback
  avatarGradient: [string, string];
  cover?: string;
  currentCitySlug?: string;
  visitedCities: { citySlug: string; from: string; to?: string }[];
  badges: BadgeKey[];
  reputation: number;
  joinedAt: string;
  followers: number;
  following: number;
  role: UserRole;
  links?: { type: 'website' | 'twitter' | 'instagram' | 'github'; url: string }[];
  profession?: string;   // 例: "前端工程师"
};

// ─── 兴趣小组 ──────────────────────────────────────────────────────────────
export type GroupCategory = 'profession' | 'interest' | 'lifestyle';

export type Group = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  emoji: string;
  category: GroupCategory;
  memberCount: number;
  postCount: number;
  isPrivate: boolean;
  gradient: [string, string];
};

// ─── 主题板块 ──────────────────────────────────────────────────────────────
export type BoardSlug =
  | 'visa'
  | 'rental'
  | 'marketplace'
  | 'roommate'
  | 'jobs'
  | 'remote-work'
  | 'health'
  | 'diary'
  | 'feedback';

export type Board = {
  slug: BoardSlug;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;          // lucide icon name
  postCount: number;
};

// ─── 标签 ──────────────────────────────────────────────────────────────────
export type Tag = {
  slug: string;
  name: LocalizedText;
  postCount: number;
  hot?: boolean;
};

// ─── 通知 ──────────────────────────────────────────────────────────────────
export type NotificationType =
  | 'like'
  | 'comment'
  | 'reply'
  | 'mention'
  | 'follow'
  | 'best-answer'
  | 'system'
  | 'event';

export type Notification = {
  id: string;
  userId: string;
  type: NotificationType;
  actor?: { userId: string; displayName: string; avatarGradient: [string, string] };
  targetType?: 'post' | 'comment' | 'user';
  targetId?: string;
  title: string;
  body?: string;
  isRead: boolean;
  createdAt: string;
};

// ─── 徽章 ──────────────────────────────────────────────────────────────────
export type BadgeKey =
  | 'wanderer-1'
  | 'wanderer-5'
  | 'wanderer-10'
  | 'wanderer-20'
  | 'wanderer-50'
  | 'first-post'
  | 'liked-100'
  | 'liked-1k'
  | 'liked-10k'
  | 'featured'
  | 'monthly-author'
  | 'first-comment'
  | 'comment-100'
  | 'comment-1k'
  | 'best-answer-1'
  | 'best-answer-10'
  | 'best-answer-50'
  | 'nomad'
  | 'family'
  | 'silver'
  | 'host'
  | 'ambassador'
  | 'plus'
  | 'official';

export type BadgeTier = '铜' | '银' | '金' | '钻石' | '神话' | '身份' | '荣誉' | '会员' | '官方';

export type BadgeDef = {
  key: BadgeKey;
  name: LocalizedText;
  description: LocalizedText;
  tier: BadgeTier;
  emoji: string;
};
