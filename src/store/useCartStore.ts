import { create } from 'zustand';

import type { Product } from '@/pages/home/types';

interface State {
  cartList: Product[];
}

interface Actions {
  addToCart: (item: Product) => void;
}

export const useCartStore = create<State & Actions>()((set) => ({
  cartList: [],
  addToCart: (item: Product) => set((state) => ({ cartList: [...state.cartList, item] })),
}));
