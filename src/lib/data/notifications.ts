import type { Notification } from '@/types';
import { USER_BY_ID } from './users';

const make = (id: string, type: Notification['type'], actorId: string, opts: Partial<Notification>): Notification => {
  const a = USER_BY_ID[actorId];
  return {
    id,
    userId: 'u-current',
    type,
    actor: a
      ? { userId: a.id, displayName: a.displayName, avatarGradient: a.avatarGradient }
      : undefined,
    title: '',
    isRead: false,
    createdAt: new Date(Date.now() - Math.random() * 86400_000 * 7).toISOString(),
    ...opts,
  };
};

export const NOTIFICATIONS: Notification[] = [
  make('n1', 'like', 'u-001', {
    title: '简・陈 赞了你的提问',
    body: '"3 月底想去大理待 2 个月，有什么值得加入的社群吗？"',
    targetType: 'post',
    targetId: 'p-dali-002',
  }),
  make('n2', 'comment', 'u-001', {
    title: '简・陈 回复了你',
    body: '在的，每周四晚 7 点。我已经把链接放在 大理频道 置顶。',
    targetType: 'post',
    targetId: 'p-dali-001',
  }),
  make('n3', 'follow', 'u-005', {
    title: '索菲亚 关注了你',
    targetType: 'user',
    targetId: 'u-005',
  }),
  make('n4', 'mention', 'u-009', {
    title: 'Alex 在评论中提到你',
    body: '@me 试试我推荐的 Roma Norte，附近有很多 nomad。',
    targetType: 'post',
    targetId: 'p-cdmx-001',
  }),
  make('n5', 'system', 'u-015', {
    title: '欢迎加入栖遇社区',
    body: '完成首次入住认证可获得 +50 声望与"已入住认证"徽章。',
    targetType: 'user',
    targetId: 'u-current',
    isRead: true,
  }),
  make('n6', 'event', 'u-007', {
    title: '你关注的城市 大理 有新活动',
    body: '【4/26 周六】苍山玉带云游路徒步｜10 人小队',
    targetType: 'post',
    targetId: 'p-dali-004',
  }),
  make('n7', 'best-answer', 'u-001', {
    title: '简・陈 把你的回答标记为「最佳回答」',
    body: '在帖子《泰国 DTV 数字游民签证 2026 最新申请全流程》',
    targetType: 'post',
    targetId: 'p-cm-001',
  }),
  make('n8', 'like', 'u-007', {
    title: '艾娃 等 12 人 赞了你的评论',
    targetType: 'post',
    targetId: 'p-dali-001',
    isRead: true,
  }),
  make('n9', 'system', 'u-015', {
    title: '【官方公告】社区 V1.0 正式上线',
    body: '20 个城市频道、16 个兴趣小组、9 个主题板块，欢迎你的第一篇分享。',
    targetType: 'post',
    targetId: 'p-pinned-001',
    isRead: true,
  }),
  make('n10', 'follow', 'u-002', {
    title: '李奥 关注了你',
    targetType: 'user',
    targetId: 'u-002',
    isRead: true,
  }),
];
