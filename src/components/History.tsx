import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Hook {
  id: string;
  content: string;
  platform: string;
  created_at: string;
}

export default function History() {
  const [hooks, setHooks] = useState<Hook[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchHooks = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        console.error("No hay usuario");
        return;
      }

      const { data, error } = await supabase
        .from("hooks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error cargando hooks:", error);
      } else {
        setHooks(data || []);
      }
    } catch (err) {
      console.error("Error inesperado:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHooks();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">

      {/* 🔙 BOTÓN VOLVER */}
      <button
        onClick={() => navigate("/app")}
        className="flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      {hooks.length === 0 ? (
        <p className="text-center mt-10">No tienes hooks guardados</p>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {hooks.map((hook) => (
            <div
              key={hook.id}
              className="w-full max-w-xl bg-white border rounded-xl p-5 shadow-sm"
            >
              <div className="text-xs text-gray-500 mb-2">
                {new Date(hook.created_at).toLocaleString()}
              </div>

              <p className="text-gray-800 font-medium">
                {hook.content}
              </p>

              <div className="mt-3 text-xs text-blue-600 font-semibold">
                {hook.platform}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}