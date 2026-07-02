import { NextResponse } from "next/server";

/**
 * Lead intake. Forwards to Follow Up Boss when FUB_API_KEY is set
 * (Settings → API in Follow Up Boss); otherwise logs and accepts so
 * the form still works in preview environments.
 */
export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name = "", email = "", phone = "", address = "", message = "", variant = "contact" } = body;
  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const source = "zeolirealty.com";
  const type =
    variant === "valuation"
      ? "Seller Inquiry"
      : variant === "careers"
        ? "Recruiting Inquiry"
        : "General Inquiry";
  const description = [
    variant === "valuation"
      ? "Home valuation request"
      : variant === "careers"
        ? "Agent recruiting inquiry (careers page)"
        : "Contact form message",
    address && `Property: ${address}`,
    message && `Message: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const apiKey = process.env.FUB_API_KEY;
  if (apiKey) {
    const [firstName, ...rest] = name.trim().split(/\s+/);
    const res = await fetch("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
      },
      body: JSON.stringify({
        source,
        system: "ZeoliRealtyWebsite",
        type,
        message: description,
        person: {
          firstName,
          lastName: rest.join(" "),
          emails: [{ value: email }],
          phones: [{ value: phone }],
          ...(address ? { addresses: [{ street: address, type: "property" }] } : {}),
        },
      }),
    });
    if (!res.ok) {
      console.error("Follow Up Boss rejected lead:", res.status, await res.text());
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }
  } else {
    console.log("Lead received (FUB_API_KEY not set):", {
      variant,
      name,
      email,
      phone,
      address,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
