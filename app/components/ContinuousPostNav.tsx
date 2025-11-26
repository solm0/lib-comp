'use client'

import { FlagTriangleRight } from "lucide-react"
import { useState } from "react";

export const links = [
  '0424-0430 알바니아, 북마케도니아 여행 (발칸 1부)',
  'Day 1. 0424. 티라나 도착',
  'Day 2. 0425. 티라나와 두러스',
  'Day 3. 0426. 스코페 도착',
  'Day 4. 0427. 스코페에서 홀로 되다',
  'Day 5. 0428. 다시 티라나로'
]

export default function ContinuousPostNav() {
  const [index, setIndex] = useState(1);

  return (
    <section className={`text-sm relative flex flex-col gap-3 w-full h-auto items-start text-[#52636E]`}>
      <div className="flex gap-4 items-center">
        <FlagTriangleRight className="w-4 h-4" />
        <div
          onClick={() => setIndex && setIndex(0)}
          className={`pointer-events-auto transition-colors duration-300 ${index === 0 ? `text-green-600 pointer-events-none` : 'pointer-events-auto text-[#52636E] hover:text-[#B5B5B5] transition-colors duration-300'}`}
        >
          0424-0430 알바니아, 북마케도니아 여행 (발칸 1부)
        </div>
      </div>

      <div className="border-l border-text-600 flex flex-col ml-1 px-7">
        {links.slice(1).map((l, i) => (
            <div
              key={i}
              onClick={() => setIndex && setIndex(i+1)}
              className={`leading-7 flex items-center ${i+1 === index ? `text-green-600 pointer-events-none` : 'pointer-events-auto text-[#52636E] hover:text-[#B5B5B5] transition-colors duration-300'}`}
            >
              {l}
            </div>
        ))}
      </div>
    </section>
  )
}