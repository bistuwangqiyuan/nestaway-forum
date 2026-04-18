'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PostType } from '@/types';

export type Draft = {
  id: string;
  type: PostType;
  title: string;
  content: string;
  citySlug?: string;
  groupSlugs: string[];
  tags: string[];
  cover?: string;
  visibility: 'public' | 'followers' | 'plus';
  meta?: Record<string, unknown>;
  updatedAt: string;
};

type State = {
  draft: Draft;
  setDraft: (patch: Partial<Draft>) => void;
  reset: () => void;
};

const initial: Draft = {
  id: 'local-draft',
  type: 'discussion',
  title: '',
  content: '',
  citySlug: undefined,
  groupSlugs: [],
  tags: [],
  cover: undefined,
  visibility: 'public',
  meta: undefined,
  updatedAt: new Date().toISOString(),
};

export const useDraftStore = create<State>()(
  persist(
    (set, get) => ({
      draft: initial,
      setDraft: (patch) =>
        set({ draft: { ...get().draft, ...patch, updatedAt: new Date().toISOString() } }),
      reset: () => set({ draft: { ...initial, updatedAt: new Date().toISOString() } }),
    }),
    { name: 'nestaway-forum:v1:draft' },
  ),
);
