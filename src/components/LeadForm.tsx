"use client";

import { useState } from "react";

type Variant = "valuation" | "contact" | "careers";

export function LeadForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[10px] border border-linen bg-paper p-8 text-center">
        <p className="display text-2xl">
          Thank you — we're <em>on it.</em>
        </p>
        <p className="mt-3 text-slate">
          A member of the team will reach out shortly
          {variant === "valuation" && " with your valuation"}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-field"
            id="name"
            name="name"
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-field"
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
          />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-field"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      {variant === "valuation" && (
        <div>
          <label className="form-label" htmlFor="address">
            Property address
          </label>
          <input
            className="form-field"
            id="address"
            name="address"
            required
            autoComplete="street-address"
            placeholder="Street, city, zip"
          />
        </div>
      )}
      <div>
        <label className="form-label" htmlFor="message">
          {variant === "valuation"
            ? "Anything we should know? (optional)"
            : variant === "careers"
              ? "Tell us about yourself — licensed? producing? just starting?"
              : "How can we help?"}
        </label>
        <textarea
          className="form-field min-h-28"
          id="message"
          name="message"
          rows={4}
          required={variant !== "valuation"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {status === "sending"
          ? "Sending…"
          : variant === "valuation"
            ? "Request my valuation"
            : variant === "careers"
              ? "Start the conversation"
              : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-graphite" role="alert">
          Something went wrong — please try again, or call us directly.
        </p>
      )}
      <p className="text-xs leading-relaxed text-slate">
        By submitting, you agree to be contacted by Zeoli Realty about your
        request. No spam, no obligation.
      </p>
    </form>
  );
}
