import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="gutter flex min-h-[70svh] flex-col items-start justify-center py-24 pt-[52px]">
      <p className="label">Nothing here</p>
      <p className="mt-5 max-w-text text-mute">
        That page has been put away. Families lose things. Try the shop, or the archive.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/shop" className="btn btn-solid">Shop</Link>
        <Link href="/archive" className="btn btn-ghost">Archive</Link>
      </div>

      {/* an empty clay court, weeds coming through, the right picture for a
          page that isn't where you left it */}
      <figure className="mt-14 w-full max-w-xl">
        <div className="well aspect-[3/2]">
          <Image
            src="/editorial/court-editorial.webp"
            alt="An empty clay tennis court with weeds growing through it"
            fill
            sizes="(min-width:640px) 36rem, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 label-sm text-mute">
          An empty court, somewhere sunny
        </figcaption>
      </figure>
    </div>
  );
}
