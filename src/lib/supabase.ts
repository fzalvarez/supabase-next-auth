/* Primeras pruebas, para conectar con Supabase */
/* import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);
*/

/* Pruebas para el login */
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createClientComponentClient();
