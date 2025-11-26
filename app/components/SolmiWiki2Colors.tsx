export default function SolmiWiki2Colors() {
  const colors = {
    light: [
      { name: "background", value: "#F8F7FB" },
      { name: "button-50", value: "#F5F4F8" },
      { name: "button-100", value: "#EBEBEB" },
      { name: "button-200", value: "#D1D1D1" },
      { name: "green-100", value: "#B8FFCA" },
      { name: "green-500", value: "#00EB95" },
      { name: "node", value: "#00EB95" },
      { name: "green-600", value: "#00B975" },
      { name: "green-900", value: "#009B71" },
      { name: "text-600", value: "#DADADA" },
      { name: "text-700", value: "#B5B5B5" },
      { name: "text-800", value: "#646464" },
      { name: "text-900", value: "#52636E" },
      { name: "text-950", value: "#394A54" },
    ],
    dark: [
      { name: "background", value: "#121212" },
      { name: "button-50", value: "#111416" },
      { name: "button-100", value: "#1A2026" },
      { name: "button-200", value: "#2D3842" },
      { name: "green-100", value: "#004636" },
      { name: "green-500", value: "#006B48" },
      { name: "green-600", value: "#008E5F" },
      { name: "node", value: "#00AC73" },
      { name: "green-900", value: "#00B371" },
      { name: "text-600", value: "#383F4A" },
      { name: "text-700", value: "#5A626F" },
      { name: "text-800", value: "#828B9A" },
      { name: "text-900", value: "#A6ACB6" },
      { name: "text-950", value: "#C6CFDE" },
    ],
  };

  function Chip({name, value}:{name:string;value:string}){
    return (
      <div className="flex flex-col gap-1">
        <div
          className="shrink-0 p-2 rounded-lg w-25 h-25 flex items-end justify-center text-center"
          style={{backgroundColor: value}}
        >
          <p className="w-full py-1 rounded-sm bg-[#ffffff90] text-sm">{value}</p>
        </div>
        <p className="text-center text-sm text-text-800">{name}</p>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1 flex gap-2">
        <div className="mt-2">
          <Chip name={colors['light'][0].name} value={colors['light'][0].value} />
        </div>
        <div
          className="relative w-full h-auto p-2 rounded-2xl border border-zinc-200 flex flex-col gap-4"
          style={{backgroundColor:colors['light'][0].value}}
        >
          <p className="absolute top-4 right-6 text-[#394a54]">Light</p>
          <div className="flex gap-3">
            {colors['light'].slice(1,4).map(color => <Chip key={color.name} name={color.name} value={color.value} />)}
          </div>
          <div className="flex gap-2">
            {colors['light'].slice(4,9).map(color => <Chip key={color.name} name={color.name} value={color.value} />)}
          </div>
          <div className="flex gap-2">
            {colors['light'].slice(9).map(color => <Chip key={color.name} name={color.name} value={color.value} />)}
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-2">
        <div className="mt-2">
          <Chip name={colors['dark'][0].name} value={colors['dark'][0].value} />
        </div>
        <div
          className="relative w-full h-auto p-2 rounded-2xl border border-zinc-200 flex flex-col gap-4"
          style={{backgroundColor:colors['dark'][0].value}}
        >
          <p className="absolute top-4 right-6 text-[#c6cfde]">Dark</p>
          <div className="flex gap-2">
            {colors['dark'].slice(1,4).map(color => <Chip key={color.name} name={color.name} value={color.value} />)}
          </div>
          <div className="flex gap-2">
            {colors['dark'].slice(4,9).map(color => <Chip key={color.name} name={color.name} value={color.value} />)}
          </div>
          <div className="flex gap-2">
            {colors['dark'].slice(9).map(color => <Chip key={color.name} name={color.name} value={color.value} />)}
          </div>
        </div>
      </div>
    </div>
  )
}