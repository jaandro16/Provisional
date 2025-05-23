import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Filter } from 'lucide-react';

const NoticiasPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filtroActivo, setFiltroActivo] = useState('Todas');

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

  const categorias = ['Todas', 'Colaboraciones', 'Eventos', 'Publicaciones', 'Reconocimientos'];

  // Filtrar noticias
  const noticiasFiltradas = filtroActivo === 'Todas' 
    ? noticias 
    : noticias.filter(noticia => noticia.categoria === filtroActivo);

  // Auto-play del slider (solo si hay noticias filtradas)
  useEffect(() => {
    if (isAutoPlaying && noticiasFiltradas.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % noticiasFiltradas.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, noticiasFiltradas.length]);

  // Reset slide cuando cambie el filtro
  useEffect(() => {
    setCurrentSlide(0);
  }, [filtroActivo]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % noticiasFiltradas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + noticiasFiltradas.length) % noticiasFiltradas.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filtroActivo === categoria
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Slider de noticias */}
        {noticiasFiltradas.length > 0 ? (
          <div 
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Contenedor del slider */}
            <div className="relative h-[500px] md:h-[400px]">
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {noticiasFiltradas.map((noticia, index) => (
                  <div key={noticia.id} className="w-full flex-shrink-0 flex flex-col md:flex-row h-full">
                    {/* Lado izquierdo - Contenido */}
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl md:text-5xl">{noticia.imagen}</span>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className={`${getEtiquetaColor(noticia.etiqueta)} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                            {noticia.etiqueta}
                          </span>
                          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                            {noticia.categoria}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {noticia.fecha}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {noticia.titulo}
                      </h2>
                      
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        {noticia.resumen}
                      </p>
                      
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-base flex items-center group w-fit">
                        Leer más 
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </div>

                    {/* Lado derecho - Decoración visual */}
                    <div className={`md:w-1/3 ${noticia.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-8xl md:text-9xl opacity-20 transform rotate-12">
                        {noticia.imagen}
                      </div>
                      {/* Patrón decorativo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles de navegación */}
              {noticiasFiltradas.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                  >
                    <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
                  >
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </>
              )}
            </div>

            {/* Indicadores */}
            {noticiasFiltradas.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {noticiasFiltradas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Barra de progreso */}
            {noticiasFiltradas.length > 1 && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / noticiasFiltradas.length) * 100}%` }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-lg mb-12">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No hay noticias para mostrar en esta categoría</p>
          </div>
        )}




      </div>
    </div>
  );
};

export default NoticiasPage;