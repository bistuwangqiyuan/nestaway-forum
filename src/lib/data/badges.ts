import type { BadgeDef, BadgeKey } from '@/types';

export const BADGES: BadgeDef[] = [
  // 旅居里程
  { key: 'wanderer-1', name: { zh: '一城旅居者', en: '1 City' }, description: { zh: '完成首座城市的旅居', en: 'First city visited' }, tier: '铜', emoji: '🌱' },
  { key: 'wanderer-5', name: { zh: '五城旅居者', en: '5 Cities' }, description: { zh: '足迹达 5 城', en: 'Visited 5 cities' }, tier: '银', emoji: '🌿' },
  { key: 'wanderer-10', name: { zh: '十城旅居者', en: '10 Cities' }, description: { zh: '足迹达 10 城', en: 'Visited 10 cities' }, tier: '金', emoji: '🍃' },
  { key: 'wanderer-20', name: { zh: '全球旅居者', en: '20 Cities' }, description: { zh: '足迹达 20 城', en: 'Visited 20 cities' }, tier: '钻石', emoji: '🌏' },
  { key: 'wanderer-50', name: { zh: '旅居传奇', en: 'Legend (50)' }, description: { zh: '足迹达 50 城', en: 'Visited 50 cities' }, tier: '神话', emoji: '🌟' },

  // 内容贡献
  { key: 'first-post', name: { zh: '初露锋芒', en: 'First Post' }, description: { zh: '发表首篇帖子', en: 'Posted your first post' }, tier: '铜', emoji: '✏️' },
  { key: 'liked-100', name: { zh: '百赞作者', en: '100 Likes' }, description: { zh: '累计获得 100 个赞', en: '100 likes received' }, tier: '银', emoji: '👏' },
  { key: 'liked-1k', name: { zh: '千赞作者', en: '1K Likes' }, description: { zh: '累计获得 1000 个赞', en: '1k likes received' }, tier: '金', emoji: '🏆' },
  { key: 'liked-10k', name: { zh: '万赞作者', en: '10K Likes' }, description: { zh: '累计获得 10000 个赞', en: '10k likes received' }, tier: '钻石', emoji: '💎' },
  { key: 'featured', name: { zh: '精华作者', en: 'Featured' }, description: { zh: '至少有 1 篇精华帖', en: 'At least 1 featured post' }, tier: '金', emoji: '🌟' },
  { key: 'monthly-author', name: { zh: '月度作者', en: 'Monthly Top' }, description: { zh: '入选月度作者榜', en: 'Top author of the month' }, tier: '金', emoji: '🥇' },

  // 评论
  { key: 'first-comment', name: { zh: '首次回应', en: 'First Comment' }, description: { zh: '发表首条评论', en: 'Your first comment' }, tier: '铜', emoji: '💬' },
  { key: 'comment-100', name: { zh: '百评热心人', en: '100 Comments' }, description: { zh: '累计 100 条评论', en: '100 comments posted' }, tier: '银', emoji: '🗨️' },
  { key: 'comment-1k', name: { zh: '千评导师', en: '1K Comments' }, description: { zh: '累计 1000 条评论', en: '1k comments posted' }, tier: '金', emoji: '🎓' },
  { key: 'best-answer-1', name: { zh: '最佳回答者', en: 'Best Answer' }, description: { zh: '1 次最佳回答', en: '1 best answer' }, tier: '铜', emoji: '✅' },
  { key: 'best-answer-10', name: { zh: '解题高手', en: 'Solver' }, description: { zh: '10 次最佳回答', en: '10 best answers' }, tier: '银', emoji: '🧠' },
  { key: 'best-answer-50', name: { zh: '问题专家', en: 'Expert' }, description: { zh: '50 次最佳回答', en: '50 best answers' }, tier: '金', emoji: '🏅' },

  // 身份
  { key: 'nomad', name: { zh: '数字游民', en: 'Nomad' }, description: { zh: '身份认证：数字游民', en: 'Identity: digital nomad' }, tier: '身份', emoji: '🧳' },
  { key: 'family', name: { zh: '家庭旅居者', en: 'Family Nomad' }, description: { zh: '身份认证：亲子旅居', en: 'Identity: family nomad' }, tier: '身份', emoji: '👨‍👩‍👧' },
  { key: 'silver', name: { zh: '银发候鸟', en: 'Snowbird' }, description: { zh: '身份认证：银发候鸟', en: 'Identity: silver snowbird' }, tier: '身份', emoji: '🌅' },
  { key: 'host', name: { zh: '房东', en: 'Host' }, description: { zh: '主平台房东', en: 'Verified host' }, tier: '身份', emoji: '🏠' },

  // 荣誉
  { key: 'ambassador', name: { zh: '城市大使', en: 'Ambassador' }, description: { zh: '城市频道大使', en: 'City channel ambassador' }, tier: '荣誉', emoji: '🎖️' },
  { key: 'plus', name: { zh: 'Plus 会员', en: 'Plus Member' }, description: { zh: 'NestAway Plus 会员', en: 'NestAway Plus member' }, tier: '会员', emoji: '⭐' },
  { key: 'official', name: { zh: '官方账号', en: 'Official' }, description: { zh: '栖遇官方账号', en: 'NestAway official' }, tier: '官方', emoji: '🏛️' },
];

export const BADGE_BY_KEY: Record<BadgeKey, BadgeDef> = Object.fromEntries(
  BADGES.map((b) => [b.key, b]),
) as Record<BadgeKey, BadgeDef>;

export function tierColor(tier: BadgeDef['tier']): string {
  switch (tier) {
    case '铜': return 'from-amber-500 to-amber-700';
    case '银': return 'from-slate-300 to-slate-500';
    case '金': return 'from-yellow-400 to-amber-600';
    case '钻石': return 'from-cyan-400 to-blue-600';
    case '神话': return 'from-fuchsia-500 to-purple-700';
    case '身份': return 'from-brand-400 to-brand-700';
    case '荣誉': return 'from-warm-400 to-warm-700';
    case '会员': return 'from-amber-300 to-yellow-600';
    case '官方': return 'from-blue-500 to-brand-700';
    default: return 'from-slate-400 to-slate-600';
  }
}
