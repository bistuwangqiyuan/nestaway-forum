'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ReactionKey } from '@/types';

type State = {
  likes: Record<string, true>;             // postId
  favorites: Record<string, true>;
  reactions: Record<string, Partial<Record<ReactionKey, true>>>; // postId -> reactions
  toggleLike: (postId: string) => void;
  toggleFavorite: (postId: string) => void;
  toggleReaction: (postId: string, key: ReactionKey) => void;
  isLiked: (postId: string) => boolean;
  isFavorited: (postId: string) => boolean;
  hasReaction: (postId: string, key: ReactionKey) => boolean;
};

export const useReactionStore = create<State>()(
  persist(
    (set, get) => ({
      likes: {},
      favorites: {},
      reactions: {},
      toggleLike: (postId) =>
        set((s) => {
          const likes = { ...s.likes };
          if (likes[postId]) delete likes[postId];
          else likes[postId] = true;
          return { likes };
        }),
      toggleFavorite: (postId) =>
        set((s) => {
          const favorites = { ...s.favorites };
          if (favorites[postId]) delete favorites[postId];
          else favorites[postId] = true;
          return { favorites };
        }),
      toggleReaction: (postId, key) =>
        set((s) => {
          const reactions = { ...s.reactions };
          const current = { ...(reactions[postId] ?? {}) };
          if (current[key]) delete current[key];
          else current[key] = true;
          reactions[postId] = current;
          return { reactions };
        }),
      isLiked: (postId) => !!get().likes[postId],
      isFavorited: (postId) => !!get().favorites[postId],
      hasReaction: (postId, key) => !!get().reactions[postId]?.[key],
    }),
    { name: 'nestaway-forum:v1:reactions' },
  ),
);
