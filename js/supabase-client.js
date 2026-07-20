/* =====================================================================
   CEBRASPE LAB — Cliente Supabase
   Projeto dedicado "cebraspe-lab". A anon key é pública por design
   (protegida por Row Level Security nas tabelas), segura para uso
   direto no front-end estático.
   ===================================================================== */
const SUPABASE_URL = "https://zxhzkucjiipsaumneccg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aHprdWNqaWlwc2F1bW5lY2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NTQ0MzksImV4cCI6MjEwMDEzMDQzOX0.c0hBb5C_-fQP7vuufGuITz4hvEbct08chFt3I0YM8wk";

const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
