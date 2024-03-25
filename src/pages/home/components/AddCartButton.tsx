import { useNavigate } from 'react-router-dom';
import { ShoppingBagIcon } from 'lucide-react';

import type { Product } from '@/pages/home/types';
import { ROUTE_PATH } from '@/constants';
import { toast } from '@/hooks/useToast';
import { useCartStore } from '@/store/useCartStore';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';

interface AddCartButtonProps {
  readonly item: Product;
}

export function AddCartButton({ item }: AddCartButtonProps) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleButtonClick = () => {
    addToCart(item);
    toast({
      title: '장바구니에 상품이 담겼습니다',
      action: (
        <ToastAction
          className="bg-primary text-white"
          altText="장바구니로 이동"
          onClick={() => navigate(ROUTE_PATH.cart)}
        >
          장바구니 보기
        </ToastAction>
      ),
    });
  };

  return (
    <Button
      className="border-0 hover:text-primary hover:bg-white"
      variant="outline"
      size="sm"
      onClick={handleButtonClick}
    >
      <ShoppingBagIcon />
    </Button>
  );
}
