import { create } from 'zustand';

import type { Product } from '@/pages/home/types';
import productsData from '@/mocks/data/products.json';

interface StoreState {
  products: Product[];
}

export const useStore = create<StoreState>()(() => ({
  products: productsData as Product[],
}));
