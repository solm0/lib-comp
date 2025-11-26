export default function CpniaButtons() {
  return (
    <div className="flex flex-col gap-1 overflow-y-scroll">
      <div className="flex-1 flex">
        <img src={`/time-ui.png`} className="w-[calc((100%-1rem)*1/3)] object-contain" />
        <div className="flex-1 px-3 py-3 flex items-center justify-center bg-zinc-900">
          <button
            type="button"
            className={`
              px-4 py-1 text-white flex items-center border-1 border-[#ffffff70] pointer-events-auto hover:opacity-50 transition-opacity cursor-pointer
            `}
          >
            마우스를 올려놓아 보세요
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        <img src={`/sacrifice-ui.png`} className="w-[calc((100%-1rem)*1/3)] object-contain" />
        <div className="flex-1 px-3 py-3 flex items-center justify-center bg-amber-700">
          <button
            className={`
              "w-auto px-4 py-2 rounded-full text-lg font-bold bg-yellow-300 hover:opacity-50 transition-opacity text-gray-700 break-keep pointer-events-auto shrink-0 cursor-pointer"
            `}
          >
            마우스를 올려놓아 보세요
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        <img src={`/entropy-ui.png`} className="w-[calc((100%-1rem)*1/3)] object-contain" />
        <div className="flex-1 px-3 py-3 flex items-center justify-center bg-lime-500">
          <button
            className={`
              "font-bold w-auto px-3 py-1 bg-gray-400 hover:opacity-50 text-gray-900 border-2 border-blue-600 break-keep transition-opacity w-auto pointer-events-auto cursor-pointer"
            `}
          >
            마우스를 올려놓아 보세요
          </button>
        </div>
      </div>
    </div>
  )
}