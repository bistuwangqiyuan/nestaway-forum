import type { Comment } from '@/types';

const c = (
  id: string,
  postId: string,
  authorId: string,
  content: string,
  opts: Partial<Comment> = {},
): Comment => ({
  id,
  postId,
  authorId,
  content,
  likes: 0,
  dislikes: 0,
  mentions: [],
  createdAt: new Date(Date.now() - Math.random() * 86400_000 * 14).toISOString(),
  ...opts,
});

export const COMMENTS: Comment[] = [
  // ─── p-pinned-001（官方公告）
  c('cm-001', 'p-pinned-001', 'u-001', '终于等到了。社区氛围决定平台的下半场，加油。', { likes: 184 }),
  c('cm-002', 'p-pinned-001', 'u-005', '欢迎大家随时来 [里斯本频道](/c/lisbon) 找我。我会持续更新葡萄牙签证、税务、生活信息。', { likes: 142 }),
  c('cm-003', 'p-pinned-001', 'u-009', '建议加一个"远程招聘"专区，能 verify 公司就更好了。', { likes: 96 }),
  c('cm-004', 'p-pinned-001', 'u-015', '@u-009 已经有了 [/b/jobs](/b/jobs) 板块，verify 还在做。', { likes: 38, parentId: 'cm-003', mentions: ['u-009'] }),
  c('cm-005', 'p-pinned-001', 'u-007', '建议增加女性安全板块。', { likes: 280 }),
  c('cm-006', 'p-pinned-001', 'u-015', '@u-007 已记录，会在 V1.1 评估。', { likes: 64, parentId: 'cm-005', mentions: ['u-007'] }),

  // ─── p-dali-001
  c('cm-d1-1', 'p-dali-001', 'u-002', '才村的网速我也实测过，很惊喜。但夏季雨季会断。', { likes: 64 }),
  c('cm-d1-2', 'p-dali-001', 'u-003', '冬天湿冷+1，地暖真的非常重要。', { likes: 86 }),
  c('cm-d1-3', 'p-dali-001', 'u-current', '请问"喜林苑读书会"现在还在办吗？', { likes: 12 }),
  c('cm-d1-4', 'p-dali-001', 'u-001', '@u-current 在的，每周四晚 7 点。我已经把链接放在 [大理频道](/c/dali) 置顶。', { likes: 28, parentId: 'cm-d1-3', mentions: ['u-current'] }),
  c('cm-d1-5', 'p-dali-001', 'u-007', '苍山徒步可以加个"4 月初杜鹃花季"提示。', { likes: 38 }),

  // ─── p-cm-001 (DTV)
  c('cm-cm-1', 'p-cm-001', 'u-006', '东京领馆 +1，3 天出签是真的。', { likes: 96, isBestAnswer: true }),
  c('cm-cm-2', 'p-cm-001', 'u-009', '请问你的银行流水是怎么准备的？我远程接的项目，没有固定打款。', { likes: 18 }),
  c('cm-cm-3', 'p-cm-001', 'u-001', '@u-009 我的做法是：客户开 invoice，按月对公转账。如果是个人账户，可以让客户分次小额打款形成"工资"模式。', { likes: 38, parentId: 'cm-cm-2', mentions: ['u-009'] }),
  c('cm-cm-4', 'p-cm-001', 'u-004', '带娃情况下家属是否一起？', { likes: 12 }),
  c('cm-cm-5', 'p-cm-001', 'u-001', '@u-004 配偶 + 21 岁以下未婚子女可一起。', { likes: 24, parentId: 'cm-cm-4', mentions: ['u-004'] }),
  c('cm-cm-6', 'p-cm-001', 'u-011', '补充一点：DTV 不能在泰国境内合法工作，但**境外收入**完全 OK。', { likes: 64 }),

  // ─── p-bali-001
  c('cm-b1-1', 'p-bali-001', 'u-007', '我同样住过两个区，结论一致。Ubud 适合"修"，Canggu 适合"建"。', { likes: 48 }),
  c('cm-b1-2', 'p-bali-001', 'u-002', '@u-007 这个比喻太精准。', { likes: 18, parentId: 'cm-b1-1', mentions: ['u-007'] }),

  // ─── p-lis-001
  c('cm-li-1', 'p-lis-001', 'u-006', 'AIMA 排队真的太痛苦了，建议入境第一天就开始挂。', { likes: 124 }),
  c('cm-li-2', 'p-lis-001', 'u-011', 'NHR 2024 改了，2026 还有的吃吗？', { likes: 28 }),
  c('cm-li-3', 'p-lis-001', 'u-005', '@u-011 NHR 2.0 (IFICI) 仍存在，但范围收窄。具体看你的职业。', { likes: 38, parentId: 'cm-li-2', mentions: ['u-011'] }),

  // ─── p-visa-001
  c('cm-v-1', 'p-visa-001', 'u-001', '我已收藏。这个表的更新建议加一个"中国护照可达性"列。', { likes: 64 }),
  c('cm-v-2', 'p-visa-001', 'u-011', '@u-001 已加，下次更新发出。', { likes: 18, parentId: 'cm-v-1', mentions: ['u-001'] }),

  // ─── p-job-001
  c('cm-j-1', 'p-job-001', 'u-005', '已经申请了。希望能加入栖遇大家庭。', { likes: 38 }),
  c('cm-j-2', 'p-job-001', 'u-002', '想问一下：远程为主，但每季度的"实地集结"在哪里？', { likes: 18 }),
  c('cm-j-3', 'p-job-001', 'u-015', '@u-002 2026 年是大理（Q2）→ 清迈（Q3）→ 里斯本（Q4）→ 三亚（Q1）。', { likes: 28, parentId: 'cm-j-2', mentions: ['u-002'] }),

  // ─── p-fam-001
  c('cm-f-1', 'p-fam-001', 'u-011', '"父母才是真正的瓶颈" — 戳到我了。', { likes: 142 }),
  c('cm-f-2', 'p-fam-001', 'u-007', '我朋友也是带娃 18 个月，结论几乎一致。', { likes: 48 }),

  // ─── p-host-001
  c('cm-h-1', 'p-host-001', 'u-001', '心累度 2 vs 8 这个对比太精彩了。', { likes: 86 }),
];

export const COMMENTS_BY_POST: Record<string, Comment[]> = COMMENTS.reduce((acc, cm) => {
  (acc[cm.postId] ??= []).push(cm);
  return acc;
}, {} as Record<string, Comment[]>);
