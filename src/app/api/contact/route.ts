// ─── CONTACT FORM API ROUTE ───
// Handles form submissions with validation, spam protection, rate limiting, lead storage, and email notifications.

import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { saveLead } from "@/lib/leads";
import { sendAttorneyNotification, sendClientConfirmation } from "@/lib/resend";

// reCAPTCHA v3 server-side verification
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.log("[reCAPTCHA] Secret key not configured, skipping verification.");
    return true; // Graceful fallback during development
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });
    const data = await response.json();
    return data.success && (data.score === undefined || data.score >= 0.5);
  } catch (error) {
    console.error("[reCAPTCHA] Verification failed:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // ── Rate Limiting ──
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimitResult = rateLimit(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // ── Parse Body ──
    const body = await request.json();
    const { name, email, phone, matter, urgency, message, preferredDate, preferredTime, website, recaptchaToken, source } = body;

    // ── Honeypot Check ──
    if (website) {
      // Bot filled the hidden honeypot field
      return NextResponse.json({ success: true }); // Silent success to fool bots
    }

    // ── Input Validation ──
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide your full name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ error: "Please provide a valid phone number." }, { status: 400 });
    }
    if (!matter || typeof matter !== "string") {
      return NextResponse.json({ error: "Please select a legal matter type." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Please provide a message (at least 10 characters)." }, { status: 400 });
    }

    // ── Sanitize Inputs ──
    const sanitize = (str: string) => str.trim().replace(/<[^>]*>/g, "");

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      matter: sanitize(matter),
      urgency: urgency ? sanitize(urgency) : undefined,
      message: sanitize(message),
      preferredDate: preferredDate ? sanitize(preferredDate) : undefined,
      preferredTime: preferredTime ? sanitize(preferredTime) : undefined,
      source: (source === "exit_popup" ? "exit_popup" : "contact_form") as "contact_form" | "exit_popup",
    };

    // ── reCAPTCHA Verification ──
    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // ── Save Lead ──
    const lead = await saveLead(sanitizedData);

    // ── Send Emails (non-blocking) ──
    await Promise.allSettled([
      sendAttorneyNotification(lead),
      sendClientConfirmation(lead),
    ]);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your consultation request has been received. Our office will contact you shortly.",
    });
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or call our office directly." },
      { status: 500 }
    );
  }
}
