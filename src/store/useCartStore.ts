import { create } from 'zustand';

import type { CartProduct } from '@/pages/cart/types';
import type { Product } from '@/pages/home/types';

interface State {
  cartList: CartProduct[];
}

interface Actions {
  addToCart: (item: Product) => void;
  addQuantity: (id: number) => void;
  updateQuantity: (id: number, value: number) => void;
  toggleCheck: (id: number) => void;
  toggleAllCheck: (checked: boolean) => void;
}

export const useCartStore = create<State & Actions>()((set) => ({
  cartList: [],
  addToCart: (item) => set((state) => ({ cartList: [...state.cartList, { ...item, quantity: 1, checked: true }] })),
  addQuantity: (id) =>
    set((state) => ({
      cartList: state.cartList.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    })),
  updateQuantity: (id, value) =>
    set((state) => ({
      cartList: state.cartList.map((item) => (item.id === id ? { ...item, quantity: value } : item)),
    })),
  toggleCheck: (id) =>
    set((state) => ({
      cartList: state.cartList.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    })),
  toggleAllCheck: (checked) => set((state) => ({ cartList: state.cartList.map((item) => ({ ...item, checked })) })),
}));
