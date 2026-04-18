'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

type State = {
  theme: Theme;
  sidebarOpen: boolean;
  setTheme: (t: Theme) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (b: boolean) => void;
};

export const useUiStore = create<State>()(
  persist(
    (set) => ({
      theme: 'system',
      sidebarOpen: false,
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
    }),
    { name: 'nestaway-forum:v1:ui' },
  ),
);

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const dark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  root.classList.toggle('dark', dark);
}
