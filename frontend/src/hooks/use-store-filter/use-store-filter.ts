'use client';

import { create } from 'zustand';
import type { OptionType } from '@/components/dropdown/dropdown';

type StoreFilterState = {
  selectedStore: OptionType | null;
  setSelectedStore: (store: OptionType | null) => void;
};

export const useStoreFilter = create<StoreFilterState>((set) => ({
  selectedStore: null,
  setSelectedStore: (store) => set({ selectedStore: store }),
}));
