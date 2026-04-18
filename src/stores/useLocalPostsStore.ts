'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Post } from '@/types';

type State = {
  posts: Post[];
  add: (p: Post) => void;
  remove: (id: string) => void;
};

export const useLocalPostsStore = create<State>()(
  persist(
    (set) => ({
      posts: [],
      add: (p) => set((s) => ({ posts: [p, ...s.posts] })),
      remove: (id) => set((s) => ({ posts: s.posts.filter((x) => x.id !== id) })),
    }),
    { name: 'nestaway-forum:v1:local-posts' },
  ),
);

export function mergeWithSeed(local: Post[], seed: Post[]): Post[] {
  const seen = new Set<string>();
  const out: Post[] = [];
  for (const p of [...local, ...seed]) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    out.push(p);
  }
  return out;
}
