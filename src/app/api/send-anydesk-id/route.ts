import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { MailDataRequired } from '@sendgrid/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, osLink, signature, agreed, timestamp, ip } = body || {};

    if (!id || typeof id !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid ID" }, { status: 400 });
    }

    // If SendGrid is configured, send email directly to support
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || process.env.FROM_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL || `noreply@${process.env.NEXT_PUBLIC_APP_DOMAIN || "example.com"}`;

    if (SENDGRID_API_KEY && SUPPORT_EMAIL) {
      try {
        sgMail.setApiKey(SENDGRID_API_KEY);

        const attachments: Array<{ content: string; filename: string; type: string; disposition: string }> = [];

        if (signature && typeof signature === "string" && signature.startsWith("data:")) {
          // signature is a data URL like: data:image/png;base64,AAA...
          const parts = signature.split("base64,");
          if (parts.length === 2) {
            const b64 = parts[1];
            attachments.push({
              content: b64,
              filename: "signature.png",
              type: "image/png",
              disposition: "attachment",
            });
          }
        }

        const html = `
          <p>New remote support request received.</p>
          <ul>
            <li><strong>AnyDesk ID:</strong> ${id}</li>
            <li><strong>OS/Download Link:</strong> ${osLink || "N/A"}</li>
            <li><strong>Agreed:</strong> ${agreed ? "Yes" : "No"}</li>
            <li><strong>Timestamp:</strong> ${timestamp || "N/A"}</li>
            <li><strong>IP:</strong> ${ip || "N/A"}</li>
          </ul>
        `;

        const msg: MailDataRequired = {
          to: SUPPORT_EMAIL,
          from: FROM_EMAIL,
          subject: `Remote Support Request — AnyDesk ID ${id}`,
          html,
        };

        if (attachments.length) msg.attachments = attachments;

        await sgMail.send(msg);

        return NextResponse.json({ ok: true, sentVia: "sendgrid" });
      } catch (sendErr) {
        console.error("SendGrid send error:", sendErr);
        // fallthrough to Web3Forms fallback
      }
    }

    // Fallback: Send to Web3Forms (if configured)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: "Remote Support Request",
          from_name: id,
          reply_to: FROM_EMAIL,
          data: {
            id,
            osLink,
            signature,
            agreed,
            timestamp,
            ip,
          },
        }),
      });

      const data = await res.json();
      console.log("Web3Forms response:", data);
      return NextResponse.json({ ok: true, sentVia: "web3forms", data });
    }

    // If no delivery configured, log and return success (but warn)
    console.warn("No email provider configured for send-anydesk-id. Log follows:", { id, osLink, agreed, timestamp, ip });
    return NextResponse.json({ ok: true, sentVia: "log", warning: "No email provider configured" });
  } catch (err) {
    console.error("send-anydesk-id error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
