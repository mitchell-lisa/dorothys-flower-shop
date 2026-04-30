import Image from "next/image";

export function Hero() {
  return (
    <header className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="plate-frame absolute inset-0">
        <Image
          src="/archive/sign.png"
          alt="The original Dorothy's Flower Shop sign"
          fill
          priority
          sizes="100vw"
          className="plate-img object-cover plate-vignette"
        />
      </div>
      <div className="absolute inset-0 bg-cream/60" />
      <div className="relative z-10 text-center px-6 rise-in">
        <div className="caption mb-6">Est. — Kept by the family</div>
        <h1 className="font-display font-medium text-ink text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          Dorothy&rsquo;s
          <br />
          <span className="italic font-normal">Flower Shop</span>
        </h1>
        <p className="font-display italic text-ink/80 text-xl md:text-2xl mt-8 max-w-xl mx-auto">
          A family. A storefront. A way of doing things.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="hairline w-24" />
        </div>
        <div className="mt-12 caption text-ink/60">scroll</div>
      </div>
    </header>
  );
}
