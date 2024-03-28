import { ChevronDown } from 'lucide-react';

import type { Category } from '@/pages/home/types';
import { useProductStore } from '@/store/useProductStore';

import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

export function Filters() {
  const categorysData = useProductStore((state) => state.categorysData);
  const currentCategory = useProductStore((state) => state.currentCategory);
  const setCategory = useProductStore((state) => state.setCategory);

  const handleCategoryClick = (category: Category | null) => setCategory(category);

  return (
    <>
      <Popover>
        <div className="flex justify-end items-center space-x-2 sm:hidden">
          <Button className="min-w-min">{currentCategory ? currentCategory.label : '모든상품'}</Button>
          <PopoverTrigger asChild>
            <Button asChild variant="outline" className="bg-white text-foreground hover:bg-white ">
              <ChevronDown />
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="w-screen">
          <div className="grid grid-cols-3 gap-2">
            <Button
              className={`"min-w-min" ${currentCategory ? '' : 'hidden'}`}
              variant="outline"
              onClick={() => handleCategoryClick(null)}
            >
              모든 상품
            </Button>
            {categorysData.map((category) => {
              const selected = currentCategory?.value === category.value;
              return (
                <Button
                  key={category.value}
                  className={`min-w-min ${selected ? 'hidden' : ''}`}
                  variant="outline"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.label}
                </Button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
      <div className="hidden sm:grid sm:grid-cols-7 sm:gap-4">
        <Button
          className="min-w-min"
          variant={currentCategory ? 'outline' : 'default'}
          onClick={() => handleCategoryClick(null)}
        >
          모든 상품
        </Button>
        {categorysData.map((category) => {
          const selected = currentCategory?.value === category.value;
          return (
            <Button
              key={category.value}
              className="min-w-min"
              variant={selected ? 'default' : 'outline'}
              onClick={() => handleCategoryClick(category)}
            >
              {category.label}
            </Button>
          );
        })}
      </div>
    </>
  );
}
