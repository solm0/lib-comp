import { maruburi, pretendard } from "../fonts";

function TypographySamples({serif}:{serif:boolean}) {
  return (
    <div className={`
      flex-1 flex flex-col gap-3 text-text-900 items-start
      ${serif ? maruburi.className : pretendard.className}
    `}>
      <p className={`${pretendard.className} mt-4`}>
        {serif ? 'Serif: 마루 부리' : 'Sans Serif: 프리텐다드'}
      </p>
      <div className="text-3xl text-text-950 font-bold">
        제목 레벨 1
      </div>

      {/* H2 sample */}
      <div className={`text-xl text-text-950 font-bold`}>
        제목 레벨 2
      </div>

      {/* H3 sample */}
      <div className={`text-lg text-text-950 font-bold`}>
        제목 레벨 3
      </div>

      {/* H4 sample */}
      <div className="text-base text-text-900">
        제목 레벨 4
      </div>

      <div className="flex gap-2 items-center">
        <div>일반 텍스트</div>
        <div className='font-black'>볼드</div>
        <div className="italic">오블리크</div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="underline underline-offset-6 decoration-text-900 decoration-[1px]">밑줄 텍스트</div>
        <div className="line-through decoration-text-900 decoration-[1px]">취소선 텍스트</div>
        <div className="text-sm font-mono bg-button-100 rounded-sm px-[5px] py-[2px] border border-text-600 mx-1 inline-block">코드</div>
        <div className="text-sm font-mono px-2 py-1 inline-block">키보드</div>
      </div>

      <div className="flex gap-2 items-baseline">
        <div>아래 첨자<span className="text-[0.7rem] align-0">아래 첨자</span></div>
        <div>위 첨자<span className="text-[0.7rem] align-[9px]">위 첨자</span></div>

      </div>
    </div>
  );
}

export default function SolmiWiki2Typography() {
  return (
    <div className="flex flex-col gap-2 h-[calc(100%-4.5rem)] pt-4">
      <TypographySamples serif={true} />
      <TypographySamples serif={false} />
    </div>
  )
}