import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_DATABASE_URL,
  process.env.NEXT_PUBLIC_DATABASE_UNION_KEY
);

export default supabase;
