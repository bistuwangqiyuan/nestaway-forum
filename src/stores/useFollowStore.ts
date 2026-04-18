'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  cities: Record<string, true>;
  groups: Record<string, true>;
  tags: Record<string, true>;
  users: Record<string, true>;
  toggleCity: (slug: string) => void;
  toggleGroup: (slug: string) => void;
  toggleTag: (slug: string) => void;
  toggleUser: (id: string) => void;
  isCity: (slug: string) => boolean;
  isGroup: (slug: string) => boolean;
  isTag: (slug: string) => boolean;
  isUser: (id: string) => boolean;
};

const toggle = (m: Record<string, true>, k: string) => {
  const next = { ...m };
  if (next[k]) delete next[k];
  else next[k] = true;
  return next;
};

export const useFollowStore = create<State>()(
  persist(
    (set, get) => ({
      cities: { dali: true, chiangmai: true },
      groups: { 'remote-dev': true, 'solo-nomads': true },
      tags: { visa: true, 'co-working': true },
      users: { 'u-001': true, 'u-005': true },
      toggleCity: (slug) => set({ cities: toggle(get().cities, slug) }),
      toggleGroup: (slug) => set({ groups: toggle(get().groups, slug) }),
      toggleTag: (slug) => set({ tags: toggle(get().tags, slug) }),
      toggleUser: (id) => set({ users: toggle(get().users, id) }),
      isCity: (slug) => !!get().cities[slug],
      isGroup: (slug) => !!get().groups[slug],
      isTag: (slug) => !!get().tags[slug],
      isUser: (id) => !!get().users[id],
    }),
    { name: 'nestaway-forum:v1:follow' },
  ),
);
