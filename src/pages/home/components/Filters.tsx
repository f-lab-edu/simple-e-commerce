import type { Category } from '@/pages/home/types';
import { useProductStore } from '@/store/useProductStore';

import { Button } from '@/components/ui/button';

export function Filters() {
  const categorysData = useProductStore((state) => state.categorysData);
  const currentCategory = useProductStore((state) => state.currentCategory);
  const setCategory = useProductStore((state) => state.setCategory);

  const handleCategoryClick = (category: Category | null) => setCategory(category);

  return (
    <div className="grid grid-cols-8 gap-4">
      <Button variant={!currentCategory ? 'default' : 'outline'} onClick={() => handleCategoryClick(null)}>
        모든 상품
      </Button>
      {categorysData.map((category) => {
        const selected = currentCategory?.value === category.value;
        return (
          <Button
            key={category.value}
            variant={selected ? 'default' : 'outline'}
            onClick={() => handleCategoryClick(category)}
          >
            {category.label}
          </Button>
        );
      })}
    </div>
  );
}
