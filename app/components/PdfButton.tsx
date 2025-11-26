export default function PdfButton() {
  const handlePrint = () => {
    const html = document.documentElement;
    html.classList.add("print-mode");
    window.print();
    html.classList.remove("print-mode");
  };

  return (
    <button
      onClick={handlePrint}
      className="pointer-events-auto px-4 py-1 bg-zinc-200 text-zinc-700 rounded-lg no-print hover:bg-green-500 hover:scale-120 transition-all"
    >
      PDF로 저장하기
    </button>
  );
}

export function SaveButton() {
  return (
    <a
      href="/정솔미_2025_포트폴리오.pdf"
      className="pointer-events-auto px-4 py-1 bg-zinc-200 text-zinc-700 rounded-lg no-print hover:bg-green-500 hover:scale-120 transition-all"
    >
      PDF 저장하기
    </a>
  )
}