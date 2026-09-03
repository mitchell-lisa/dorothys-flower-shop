"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import { money, SHIPPING_FLAT, FREE_SHIPPING_OVER } from "@/lib/products";

export function CartDrawer() {
  const { open, setOpen, detailed, setQty, remove, subtotal, count } = useCart();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("keydown", esc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  async function checkout() {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lines: detailed.map((d) => ({ slug: d.product.slug, qty: d.qty })) }),
      });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; return; }
      setErr(data.error ?? "Checkout is not available right now.");
    } catch {
      setErr("Could not reach the checkout. Please try again.");
    }
    setBusy(false);
  }

  const shipping = subtotal >= FREE_SHIPPING_OVER || subtotal === 0 ? 0 : SHIPPING_FLAT;

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/25 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Cart"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-[26rem] flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="label">Your cart{count > 0 && ` (${count})`}</span>
          <button onClick={() => setOpen(false)} className="label link-quiet text-mute hover:text-ink" aria-label="Close cart">
            Close
          </button>
        </header>

        {detailed.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <p className="label text-mute">Nothing in here yet</p>
            <Link href="/shop" onClick={() => setOpen(false)} className="btn btn-ghost">
              See the hats
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {detailed.map(({ product, qty }) => (
                <li key={product.slug} className="flex gap-4 py-5">
                  <Link
                    href={`/shop/${product.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative h-20 w-20 shrink-0 bg-bone"
                  >
                    <Image src={product.images.front} alt="" fill sizes="80px" className="object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <Link
                        href={`/shop/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className="label link-quiet"
                      >
                        {product.name}
                      </Link>
                      <span className="label tabular-nums">{money(product.price * qty)}</span>
                    </div>
                    <p className="mt-1 label-sm text-mute">{product.colour}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-ink">
                        <button
                          onClick={() => setQty(product.slug, qty - 1)}
                          className="px-2.5 py-1 label text-mute hover:text-ink"
                          aria-label={`Fewer ${product.name}`}
                        >
                          −
                        </button>
                        <span className="w-7 text-center label tabular-nums">{qty}</span>
                        <button
                          onClick={() => setQty(product.slug, qty + 1)}
                          className="px-2.5 py-1 label text-mute hover:text-ink"
                          aria-label={`More ${product.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(product.slug)}
                        className="label-sm text-mute link-quiet hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-line px-6 py-5">
              <dl className="space-y-1.5">
                <div className="flex justify-between">
                  <dt className="text-mute">Subtotal</dt>
                  <dd className="tabular-nums">{money(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mute">Shipping</dt>
                  <dd className="tabular-nums">{shipping === 0 ? "Free" : money(shipping)}</dd>
                </div>
              </dl>
              {subtotal < FREE_SHIPPING_OVER && (
                <p className="mt-3 text-mute">
                  {money(FREE_SHIPPING_OVER - subtotal)} more for free shipping.
                </p>
              )}
              {err && <p className="mt-3 text-mute">{err}</p>}
              <button onClick={checkout} disabled={busy} className="btn btn-solid mt-4 w-full">
                {busy ? "One moment…" : `Checkout · ${money(subtotal + shipping)}`}
              </button>
              <p className="mt-3 text-center label-sm text-mute">
                Packed and posted from New Jersey
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
