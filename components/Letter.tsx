"use client";

import { MedallionMark } from "./MedallionMark";

export function Letter() {
  return (
    <section id="letter" className="bg-linen/60 py-28 px-6">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        <MedallionMark flower="rose" size="seal" />
        <h2 className="font-display text-ink text-4xl md:text-5xl italic font-normal mt-10 leading-tight">
          Stay close to the shop.
        </h2>
        <p className="font-body text-ink/80 text-lg leading-[1.7] mt-6">
          A short letter, every so often. New work, old photographs, the
          occasional recipe. No noise.
        </p>

        <form
          className="mt-10 w-full flex flex-col sm:flex-row gap-3 items-stretch"
          action="#"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="sr-only">
            Your address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your address, please"
            className="flex-1 bg-transparent border-b border-ink/40 focus:border-ink/80 outline-none px-1 py-3 font-body italic text-ink placeholder:text-ink/40 placeholder:italic"
          />
          <button
            type="submit"
            className="caption px-6 py-3 border border-ink/60 text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
