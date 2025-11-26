'use client'

export default function SequenceNav({
  links, index, setIndex
}: {
  links:string[];
  index: number;
  setIndex: (index:number) => void;
}) {
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