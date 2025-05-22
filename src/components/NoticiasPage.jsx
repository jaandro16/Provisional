import React from 'react';

const NoticiasPage = () => {
  const noticias = [
    {
      id: 1,
      titulo: "IX Congreso Universidad y Cooperación al Desarrollo",
      fecha: "13 Noviembre 2024",
      categoria: "Eventos",
      resumen: "Student engagement in sustainable development and international cooperation through computer research projects ha sido aceptado en el IX Congreso Universidad y Cooperación al Desarrollo: Nuevos escenarios y retos que se celebrará en Alcalá de Henares del 27 al 29 de noviembre de 2024.",
      imagen: "🎓",
      color: "bg-blue-100 border-blue-300",
      etiqueta: "Importante"
    },
    {
      id: 2,
      titulo: "Texto Ejemplo 1",
      fecha: "10 Enero 2024",
      categoria: "Ejemplo",
      resumen: "Descripción 1 - Este es un ejemplo de noticia para probar el funcionamiento del componente.",
      imagen: "📝",
      color: "bg-green-100 border-green-300",
      etiqueta: "Ejemplo"
    },
    {
      id: 3,
      titulo: "Texto Ejemplo 2",
      fecha: "5 Enero 2024",
      categoria: "Ejemplo",
      resumen: "Descripción 2 - Otra noticia de ejemplo para verificar que todo funciona correctamente.",
      imagen: "🔧",
      color: "bg-purple-100 border-purple-300",
      etiqueta: "Ejemplo"
    },
    {
      id: 4,
      titulo: "Texto Ejemplo 3",
      fecha: "1 Enero 2024",
      categoria: "Ejemplo",
      resumen: "Descripción 3 - Tercera noticia de prueba para completar los ejemplos solicitados.",
      imagen: "⚙️",
      color: "bg-yellow-100 border-yellow-300",
      etiqueta: "Ejemplo"
    }
  ];

  const getEtiquetaColor = (etiqueta) => {
    switch (etiqueta) {
      case "Importante":
        return "bg-red-500";
      case "Ejemplo":
        return "bg-gray-600";
      case "Eventos":
        return "bg-blue-500";
      default:
        return "bg-gray-400";
    }
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
