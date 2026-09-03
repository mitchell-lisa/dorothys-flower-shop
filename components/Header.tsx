"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

/* One door now: a Menu button top-left that slides a sidebar out. The two
   groups survive inside it: product on one side of the fold, the brand's
   world on the other, at equal weight. */
const SHOP = [{ href: "/shop", label: "Hats" }];

const EXPLORE = [
  { href: "/about", label: "The story" },
  { href: "/archive", label: "The archive" },
  { href: "/garden", label: "The garden" },
  { href: "/gnocchi", label: "Pop–Pop's gnocchi" },
  { href: "/shipping", label: "Shipping & returns" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Route change closes it.
  useEffect(() => setMenu(false), [path]);

  // On the film the header is clear, white type over the flowers; the moment
  // the page scrolls (the footer is white) it turns back into the paper bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clear = path === "/" && !scrolled;

  // Escape closes it; body scroll locks while it is up.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
          clear ? "border-transparent bg-transparent text-white" : "border-line bg-paper text-ink"
        }`}
      >
        <div className="relative flex h-[52px] items-center justify-between gutter">
          {/* left: the menu, three bars */}
          <button
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-controls="site-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
            className="-ml-1 flex h-8 w-8 flex-col items-center justify-center gap-[5px] p-1"
          >
            <span
              className={`h-px w-[18px] bg-current transition-transform duration-300 ${
                menu ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-[18px] bg-current transition-opacity duration-300 ${
                menu ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-[18px] bg-current transition-transform duration-300 ${
                menu ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* centre: wordmark, set as plainly as the nav */}
          <Link
            href="/"
            aria-label="Dorothy's Flower Shop, home"
            className="absolute left-1/2 -translate-x-1/2 label whitespace-nowrap"
          >
            Dorothy&rsquo;s Flower Shop
          </Link>

          {/* right: cart only */}
          <button onClick={() => setOpen(true)} className="label link-quiet">
            Cart <span className="tabular-nums">({count})</span>
          </button>
        </div>
      </header>

      {/* backdrop, darker toward the menu so the white type reads anywhere */}
      <div
        aria-hidden
        onClick={() => setMenu(false)}
        className={`fixed inset-0 z-40 mt-[52px] bg-gradient-to-r from-black/70 via-black/40 to-black/25 transition-opacity duration-300 ${
          menu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* the sidebar */}
      <nav
        id="site-menu"
        aria-label="Site menu"
        aria-hidden={!menu}
        className={`fixed bottom-0 left-0 top-[52px] z-40 w-[min(20rem,85vw)] bg-transparent text-white transition-transform duration-300 ease-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="no-bar h-full overflow-y-auto gutter py-8">
          {[
            ["Shop", SHOP],
            ["Explore", EXPLORE],
          ].map(([title, items]) => (
            <div key={title as string} className="mb-9 last:mb-0">
              <p className="label-sm text-white/55">{title as string}</p>
              <ul className="mt-4 space-y-3.5">
                {(items as typeof SHOP).map((n) => (
                  <li key={n.href + n.label}>
                    <Link
                      href={n.href}
                      tabIndex={menu ? 0 : -1}
                      className="label link-quiet"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
