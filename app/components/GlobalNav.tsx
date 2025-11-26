'use client'

import { Settings } from "lucide-react";
import { Moon, SunMedium } from 'lucide-react';
import { Funnel } from "lucide-react";
import { useState } from "react";

export function LinkButton({name, link, setLink}:{name:string;link:string; setLink:(link:string) => void;}) {
  return (
    <button
      onClick={() => setLink(name)}
      className={`
        w-auto h-4 text-text-900 flex items-center rounded-sm hover:text-text-700 transition-colors duration-300
        ${name === link ? "underline underline-offset-4 decoration-text-900 decoration-[1px]" : "font-normal"}
      `}
    >
      {name}
    </button>
  )
}

export function ThemeButton() {
  const [theme, setTheme] = useState(false)

  return (
    <button
      onClick={() => setTheme(!theme)}
      className='h-4 w-auto gap-2 text-text-900 flex items-center justify-center rounded-sm pointer-events-auto'
    >
      <p>테마:</p>
      <div className='w-auto h-auto hover:text-text-700 transition-colors duration-300 '>
        {theme ?
          <Moon className='h-4 w-4' /> : <SunMedium className='h-4 w-4' />
        }
      </div>
    </button>
  )
}

export function EnableButton({
  value,
}: {
  value: string | React.ReactNode;
}) {
  const [isEnabled, setIsEnabled] = useState(false);

  if (typeof value === 'string') {
    return (
      <div className='flex text-text-900 items-center gap-2'>
        <p>{`${value}:`}</p>
        <button
          className={`w-auto h-4 text-text-900 flex items-center rounded-sm hover:text-text-700 transition-colors duration-300 pointer-events-auto ${isEnabled === true ? "text-green-500!" : "text-text-900"}`}
          onClick={() => setIsEnabled(!isEnabled)}
        >
          {`${isEnabled === true ? `보임` : `숨김`}`}
        </button>
      </div>
    )
  } else {
    return (
      <div
        className={`${isEnabled ? `text-green-500`: `text-text-900`} w-8 h-4 flex items-center justify-center rounded-sm transition-colors duration-300 pointer-events-auto hover:text-text-700`}
        onClick={() => setIsEnabled(!isEnabled)}
      >
        {value}
      </div>
    )
  }
}

export function ExpandButton({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string | React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const newOpen = !isOpen;
    setIsOpen(newOpen);
  }

  return (
    <div className="flex flex-col gap-1 w-6">
      <button
        onClick={handleClick}
        className={`${isOpen ? `text-green-500`: `text-text-900`} w-6 h-4 px-3 flex items-center justify-center rounded-sm transition-colors duration-300 pointer-events-auto hover:text-text-700`}
      >
        {name}
      </button>
      <div className={`h-auto w-40 flex flex-col p-1 pt-4 items-start gap-1 overflow-clip transition-all hover:bg-background rounded-sm ${isOpen ? "max-h-96" : "opacity-0 max-h-0"}`}>
        {children}
      </div>
    </div>
  )
}

export default function GlobalNav() {
  const [link, setLink] = useState('solmi.wiki');

  return (
    <header className="flex items-start py-3 px-5 rounded-full w-auto h-10 z-70 transition-all duration-300 border border-zinc-200">
      <div className={`w-auto h-auto flex gap-4 text-sm items-start text-nowrap`}>
        <FilterIcon />
        <LinkButton name="solmi.wiki" link={link} setLink={setLink} />
        <LinkButton link={link} setLink={setLink} name="블로그" />
        <LinkButton link={link} setLink={setLink} name="작업" />
        <SettingsIcon />
      </div>
    </header>
  );
}

export function FilterIcon(){
  return (
    <EnableButton value={<Funnel className="w-4 h-4" />} />
  )
}

export function SettingsIcon() {
  return (
    <ExpandButton name={<Settings className="w-4 h-4 shrink-0"/>}>
      <ThemeButton />
      <EnableButton value='하이퍼링크 지도' />
    </ExpandButton>
  )
}