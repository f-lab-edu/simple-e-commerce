import { X as XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export function CartItem() {
  return (
    <li className="flex flex-col px-5 py-2.5 space-y-4 bg-background rounded-md">
      <div className="flex">
        <Checkbox className="w-5 h-5 border-muted" />
        <Button className="ml-auto w-5 h-5 p-0 border-0 hover:bg-transparent" variant="outline">
          <XIcon className="text-muted" />
        </Button>
      </div>
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-8">
        <div className="flex-1 flex items-center space-x-5">
          <div className="flex-1 sm:flex-none sm:w-32 sm:h-32">
            <img className="w-full h-full rounded-lg" src="images/product1.png" />
          </div>
          <div className="flex-1 sm:flex-none space-y-1">
            <h3 className="text-sm font-medium">나이키 바람막이</h3>
            <p className="text-sm">나이키</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm line-through">50,000</p>
              <p className="font-semibold">45,000</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex-1 sm:flex-none sm:w-24">
            <Input className="text-center" type="number" value={1} />
          </div>
          <div className="flex-1 sm:flex-none sm:w-40">
            <p className="text-center text-lg font-medium">50,000원</p>
          </div>
        </div>
      </div>
    </li>
  );
}
