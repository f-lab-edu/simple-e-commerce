import { useCartStore } from '@/store/useCartStore';

import { AllCheckbox } from './components/AllCheckbox';
import { CartList } from '@/pages/cart/components/CartList';
import { OrderInfo } from './components/OrderInfo';
import { EmptyCart } from './components/EmptyCart';

export default function CartPage() {
  const { cartList } = useCartStore();

  return (
    <>
      {cartList.length > 0 ? (
        <div className={`min-h-[calc(100vh-64px)] flex flex-col`}>
          <AllCheckbox />
          <CartList />
          <OrderInfo />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
