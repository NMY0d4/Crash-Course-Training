import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uzufnxbyhxwpxumayfll.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZueGJ5aHh3cHh1bWF5ZmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTIyNzgsImV4cCI6MTk5MTE4ODI3OH0.FqkhQKufDTCOBa-u18swZUJWdxLhmMtwxm8gnHnt6tY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
