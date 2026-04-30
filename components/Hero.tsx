"use client";

export function Hero() {
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
    </header>
  );
}
