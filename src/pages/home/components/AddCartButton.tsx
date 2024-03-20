import { ShoppingBagIcon } from 'lucide-react';

import type { Product } from '@/pages/home/types';
import { useCartStore } from '@/store/useCartStore';

import { Button } from '@/components/ui/button';

interface AddCartButtonProps {
  item: Product;
}

export function AddCartButton({ item }: AddCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleButtonClick = () => {
    addToCart(item);
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
