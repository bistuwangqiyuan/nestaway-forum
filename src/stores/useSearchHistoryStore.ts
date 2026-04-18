'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  history: string[];
  push: (q: string) => void;
  clear: () => void;
};

export const useSearchHistoryStore = create<State>()(
  persist(
    (set, get) => ({
      history: [],
      push: (q) => {
        const k = q.trim();
        if (!k) return;
        const next = [k, ...get().history.filter((h) => h !== k)].slice(0, 10);
        set({ history: next });
      },
      clear: () => set({ history: [] }),
    }),
    { name: 'nestaway-forum:v1:search-history' },
  ),
);
