import { jersey15, vt323 } from "../fonts";

export default function CpniaLogotype() {
  return (
    <>
      <style>
        {`
          @keyframes logoCycle5 {
            0% { transform: translateX(50%); }
            20% { transform: translateX(50%); }
            25% { transform: translateX(-500%); }
            60% { transform: translateX(-500%); }
            65% { transform: translateX(50%); }
            100% { transform: translateX(50%); }
          }
          @keyframes logoCycle4 {
            0% { transform: translateX(50%); }
            20% { transform: translateX(50%); }
            25% { transform: translateX(-270%); }
            60% { transform: translateX(-270%); }
            65% { transform: translateX(50%); }
            100% { transform: translateX(50%); }
          }
          @keyframes logoCycle3 {
            0% { transform: translateX(50%); }
            20% { transform: translateX(50%); }
            25% { transform: translateX(0%); }
            60% { transform: translateX(0%); }
            65% { transform: translateX(50%); }
            100% { transform: translateX(50%); }
          }
          @keyframes logoCycle2 {
            0% { transform: translateX(50%); }
            20% { transform: translateX(50%); }
            25% { transform: translateX(260%); }
            60% { transform: translateX(260%); }
            65% { transform: translateX(50%); }
            100% { transform: translateX(50%); }
          }
          @keyframes logoCycle1 {
            0% { transform: translateX(0); }
            20% { transform: translateX(0); }
            25% { transform: translateX(500%); }
            60% { transform: translateX(500%); }
            65% { transform: translateX(0); }
            100% { transform: translateX(0); }
          }
          @keyframes logoCycle6 {
            0% { transform: translateX(-1120%); }
            20% { transform: translateX(-1120%); }
            25% { transform: translateX(100%); }
            60% { transform: translateX(100%); }
            65% { transform: translateX(-1120%); }
            100% { transform: translateX(-1120%); }
          }

          .letter {
            display: inline-block;
            transition: transform 0.5s ease-in-out;
          }

          .animate-logoCycle .letter:nth-child(5) {
            animation: logoCycle5 5s infinite ease-in-out;
          }
          .animate-logoCycle .letter:nth-child(4) {
            animation: logoCycle4 5s infinite ease-in-out;
            animation-delay: 0.1s;
          }
          .animate-logoCycle .letter:nth-child(3) {
            animation: logoCycle3 5s infinite ease-in-out;
            animation-delay: 0.2s;
          }
          .animate-logoCycle .letter:nth-child(2) {
            animation: logoCycle2 5s infinite ease-in-out;
            animation-delay: 0.3s;
          }
          .animate-logoCycle .letter:nth-child(1) {
            animation: logoCycle1 5s infinite ease-in-out;
            animation-delay: 0.4s;
          }
          .animate-logoCycle .letter:nth-child(6) {
            animation: logoCycle6 5s infinite ease-in-out;
            animation-delay: 0.5s;
          }
        `}
      </style>
      <div
        className={`text-zinc-800 w-full h-40 break-keep text-[8rem] flex justify-center items-center gap-2 animate-logoCycle`}
      >
        <span className={`letter font-bold ${jersey15.className}`}>C</span>
        <span className={`letter font-bold ${jersey15.className}`}>P</span>
        <span className={`letter font-bold ${jersey15.className}`}>N</span>
        <span className={`letter ${vt323.className}`}>I</span>
        <span className={`letter ${vt323.className}`}>A</span>
        <span className={`letter font-bold ${jersey15.className}`}>.</span>
      </div>
    </>
  )
}