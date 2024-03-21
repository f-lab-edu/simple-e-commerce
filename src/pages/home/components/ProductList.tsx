import { useEffect } from 'react';

import { Product, Category } from '@/pages/home/types';
import { useProductStore } from '@/store/useProductStore';

import ProductItem from './ProductItem';

export function ProductList() {
  const { productsData, currentCategory, filteredProducts, setFilteredProducts } = useProductStore();
  const products = currentCategory ? filteredProducts : productsData;

  const getFilteredList = (products: Product[], category: Category) => {
    const filteredList = products.filter((product) => product.type === category.value);
    return filteredList;
  };

  useEffect(() => {
    if (currentCategory) {
      const filteredList = getFilteredList(productsData, currentCategory);
      setFilteredProducts(filteredList);
    }
  }, [productsData, currentCategory, setFilteredProducts]);

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
