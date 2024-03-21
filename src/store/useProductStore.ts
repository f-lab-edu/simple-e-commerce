import { create } from 'zustand';

import type { Product, Category } from '@/pages/home/types';
import productsData from '@/mocks/data/products.json';
import categorysData from '@/mocks/data/categorys.json';

interface State {
  productsData: Product[];
  filteredProducts: Product[];
  categorysData: Category[];
  currentCategory: Category | null;
}

interface Actions {
  setCategory: (category: Category | null) => void;
  setFilteredProducts: (list: Product[]) => void;
}

export const useProductStore = create<State & Actions>()((set) => ({
  productsData: productsData as Product[],
  filteredProducts: [],
  categorysData: categorysData as Category[],
  currentCategory: null,
  setCategory: (category) => set(() => ({ currentCategory: category })),
  setFilteredProducts: (list) => set(() => ({ filteredProducts: list })),
}));
