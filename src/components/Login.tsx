import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

// Componente de pantalla de login
export default function Login() {

  // Estados locales para almacenar los valores del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook de navegación de react-router-dom para redireccionar tras login
  const navigate = useNavigate();

  // Maneja el evento de iniciar sesión
  const handleLogin = async () => {
    // Llamada a Supabase para autenticación con email/contraseña
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Mostrar error al usuario si la autenticación falla
      alert(error.message);
    } else {
      // Ir a la ruta principal de la app cuando el login sea exitoso
      navigate("/app");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Encabezado visual de la aplicación */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 text-center">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          ⚡ ViralHook
        </h1>
        <p className="text-sm opacity-90">
          Genera ganchos irresistibles para tus videos
        </p>
      </header>

      <div className="flex justify-center mt-16">
        <div className="w-[420px]">

          <h2 className="text-2xl text-center mb-8">Iniciar sesión</h2>

          {/* Input de email */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Correo Electrónico</label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Input de contraseña */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Contraseña</label>
            <input
              type="password"
              className="w-full border border-gray-400 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Enlace a Registro */}
          <p className="text-center text-sm mb-8">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-600">
              Click Aquí
            </Link>
          </p>

          {/* Botón de enviar formulario */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 font-semibold"
          >
            Iniciar Sesión
          </button>

        </div>
      </div>
    </div>
  );
}