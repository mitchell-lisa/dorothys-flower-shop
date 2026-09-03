"use client";

import Image from "next/image";
import Link from "next/link";
import { money, type Product } from "@/lib/products";

/* Image, name, price. Nothing else: no number, no description sentence, no
   add-to-cart. The grid is a wall of pictures; buying happens on the page.
   Rest shows the front, hover turns the hat three-quarters. */
export function ProductCard({
  product,
  priority = false,
  sizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
}: {
  product: Product;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <article className="group">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="well aspect-[4/5] !bg-paper">
          <Image
            src={product.images.front}
            alt={`${product.name}, ${product.colour}`}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src={product.images.angle}
            alt=""
            fill
            sizes={sizes}
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {!product.inStock && (
            <span className="absolute left-3 top-3 bg-paper px-2 py-1 label-sm text-mute">
              Sold out
            </span>
          )}
        </div>

        <div className="mt-3">
          <h3 className="label">{product.name}</h3>
          <p className="mt-1 label text-mute tabular-nums">{money(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
