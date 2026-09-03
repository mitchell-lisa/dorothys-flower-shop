import { NextResponse } from "next/server";
import { bySlug, SHIPPING_FLAT, FREE_SHIPPING_OVER } from "@/lib/products";

export const runtime = "nodejs";

/**
 * Stripe Checkout.
 *
 * To turn this on: add STRIPE_SECRET_KEY in the Vercel project settings
 * (Settings → Environment Variables) and redeploy. Nothing else is needed;
 * line items are built from lib/products.ts at request time, so there is no
 * product catalogue to keep in sync inside Stripe.
 */
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;

  let lines: { slug: string; qty: number }[] = [];
  try {
    const body = await req.json();
    lines = Array.isArray(body?.lines) ? body.lines : [];
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const items = lines
    .map((l) => ({ product: bySlug(String(l.slug)), qty: Math.max(1, Math.min(10, Number(l.qty) || 1)) }))
    .filter((l): l is { product: NonNullable<ReturnType<typeof bySlug>>; qty: number } => Boolean(l.product));

  if (!items.length) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  if (!key) {
    return NextResponse.json(
      {
        error:
          "Checkout isn't switched on yet. Add STRIPE_SECRET_KEY to the project's environment variables to take orders.",
      },
      { status: 503 },
    );
  }

  const origin = req.headers.get("origin") ?? new URL(req.url).origin;
  const subtotal = items.reduce((n, i) => n + i.product.price * i.qty, 0);
  const shipping = subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FLAT;

  const form = new URLSearchParams();
  form.set("mode", "payment");
  form.set("success_url", `${origin}/success?session_id={CHECKOUT_SESSION_ID}`);
  form.set("cancel_url", `${origin}/shop`);
  form.set("billing_address_collection", "auto");
  form.append("shipping_address_collection[allowed_countries][0]", "US");
  form.append("shipping_address_collection[allowed_countries][1]", "CA");

  items.forEach((it, i) => {
    form.set(`line_items[${i}][quantity]`, String(it.qty));
    form.set(`line_items[${i}][price_data][currency]`, "usd");
    form.set(`line_items[${i}][price_data][unit_amount]`, String(it.product.price * 100));
    form.set(`line_items[${i}][price_data][product_data][name]`, it.product.name);
    form.set(
      `line_items[${i}][price_data][product_data][description]`,
      [it.product.blank, it.product.colour].filter(Boolean).join(", "),
    );
    form.set(`line_items[${i}][price_data][product_data][images][0]`, `${origin}${it.product.images.front}`);
  });

  form.set("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
  form.set("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(shipping * 100));
  form.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "usd");
  form.set(
    "shipping_options[0][shipping_rate_data][display_name]",
    shipping === 0 ? "Free shipping" : "Standard shipping",
  );

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json(
      { error: data?.error?.message ?? "Stripe rejected the request." },
      { status: 502 },
    );
  }
  return NextResponse.json({ url: data.url });
}
