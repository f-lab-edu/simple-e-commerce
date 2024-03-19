import { Category } from '../types';

import { Button } from '@/components/ui/button';

const CATEGORYS: Category[] = [
  { value: 'outer', label: '아우터' },
  { value: 'top', label: '상의' },
  { value: 'pants', label: '팬츠' },
  { value: 'onepiece', label: '원피스' },
  { value: 'skirt', label: '스커트' },
  { value: 'underwear', label: '언더웨어' },
];

export function Filters() {
  return (
    <div className="grid grid-cols-8 gap-4">
      <Button>모든 상품</Button>
      {CATEGORYS.map((category) => (
        <Button key={category.value} variant="outline">
          {category.label}
        </Button>
      ))}
    </div>
  );
}
