import { useCartStore } from '@/store/useCartStore';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function AllCheckbox() {
  const cartList = useCartStore((state) => state.cartList);
  const allChecked = cartList.every((item) => item.checked);

  return (
    <div className="sticky top-0 h-12 mb-0.5 bg-white px-5 py-2.5 flex items-center">
      <div className="flex items-center space-x-2">
        <Checkbox id="all" className="w-5 h-5 border-muted" checked={allChecked} />
        <Label htmlFor="all">전체선택</Label>
      </div>
    </div>
  );
}
