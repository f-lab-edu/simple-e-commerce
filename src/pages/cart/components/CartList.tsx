import { useCartStore } from '@/store/useCartStore';

import { CartItem } from '@/pages/cart/components/CartItem';

export function CartList() {
  const { cartList } = useCartStore();

  return (
    <ul className="flex-1 space-y-4 pt-0.5 pb-2.5 bg-gray-100">
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
