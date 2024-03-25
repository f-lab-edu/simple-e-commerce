import { useProductStore } from '@/store/useProductStore';

import { ProductItem } from '@/pages/home/components/ProductItem';

export function ProductList() {
  const products = useProductStore((state) => state.products);

  return (
    <ul className="grid grid-cols-3 gap-4">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
