'use client'

import { Key } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ParamKwButton from "./ParamKwButton";
import { Suspense } from "react";

function InspectKeyword() {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  const urlKeywords = newParams.getAll("keyword");

  const keywords = ['독일', '버스', '알바니아', '티라나', '이탈리아', '도시'];

  const noteKeywords = urlKeywords.filter(kw => !keywords.includes(kw));
  noteKeywords.map(kw => keywords.push(kw))

  return (
    <>
      <div className="text-sm w-72 flex gap-1 flex-wrap py-1">
        <ParamKwButton keywords={keywords} />
      </div>
    </>
  )
}

export default function KeywordCmp() {
  return (
    <div className='flex flex-col gap-1 w-full items-start select-none'>
      <label
        className='flex items-center gap-2 text-text-800 text-sm'
      >
        <Key className='w-3 h-3' />
        키워드
      </label>
      <Suspense>
        <InspectKeyword />
      </Suspense>
    </div>
  )
}