'use client';

import { userRepo } from '@/lib/repository';
import { BadgeChip } from '@/components/common/BadgeChip';

export function MeBadgesClient() {
  const user = userRepo.current();
  return (
    <div className="flex flex-wrap gap-2">
      {user.badges.map((b) => (
        <BadgeChip key={b} badgeKey={b} showName size="md" />
      ))}
    </div>
  );
}
