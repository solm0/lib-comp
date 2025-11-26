'use client'

import { Tag } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { create } from "zustand"

interface State {
  value: string | null;
  offsetX: number | null;
  width: number | null;
  setValue: (value: string | null, offsetX: number | null, width: number | null) => void;
}

export const useHoveredLiquidStore = create<State>((set) => ({
  value: null,
  offsetX: null,
  width: null,
  setValue: (value: string | null, offsetX: number | null, width: number | null) => set({ value: value, offsetX: offsetX, width: width}),
}));

const tags = ['코딩', '방랑', '독서', '작업', '미분류']

function InspectTag() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const hoveredTag = useHoveredLiquidStore((state) => state.value)
  const offsetX = useHoveredLiquidStore((state) => state.offsetX)
  const width = useHoveredLiquidStore((state) => state.width)
  const setHoveredTag = useHoveredLiquidStore((state) => state.setValue);

  const currentTag = searchParams.get("tag");

  // 클릭한 태그 저장
  const [tag, setTag] = useState<string | null>(null);

  const handleClick = (tag: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (tag === currentTag) {
      setTag(null);
      newParams.delete("tag");
      router.push(`${pathname}?${newParams.toString()}`);
    } else {
      setTag(tag);
      newParams.set("tag", tag);
      router.push(`${pathname}?${newParams.toString()}`);
    }
  }

  // 호버한 태그
  const updateHandlePosition = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const offsetX = Math.floor(rect.left);
    const width = rect.width;
    setHoveredTag(value, offsetX, width)
  };

  // 현재 호버중인 태그 없으면 직전에 클릭했던 태그
  useEffect(() => {
    if (!hoveredTag && tag) {
      const el = document.getElementById(tag);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      setHoveredTag(tag, Math.floor(rect.left), rect.width);
    } else return;
  }, [hoveredTag]);

  // 그것도 없으면 url에 있는 태그
  useEffect(() => {
    if (!hoveredTag && !tag) {
      setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const currentTag = params.get("tag");
        if (!currentTag) return;
  
        const el = document.getElementById(currentTag);
        if (!el) return;
  
        const rect = el.getBoundingClientRect();
        setHoveredTag(currentTag, Math.floor(rect.left), rect.width);
      }, 30);
    }
  }, [hoveredTag, setHoveredTag]);

  return (
    <div
      id='tag-input'
      className='h-auto w-auto px-1 py-1 border border-text-600 rounded-sm flex gap-1 backdrop-blur-md pointer-events-auto'
      onMouseLeave={() => setHoveredTag(null, null, null)}
    >
      {tags.map((tag, idx) => (
        <div
          key={idx}
          id={tag}
          className='text-sm h-8 px-3 flex items-center justify-center rounded-sm font-medium text-text-900'
          onClick={() => handleClick(tag)}
          onMouseOver={(e) => updateHandlePosition(e, tag)}
        >
          <label htmlFor={`${tag}-input`}>{tag}</label>
          <input
            id={`${tag}-input`}
            type='radio'
            value={tag}
            className='opacity-0 hidden'
          />
        </div>
      ))}
      <span
        className={`-translate-x-[calc(100vw*1/3+0.7rem)] absolute h-8 rounded-sm -z-10 pl-1 transition-all duration-300 ease-in-out bg-green-500 ${hoveredTag ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${offsetX!}px`,
          width: `${width}px`,
        }}
      >
      </span>
    </div>
  )
}

export default function TagCmp() {
  return (
    <div className='flex flex-col gap-1 w-full items-start select-none'>
      <label
        className='flex items-center gap-2 text-text-800 text-sm'
      >
        <Tag className='w-3 h-3' />
        태그
      </label>
      <Suspense>
        <InspectTag />
      </Suspense>
    </div>
  )
}