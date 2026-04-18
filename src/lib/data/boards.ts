import type { Board } from '@/types';

export const BOARDS: Board[] = [
  {
    slug: 'visa',
    name: { zh: '签证与入境', en: 'Visa & Entry' },
    description: {
      zh: '50+ 国数字游民签证、长期签、税务居民。每周更新政策动态。',
      en: '50+ countries\' digital nomad visas, long-stay, tax residency. Weekly policy updates.',
    },
    icon: 'IdCard',
    postCount: 1820,
  },
  {
    slug: 'rental',
    name: { zh: '找房经验', en: 'Rental Tips' },
    description: {
      zh: '从大理到里斯本：避坑、谈价、合同、押金。亲历者经验。',
      en: 'From Dali to Lisbon: pitfalls, negotiation, contracts, deposits. First-hand stories.',
    },
    icon: 'KeyRound',
    postCount: 2480,
  },
  {
    slug: 'marketplace',
    name: { zh: '二手转让', en: 'Marketplace' },
    description: {
      zh: '搬家清仓、转租、转卖。让物品在旅居者之间流转。',
      en: 'Move-out sales, sublets, transfers. Let things flow among nomads.',
    },
    icon: 'ShoppingBag',
    postCount: 1240,
  },
  {
    slug: 'roommate',
    name: { zh: '找伴 / 找室友', en: 'Roommates' },
    description: {
      zh: '组队 Co-living、合租、约伴出行。一个人不孤单。',
      en: 'Co-living, flatmates, travel companions. You\'re not alone.',
    },
    icon: 'Users',
    postCount: 980,
  },
  {
    slug: 'jobs',
    name: { zh: '远程工作机会', en: 'Remote Jobs' },
    description: {
      zh: '远程友好的公司、自由职业项目、合伙机会。',
      en: 'Remote-friendly companies, freelance gigs, co-founder opportunities.',
    },
    icon: 'Briefcase',
    postCount: 720,
  },
  {
    slug: 'remote-work',
    name: { zh: '远程办公', en: 'Remote Work' },
    description: {
      zh: '工位推荐、网速测评、跨时区协作技巧、远程团队管理。',
      en: 'Co-working reviews, WiFi tests, async collaboration, remote team management.',
    },
    icon: 'Wifi',
    postCount: 1180,
  },
  {
    slug: 'health',
    name: { zh: '保险与医疗', en: 'Health & Insurance' },
    description: {
      zh: 'SafetyWing、World Nomads、当地医保、看病攻略。',
      en: 'SafetyWing, World Nomads, local healthcare, doctor reviews.',
    },
    icon: 'HeartPulse',
    postCount: 640,
  },
  {
    slug: 'diary',
    name: { zh: '旅居日记', en: 'Diaries' },
    description: {
      zh: '记录每一段安顿。生活、工作、心绪、城市的颜色与味道。',
      en: 'Diary of every stay. Life, work, mood, the color and taste of cities.',
    },
    icon: 'BookHeart',
    postCount: 3640,
  },
  {
    slug: 'feedback',
    name: { zh: '平台反馈', en: 'Feedback' },
    description: {
      zh: '功能建议、Bug 反馈、平台政策讨论。我们一起把社区做得更好。',
      en: 'Feature requests, bug reports, policy discussion. Let\'s improve together.',
    },
    icon: 'MessageSquareHeart',
    postCount: 280,
  },
];

export const BOARD_BY_SLUG = Object.fromEntries(BOARDS.map((b) => [b.slug, b]));
