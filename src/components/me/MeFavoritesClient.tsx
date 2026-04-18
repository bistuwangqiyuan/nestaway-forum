'use client';

import { postRepo } from '@/lib/repository';
import { useReactionStore } from '@/stores/useReactionStore';
import { PostCard } from '@/components/common/PostCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { useT } from '@/lib/i18n';

export function MeFavoritesClient() {
  const { t } = useT();
  const favs = useReactionStore((s) => s.favorites);
  const posts = postRepo.all().filter((p) => favs[p.id]);

  return posts.length === 0 ? (
    <EmptyState title={t('common.empty')} description={t('sidebar.myFavorites')} />
  ) : (
    <div className="flex flex-col gap-4">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
