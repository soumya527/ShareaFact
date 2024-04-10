import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kyvdgvyurhhxqnclmeuf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dmRndnl1cmhoeHFuY2xtZXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNjI4MjIsImV4cCI6MjAwNjczODgyMn0.vZ8QE_rZ1DD6BsXRbXapuZXYBIX94r2LzjU2TlNLLDY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
