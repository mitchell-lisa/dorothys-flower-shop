"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setState("done");
        setMsg(data.message ?? "You're on the list.");
      } else {
        setState("error");
        setMsg(data.error ?? "That didn't go through.");
      }
    } catch {
      setState("error");
      setMsg("That didn't go through.");
    }
  }

  return (
    <div>
      {state === "done" ? (
        <p className="text-mute">{msg}</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-2">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="min-w-0 border border-line bg-transparent px-3 py-2.5 text-ink placeholder:text-mute focus:border-ink focus:outline-none"
          />
          <button type="submit" disabled={state === "sending"} className="btn btn-ghost">
            {state === "sending" ? "Sending" : "Sign up"}
          </button>
        </form>
      )}
      {state === "error" && <p className="mt-2 text-mute">{msg}</p>}
    </div>
  );
}
