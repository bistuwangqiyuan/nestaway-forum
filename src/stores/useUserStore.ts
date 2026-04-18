'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { userRepo } from '@/lib/repository';
import type { User } from '@/types';

type State = {
  isLoggedIn: boolean;
  userId: string;
  current: () => User;
  signIn: () => void;
  signOut: () => void;
};

export const useUserStore = create<State>()(
  persist(
    (set, get) => ({
      isLoggedIn: true,
      userId: 'u-current',
      current: () => userRepo.byId(get().userId) ?? userRepo.current(),
      signIn: () => set({ isLoggedIn: true, userId: 'u-current' }),
      signOut: () => set({ isLoggedIn: false }),
    }),
    {
      name: 'nestaway-forum:v1:user',
      partialize: (s) => ({ isLoggedIn: s.isLoggedIn, userId: s.userId }),
    },
  ),
);
