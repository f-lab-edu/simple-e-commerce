import { useStore } from '@/pages/home/hooks/useStore';

import { ProductItem } from '@/pages/home/components/ProductItem';

export function ProductList() {
  const { products } = useStore();

  return (
    <ul className="grid grid-cols-3 gap-4">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
