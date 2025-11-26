'use client'

import { useState } from "react";

export default function Toc() {
  const headings = ['소제목 1', '소제목 2', '소제목 3'];
  const [hoverHeading, setHoverHeading] = useState<string | null>();
  const [activeHeading, setActiveHeading] = useState('소제목 1');

  return (
    <nav
      className={`text-sm w-40 border border-zinc-200 rounded-lg p-4 overflow-visible flex flex-col items-end h-auto text-text-900`}
    >
      {headings && headings.map((text, idx) => (
        <div
          key={idx}
          className="w-auto flex items-center gap-4 justify-end cursor-pointer"
          style={{ top: `calc(2rem * ${idx})` }}
          onMouseEnter={() => setHoverHeading(text)}
          onMouseLeave={() => setHoverHeading(null)}
          onClick={() => setActiveHeading(text)}
        >
          <p
            className={`
              leading-8 truncate bg-background rounded-sm px-2 transition-all duration-300
              ${!hoverHeading ? 'opacity-100' : text === hoverHeading ? 'opacity-100': 'text-text-700'}
            `}
          >
            {text}
          </p>
          <div className="flex items-center justify-center w-3 h-3">
            <div
              className={`
                rounded-full transition-all duration-300 shrink-0
                ${text === hoverHeading ? 'bg-green-500' : 'bg-button-200'}
                ${text === activeHeading ? 'w-[12px] h-[12px]' : 'w-[5px] h-[5px]'}
              `}
            />
          </div>
        </div>
      ))}
    </nav>
  )
}