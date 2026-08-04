-- Create the leads table in Supabase SQL Editor if you want to store leads in your database:
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    matter TEXT NOT NULL,
    urgency TEXT,
    message TEXT NOT NULL,
    preferred_date TEXT,
    preferred_time TEXT,
    source TEXT NOT NULL,
    date_submitted TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts from the website contact form
CREATE POLICY "Allow public inserts" ON public.leads
    FOR INSERT TO anon
    WITH CHECK (true);

-- Allow public select for inserted rows (required for .select().single())
CREATE POLICY "Allow public select" ON public.leads
    FOR SELECT TO anon
    USING (true);

-- Allow service_role admin full access
CREATE POLICY "Allow service_role full access" ON public.leads
    FOR ALL TO service_role
    USING (true);
