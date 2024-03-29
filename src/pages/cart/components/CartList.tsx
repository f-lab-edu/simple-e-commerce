import { CartItem } from '@/pages/cart/components/CartItem';

export function CartList() {
  return (
    <ul className="space-y-4 pt-0.5 pb-2.5 bg-gray-100">
      {[...Array(8)].map((_, index) => (
        <CartItem key={index} />
      ))}
    </ul>
  );
}
