/* The front of the shop is the garden film and nothing else: the flowers
   play full-viewport under the header, and the menu top-left is the way in.

   It is an animated image now, not a <video>: autoplay video gets blocked on
   phones in low-power mode, and a GIF never asks permission. Modern browsers
   get animated WebP (phones ~1.5 MB, desktops a sharper ~2.6 MB); anything
   older falls back to the GIF. The source footage is VHS, and it loses nothing. */
export default function Home() {
  return (
    <section className="relative h-[100svh] min-h-[480px] w-full bg-bone">
      <picture className="block h-full w-full">
        <source
          media="(min-width: 640px)"
          srcSet="/video/garden-hd.webp"
          type="image/webp"
        />
        <source srcSet="/video/garden.webp" type="image/webp" />
        <img
          src="/video/garden.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>

      {/* quiet scrim at the top so the white header type always reads */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
    </section>
  );
}
