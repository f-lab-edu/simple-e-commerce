import { Search as SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';

export function Searchbox() {
  return (
    <div className="relative">
      <button className="absolute top-2 left-2">
        <SearchIcon />
      </button>
      <Input className="pl-10 bg-[#f2f2f2]" placeholder="원하는 상품을 검색하세요" />
    </div>
  );
}
