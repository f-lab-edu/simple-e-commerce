import { Product } from '../types';

import ProductItem from './ProductItem';

const PRODUCTS: Product[] = [
  {
    id: 0,
    type: 'outer',
    thumbnail: 'images/product1.png',
    productName: '항공점퍼',
    brandName: 'jump',
    price: 50000,
    discount: 10,
    discountedPrice: 45000,
  },
  {
    id: 1,
    type: 'top',
    thumbnail: 'images/product2.png',
    productName: '브이 프린팅 검정 반팔티',
    brandName: '브이',
    price: 30000,
    discount: 10,
    discountedPrice: 27000,
  },
];

export function ProductList() {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {PRODUCTS.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
