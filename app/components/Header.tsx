'use client'

import { usePathname, useRouter } from "next/navigation"
import { SaveButton } from "./PdfButton";
import { useState } from "react";
import Link from "./Link";

export default function Header() {
  const path = usePathname().slice(1);
  const num = Number(path);
  const router = useRouter();
  const [tocOpen, setTocOpen] = useState(false);

  function getProjName(path: number){
    let projName;
    if (!path) projName = ''
    else if (path <= 6) projName = 'C.PNIA'
    else if (path <= 11) projName = 'Through-X 아카이브'
    else if (path <= 20) projName = 'solmi.wiki'
    else projName = ''
    return projName;
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-screen h-10 border-b px-4 flex items-center">
        <p>Jeong Solmi 2025</p>
        <div
          className="relative ml-auto flex flex-col w-auto h-auto"
          onMouseEnter={() => setTocOpen(true)}
          onMouseLeave={() => setTocOpen(false)}
        >
          <div className="flex gap-2 hover:opacity-30 animate-pulse">
            <p>{path ? path : 'Intro'}</p>
            <p>{getProjName(num)}</p>
          </div>

          {tocOpen &&
            <div className="absolute top-full right-0 pt-3 w-48 h-auto flex flex-col">
              <div className="p-4 flex flex-col bg-white">
                <Link text="Intro" url="/" blank={false} />
                {Array.from({length: 19}, (_, i) => 
                  <Link key={i} url={`/${i+1}`} text={`${i+1} ${getProjName(i+1)}`} blank={false} />
                )}
                <Link text="Outro" url="/20" blank={false} />
              </div>
            </div>
          }
        </div>

      </header>
      
      <div className="fixed bottom-0 left-0 w-screen flex items-center p-4">
        <SaveButton />
        <div className="border px-1 py-1 rounded-full ml-auto w-auto h-auto flex gap-1 no-print bg-zinc-50 z-80">
          <button
            className="w-8 h-8 hover:bg-zinc-200 rounded-full transition-colors"
            onClick={() => {
              if (!path) router.push('/20')
              else if (num === 1) router.push('/')
              else router.push(`/${Number(path)-1}`)
            }}
          >
            {`<`}
          </button>
          <button
            className="w-8 h-8 hover:bg-zinc-200 rounded-full transition-colors"
            onClick={() => {
              if (num === 20) router.push('/')
              else router.push(`/${Number(path)+1}`)
            }}
            
          >
            {`>`}
          </button>
        </div>
      </div>

    </>
  )
}