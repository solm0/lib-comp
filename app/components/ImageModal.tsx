'use client'

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ImageModal({
  asset
}: {
  asset: string | null;
}) {
  const [scale, setScale] = useState(0.8);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((prev) => {
      let next = prev - e.deltaY * 0.001; // scroll up → zoom in
      if (next < 0.5) next = 0.5; // min zoom
      if (next > 5) next = 5;     // max zoom
      return next;
    });
  }, []);

  useEffect(() => {
    if (!asset) return;

    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
      }, 3 * 60 * 1000); 
    };

    const events = ["mousemove", "mousedown", "wheel", "keydown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // 초기 타이머 시작

    return () => {
      clearTimeout(timeout);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [asset]);

  return (
    <>
      {asset &&
        <div
          className="absolute overflow-hidden h-full w-full z-20 p-20 flex items-center justify-center"
          onWheel={handleWheel}
        >
          <p className="absolute top-10 left-1/2 -translate-x-1/2 text-neutral-500 z-50">
            스크롤하여 확대 / 축소
          </p>
          <div
            className="transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
          >
            <Image
              src={asset}
              alt={asset}
              width={1000}
              height={1000}
              className="relative object-contain"
            />
          </div>
        </div>
      }
    </>
  )
}