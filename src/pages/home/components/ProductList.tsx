import { useEffect } from 'react';

import { Product, Category } from '@/pages/home/types';
import { useProductStore } from '@/store/useProductStore';

import ProductItem from './ProductItem';

export function ProductList() {
  const { productsData, currentCategory, filteredProducts, searchKeyword, setFilteredProducts } = useProductStore();
  const products = currentCategory || searchKeyword ? filteredProducts : productsData;

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

  useEffect(() => {
    if (!currentCategory && !searchKeyword) return;
    const filteredList = getFilteredList(productsData, { category: currentCategory, keyword: searchKeyword });
    setFilteredProducts(filteredList);
  }, [productsData, currentCategory, searchKeyword, setFilteredProducts]);

  return (
    <>
      {products.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="pt-60">
          <p className="text-center">상품이 존재하지 않습니다</p>
        </div>
      )}
    </>
  );
}
