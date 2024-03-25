import { create } from 'zustand';

import type { Product } from '@/pages/home/types';
import productsData from '@/mocks/data/products.json';

interface State {
  products: Product[];
}

export const useProductStore = create<State>()(() => ({
  products: productsData as Product[],
}));
