import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function EmptyCart() {
  return (
    <div className="pt-60 flex flex-col items-center space-y-2 bg-white">
      <ShoppingCart className="text-secondary" size={40} />
      <h3 className="font-semibold">장바구니가 비어있어요</h3>
      <p className="text-sm">새로운 상품을 담아주세요</p>
      <Button size="lg">상품보러 가기</Button>
    </div>
  );
}
