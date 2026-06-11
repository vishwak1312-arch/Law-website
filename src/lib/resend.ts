// ─── RESEND EMAIL SERVICE ───
// Professional HTML email templates for attorney notification and client confirmation.

import { Resend } from "resend";
import type { Lead } from "./leads";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "noreply@vamshi.com";
const ATTORNEY_EMAIL =
  process.env.NEXT_PUBLIC_ATTORNEY_EMAIL || "contact@vamshi.com";
const FIRM_NAME =
  process.env.NEXT_PUBLIC_LAW_FIRM_NAME || "Vamshi Associations";

// ─── HTML EMAIL TEMPLATE (shared wrapper) ───
function emailWrapper(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#0B1F3A;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#C8A45D;font-size:24px;font-weight:700;letter-spacing:1px;">${FIRM_NAME}</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.6);font-size:12px;letter-spacing:2px;text-transform:uppercase;">Trusted Legal Representation</p>
          </td>
        </tr>
        <!-- Content -->
        <tr>
          <td style="padding:40px;">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:24px 40px;text-align:center;border-top:1px solid #e5e5e5;">
            <p style="margin:0;color:#999;font-size:12px;">© ${new Date().getFullYear()} ${FIRM_NAME}. All rights reserved.</p>
            <p style="margin:8px 0 0;color:#bbb;font-size:11px;">This email was sent from our secure inquiry system.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Send attorney notification email with lead details.
 */
export async function sendAttorneyNotification(lead: Lead): Promise<boolean> {
  const content = `
    <h2 style="margin:0 0 24px;color:#0B1F3A;font-size:20px;">New Legal Inquiry Received</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:12px 16px;background:#f9f9f9;border-left:4px solid #C8A45D;font-size:14px;color:#333;font-weight:600;">Client Name</td>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#555;">${lead.name}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-size:14px;color:#333;font-weight:600;">Email</td>
        <td style="padding:12px 16px;font-size:14px;color:#555;"><a href="mailto:${lead.email}" style="color:#0B1F3A;">${lead.email}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#333;font-weight:600;">Phone</td>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#555;"><a href="tel:${lead.phone}" style="color:#0B1F3A;">${lead.phone}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-size:14px;color:#333;font-weight:600;">Legal Matter</td>
        <td style="padding:12px 16px;font-size:14px;color:#555;">${lead.matter}</td>
      </tr>
      ${lead.urgency ? `<tr>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#333;font-weight:600;">Urgency</td>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#555;">${lead.urgency}</td>
      </tr>` : ""}
      ${lead.preferredDate ? `<tr>
        <td style="padding:12px 16px;font-size:14px;color:#333;font-weight:600;">Preferred Date</td>
        <td style="padding:12px 16px;font-size:14px;color:#555;">${lead.preferredDate}</td>
      </tr>` : ""}
      ${lead.preferredTime ? `<tr>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#333;font-weight:600;">Preferred Time</td>
        <td style="padding:12px 16px;background:#f9f9f9;font-size:14px;color:#555;">${lead.preferredTime}</td>
      </tr>` : ""}
    </table>
    <div style="background:#f5f5f5;border-radius:8px;padding:20px;margin-bottom:24px;">
      <p style="margin:0 0 8px;color:#333;font-weight:600;font-size:14px;">Message:</p>
      <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">${lead.message.replace(/\n/g, "<br>")}</p>
    </div>
    <p style="margin:0;color:#999;font-size:12px;">Source: ${lead.source} · Submitted: ${new Date(lead.dateSubmitted).toLocaleString()}</p>
  `;

  if (!resend) {
    console.log("[Email] Resend not configured. Would send attorney notification:", lead.email);
    return true;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ATTORNEY_EMAIL,
      subject: `New Legal Inquiry: ${lead.matter} — ${lead.name}`,
      html: emailWrapper(content),
    });
    return true;
  } catch (error) {
    console.error("[Email] Failed to send attorney notification:", error);
    return false;
  }
}

/**
 * Send client confirmation email.
 */
export async function sendClientConfirmation(lead: Lead): Promise<boolean> {
  const content = `
    <h2 style="margin:0 0 16px;color:#0B1F3A;font-size:20px;">Thank You for Contacting Us</h2>
    <p style="margin:0 0 16px;color:#555;font-size:15px;line-height:1.6;">
      Dear ${lead.name},
    </p>
    <p style="margin:0 0 16px;color:#555;font-size:15px;line-height:1.6;">
      Thank you for reaching out to <strong>${FIRM_NAME}</strong>. We have received your inquiry regarding <strong>${lead.matter}</strong> and our team will review it promptly.
    </p>
    <div style="background:#f5f8ff;border-radius:8px;padding:24px;margin:24px 0;border-left:4px solid #C8A45D;">
      <p style="margin:0 0 8px;color:#0B1F3A;font-weight:700;font-size:15px;">What Happens Next:</p>
      <ol style="margin:0;padding-left:20px;color:#555;font-size:14px;line-height:2;">
        <li>Our team reviews your inquiry</li>
        <li>An attorney will contact you within 24 hours</li>
        <li>We'll schedule a consultation at your convenience</li>
      </ol>
    </div>
    <p style="margin:0 0 16px;color:#555;font-size:15px;line-height:1.6;">
      If your matter is urgent, please call us directly at <a href="tel:${process.env.NEXT_PUBLIC_ATTORNEY_PHONE || "(555) 234-5678"}" style="color:#C8A45D;font-weight:600;">${process.env.NEXT_PUBLIC_ATTORNEY_PHONE || "(555) 234-5678"}</a>.
    </p>
    <p style="margin:24px 0 0;color:#555;font-size:15px;line-height:1.6;">
      Sincerely,<br>
      <strong style="color:#0B1F3A;">${FIRM_NAME}</strong>
    </p>
  `;

  if (!resend) {
    console.log("[Email] Resend not configured. Would send client confirmation to:", lead.email);
    return true;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject: `Consultation Request Received — ${FIRM_NAME}`,
      html: emailWrapper(content),
    });
    return true;
  } catch (error) {
    console.error("[Email] Failed to send client confirmation:", error);
    return false;
  }
}
