import type { Post } from '@/types';

const ts = (iso: string) => iso;

export const POSTS: Post[] = [
  // ─────────────── 置顶 / 精华 / 官方 ───────────────
  {
    id: 'p-pinned-001',
    type: 'discussion',
    title: '【官方】栖遇社区 V1.0 上线｜社区公约 + 新手指南',
    excerpt: '栖遇旅居社区正式上线。9 大主题板块、20 个城市频道、16 个兴趣小组，欢迎大家的第一篇帖。',
    content: `# 欢迎来到栖遇旅居社区 🎉

今天，栖遇旅居社区 V1.0 正式与大家见面。

## 我们是谁

栖遇 NestAway 是**全球首个面向中长期旅居者的垂直平台**。我们相信：

> 旅居不只是住宿，而是一种生活方式。

社区，就是这种生活方式的精神家园。

## 社区结构

- **20 个城市频道**：从大理到里斯本，每个城市都有它的故事
- **16 个兴趣小组**：找到你的同类
- **9 大主题板块**：签证、找房、二手、找伴、远程办公…
- **旅居日记**：让每一段旅居被认真记录

## 社区公约（精简版）

1. **真实**：分享亲历，不传谣不复制
2. **友善**：尊重每一种生活方式
3. **守界**：不发广告、不索联系方式、不打政治擦边球
4. **长情**：让你写过的文字，明年还能被人读到

## 新手快速指南

| 你想做什么 | 去哪里 |
| --- | --- |
| 看看大家都在哪旅居 | [全球城市地图](/) |
| 找下个目的地 | [城市频道](/c) |
| 找同类 | [兴趣小组](/g) |
| 直接提问 | [新建帖子](/compose) |

期待你的第一篇分享。`,
    cover: undefined,
    authorId: 'u-015',
    boardSlug: 'feedback',
    groupSlugs: [],
    tags: ['guide', 'first-time'],
    stats: {
      views: 18420,
      likes: 2480,
      favorites: 920,
      comments: 184,
      reactions: { thumbs: 1240, heart: 820, fire: 380, pray: 220 },
    },
    createdAt: ts('2026-04-01T08:00:00Z'),
    updatedAt: ts('2026-04-01T08:00:00Z'),
    isPinned: true,
    isFeatured: true,
    visibility: 'public',
  },

  // ─────────────── 大理（dali）───────────────
  {
    id: 'p-dali-001',
    type: 'guide',
    title: '在大理旅居 14 个月后，我把所有避坑经验写在这里了',
    excerpt: '从才村到双廊，从喜林苑到 706，14 个月、4 套房、200+ 杯咖啡的真实经验汇总。',
    content: `# 大理旅居完全指南（2026 更新版）

我从 2024 年 9 月搬到大理，到 2025 年 11 月离开，期间在**才村、喜洲、银桥、古城南门**四个区域分别住过。

## TL;DR

- **预算**：单人月开销 ¥4500-7000，含租金
- **首选区域**：才村（社群最浓）→ 喜洲（最美）→ 银桥（性价比）
- **避雷**：**双廊（远）、苍山徒步线（湿冷）、3 月飞虫**
- **黄金月份**：3-5 月、9-10 月

## 选房：四区对比

| 区域 | 月租（一居室） | 优势 | 坑 |
| --- | --- | --- | --- |
| 才村 | ¥2500-4500 | 海景、社群、Co-working 多 | 旅游季吵 |
| 喜洲 | ¥2200-3800 | 古镇、稻田、最美 | 距古城 35 分钟 |
| 银桥 | ¥1800-3000 | 性价比最高 | 商业配套弱 |
| 古城南门 | ¥3000-5500 | 步行万物 | 噪音大 |

## 工作：网速 + 工位

实测下载速度（晚 8 点）：

- 才村某 Co-living：**168 Mbps** ⭐⭐⭐⭐⭐
- 喜洲咖啡馆 average：**85 Mbps** ⭐⭐⭐⭐
- 银桥民宿：**42 Mbps** ⭐⭐⭐

> 有视频会议需求的，强烈建议**主备双网**：宽带 + 5G 流量卡。

## 社群

大理是中国数字游民密度最高的城市，没有之一。

- **每周二** 才村 Coffee Crawl（Coliving 圈轮流做东）
- **每周四** 喜洲读书会
- **每月最后一个周六** 苍山徒步

加入栖遇 [大理城市频道](/c/dali) 自动入群。

## 我离开的原因

2025 年 11 月我离开了。不是因为不爱，而是因为**冬天的湿冷比想象中难熬**。

如果你冬天来，请租**有地暖**的房子，并多带一件加厚羽绒服。

---

下站：清迈。再见，大理。`,
    cover: '/images/cities/dali.jpg',
    authorId: 'u-001',
    citySlug: 'dali',
    groupSlugs: ['remote-dev', 'co-living'],
    boardSlug: 'rental',
    tags: ['guide', 'co-living', 'long-term', 'wifi', 'review'],
    stats: {
      views: 24820,
      likes: 1820,
      favorites: 1240,
      comments: 96,
      reactions: { thumbs: 980, heart: 640, fire: 280, pray: 120 },
    },
    createdAt: ts('2026-04-12T03:24:00Z'),
    updatedAt: ts('2026-04-12T03:24:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },
  {
    id: 'p-dali-002',
    type: 'question',
    title: '3 月底想去大理待 2 个月，有什么值得加入的社群吗？',
    excerpt: '前端工程师，预算 6k/月，希望融入数字游民圈但不打扰本地居民。',
    content: `第一次来大理，做了一个月攻略，但社群信息很碎。

希望大家推荐：

1. 持续办活动的 **Coliving / Coworking 空间**
2. 真的有人去的 **每周固定活动**
3. 有 **新人友好** 文化的小群`,
    authorId: 'u-current',
    citySlug: 'dali',
    groupSlugs: ['remote-dev', 'solo-nomads'],
    boardSlug: 'rental',
    tags: ['first-time', 'co-working', 'meetup'],
    stats: {
      views: 1280,
      likes: 38,
      favorites: 24,
      comments: 12,
      reactions: { thumbs: 28, heart: 8, thinking: 4 },
    },
    createdAt: ts('2026-04-15T11:48:00Z'),
    updatedAt: ts('2026-04-15T11:48:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-dali-003',
    type: 'marketplace',
    title: '【转让】才村小院 4 月 25 日 - 5 月 31 日，¥3200/月',
    excerpt: '一居室带露台，海景，离 Coffee Lab 步行 6 分钟。家具家电齐全。',
    content: `因故提前离开大理，把租约转给同样需要的朋友。

- **位置**：才村南，海湾港湾对面
- **户型**：一居室一卫，约 45㎡，带 8㎡露台
- **租期**：4 月 25 日 - 5 月 31 日（37 天）
- **租金**：¥3200/月（按天 ¥107）
- **押金**：¥3200（房东直退）
- **网速**：实测晚 8 点 96 Mbps
- **配置**：1.8m 床、办公桌、冰箱、洗衣机、电热水器、Wi-Fi 6 路由器

电话当面交接钥匙，平台担保。`,
    cover: '/images/cities/dali.jpg',
    authorId: 'u-001',
    citySlug: 'dali',
    groupSlugs: ['co-living'],
    boardSlug: 'marketplace',
    tags: ['sublet', 'budget'],
    meta: { price: { value: 3200, currency: 'CNY' }, deadline: '2026-04-23', location: '大理才村' },
    stats: {
      views: 880,
      likes: 24,
      favorites: 86,
      comments: 18,
      reactions: { thumbs: 18, heart: 6 },
    },
    createdAt: ts('2026-04-17T09:30:00Z'),
    updatedAt: ts('2026-04-17T09:30:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-dali-004',
    type: 'event',
    title: '【4/26 周六】苍山玉带云游路徒步｜10 人小队',
    excerpt: '8:30 大理古城西门集合，全程 11km，难度 ★★☆☆☆。回程苍山雪豆花。',
    content: `## 行程

- **日期**：2026-04-26 周六
- **集合**：8:30 大理古城西门
- **路线**：感通寺 → 玉带云游路 → 七龙女池 → 中和寺
- **总距离**：11km，海拔 +600m
- **难度**：★★☆☆☆
- **回程**：步行下苍山，喜林苑吃苍山雪豆花

## 装备

- 登山鞋必备
- 1.5L 水
- 防晒帽 + 防晒霜
- 雨衣（云能瞬变）

## 报名

回复"报名"。10 人满额。AA 制：往返车费约 ¥30。

> 第三届栖遇大理徒步活动，往期组员合影见评论。`,
    authorId: 'u-007',
    citySlug: 'dali',
    groupSlugs: ['hiking', 'solo-nomads'],
    boardSlug: 'diary',
    tags: ['meetup', 'mountain'],
    meta: { eventStart: '2026-04-26T00:30:00Z', eventEnd: '2026-04-26T08:00:00Z', location: '大理苍山' },
    stats: {
      views: 1420,
      likes: 124,
      favorites: 48,
      comments: 28,
      reactions: { thumbs: 86, heart: 38, fire: 12 },
    },
    createdAt: ts('2026-04-18T01:00:00Z'),
    updatedAt: ts('2026-04-18T01:00:00Z'),
    visibility: 'public',
  },

  // ─────────────── 清迈（chiangmai）───────────────
  {
    id: 'p-cm-001',
    type: 'guide',
    title: '泰国 DTV 数字游民签证 2026 最新申请全流程（亲测通过）',
    excerpt: '材料清单、领事馆选择、面签问答、付款方式、被拒怎么办，6500 字一次说清。',
    content: `# 泰国 DTV 签证 2026 申请实录

> 2024 年 7 月泰国推出 DTV (Destination Thailand Visa)，5 年多次入境，每次最长 180 天。本文是我 2026 年 3 月在 **东京领馆** 申请的全过程。

## 谁可以申请

DTV 分两类：

1. **远程工作类（Workation）**：远程工作者、自由职业、博主、在线创业者
2. **泰国软实力类（Thai Soft Power）**：来学泰拳、泰式按摩、料理、太极的人

## 材料清单

### 必交材料

- 护照（剩余 6 个月以上）
- 银行存款证明：**¥120,000 或等值美元**，最近 3 个月
- 身份证明：远程工作合同 / 自由职业合作合同 / 公司营业执照（创业者）
- 申请表 + 1 张照片

### 强烈建议加交

- LinkedIn 截图
- 公司官网截图（标出你的名字）
- 客户感谢信（自由职业者）

## 选领馆

| 领馆 | 出签率 | 周期 | 要求 |
| --- | --- | --- | --- |
| 北京 | 高 | 7-10 天 | 户籍/居住证 |
| 上海 | 高 | 7-10 天 | 户籍/居住证 |
| 香港 | 中 | 5-7 天 | 香港身份/工签 |
| **东京** | **极高** | **3 天** | 在日有效签证即可 |
| 新加坡 | 高 | 5 天 | 有效工签/PR |

我选的东京，3 天出签。

## 费用

- **签证费**：10,000 泰铢（约 ¥2,100）
- **银行证明开具**：¥50
- 运费：免

## 被拒怎么办

我朋友被北京领馆拒过一次，原因是"远程工作证明不够具体"。补充了**详细的客户合同 + 收款流水**后第二次过签。

## 入境后

落地泰国，DTV 签证持有人可以直接租房 / 办银行卡 / 上保险，地位等同长期居住者。

> 评论区有人问续签，我准备 2027 年 3 月续，到时再开一帖。`,
    cover: '/images/cities/chiangmai.jpg',
    authorId: 'u-001',
    citySlug: 'chiangmai',
    groupSlugs: ['remote-dev'],
    boardSlug: 'visa',
    tags: ['visa', 'dtv-thailand', 'guide', 'long-term'],
    stats: {
      views: 38240,
      likes: 4280,
      favorites: 5680,
      comments: 482,
      reactions: { thumbs: 2480, heart: 1240, fire: 920, pray: 480, thinking: 280 },
    },
    createdAt: ts('2026-03-28T07:12:00Z'),
    updatedAt: ts('2026-04-02T03:00:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },
  {
    id: 'p-cm-002',
    type: 'guide',
    title: '清迈 8 家 Co-working 实测：网速、人均、配套、社群浓度',
    excerpt: '从 Punspace 到 Yellow，从 Heartwork 到 CAMP，逐家打分。',
    content: `# 清迈 Co-working 全测评

测评时段：2026 年 4 月平日上午 10-12 点。

| 名称 | 月卡 | 网速(Mbps) | 工位密度 | 社群活跃 | 综合 |
| --- | --- | --- | --- | --- | --- |
| **Punspace Nimman** | ฿4,500 | 195 | 中 | ⭐⭐⭐⭐⭐ | 9.2/10 |
| **CAMP @MAYA** | ฿2,800 | 145 | 高 | ⭐⭐⭐⭐ | 8.5/10 |
| **Yellow** | ฿3,800 | 120 | 中 | ⭐⭐⭐⭐ | 8.2/10 |
| **Heartwork** | ฿4,200 | 88 | 低 | ⭐⭐⭐⭐⭐ | 8.0/10 |
| **The Hub** | ฿3,500 | 165 | 中 | ⭐⭐⭐ | 7.8/10 |

… 其余 3 家明天补完。`,
    authorId: 'u-001',
    citySlug: 'chiangmai',
    groupSlugs: ['remote-dev'],
    boardSlug: 'remote-work',
    tags: ['co-working', 'wifi', 'review'],
    stats: {
      views: 8420,
      likes: 620,
      favorites: 380,
      comments: 48,
      reactions: { thumbs: 480, heart: 120, thinking: 28 },
    },
    createdAt: ts('2026-04-08T05:30:00Z'),
    updatedAt: ts('2026-04-08T05:30:00Z'),
    isVerifiedAuthor: true,
    visibility: 'public',
  },
  {
    id: 'p-cm-003',
    type: 'diary',
    title: '清迈第 47 天：在咖啡馆写完了一本书',
    excerpt: '在 Ristr8to 的角落，用 47 天写完了酝酿三年的书稿。日记体记录。',
    content: `# Day 47

清晨 6:50 醒，没有闹钟。

阳光是清迈 4 月特有的薄荷色——不像大理那样厚重，也不像里斯本那样金属，是一种被椰子树过滤过的、绿调子的光。

…

今天是关键的一天，因为我写完了**那本书**的最后一章。

…（节选）

如果你也在清迈，或者也曾在清迈写过什么，欢迎留言。`,
    cover: '/images/cities/chiangmai.jpg',
    authorId: 'u-006',
    citySlug: 'chiangmai',
    groupSlugs: ['creators'],
    boardSlug: 'diary',
    tags: ['guide', 'foodie'],
    stats: {
      views: 3820,
      likes: 480,
      favorites: 280,
      comments: 38,
      reactions: { thumbs: 280, heart: 220, fire: 86 },
    },
    createdAt: ts('2026-04-14T13:00:00Z'),
    updatedAt: ts('2026-04-14T13:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },

  // ─────────────── 巴厘岛（bali）───────────────
  {
    id: 'p-bali-001',
    type: 'guide',
    title: '巴厘岛 Canggu vs Ubud：6 个月双城对比',
    excerpt: '一个海边一个山里，工作、社交、价格、医疗、签证，11 个维度对比。',
    content: `# Canggu vs Ubud — 怎么选？

我在 Canggu 住了 3 个月，Ubud 住了 3 个月。

## 速览

| 维度 | Canggu | Ubud |
| --- | --- | --- |
| 风格 | 海边 / Surf / Party | 山里 / 瑜伽 / 治愈 |
| 一居室月租 | ฿18,000-30,000 | ฿14,000-22,000 |
| 网速均值 | 32 Mbps | 22 Mbps |
| 适合人群 | 创业者 / 设计师 / 单身 | 瑜伽 / 写作 / 家庭 |
| 必须租摩托 | 是 | 是 |

## Canggu 给我的

- 浪人氛围，每天 5 点冲浪 + 7 点早餐 + 9 点开始工作
- Coworking 密度极高（Tropical Nomad、Outpost、Dojo Bali）
- 但**网速差**是硬伤，重要会议必须备 4G 流量卡

## Ubud 给我的

- 慢，慢得像被按了 0.6x
- 瑜伽课遍地，从早 6:30 到晚 9:30
- 米田梯田跑步路线我每天都不腻
- 但晚上社交少，**适合内向者**

## 选择建议

- 30 岁以下、单身、外向 → **Canggu**
- 35 岁以上、写作 / 瑜伽 / 家庭 → **Ubud**
- 不确定 → **Ubud 1.5 个月 + Canggu 1.5 个月**`,
    cover: '/images/cities/bali.jpg',
    authorId: 'u-002',
    citySlug: 'bali',
    groupSlugs: ['surf-dive', 'yoga-meditation'],
    boardSlug: 'rental',
    tags: ['guide', 'co-working', 'beach', 'yoga'],
    stats: {
      views: 12420,
      likes: 1280,
      favorites: 940,
      comments: 86,
      reactions: { thumbs: 820, heart: 380, fire: 120 },
    },
    createdAt: ts('2026-04-05T08:00:00Z'),
    updatedAt: ts('2026-04-05T08:00:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },
  {
    id: 'p-bali-002',
    type: 'roommate',
    title: '【乌布】找一位安静的女室友｜独立卫浴｜¥2400/月',
    excerpt: '别墅二楼独立卧室，共享泳池厨房。我是瑜伽老师，作息规律，无烟。',
    content: `## 房屋

- 乌布郊区的传统巴厘别墅
- 共 2 间卧室，我住一楼，二楼空出
- 二楼带独立卫浴和小书桌
- 共享厨房 / 泳池 / 庭院

## 关于我

29 岁，瑜伽老师，每天 5:30 起床，21:30 睡觉。不抽烟不饮酒。养了一只非常温柔的猫。

## 关于你

- 女性
- 中长期（≥ 1 个月）
- 安静、爱干净
- 友好但不必每天聊天

## 价格

¥2,400/月，含水电网。

回复站内或评论。`,
    authorId: 'u-007',
    citySlug: 'bali',
    groupSlugs: ['co-living', 'yoga-meditation'],
    boardSlug: 'roommate',
    tags: ['roommate', 'co-living', 'yoga'],
    meta: { price: { value: 2400, currency: 'CNY' }, location: 'Bali, Ubud' },
    stats: {
      views: 1820,
      likes: 86,
      favorites: 124,
      comments: 32,
      reactions: { thumbs: 64, heart: 38 },
    },
    createdAt: ts('2026-04-13T03:00:00Z'),
    updatedAt: ts('2026-04-13T03:00:00Z'),
    visibility: 'public',
  },

  // ─────────────── 里斯本（lisbon）───────────────
  {
    id: 'p-lis-001',
    type: 'guide',
    title: '葡萄牙 D8 数字游民签证：从申请到拿到 NIF 全流程',
    excerpt: '里斯本城市大使的亲身记录。整个流程 14 个工作日，亲测可在国内远程办妥 80%。',
    content: `# 葡萄牙 D8 签证 + NIF 全流程

## 一、为什么是 D8？

- 一年起签，可续 5 年，5 年后可申请永居
- 申根区任意通行
- 葡萄牙 NHR 税务优惠（前 10 年特定收入低税率）
- **承认中国驾照**，无需翻译

## 二、申请条件（2026）

- 月收入 ≥ 葡萄牙最低工资的 4 倍 ≈ €3,480
- 银行存款 ≥ €10,440
- 无犯罪
- 健康保险（覆盖葡萄牙）

## 三、申请步骤

1. **国内 VFS 预约**（提前 3-4 周）
2. **递交材料 + 生物信息**
3. **领事馆审核**（约 60 天）
4. **拿到 4 个月入境签**（D8 入境签）
5. 入境葡萄牙后 15 天内办 **NIF**（税号）+ **AIMA 预约换居留卡**

## 四、关键 Tips

- 银行流水**必须显示固定打款**，散单不行
- 健康保险买 SafetyWing 不被认可，要买**葡萄牙本地保险**
- AIMA 预约堪比挂专家号，建议**入境第一天就开始挂**
- NIF 办理推荐找 **e-residence 中介**，€100 包搞定

## 五、生活成本

里斯本不便宜了。一居室公寓 €1200-1800/月起。

但对比西班牙、德国，仍是性价比最高的西欧选项。

> 评论区开放：D7 和 D8 的区别我也写一篇？`,
    cover: '/images/cities/lisbon.jpg',
    authorId: 'u-005',
    citySlug: 'lisbon',
    groupSlugs: ['consultants'],
    boardSlug: 'visa',
    tags: ['visa', 'visa-d8', 'guide', 'long-term', 'tax'],
    stats: {
      views: 28480,
      likes: 2480,
      favorites: 4280,
      comments: 286,
      reactions: { thumbs: 1820, heart: 480, pray: 280, thinking: 120 },
    },
    createdAt: ts('2026-03-18T10:00:00Z'),
    updatedAt: ts('2026-04-02T08:00:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },
  {
    id: 'p-lis-002',
    type: 'discussion',
    title: '里斯本中餐困境：你们都吃啥？',
    excerpt: '住了 8 个月，第 9 个月开始想念食堂。',
    content: `中餐馆数得过来，且大多偏粤菜。北方胃求救：

- 兰州拉面：1 家，王师傅，Saldanha
- 川菜：2 家，Lu Tao 在 Anjos，The Old Shanghai 在 Bairro Alto
- 自做：Lidl 买得到老干妈、米线…

各位还有什么宝藏推荐？`,
    authorId: 'u-006',
    citySlug: 'lisbon',
    groupSlugs: ['foodie'],
    tags: ['foodie'],
    stats: {
      views: 2280,
      likes: 138,
      favorites: 86,
      comments: 64,
      reactions: { thumbs: 96, haha: 28, heart: 14 },
    },
    createdAt: ts('2026-04-16T19:00:00Z'),
    updatedAt: ts('2026-04-16T19:00:00Z'),
    visibility: 'public',
  },

  // ─────────────── 三亚（sanya）+ 银发 ───────────────
  {
    id: 'p-san-001',
    type: 'guide',
    title: '60 岁阿姨第 4 次三亚过冬：3 套房子的真实账单',
    excerpt: '亚龙湾、海棠湾、海口湾三套各住一冬。租金、采购、医疗、社交全公开。',
    content: `# 三亚过冬 4 年总账

我从 2022 年开始来三亚过冬，至今 4 年，住过 3 个区域。

## 三个区域对比

| 区 | 月租（一居室） | 优势 | 坑 |
| --- | --- | --- | --- |
| 亚龙湾 | ¥4500-7500 | 海湾最美 | 距离市区远 |
| 海棠湾 | ¥4000-6500 | 高端配套 | 性价比一般 |
| 海口（湾里）| ¥2800-4200 | 物价低 30% | 不是真三亚 |

## 我的开销

- 房租 ¥5,200
- 食材（自做为主）¥1,800
- 外出吃饭 ¥1,000
- 医疗保险 ¥250
- 通信 ¥150
- 文体（广场舞班 + 书法班）¥300
- 共计 **¥8,700/月**

## 一些经验

1. **租房尽量找熟人或平台**，不要在小区门口找黑中介
2. **看房带 wifi 测速**，别信"100M 光纤"
3. **办海南旅居医保**（退休职工可异地直结）
4. **买电动车**比公共交通方便很多

## 社群

栖遇 [三亚频道](/c/sanya) 有银发候鸟 800+ 人。每周组织活动：

- 周一海边晨练
- 周三文体活动
- 周五聚餐

> 我今年要试试西双版纳了，欢迎前辈交流经验。`,
    authorId: 'u-003',
    citySlug: 'sanya',
    groupSlugs: ['silver-snowbirds'],
    boardSlug: 'rental',
    tags: ['silver', 'long-term', 'guide', 'budget'],
    stats: {
      views: 18240,
      likes: 1280,
      favorites: 1820,
      comments: 124,
      reactions: { thumbs: 820, heart: 380, pray: 124 },
    },
    createdAt: ts('2026-04-10T08:00:00Z'),
    updatedAt: ts('2026-04-10T08:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },

  // ─────────────── 第比利斯（tbilisi）───────────────
  {
    id: 'p-tbi-001',
    type: 'guide',
    title: '为什么我从里斯本搬到了第比利斯',
    excerpt: '签证 365 天免签、生活成本只有里斯本 60%、Web3 友好、wine country。',
    content: `# 我搬家的原因

2022 年战争爆发后，我从基辅来到第比利斯，原本只是过渡。

3 个月后，我决定不走了。

## 为什么是第比利斯？

1. **365 天免签**
2. **生活成本极低**：单人月开销 €700-1100
3. **税务友好**：Individual Entrepreneur 1% 流转税
4. **互联网够用**：65 Mbps 平均，部分高于 200
5. **欧洲气质**：Sololaki 老城区像迷你巴黎
6. **Wine + 山地骑行**：周末跨境亚美尼亚轻松

## Tip

- 推荐区域：**Sololaki / Vera / Mtatsminda**，避免 Saburtalo
- 银行：TBC 比 Bank of Georgia 容易开户
- ATM：Liberty Bank 不收手续费
- 咖啡：Coffee Lab 拒绝陌生人 WiFi 密码——是 GE 的"星巴克"`,
    cover: '/images/cities/tbilisi.jpg',
    authorId: 'u-010',
    citySlug: 'tbilisi',
    groupSlugs: ['designers', 'consultants'],
    boardSlug: 'visa',
    tags: ['visa', 'budget', 'long-term', 'guide'],
    stats: {
      views: 6480,
      likes: 580,
      favorites: 380,
      comments: 48,
      reactions: { thumbs: 380, heart: 120, fire: 64 },
    },
    createdAt: ts('2026-04-09T16:00:00Z'),
    updatedAt: ts('2026-04-09T16:00:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },

  // ─────────────── 墨西哥城（mexico-city）───────────────
  {
    id: 'p-cdmx-001',
    type: 'guide',
    title: 'CDMX Roma Norte 完全攻略：街区、安全、最佳早午餐',
    excerpt: '4 年实战经验。从街区选择到具体街道，从安全到 Brunch list。',
    content: `# Roma Norte 攻略

我 2022 年搬到 Roma Norte，4 年没换过区。

## 街区微观

Roma Norte 内部按"街道"再分四块：

- **Álvaro Obregón 大道沿线**：游客最多，价格 +20%
- **Parque México 公园周边**：最贵，安静，欧美 nomad 聚集
- **Cuauhtémoc 大道东侧**：性价比，本地化
- **Tonalá - Frontera 区域**：餐厅密度最高

## 安全

Roma Norte 在 CDMX 是**最安全的 5% 街区之一**，但也有以下规则：

- 11 PM 后**单人步行**避免 Avenida Insurgentes 沿线
- 不要在 Uber 里掏现金
- 大量电子设备显眼放置 = 自找麻烦
- 夜间打 Uber，**等到地图显示车到再下楼**

## Brunch（必去）

| 名 | 必点 | 人均 |
| --- | --- | --- |
| Lardo | Avocado toast | ¥110 |
| Panadería Rosetta | Pan dulce | ¥80 |
| Cardinal Casa de Café | Espresso tonic | ¥60 |
| Fideo Gordo | Pasta + 自然酒 | ¥150 |

## 月成本

- 一居室公寓：US$1,200-1,800
- 食物（半自做）：US$400
- 交通（Uber + 走路）：US$120
- 健身房 + 课程：US$80
- 总计：**US$1,800-2,400/月**`,
    cover: '/images/cities/mexico-city.jpg',
    authorId: 'u-009',
    citySlug: 'mexico-city',
    groupSlugs: ['creators'],
    boardSlug: 'rental',
    tags: ['guide', 'safety', 'foodie', 'long-term'],
    stats: {
      views: 9820,
      likes: 820,
      favorites: 480,
      comments: 76,
      reactions: { thumbs: 580, heart: 180, fire: 84 },
    },
    createdAt: ts('2026-04-07T11:00:00Z'),
    updatedAt: ts('2026-04-07T11:00:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },

  // ─────────────── 跨城市主题贴 ───────────────
  {
    id: 'p-visa-001',
    type: 'discussion',
    title: '50+ 国数字游民签证 2026 横向对比表',
    excerpt: '最低收入要求、税率、续签难度、家属/孩子条款，一表速查。',
    content: `# 数字游民签证一览（2026 版）

| 国家 | 月收入门槛 | 时长 | 税率 | 家属 | 难度 |
| --- | --- | --- | --- | --- | --- |
| 葡萄牙 D8 | €3,480 | 1+5 年 | NHR 优惠 | ✅ | ★★★ |
| 西班牙 DNV | €2,762 | 1+5 年 | 24% flat | ✅ | ★★★★ |
| 德国 Freiberufler | 按职业 | 1-3 年 | 累进 | ❌ | ★★★★ |
| 泰国 DTV | ¥120k 存款 | 5 年多次 | 0%（境外收入） | ✅ | ★★ |
| 印尼 KITAS | $2,000 | 1 年 | 0%（境外收入） | ✅ | ★★★ |
| 阿联酋 RV | $5,000 | 1 年 | 0% | ✅ | ★★ |
| 墨西哥 RT | $2,600 | 1+3 年 | 居民征税 | ✅ | ★★★ |
| 哥斯达黎加 RV | $3,000 | 1+1 年 | 0%（境外收入） | ✅ | ★★ |
| 哥伦比亚 V | $700 | 2 年 | 0%（境外收入） | ✅ | ★★ |
| 巴西 VITEM XIV | $1,500 | 1+1 年 | 居民征税 | ✅ | ★★★ |
| 格鲁吉亚 RWfA | 自证 | 1 年 | 1% | ✅ | ★ |
| 爱沙尼亚 DNV | €4,500 | 1 年 | 累进 | ❌ | ★★★ |
| 克罗地亚 DNV | €2,539 | 1 年 | 0%（境外收入） | ✅ | ★★ |
| 希腊 DNV | €3,500 | 1+1 年 | 累进 | ✅ | ★★★ |
| 马耳他 NV | €2,700 | 1+3 年 | 居民征税 | ✅ | ★★★ |
| … 完整 50 国见评论区 PDF | | | | | |

> 2026 年新增：**意大利 DNV** 已于 2024 年启动；**日本 DN** 6 个月可续。`,
    authorId: 'u-011',
    boardSlug: 'visa',
    groupSlugs: ['consultants'],
    tags: ['visa', 'guide', 'tax', 'long-term'],
    stats: {
      views: 24820,
      likes: 3280,
      favorites: 5680,
      comments: 184,
      reactions: { thumbs: 1820, pray: 480, thinking: 280 },
    },
    createdAt: ts('2026-04-04T05:00:00Z'),
    updatedAt: ts('2026-04-15T11:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },
  {
    id: 'p-remote-001',
    type: 'question',
    title: '跨时区团队协作，你们用什么工具？',
    excerpt: '亚洲团队 + 美西总部，会议时间永远撕扯。',
    content: `当前：

- Slack + Notion + Linear
- 周一晚上 9 点（东 8）/ 周一上午 6 点（PT）的同步会
- async 文档为主

痛点：

1. 紧急 Bug 找不到人
2. 周报疲劳
3. Slack 跨时区"打卡式回复"

各位有什么实战经验？`,
    authorId: 'u-001',
    boardSlug: 'remote-work',
    groupSlugs: ['remote-dev'],
    tags: ['remote-work', 'wifi'],
    stats: {
      views: 4280,
      likes: 280,
      favorites: 138,
      comments: 86,
      reactions: { thumbs: 184, thinking: 64 },
    },
    createdAt: ts('2026-04-14T07:00:00Z'),
    updatedAt: ts('2026-04-14T07:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-job-001',
    type: 'job',
    title: '【远程】栖遇社区运营（中文 + 英文）',
    excerpt: 'NestAway 招聘全职社区运营，远程，base 大理 / 清迈 / 里斯本三选一。',
    content: `## 关于我们

栖遇 NestAway 是全球首个面向中长期旅居者的平台。我们刚刚上线了社区，正在寻找第一位**全职社区运营**。

## 你将负责

- 城市频道日常运营（与 4 位城市大使协作）
- 兴趣小组孵化与活跃度提升
- 月度社区主题策划（线上 + 线下）
- UGC 内容审核与精华遴选
- 与产品 / 设计协作迭代

## 我们希望你

- 有 2+ 年互联网社区 / 内容运营经验
- 中英文母语级
- 自己就是中长期旅居者，理解这个群体
- 能独立做事、远程协作经验
- 视频会议时背景里有海或山是加分项 🌊⛰️

## 我们提供

- 薪酬：¥18k-30k/月（base + 股权）
- 远程为主，每季度 1 次实地集结
- NestAway Plus 会员
- 5 年内累积 12 周城市资助计划

简历投递：talent@nestaway.community（请注明城市偏好）`,
    authorId: 'u-015',
    boardSlug: 'jobs',
    groupSlugs: ['marketing-ops', 'remote-dev'],
    tags: ['remote-work', 'guide'],
    meta: { jobType: 'full-time', deadline: '2026-05-31', contact: 'talent@nestaway.community' },
    stats: {
      views: 8240,
      likes: 480,
      favorites: 380,
      comments: 96,
      reactions: { thumbs: 280, heart: 124, fire: 64 },
    },
    createdAt: ts('2026-04-11T03:00:00Z'),
    updatedAt: ts('2026-04-11T03:00:00Z'),
    isPinned: true,
    visibility: 'public',
  },
  {
    id: 'p-fam-001',
    type: 'discussion',
    title: '带 6 岁娃 worldschool 18 个月：4 个真相',
    excerpt: '从乌布到清迈再到 CDMX，孩子学习、父母心态、亲子关系，最坦诚的一篇。',
    content: `# 带娃旅居 18 个月，我学到的 4 件事

## 真相 1：孩子比你以为的适应得快

3 个月 = 一个完整的"适应曲线"。前 4 周哭闹，5-8 周观察，9 周后是当地小孩。

## 真相 2：父母才是真正的瓶颈

孩子不在乎换不换学校，父母焦虑要不要"耽误升学"。

## 真相 3：worldschool 不是 unschool

我们仍坚持每天 2 小时正经学习（Reading + Math），不规定时间和地点，但雷打不动。

## 真相 4：选对**家庭旅居社区**比选目的地更重要

清迈、乌布、里斯本是家庭友好的 top 3，因为它们都有**worldschool 微社区**。

> [栖遇 · 亲子旅居家庭](/g/family-nomads) 已聚集 2,400+ 旅居家庭，欢迎加入。`,
    cover: '/images/cities/chiangmai.jpg',
    authorId: 'u-004',
    boardSlug: 'diary',
    groupSlugs: ['family-nomads'],
    tags: ['family', 'long-term', 'guide'],
    stats: {
      views: 14820,
      likes: 1820,
      favorites: 1240,
      comments: 142,
      reactions: { thumbs: 1240, heart: 480, pray: 184 },
    },
    createdAt: ts('2026-04-06T07:00:00Z'),
    updatedAt: ts('2026-04-06T07:00:00Z'),
    isFeatured: true,
    isVerifiedAuthor: true,
    visibility: 'public',
  },
  {
    id: 'p-yoga-001',
    type: 'diary',
    title: '在乌布的早晨：从黑到金的一杯茶',
    excerpt: '5:30 起，6:00 阳台冥想，7:00 课。这是我在乌布的第 90 天。',
    content: `# 90 / 365

5:30 起。

天还黑。倒一杯昨晚泡好的茶，从冰箱里拿出。

6:00 阳台。鸟叫从远到近。茶从黑到金。…`,
    cover: '/images/cities/bali.jpg',
    authorId: 'u-007',
    citySlug: 'bali',
    groupSlugs: ['yoga-meditation'],
    boardSlug: 'diary',
    tags: ['yoga'],
    stats: {
      views: 2680,
      likes: 380,
      favorites: 184,
      comments: 28,
      reactions: { heart: 240, pray: 86 },
    },
    createdAt: ts('2026-04-15T22:30:00Z'),
    updatedAt: ts('2026-04-15T22:30:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-cdmx-002',
    type: 'event',
    title: '【4/27 周日】CDMX Roma Norte 街区漫步 + 讨论会',
    excerpt: '周日下午 4 点 Parque México 集合，2 小时街区漫步 + 1 小时咖啡馆讨论。',
    content: `## 主题

"在墨西哥城旅居：你给自己的允许是什么？"

## 流程

- 16:00 集合 Parque México Glorieta de Cibeles
- 16:15-18:00 漫步 Tonalá → Frontera → Cuauhtémoc
- 18:00-19:00 Cardinal 咖啡馆讨论

## 报名

回复"+1"。AA 制咖啡（¥80）。栖遇 Plus 会员免单。`,
    authorId: 'u-009',
    citySlug: 'mexico-city',
    groupSlugs: ['solo-nomads', 'creators'],
    boardSlug: 'diary',
    tags: ['meetup'],
    meta: { eventStart: '2026-04-27T22:00:00Z', eventEnd: '2026-04-28T01:00:00Z', location: 'Parque México' },
    stats: {
      views: 920,
      likes: 86,
      favorites: 38,
      comments: 24,
      reactions: { thumbs: 64, heart: 28, fire: 12 },
    },
    createdAt: ts('2026-04-18T05:00:00Z'),
    updatedAt: ts('2026-04-18T05:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-host-001',
    type: 'discussion',
    title: '【房东视角】月租 vs 短租：6 个月数据对比',
    excerpt: '同一套大理才村海景一居室，3 个月跑短租，3 个月跑月租。账单、空置率、维护、好评。',
    content: `# 同一套房，两种模式，6 个月

我在大理才村有 3 套海景一居室。2025 年 10 月-2026 年 3 月，我把其中 1 套**前 3 个月跑短租**（Airbnb），**后 3 个月跑月租**（栖遇）。

## 数据对比

| | 短租 (10-12 月) | 月租 (1-3 月) |
| --- | --- | --- |
| 月均收入 | ¥7,820 | ¥5,400 |
| 入住率 | 56% | 95% |
| 清洁次数 | 14 次/月 | 1 次/月 |
| 维护工时 | 8h/月 | 2h/月 |
| 平台抽成 | 18% | 11% |
| **净到手** | **¥4,860** | **¥4,180** |
| 心累度（10 满分） | 8 | 2 |

## 我的结论

短租赚得多，但**累**。月租少一点，但客户质量稳定，关系长，转介绍多。

> 我已把另两套也切到月租。一套主要租给作家，一套主要租给瑜伽老师。`,
    authorId: 'u-008',
    citySlug: 'dali',
    boardSlug: 'rental',
    groupSlugs: [],
    tags: ['long-term', 'review'],
    stats: {
      views: 7280,
      likes: 480,
      favorites: 280,
      comments: 64,
      reactions: { thumbs: 380, heart: 96, thinking: 48 },
    },
    createdAt: ts('2026-04-08T10:00:00Z'),
    updatedAt: ts('2026-04-08T10:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },

  // 更多帖子
  {
    id: 'p-han-001',
    type: 'guide',
    title: '河内 1 周快速安顿指南',
    excerpt: '怎么办 SIM、开越南银行卡、找当地 WiFi 友好的咖啡馆。',
    content: `## SIM 卡
... `,
    authorId: 'u-013',
    citySlug: 'hanoi',
    boardSlug: 'rental',
    groupSlugs: [],
    tags: ['guide', 'first-time', 'esim'],
    stats: { views: 1820, likes: 124, favorites: 96, comments: 18, reactions: { thumbs: 86 } },
    createdAt: ts('2026-04-13T08:00:00Z'),
    updatedAt: ts('2026-04-13T08:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-cm-004',
    type: 'marketplace',
    title: '【清迈】出二手 KASA 制冰机 + 索尼降噪耳机',
    excerpt: '搬家清仓，KASA 制冰机 ฿1,200，WH-1000XM5 ฿8,800。',
    content: `# 清仓
- KASA 制冰机：8 成新，฿1,200
- 索尼 WH-1000XM5（黑）：9 成新带原盒，฿8,800
- AirTag x2：฿1,600/对

清迈尼曼区面交。`,
    authorId: 'u-006',
    citySlug: 'chiangmai',
    boardSlug: 'marketplace',
    groupSlugs: [],
    tags: ['sublet'],
    meta: { price: { value: 8800, currency: 'THB' }, location: 'Nimman' },
    stats: { views: 720, likes: 28, favorites: 38, comments: 12, reactions: { thumbs: 18 } },
    createdAt: ts('2026-04-17T13:00:00Z'),
    updatedAt: ts('2026-04-17T13:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-bcn-001',
    type: 'question',
    title: '巴塞罗那 6 月看欧洲杯，加上 1 个月旅居，预算多少？',
    excerpt: '一个人，住中端 Airbnb 月租，每天工作 6 小时，剩余时间看球 / 海。',
    content: `计划如下：
- 6 月 1 日 - 7 月 1 日
- 看 4 场欧洲杯（含 1 场决赛？）
- 工作 + 海 + Tapas
预算多少合理？`,
    authorId: 'u-current',
    citySlug: 'barcelona',
    boardSlug: 'rental',
    groupSlugs: ['solo-nomads'],
    tags: ['budget', 'first-time'],
    stats: { views: 1280, likes: 38, favorites: 18, comments: 26, reactions: { thumbs: 24 } },
    createdAt: ts('2026-04-15T16:00:00Z'),
    updatedAt: ts('2026-04-15T16:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-ber-001',
    type: 'guide',
    title: '柏林 Friedrichshain 区 Anmeldung 全流程',
    excerpt: 'Anmeldung 是德国一切的起点，但预约比挂号还难。',
    content: `# Anmeldung — 德国生活的起点
... `,
    authorId: 'u-006',
    citySlug: 'berlin',
    boardSlug: 'visa',
    groupSlugs: [],
    tags: ['visa', 'long-term', 'guide'],
    stats: { views: 4280, likes: 280, favorites: 480, comments: 38, reactions: { thumbs: 184, pray: 48 } },
    createdAt: ts('2026-04-09T08:00:00Z'),
    updatedAt: ts('2026-04-09T08:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-med-001',
    type: 'diary',
    title: '在麦德林写代码的第 180 天',
    excerpt: '永恒的春天，咖啡庄园，Web3 hackathon。',
    content: `# 180 天后...`,
    authorId: 'u-009',
    citySlug: 'medellin',
    boardSlug: 'diary',
    groupSlugs: ['remote-dev'],
    tags: ['remote-work'],
    stats: { views: 1820, likes: 142, favorites: 64, comments: 18, reactions: { heart: 96 } },
    createdAt: ts('2026-04-12T20:00:00Z'),
    updatedAt: ts('2026-04-12T20:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-ist-001',
    type: 'guide',
    title: '伊斯坦布尔 Kadıköy 美食 30 选',
    excerpt: '亚洲一侧的本地味觉地图。早餐、午餐、Meze、夜市，30 家。',
    content: `# Kadıköy 30 家
1. Çiya Sofrası — 必去 ⭐⭐⭐⭐⭐
2. Çiya Kebap — 兄弟店 ⭐⭐⭐⭐⭐
... `,
    authorId: 'u-013',
    citySlug: 'istanbul',
    boardSlug: 'diary',
    groupSlugs: ['foodie'],
    tags: ['foodie', 'guide'],
    stats: { views: 5680, likes: 480, favorites: 320, comments: 32, reactions: { thumbs: 280, heart: 96 } },
    createdAt: ts('2026-04-11T17:00:00Z'),
    updatedAt: ts('2026-04-11T17:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },
  {
    id: 'p-har-001',
    type: 'discussion',
    title: '远程工作族保险怎么选？SafetyWing / World Nomads / 国内补充',
    excerpt: '一年理赔 3 次的真实使用感受，3 家对比。',
    content: `# 三家对比
| | SafetyWing | World Nomads | 国内补充 |
... `,
    authorId: 'u-011',
    boardSlug: 'health',
    groupSlugs: ['consultants'],
    tags: ['insurance'],
    stats: { views: 3820, likes: 280, favorites: 480, comments: 48, reactions: { thumbs: 184, pray: 64 } },
    createdAt: ts('2026-04-10T03:00:00Z'),
    updatedAt: ts('2026-04-10T03:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },
  {
    id: 'p-fam-002',
    type: 'question',
    title: '6 岁娃跟随旅居，葡萄牙 D8 vs 西班牙 DNV，哪个更好申请国际学校？',
    excerpt: '正在做选择题。两国都有英文学校，但学费差很多。',
    content: `已知：
- 葡萄牙国际学校学费 €8k-15k/年
- 西班牙国际学校学费 €10k-25k/年
- 葡萄牙公立学校接收外籍儿童 OK，西班牙更复杂

求过来人经验。`,
    authorId: 'u-004',
    boardSlug: 'visa',
    groupSlugs: ['family-nomads'],
    tags: ['family', 'visa', 'long-term'],
    stats: { views: 2280, likes: 142, favorites: 184, comments: 32, reactions: { thumbs: 96, thinking: 38 } },
    createdAt: ts('2026-04-15T08:00:00Z'),
    updatedAt: ts('2026-04-15T08:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-cm-005',
    type: 'discussion',
    title: '清迈 Punspace 与 Outpost 哪个更适合"安静工作"？',
    excerpt: 'Punspace 社群浓但吵，Outpost 安静但社群弱，怎么选？',
    content: `具体取决于你来清迈做什么。
- 来 deep work：Outpost
- 来 networking：Punspace`,
    authorId: 'u-001',
    citySlug: 'chiangmai',
    boardSlug: 'remote-work',
    groupSlugs: ['remote-dev'],
    tags: ['co-working', 'remote-work'],
    stats: { views: 1280, likes: 86, favorites: 28, comments: 18, reactions: { thumbs: 64 } },
    createdAt: ts('2026-04-16T09:00:00Z'),
    updatedAt: ts('2026-04-16T09:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-cdg-001',
    type: 'diary',
    title: '成都旅居 100 天：从茶馆到工作室',
    excerpt: '在玉林路、镋钯街、麓湖 work from anywhere 的真实场景。',
    content: `# Day 100\n锦江、麓湖、玉林、太古里...`,
    authorId: 'u-014',
    citySlug: 'chengdu',
    boardSlug: 'diary',
    groupSlugs: ['photo-video'],
    tags: ['guide'],
    stats: { views: 2820, likes: 184, favorites: 86, comments: 24, reactions: { heart: 120 } },
    createdAt: ts('2026-04-09T15:00:00Z'),
    updatedAt: ts('2026-04-09T15:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-hgz-001',
    type: 'question',
    title: '西溪湿地附近的长租公寓推荐？',
    excerpt: '希望步行 15 分钟内能到湿地，预算 5500/月以下。',
    content: `计划 4-9 月，5 个月。一个人，远程工作。`,
    authorId: 'u-014',
    citySlug: 'hangzhou',
    boardSlug: 'rental',
    groupSlugs: [],
    tags: ['long-term'],
    stats: { views: 980, likes: 38, favorites: 28, comments: 14, reactions: { thumbs: 24 } },
    createdAt: ts('2026-04-17T07:00:00Z'),
    updatedAt: ts('2026-04-17T07:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-xm-001',
    type: 'guide',
    title: '厦门沙坡尾旅居 3 个月小记',
    excerpt: '老市集、拐角咖啡、鼓浪屿日落，外加月租 4000 一居室的攻略。',
    content: `# 沙坡尾...`,
    authorId: 'u-014',
    citySlug: 'xiamen',
    boardSlug: 'diary',
    groupSlugs: [],
    tags: ['guide', 'foodie', 'beach'],
    stats: { views: 2480, likes: 184, favorites: 96, comments: 24, reactions: { thumbs: 120, heart: 48 } },
    createdAt: ts('2026-04-08T07:00:00Z'),
    updatedAt: ts('2026-04-08T07:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-xsbn-001',
    type: 'guide',
    title: '西双版纳告庄过冬 60 天 ¥6000 全包',
    excerpt: '一居室 ¥1800，每天傣味烧烤 ¥30，电动车 ¥800/月。',
    content: `# 告庄 60 天 ¥6,000\n详细账单见下表...`,
    authorId: 'u-003',
    citySlug: 'xishuangbanna',
    boardSlug: 'rental',
    groupSlugs: ['silver-snowbirds'],
    tags: ['budget', 'silver', 'long-term'],
    stats: { views: 4280, likes: 280, favorites: 380, comments: 48, reactions: { thumbs: 184, pray: 64 } },
    createdAt: ts('2026-04-06T08:00:00Z'),
    updatedAt: ts('2026-04-06T08:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },
  {
    id: 'p-bcn-002',
    type: 'guide',
    title: '巴塞罗那 Eixample vs Gracia：选区指南',
    excerpt: 'Eixample 棋盘、规整、贵；Gracia 老城、文艺、便宜。',
    content: `# 选 Eixample 还是 Gracia\n...`,
    authorId: 'u-005',
    citySlug: 'barcelona',
    boardSlug: 'rental',
    groupSlugs: [],
    tags: ['guide', 'long-term'],
    stats: { views: 2820, likes: 184, favorites: 96, comments: 18, reactions: { thumbs: 96 } },
    createdAt: ts('2026-04-13T11:00:00Z'),
    updatedAt: ts('2026-04-13T11:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-war-001',
    type: 'discussion',
    title: '华沙数字游民群体在哪聚集？',
    excerpt: 'Mokotów 还是 Praga？哪个咖啡馆 nomads 最多？',
    content: `刚来 1 周，求带飞。`,
    authorId: 'u-current',
    citySlug: 'warsaw',
    boardSlug: 'remote-work',
    groupSlugs: ['solo-nomads'],
    tags: ['first-time', 'co-working'],
    stats: { views: 480, likes: 18, favorites: 8, comments: 6, reactions: { thumbs: 12 } },
    createdAt: ts('2026-04-17T18:00:00Z'),
    updatedAt: ts('2026-04-17T18:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-kl-001',
    type: 'guide',
    title: '吉隆坡 MM2H 签证 2026 新政策详解',
    excerpt: '门槛大幅降低、家属可工作、批准周期缩短到 90 天。',
    content: `# MM2H 2026 新政\n...`,
    authorId: 'u-011',
    citySlug: 'kuala-lumpur',
    boardSlug: 'visa',
    groupSlugs: ['family-nomads'],
    tags: ['visa', 'long-term', 'family'],
    stats: { views: 6820, likes: 480, favorites: 820, comments: 64, reactions: { thumbs: 280, pray: 120 } },
    createdAt: ts('2026-04-07T09:00:00Z'),
    updatedAt: ts('2026-04-07T09:00:00Z'),
    isFeatured: true,
    visibility: 'public',
  },
  {
    id: 'p-ba-001',
    type: 'diary',
    title: '在 Buenos Aires 的 Palermo 跳了 3 个月探戈',
    excerpt: '从一无所知到能去 milonga 跳基础。',
    content: `# 探戈 90 天...`,
    authorId: 'u-012',
    citySlug: 'buenos-aires',
    boardSlug: 'diary',
    groupSlugs: ['art-music'],
    tags: ['guide'],
    stats: { views: 1820, likes: 142, favorites: 64, comments: 18, reactions: { heart: 86 } },
    createdAt: ts('2026-04-12T22:00:00Z'),
    updatedAt: ts('2026-04-12T22:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-cnf-001',
    type: 'discussion',
    title: '社区第一个月，你最想要什么功能？',
    excerpt: '产品经理在线收集需求。每条都会读，每条都会回。',
    content: `已经在做：
- 城市频道增量更新
- 移动端优化
- 私信（V1.1）

征集你的想法。`,
    authorId: 'u-015',
    boardSlug: 'feedback',
    groupSlugs: [],
    tags: [],
    stats: { views: 3280, likes: 280, favorites: 86, comments: 142, reactions: { thumbs: 184, heart: 64 } },
    createdAt: ts('2026-04-15T03:00:00Z'),
    updatedAt: ts('2026-04-15T03:00:00Z'),
    visibility: 'public',
  },
  {
    id: 'p-cm-006',
    type: 'event',
    title: '【4/29 周二】清迈 Punspace 栖遇旅居者咖啡 Crawl',
    excerpt: '从 Ristr8to 到 Roast8ry 到 Akha Ama，3 家咖啡 3 个话题。',
    content: `## 流程
9:00 Ristr8to — 介绍 + 咖啡
10:30 Roast8ry — 主题 1：远程工作的边界
12:00 Akha Ama — 主题 2：DTV 续签经验

## 报名
回复"报名"+ 自己的主题贡献。`,
    authorId: 'u-006',
    citySlug: 'chiangmai',
    boardSlug: 'diary',
    groupSlugs: ['solo-nomads', 'remote-dev'],
    tags: ['meetup'],
    meta: { eventStart: '2026-04-29T02:00:00Z', eventEnd: '2026-04-29T07:00:00Z', location: 'Nimman' },
    stats: { views: 1240, likes: 96, favorites: 38, comments: 24, reactions: { thumbs: 64, heart: 28 } },
    createdAt: ts('2026-04-18T08:00:00Z'),
    updatedAt: ts('2026-04-18T08:00:00Z'),
    visibility: 'public',
  },
];

export const POST_BY_ID = Object.fromEntries(POSTS.map((p) => [p.id, p]));
