import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = `https://mxugkaokopealomrpore.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dWdrYW9rb3BlYWxvbXJwb3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MDk0MTgsImV4cCI6MjAxNTE4NTQxOH0.hLFMVmj4Xm0QyjrdwotXr0SU3O3Pjjbi8TuaA8ISI0I`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
