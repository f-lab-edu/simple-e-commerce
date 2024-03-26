import { Search as SearchIcon, X as XIcon } from 'lucide-react';

import { useProductStore } from '@/store/useProductStore';

import { Input } from '@/components/ui/input';

export function Searchbox() {
  const searchKeyword = useProductStore((state) => state.searchKeyword);
  const setKeyword = useProductStore((state) => state.setKeyword);

  return (
    <div className="relative">
      <SearchIcon className="absolute top-2 left-2" />
      <Input
        className="pl-10 bg-[#f2f2f2]"
        placeholder="원하는 상품을 검색하세요"
        autoComplete="off"
        autoCorrect="off"
        value={searchKeyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {searchKeyword && (
        <button className="absolute top-2 right-2" onClick={() => setKeyword('')}>
          <XIcon />
        </button>
      )}
    </div>
  );
}
