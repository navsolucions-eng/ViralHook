// Importa íconos desde lucide-react
import { Copy, Check } from 'lucide-react';

// Importa useState para manejar estado local
import { useState } from 'react';

// Define las props que recibe el componente
interface ResultCardProps {
  hook: string;  // Texto del gancho generado
  index: number; // Índice del gancho (para numerarlo)
}

// Componente que muestra un gancho individual con opción de copiar
export default function ResultCard({ hook, index }: ResultCardProps) {

  // Estado para saber si el texto ya fue copiado
  const [copied, setCopied] = useState(false);

  // Función que maneja la copia al portapapeles
  const handleCopy = async () => {

    // Copia el texto del gancho al portapapeles del usuario
    await navigator.clipboard.writeText(hook);

    // Cambia el estado a "copiado"
    setCopied(true);

    // Después de 2 segundos vuelve al estado original
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Contenedor principal de la tarjeta
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
      
      {/* Contenedor del contenido */}
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        
        {/* Contenedor del texto */}
        <div className="flex-1 min-w-0">
          
          {/* Etiqueta con número del gancho */}
          <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 whitespace-nowrap">
            Gancho #{index + 1}
          </div>

          {/* Texto del gancho */}
          <p className="text-gray-800 text-sm sm:text-lg leading-relaxed font-medium break-words">
            {hook}
          </p>
        </div>
      </div>

      {/* Botón para copiar el gancho */}
      <button
        onClick={handleCopy} // Ejecuta la función de copia
        className="mt-3 sm:mt-4 w-full bg-white border-2 border-gray-300 text-gray-700 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-50 hover:border-blue-500 transition-all duration-200 flex items-center justify-center gap-2"
      >
        {/* Renderizado condicional según si ya se copió */}
        {copied ? (
          <>
            {/* Ícono de confirmación */}
            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />

            {/* Texto de confirmación */}
            <span className="text-green-600">Copiado</span>
          </>
        ) : (
          <>
            {/* TODO: Mantenimiento - Integrar botón para guardar en la base de datos */}

            {/* Ícono de copiar */}
            <Copy className="w-4 h-4 flex-shrink-0" />

            {/* Texto del botón */}
            Copiar
          </>
        )}
      </button>
    </div>
  );
}