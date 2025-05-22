import React from 'react';

const InvestigacionPage = () => {
  const investigacionAreas = [
    {
      id: 1,
      titulo: "Inteligencia Artificial",
      descripcion: "Desarrollo de algoritmos de machine learning y deep learning aplicados a la industria.",
      icono: "🤖",
      color: "bg-blue-100 border-blue-300"
    },
    {
      id: 2,
      titulo: "Internet de las Cosas (IoT)",
      descripcion: "Sistemas conectados para monitoreo y control industrial en tiempo real.",
      icono: "🌐",
      color: "bg-green-100 border-green-300"
    },
    {
      id: 3,
      titulo: "Robótica Industrial",
      descripcion: "Diseño y programación de sistemas robóticos para automatización de procesos.",
      icono: "🦾",
      color: "bg-purple-100 border-purple-300"
    },
    {
      id: 4,
      titulo: "Sistemas Embebidos",
      descripcion: "Desarrollo de hardware y software para sistemas de control industrial.",
      icono: "⚡",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      id: 5,
      titulo: "Ciberseguridad Industrial",
      descripcion: "Protección de infraestructuras críticas y sistemas de control industrial.",
      icono: "🔒",
      color: "bg-red-100 border-red-300"
    },
    {
      id: 6,
      titulo: "Realidad Aumentada",
      descripcion: "Aplicaciones de AR/VR para entrenamiento y mantenimiento industrial.",
      icono: "🥽",
      color: "bg-indigo-100 border-indigo-300"
    },
    {
      id: 7,
      titulo: "Big Data Industrial",
      descripcion: "Análisis de grandes volúmenes de datos para optimización de procesos.",
      icono: "📊",
      color: "bg-teal-100 border-teal-300"
    },
    {
      id: 8,
      titulo: "Energías Renovables",
      descripcion: "Sistemas inteligentes para gestión y optimización de energías limpias.",
      icono: "🔋",
      color: "bg-orange-100 border-orange-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Áreas de Investigación
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las diferentes líneas de investigación que desarrollamos en la 
            Unidad Docente de Informática Industrial
          </p>
        </div>

        {/* Grid de recuadros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {investigacionAreas.map((area) => (
            <div
              key={area.id}
              className={`${area.color} border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105`}
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-3 block">{area.icono}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {area.titulo}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {area.descripcion}
              </p>
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Ver más →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Interesado en Colaborar?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si eres estudiante, investigador o empresa y estás interesado en 
              colaborar con alguna de nuestras líneas de investigación, no dudes en contactarnos.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigacionPage;