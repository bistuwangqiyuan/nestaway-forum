'use client';

import * as React from 'react';
import Link from 'next/link';
import { notificationRepo } from '@/lib/repository';
import { useNotificationStore } from '@/stores/useNotificationStore';
import { useT } from '@/lib/i18n';
import { formatRelative } from '@/lib/utils/date';
import { Avatar } from '@/components/ui/Avatar';
import { userRepo } from '@/lib/repository';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

export function NotificationsClient() {
  const { t } = useT();
  const list = notificationRepo.list();
  const isRead = useNotificationStore((s) => s.isRead);
  const markRead = useNotificationStore((s) => s.markRead);
  const markAllRead = useNotificationStore((s) => s.markAllRead);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button size="sm" variant="outline" onClick={() => markAllRead(list.map((n) => n.id))}>
          {t('noti.markAllRead')}
        </Button>
      </div>
      <ul className="flex flex-col gap-2">
        {list.map((n) => {
          const read = n.isRead || isRead(n.id);
          const actorUser = n.actor?.userId ? userRepo.byId(n.actor.userId) : undefined;
          return (
            <li key={n.id}>
              <button
                type="button"
                onClick={() => markRead(n.id)}
                className={cn(
                  'w-full text-left card p-4 flex gap-3 transition-colors',
                  !read && 'border-brand-200 dark:border-brand-800 bg-brand-50/40 dark:bg-brand-950/20',
                )}
              >
                {n.actor && (
                  <Link
                    href={actorUser ? `/u/${actorUser.username}` : '#'}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Avatar size={40} name={n.actor.displayName} gradient={n.actor.avatarGradient} />
                  </Link>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{n.title}</div>
                  {n.body && <p className="text-xs text-slate-500 mt-1 clip-2">{n.body}</p>}
                  <div className="text-[11px] text-slate-400 mt-2">{formatRelative(n.createdAt, 'zh')}</div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
