import { ShoppingBagIcon } from 'lucide-react';

import { Product } from '../types';
import { numberWithCommas } from '@/lib/utils';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props {
  item: Product;
}

export default function ProductItem({ item }: Props) {
  return (
    <Card className="border-0">
      <CardContent className="w-auto flex flex-col p-2.5 space-y-2">
        <div className="h-[210px] flex justify-center items-center">
          <img
            className="max-w-full min-h-full rounded-md object-cover transition-all hover:scale-105"
            src={item.thumbnail}
            alt={`${item.productName}`}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-1.5">
            <div className="px-2 py-1 rounded-md bg-destructive text-xs text-white">{`${item.discount}%`}</div>
            <p>{`${numberWithCommas(item.discountedPrice)}원`}</p>
            <p className="text-sm text-outline line-through">{`${numberWithCommas(item.price)}원`}</p>
          </div>
          <p className="truncate text-sm font-semibold">{item.productName}</p>
          <p className="text-xs">{item.brandName}</p>
          <div className="flex justify-end items-center">
            <Button className="border-0 hover:text-primary hover:bg-background" variant="outline">
              <ShoppingBagIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}