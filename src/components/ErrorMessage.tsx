// Importa dos íconos desde la librería lucide-react
import { AlertCircle, X } from 'lucide-react';

// Define la interfaz de las propiedades (props) que recibirá el componente
interface ErrorMessageProps {
  title: string;      // Título del mensaje de error
  message: string;    // Descripción o detalle del error
  onClose: () => void; // Función que se ejecuta al cerrar el mensaje
}

// Componente funcional que muestra un mensaje de error
export default function ErrorMessage({ title, message, onClose }: ErrorMessageProps) {
  return (
    // Contenedor principal del mensaje de error
    <div className="mb-6 bg-red-50 border-l-4 border-red-500 rounded-lg p-4 sm:p-6 shadow-md animate-in slide-in-from-top-2 duration-300">
      
      {/* Contenedor flex para organizar los elementos horizontalmente */}
      <div className="flex items-start gap-4">
        
        {/* Contenedor del ícono de error */}
        <div className="flex-shrink-0">
          {/* Ícono de alerta */}
          <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-red-600 mt-0.5" />
        </div>

        {/* Contenedor del texto (título y mensaje) */}
        <div className="flex-1 min-w-0">
          
          {/* Título del error */}
          <h3 className="text-sm sm:text-base font-semibold text-red-800">
            {title}
          </h3>

          {/* Mensaje descriptivo del error */}
          <p className="text-xs sm:text-sm text-red-700 mt-1 break-words">
            {message}
          </p>
        </div>

        {/* Botón para cerrar el mensaje */}
        <button
          onClick={onClose} // Ejecuta la función onClose al hacer clic
          className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Cerrar" // Accesibilidad: describe la acción del botón
        >
          {/* Ícono de cerrar (X) */}
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}