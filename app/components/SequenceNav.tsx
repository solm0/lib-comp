'use client'

import { useState } from "react";

export const links = [
  '0424-0430 알바니아, 북마케도니아 여행 (발칸 1부)',
  'Day 1. 0424. 티라나 도착',
  'Day 2. 0425. 티라나와 두러스',
  'Day 3. 0426. 스코페 도착',
  'Day 4. 0427. 스코페에서 홀로 되다',
  'Day 5. 0428. 다시 티라나로'
]

export default function SequenceNav() {
  const [index, setIndex] = useState(1);
  const prev = links[index-1];
  const next = links[index+1];
  
  return (
    <div className="flex w-full h-auto gap-2 text-sm leading-6 select-none">
      {prev ?
        <div
          onClick={() => {
            if (index > 0) setIndex(index - 1);
            else return;
          }}
          className="p-4 break-words flex-1 flex flex-col gap-2 min-h-20 bg-button-50 rounded-sm hover:bg-button-100 transition-colors duration-300"
        >
          <p className="self-end">이전</p>
          <p>{prev}</p>
        </div>
        :
        <div className="flex-1 min-h-20 bg-background rounded-sm"></div>
      }
      {next ?
        <div
          onClick={() => {
            if (index < links.length) setIndex(index + 1);
            else return;
          }}
          className="p-4 break-words flex-1 flex flex-col gap-2 min-h-20 bg-button-50 rounded-sm hover:bg-button-100 transition-colors duration-300"
        >
          <p>이후</p>
          <p>{next}</p>
        </div>
        :
        <div className="flex-1 min-h-20 bg-background rounded-sm"></div>
      }
    </div>
  )
}