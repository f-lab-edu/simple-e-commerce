import { useCartStore } from '@/store/useCartStore';
import { numberWithCommas } from '@/lib/utils';

import { Button } from '@/components/ui/button';

export function OrderInfo() {
  const { cartList } = useCartStore();

  const orderList = cartList.filter((item) => item.checked);
  const isEmpty = orderList.length === 0;
  const totalPrice = orderList.reduce((acc, { discountedPrice, quantity }) => acc + discountedPrice * quantity, 0);

  return (
    <div className="h-32 sticky bottom-0 bg-white border-secondary rounded-t-xl shadow-[0_0_5px_0_rgba(0,0,0,0.16)]">
      <div className="h-full p-5 flex flex-col space-y-4">
        <div className="flex-1 flex items-center">
          <p className="text-sm">{`총 ${orderList.length}건`}</p>
          <p className="ml-auto text-sm">
            주문 예상 금액: <span className="ml-2 text-xl font-semibold">{`${numberWithCommas(totalPrice)}원`}</span>
          </p>
        </div>
        <div className="flex-1">
          <Button
            type="submit"
            className="w-full"
            variant={isEmpty ? 'secondary' : 'default'}
            size="sm"
            disabled={isEmpty}
          >
            주문하기
          </Button>
        </div>
      </div>
    </div>
  );
}
