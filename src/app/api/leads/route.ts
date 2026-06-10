// ─── ADMIN LEADS API ROUTE ───
// Returns all stored leads for admin access.
// In production, add proper authentication (API key, session, etc.)

import { NextResponse } from "next/server";
import { getLeads } from "@/lib/leads";

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ leads, total: leads.length });
  } catch (error) {
    console.error("[Leads API] Error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve leads." },
      { status: 500 }
    );
  }
}
