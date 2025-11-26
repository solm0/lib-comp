'use client'

import { Search } from "lucide-react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter } from 'next/navigation';

function InspectSearch() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState('');

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(window.location.search);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 100);

  const handleClear = () => {
    setValue("");
    handleSearch("");
  };

  return (
    <div
      id="search-input"
      className="h-auto w-full flex flex-col gap-1 pointer-events-auto"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const term = e.target.value;
          setValue(term);
          handleSearch(term);
        }}
        className="text-sm h-8 bg-transparent focus:outline-none placeholder-text-700 text-text-900 font-medium pr-8"
        placeholder="문자열을 입력하세요."
        spellCheck="false"
      />
      <div
        className={`w-auto transition-all duration-300 self-start overflow-clip" ${value ? 'h-8' : 'h-0'}`}
      >
        <button
          onClick={handleClear}
          className={`text-sm w-auto h-full bg-button-100 text-text-900 px-3 flex items-center rounded-sm hover:bg-button-200 transition-[opacity] duration-300 delay-200 ${value ? 'opacity-100' : 'opacity-0'}`}
        >
          지우기
        </button>
      </div>
    </div>
  )
}

export default function SearchCmp() {
  return (
    <div className='flex flex-col gap-1 w-full items-start select-none'>
      <label
        className='flex items-center gap-2 text-text-800 text-sm'
      >
        <Search className='w-3 h-3' />
        문자열
      </label>
      <InspectSearch />
    </div>
  )
}