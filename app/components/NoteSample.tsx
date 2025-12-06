import { Calendar, Key, Tag } from "lucide-react";
import { maruburi, pretendard } from "../fonts";
import ContinuousPostNav from "./ContinuousPostNav";
import { Suspense } from "react";
import ParamKwButton from "./ParamKwButton";

const keywords = ['독일', '버스', '알바니아', '티라나', '이탈리아', '도시'];
const data = ['날짜', '태그(관심사)', '문자열', '키워드', '내부 링크', '(연속된 노트의 일부인 경우)순서'];

const Number = ({num}:{num:number}) => {
  return (
    <div className="w-5 h-5 flex gap-2 items-center justify-center rounded-full text-sm bg-zinc-800 text-white">{num}</div>
  )
}

export default function NoteSample() {
  return (
    <div className="fixed top-50 bg-[#F8F7FB] p-8 h-auto w-[calc(100%*2/3-2rem)] rounded-lg border border-zinc-200">
      <div className="absolute w-full h-full ml-100">
        <div className="absolute w-auto top-0 flex gap-2 items-center">
          <Number num={3} />
          {data[2]}
        </div>
        <div className="absolute top-112 w-auto flex gap-2 items-center">
          <Number num={5} />
          {data[4]}
        </div>
        <div className="absolute top-128 w-auto flex gap-2 items-center">
          <Number num={3} />
          {data[2]}
        </div>
        <div className="absolute top-75 w-auto flex gap-2 items-center">
          <Number num={1} />
          {data[0]}
        </div>
        <div className="absolute top-83 w-auto flex gap-2 items-center">
          <Number num={2} />
          {data[1]}
        </div>
        <div className="absolute top-92 w-auto flex gap-2 items-center">
          <Number num={4} />
          {data[3]}
        </div>
        <div className="absolute top-25 w-auto flex gap-2 items-center">
          <Number num={6} />
          {data[5]}
        </div>
      </div>
      
      <div className={`${maruburi.className} flex flex-col gap-12 w-full`}>
        <h1
          className={`leading-12 text-3xl text-[#394A54]`}
        >
          Day 2. 0425. 티라나와 두러스
        </h1>

        <div className="flex flex-col gap-2">

          <ContinuousPostNav />
          
          {/* Metadata */}
          <section className={`${pretendard.className} relative flex flex-col w-full h-auto items-start text-[#52636E] text-sm px-4 py-3 rounded-sm -left-4`}>
            <div className="flex gap-3 h-8 items-center">
              <Calendar className='w-3 h-3' />
              <div className="flex gap-1 h-full items-center">
                <p>2025년 05월 01일</p>
              </div>
            </div>
            <div className="flex gap-3 h-8 items-center">
              <Tag className='w-3 h-3' />
              방랑
            </div>
            <div className="flex gap-3 items-start">
              <Key className='w-3 h-8 shrink-0' />
              <div className="flex gap-1 flex-wrap h-auto">
                <Suspense>
                  <ParamKwButton keywords={keywords} />
                </Suspense>
              </div>
            </div>
          </section>
        </div>
        
        <div className="flex flex-col">
          {/* Content */}
          <div className="py-4 max-w-[47rem] flex flex-col gap-12 w-full text-[#52636E] leading-8 break-keep overflow-y-scroll focus:outline-hidden">
            <span>아침에 일어나서 여유롭게 씻고 나갈 준비를 마친다. <span className="underline underline-offset-6 decoration-[#52636E] decoration-[1px] hover:text-[#B5B5B5] hover:decoration-[#B5B5B5] transition-colors duration-300" >호스텔 테라스의 흔들의자에 앉아도 보고</span>, 창밖의 빨래 널린 골목 뷰를 감상한다. 여행 떠나기 전만 해도 일기예보에 비가 온다고 쓰여 있었는데 어째선지 비는 오지 않는다. 오늘은 티라나에서 버스로 1시간 정도 거리에 있는 해변가 도시 두러스 Durrës에 가는 날이다. 가기 전에 티라나 유명지들을 몇 곳 둘러보기로 한다.</span>
            <img src='https://res.cloudinary.com/dpqjfptr6/image/upload/f_auto,q_auto,c_fill/0425_1_ub8dcg.jpg' className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}