'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ImageScrollScale() {
  const asset = '/player.png';
  const [scale, setScale] = useState(0.8);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function wheelHandler(e: WheelEvent) {
      e.preventDefault(); // 부모 스크롤 차단
      setScale((prev) => {
        let next = prev - e.deltaY * 0.001;
        return Math.min(Math.max(next, 0.5), 5);
      });
    }

    // passive: false → preventDefault() 가능
    container.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      container.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    asset && (
      <div
        ref={containerRef}
        className="absolute overflow-hidden h-full w-full z-20 p-20 flex items-center justify-center"
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
    )
  );
}