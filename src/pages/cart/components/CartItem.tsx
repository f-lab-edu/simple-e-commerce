import { X as XIcon } from 'lucide-react';

import type { CartProduct } from '@/pages/cart/types';
import { numberWithCommas } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

interface CartItemProps {
  readonly item: CartProduct;
  readonly toggleCheck: (id: number) => void;
  readonly updateQuantity: (id: number, value: number) => void;
}

export function CartItem({ item, toggleCheck, updateQuantity }: CartItemProps) {
  return (
    <li className="flex flex-col px-5 py-2.5 space-y-4 bg-background rounded-md">
      <div className="flex">
        <Checkbox
          className="w-5 h-5 border-muted"
          checked={item.checked}
          onCheckedChange={() => toggleCheck(item.id)}
        />
        <Button className="ml-auto w-5 h-5 p-0 border-0 hover:bg-transparent" variant="outline">
          <XIcon className="text-muted" />
        </Button>
      </div>
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-8">
        <div className="flex-1 flex items-center space-x-5">
          <div className="flex-1 sm:flex-none sm:w-32 sm:h-32">
            <img className="w-full h-full rounded-lg" src={item.thumbnail} />
          </div>
          <div className="flex-1 sm:flex-none space-y-1">
            <h3 className="text-wrap text-sm font-medium">{item.productName}</h3>
            <p className="text-sm">{item.brandName}</p>
            <div className="flex items-center space-x-2">
              {!!item.discount && <p className="text-sm line-through">{numberWithCommas(item.price)}</p>}
              <p className="font-semibold">{numberWithCommas(item.discountedPrice)}원</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex-1 sm:flex-none sm:w-24">
            <Input
              className="text-center"
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
          </div>
          <div className="flex-1 sm:flex-none sm:w-40">
            <p className="text-center text-lg font-medium">{`${numberWithCommas(item.discountedPrice * item.quantity)}원`}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
