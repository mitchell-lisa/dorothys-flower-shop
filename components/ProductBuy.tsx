"use client";

import { useState } from "react";
import { money, type Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export function ProductBuy({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="mt-7">
      <div className="flex items-stretch gap-2">
        <div className="flex items-center border border-ink">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3.5 label text-mute hover:text-ink"
            aria-label="Fewer"
          >
            −
          </button>
          <span className="w-7 text-center label tabular-nums" aria-live="polite">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            className="px-3.5 label text-mute hover:text-ink"
            aria-label="More"
          >
            +
          </button>
        </div>

        <button
          onClick={() => add(product.slug, qty)}
          disabled={!product.inStock}
          className="btn btn-solid flex-1"
        >
          {product.inStock ? "Add to cart" : "Sold out"}
        </button>
      </div>

      <p className="mt-3 label-sm text-mute">
        One size, adjustable · Free shipping over $100
      </p>
    </div>
  );
}
