'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  read: Record<string, true>;
  markRead: (id: string) => void;
  markAllRead: (ids: string[]) => void;
  isRead: (id: string) => boolean;
};

export const useNotificationStore = create<State>()(
  persist(
    (set, get) => ({
      read: {},
      markRead: (id) => set({ read: { ...get().read, [id]: true } }),
      markAllRead: (ids) =>
        set({ read: { ...get().read, ...Object.fromEntries(ids.map((i) => [i, true])) } }),
      isRead: (id) => !!get().read[id],
    }),
    { name: 'nestaway-forum:v1:noti' },
  ),
);
