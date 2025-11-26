import { ArrowUpToLine } from "lucide-react";

export default function GoToTop() {
  return (
    <div className="bg-button-100 text-text-900 h-8 w-auto flex items-center justify-center gap-4 pointer-events-none transition-opacity rounded-sm px-3"
    >
      <div className='text-sm h-8 w-auto rounded-sm items-center pointer-events-auto flex'>
        Day 2. 0425. 티라나와 두러스
      </div>
      <button
        className="w-auto h-8 rounded-sm flex justify-center items-center hover:text-text-700 transition-all duration-300 pointer-events-auto"
      >
        <ArrowUpToLine className="w-4 h-4" />
      </button>
    </div>
  )
}