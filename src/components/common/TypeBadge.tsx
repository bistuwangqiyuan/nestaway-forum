'use client';

import {
  MessageSquare,
  HelpCircle,
  Map,
  BookOpen,
  Tag as TagIcon,
  Users,
  Calendar,
  Briefcase,
} from 'lucide-react';
import type { PostType } from '@/types';
import { useT } from '@/lib/i18n';
import { POST_TYPE_MSG } from '@/lib/i18n/post-type-labels';
import { cn } from '@/lib/utils/cn';

const config: Record<PostType, { icon: React.ComponentType<{ className?: string }>; cls: string }> = {
  discussion:  { icon: MessageSquare, cls: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200' },
  question:    { icon: HelpCircle,    cls: 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-200' },
  guide:       { icon: BookOpen,      cls: 'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-200' },
  diary:       { icon: Map,           cls: 'bg-warm-100 text-warm-800 dark:bg-warm-900/30 dark:text-warm-200' },
  marketplace: { icon: TagIcon,       cls: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200' },
  roommate:    { icon: Users,         cls: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-200' },
  event:       { icon: Calendar,      cls: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200' },
  job:         { icon: Briefcase,     cls: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200' },
};

export function TypeBadge({ type, className }: { type: PostType; className?: string }) {
  const { t } = useT();
  const c = config[type];
  const Icon = c.icon;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 h-6 rounded-md text-[11px] font-medium',
        c.cls,
        className,
      )}
    >
      <Icon className="h-3 w-3" />
      {t(POST_TYPE_MSG[type])}
    </span>
  );
}
