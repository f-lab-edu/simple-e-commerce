import { useEffect } from 'react';

import type { Product, Category } from '@/pages/home/types';

export function useFilterList(
  productsData: Product[],
  currentCategory: Category | null,
  searchKeyword: string,
  setFilteredProducts: (list: Product[]) => void,
) {
  useEffect(() => {
    if (!currentCategory && !searchKeyword) return;

    const getFilteredList = (products: Product[], filters: { category: Category | null; keyword: string }) => {
      let filteredList = products;

      if (filters.category) {
        filteredList = filteredList.filter((product) => product.type === filters.category?.value);
      }

      if (filters.keyword) {
        filteredList = filteredList.filter((product) => product.productName.includes(filters.keyword));
      }

      return filteredList;
    };

    const filteredList = getFilteredList(productsData, { category: currentCategory, keyword: searchKeyword });
    setFilteredProducts(filteredList);
  }, [productsData, currentCategory, searchKeyword, setFilteredProducts]);
}
