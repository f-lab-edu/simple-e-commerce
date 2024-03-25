import { useState } from 'react';
import { Search as SearchIcon, X as XIcon } from 'lucide-react';

import { useProductStore } from '@/store/useProductStore';

import { Input } from '@/components/ui/input';

export function Searchbox() {
  const [inputValue, setInputValue] = useState('');
  const setKeyword = useProductStore((state) => state.setKeyword);

  const handleInputChange = (value: string) => setInputValue(value);

  return (
    <div className="relative">
      <button className="absolute top-2 left-2" onClick={() => setKeyword(inputValue)}>
        <SearchIcon />
      </button>
      <Input
        className="pl-10 bg-[#f2f2f2]"
        placeholder="원하는 상품을 검색하세요"
        autoComplete="off"
        autoCorrect="off"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setKeyword(inputValue);
          }
        }}
      />
      {inputValue && (
        <button className="absolute top-2 right-2" onClick={() => handleInputChange('')}>
          <XIcon />
        </button>
      )}
    </div>
  );
}
