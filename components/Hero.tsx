"use client";

import { useEffect, useState } from "react";

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Hero() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(formatDate(new Date()));
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden bg-ink">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-x-0 top-8 md:top-10 z-10 flex flex-col items-center text-cream/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
        <div className="text-[11px] md:text-sm tracking-[0.28em] uppercase font-medium">
          Dorothy&rsquo;s Flower Shop
        </div>
        <div className="mt-2 text-[10px] md:text-xs tracking-[0.18em] uppercase text-cream/80">
          Kept by the family{date ? ` | ${date}` : ""}
        </div>
      </div>
    </header>
  );
}
