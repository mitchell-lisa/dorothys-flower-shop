import type { Metadata } from "next";
import Link from "next/link";
import { ClearCart } from "@/components/ClearCart";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

export default function SuccessPage() {
  return (
    <div className="gutter flex min-h-[70svh] flex-col items-start justify-center pt-[52px]">
      <ClearCart />
      <p className="label">Order received</p>
      <p className="mt-5 max-w-text text-mute">
        A receipt is on its way to your inbox. We pack and post from New Jersey, usually
        within two working days &mdash; you&rsquo;ll get a note when it goes out.
      </p>
      <Link href="/shop" className="btn btn-ghost mt-8">Back to the shop</Link>
    </div>
  );
}
