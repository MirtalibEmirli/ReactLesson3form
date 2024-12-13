import React from 'react';
import { persist } from 'zustand/middleware';
import { create } from 'zustand';

export const themeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggle: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme-storage',                                                                              
    }
  )
);
