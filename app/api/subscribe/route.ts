import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Mailing list.
 *
 * Works with no configuration (it just validates and thanks the visitor).
 * To actually store addresses, set BUTTONDOWN_API_KEY, or swap the fetch
 * below for whichever list you use.
 */
export async function POST(req: Request) {
  let email = "";
  try {
    email = String((await req.json())?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "That doesn't look like an email address." }, { status: 400 });
  }

  const key = process.env.BUTTONDOWN_API_KEY;
  if (key) {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: { Authorization: `Token ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok && res.status !== 400) {
      return NextResponse.json({ error: "Could not add you just now." }, { status: 502 });
    }
  }

  return NextResponse.json({ message: "You're on the list. We'll be in touch." });
}
