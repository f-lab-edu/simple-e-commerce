import { AllCheckbox } from './components/AllCheckbox';
import { CartList } from '@/pages/cart/components/CartList';
import { OrderInfo } from './components/OrderInfo';
import { EmptyCart } from './components/EmptyCart';

export default function CartPage() {
  const data = [];

  return (
    <>
      {data.length > 0 ? (
        <>
          <AllCheckbox />
          <CartList />
          <OrderInfo />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
