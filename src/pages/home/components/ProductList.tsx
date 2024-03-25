import { useProductStore } from '@/store/useProductStore';
import { useFilterList } from '@/pages/home/hooks/useFilterList';

import { ProductItem } from './ProductItem';

export function ProductList() {
  const { productsData, currentCategory, filteredProducts, searchKeyword, setFilteredProducts } = useProductStore();
  const products = currentCategory || searchKeyword ? filteredProducts : productsData;

  useFilterList(productsData, currentCategory, searchKeyword, setFilteredProducts);

  return (
    <>
      {products.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
