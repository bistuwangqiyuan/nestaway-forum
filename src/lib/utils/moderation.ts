// V1 本地敏感词扫描（生产环境应替换为服务端审核）
// 词库故意保持精简、可扩展

const PATTERNS: { type: string; rx: RegExp }[] = [
  { type: 'spam', rx: /(?:加[微薇威]信|代购联系|\+v\b|加我vx|微信号[:：])/i },
  { type: 'phone', rx: /(?:1[3-9]\d{9})\b/ },
  { type: 'email-spam', rx: /[a-z0-9._%+-]+@(?:163|qq|sina)\.(?:com|cn)/i },
  { type: 'illegal', rx: /(赌博|博彩|开盘|私彩)/ },
];

export type ModerationResult = {
  ok: boolean;
  matches: { type: string; snippet: string }[];
};

export function scanContent(text: string): ModerationResult {
  const matches: { type: string; snippet: string }[] = [];
  for (const p of PATTERNS) {
    const m = text.match(p.rx);
    if (m) matches.push({ type: p.type, snippet: m[0] });
  }
  return { ok: matches.length === 0, matches };
}
