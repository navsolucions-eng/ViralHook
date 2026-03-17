import { createClient } from "@supabase/supabase-js";

// URL de tu proyecto Supabase
const supabaseUrl = "https://jtajrikvflocyzzohxvb.supabase.co";
// Clave pública (publishable key) para conexión con Supabase
const supabaseKey = "sb_publishable_KtfNXw911E-LrpLlaZWGgg_w4UtQUjr";

// Cliente Supabase listo para usar en toda la app
export const supabase = createClient(supabaseUrl, supabaseKey);