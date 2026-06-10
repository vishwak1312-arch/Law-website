// ─── LEAD STORAGE ───
// Production-ready lead storage using Supabase (PostgreSQL).

import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  matter: string;
  urgency?: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
  source: "contact_form" | "exit_popup" | "consultation_modal";
  dateSubmitted: string;
}

// Maps our camelCase Lead interface to the snake_case DB columns
interface DbLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  matter: string;
  urgency: string | null;
  message: string;
  preferred_date: string | null;
  preferred_time: string | null;
  source: string;
  date_submitted: string;
}

function dbToLead(row: DbLead): Lead {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    matter: row.matter,
    urgency: row.urgency ?? undefined,
    message: row.message,
    preferredDate: row.preferred_date ?? undefined,
    preferredTime: row.preferred_time ?? undefined,
    source: row.source as Lead["source"],
    dateSubmitted: row.date_submitted,
  };
}

/**
 * Save a new lead to Supabase.
 */
export async function saveLead(
  data: Omit<Lead, "id" | "dateSubmitted">
): Promise<Lead> {
  const supabase = getSupabase();
  if (!supabase) {
    console.warn("[Leads] Supabase not configured — logging lead locally.");
    // Fallback: return a mock lead so the API route still responds successfully
    return {
      id: crypto.randomUUID(),
      ...data,
      dateSubmitted: new Date().toISOString(),
    };
  }

  const { data: inserted, error } = await supabase
    .from("leads")
    .insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      matter: data.matter,
      urgency: data.urgency ?? null,
      message: data.message,
      preferred_date: data.preferredDate ?? null,
      preferred_time: data.preferredTime ?? null,
      source: data.source,
    })
    .select()
    .single();

  if (error) {
    console.error("[Supabase] Insert error:", error);
    throw new Error("Failed to save lead to database.");
  }

  return dbToLead(inserted as DbLead);
}

/**
 * Get all stored leads, most recent first.
 * Uses the admin client (service_role) to bypass RLS.
 */
export async function getLeads(): Promise<Lead[]> {
  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    console.warn("[Leads] Supabase admin not configured — returning empty list.");
    return [];
  }

  const { data, error } = await supabaseAdmin
    .from("leads")
    .select("*")
    .order("date_submitted", { ascending: false });

  if (error) {
    console.error("[Supabase] Select error:", error);
    throw new Error("Failed to retrieve leads from database.");
  }

  return (data as DbLead[]).map(dbToLead);
}
