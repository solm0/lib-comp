'use client'

import { useState } from "react"
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { maruburi } from "../fonts";

interface Post {
  id: string;
  chron: {
    year?: string;
    month?: string;
    day?: string;
  };
  title: string;
}

export function ChronItem({
  note,
}: {
  note: Post,
}) {
  return (
    <>
      <div className="w-16 shrink-0 text-text-800">{note.chron.year && `${note.chron.year}년`}</div>
      <div className="w-16 shrink-0 text-text-800">{note.chron.month && `${note.chron.month}월`}</div>
      <div className="w-16 shrink-0 text-text-800">{note.chron.day && `${note.chron.day}일`}</div>
      <p className="col-span-11 w-full text-text-900 truncate">{note.title}</p>
    </>
  )
}

export function PostList({ 
  note,
  hovered, setHovered,
}: {
  note: Post,
  hovered: string | null;
  setHovered: (id: string | null) => void,
}) {
  const onMouseEnter = (id: string) => {
    setHovered(id);
  }

  const onMouseLeave = () => {
    setHovered(null);
  }

  const pathname = usePathname();

  const rootPath = pathname.split('/').slice(1, 2).toString();

  return (
    <div
      key={note.id}
      className={`text-nowrap h-12 w-full transition-colors duration-300 hover:cursor-pointer flex items-center font-normal rounded-sm ${hovered === note.id && "bg-button-100"}`}
      onMouseEnter={() => onMouseEnter(note.id)}
      onMouseLeave={onMouseLeave}
    >
      {rootPath === note.id &&
        <ChevronRight className={`absolute left-0 text-text-900 w-4 h-4 ${hovered === note.id && "text-text-600"}`} />
      }
      <ChronItem note={note} />
    </div>
  )
}

export default function ChronPostList() {
  const [hovered, setHovered] = useState<string | null>(null);
  const posts: Post[] = [
    {
      id: "label6",
      chron: { year: "2026", month: "06", day: "05" },
      title: "마우스 기반 인터랙션",
    },
    {
      id: "label5",
      chron: { day: "17" },
      title: "게임형 웹페이지 컴포넌트",
    },
    {
      id: "label4",
      chron: { day: "01" },
      title: "전시용 3D 인터랙션",
    },
    {
      id: "label3",
      chron: { year: "2026", month: "04", day: "19" },
      title: "Next.js 이미지 최적화",
    },
    {
      id: "label2",
      chron: { day: "02" },
      title: "포트폴리오 구조 정리",
    },
    {
      id: "label1",
      chron: {},
      title: "그래프 시각화 테스트",
    },
  ];

  return (
    <section className={`${maruburi.className} font-serif font-semibold relative w-full pb-8 overflow-y-scroll overflow-x-hidden focus:outline-hidden`}>
      {posts && posts.map((note) => (
        <PostList
          key={note.id}
          note={note}
          hovered={hovered} setHovered={setHovered}
        />
      ))}
    </section>
  )
}