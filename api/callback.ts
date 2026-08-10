import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// See api/quote.ts for the full rationale on LEAD_TO_EMAIL / LEAD_FROM_EMAIL
// -- same temporary agency-inbox + shared-Resend-domain setup, kept in sync
// between the two files rather than shared, matching qamira-web's
// api/contact.ts + api/assessment.ts convention of self-contained functions.
const LEAD_TO_EMAIL = "qamiraconsulting@gmail.com";
const PHONE_PATTERN = /^[+()\-.\s\d]{6,20}$/;

function truncate(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.RESEND_API_KEY || !process.env.LEAD_FROM_EMAIL) {
    res.status(500).json({ error: "The callback form isn't configured yet. Please call us directly instead." });
    return;
  }

  const body = req.body as Record<string, unknown>;
  const name = truncate(body?.name, 200);
  const phone = truncate(body?.phone, 50);
  const time = truncate(body?.time, 100);

  if (!name || !phone) {
    res.status(400).json({ error: "Name and phone are required." });
    return;
  }

  if (!PHONE_PATTERN.test(phone)) {
    res.status(400).json({ error: "Enter a valid phone number." });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: `Blue Line Removals Website <${process.env.LEAD_FROM_EMAIL}>`,
      to: [LEAD_TO_EMAIL],
      subject: `Callback request from ${name}`,
      text: [`Name: ${name}`, `Phone: ${phone}`, `Best time to call: ${time || "-"}`].join("\n"),
    });

    if (error) {
      console.error("Callback request send failed:", error);
      res.status(502).json({ error: "We couldn't send that just now. Please call us instead." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Callback request send failed:", err);
    res.status(502).json({ error: "We couldn't send that just now. Please call us instead." });
  }
}
