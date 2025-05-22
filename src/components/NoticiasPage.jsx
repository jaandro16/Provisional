import React from 'react';

const NoticiasPage = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Nueva Colaboración con Tesla",
      fecha: "15 Marzo 2024",
      categoria: "Colaboraciones",
      resumen: "Iniciamos un proyecto conjunto para el desarrollo de sistemas de conducción autónoma.",
      imagen: "🚗",
      color: "bg-blue-100 border-blue-300",
      etiqueta: "Importante"
    },
    {
      id: 2,
      titulo: "Conferencia Internacional de IA",
      fecha: "10 Marzo 2024",
      categoria: "Eventos",
      resumen: "Presentamos nuestros avances en machine learning aplicado a la industria 4.0.",
      imagen: "🎤",
      color: "bg-green-100 border-green-300",
      etiqueta: "Evento"
    },
    {
      id: 3,
      titulo: "Nuevo Laboratorio de Robótica",
      fecha: "5 Marzo 2024",
      categoria: "Infraestructura",
      resumen: "Inauguramos un laboratorio equipado con la última tecnología en robótica industrial.",
      imagen: "🏗️",
      color: "bg-purple-100 border-purple-300",
      etiqueta: "Novedad"
    },
    {
      id: 4,
      titulo: "Beca de Investigación Aprobada",
      fecha: "28 Febrero 2024",
      categoria: "Financiación",
      resumen: "Obtenemos financiación europea para investigar en ciberseguridad industrial.",
      imagen: "💰",
      color: "bg-yellow-100 border-yellow-300",
      etiqueta: "Logro"
    },
    {
      id: 5,
      titulo: "Publicación en Nature",
      fecha: "20 Febrero 2024",
      categoria: "Publicaciones",
      resumen: "Nuestro artículo sobre IoT industrial es aceptado en la prestigiosa revista Nature.",
      imagen: "📖",
      color: "bg-red-100 border-red-300",
      etiqueta: "Destacado"
    },
    {
      id: 6,
      titulo: "Workshop de Realidad Aumentada",
      fecha: "15 Febrero 2024",
      categoria: "Formación",
      resumen: "Taller práctico sobre aplicaciones de AR en mantenimiento industrial.",
      imagen: "🥽",
      color: "bg-indigo-100 border-indigo-300",
      etiqueta: "Formación"
    },
    {
      id: 7,
      titulo: "Premio a la Innovación",
      fecha: "10 Febrero 2024",
      categoria: "Reconocimientos",
      resumen: "Reconocimiento por nuestro sistema de predicción de fallos en maquinaria.",
      imagen: "🏆",
      color: "bg-teal-100 border-teal-300",
      etiqueta: "Premio"
    },
    {
      id: 8,
      titulo: "Alianza con Siemens",
      fecha: "5 Febrero 2024",
      categoria: "Partnerships",
      resumen: "Acuerdo estratégico para el desarrollo de soluciones de automatización.",
      imagen: "🤝",
      color: "bg-orange-100 border-orange-300",
      etiqueta: "Alianza"
    }
  ];

  const getEtiquetaColor = (etiqueta) => {
    const colores = {
      'Importante': 'bg-red-500',
      'Evento': 'bg-blue-500',
      'Novedad': 'bg-green-500',
      'Logro': 'bg-yellow-500',
      'Destacado': 'bg-purple-500',
      'Formación': 'bg-indigo-500',
      'Premio': 'bg-pink-500',
      'Alianza': 'bg-teal-500'
    };
    return colores[etiqueta] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Noticias y Eventos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades, logros y eventos de la 
            Unidad Docente de Informática Industrial
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors">
            Todas
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors border">
            Colaboraciones
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors border">
            Eventos
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors border">
            Publicaciones
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors border">
            Reconocimientos
          </button>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className={`${noticia.color} border-2 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105`}
            >
              {/* Header de la tarjeta */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{noticia.imagen}</span>
                  <span className={`${getEtiquetaColor(noticia.etiqueta)} text-white text-xs px-2 py-1 rounded-full`}>
                    {noticia.etiqueta}
                  </span>
                </div>
                
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">{noticia.fecha}</p>
                  <span className="text-xs bg-white px-2 py-1 rounded text-gray-700">
                    {noticia.categoria}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {noticia.titulo}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {noticia.resumen}
                </p>
                
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón cargar más */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            Cargar más noticias
          </button>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              📧 Suscríbete a nuestro Newsletter
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Recibe las últimas noticias y eventos directamente en tu correo electrónico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;