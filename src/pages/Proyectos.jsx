import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Proyectos = () => {
  // Estados para manejar los filtros, proyectos y la navegación
  const [filtro, setFiltro] = useState('todos');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [paginaActual, setPaginaActual] = useState(0);
  const proyectosPorPagina = 6;

  // Datos de proyectos (como ejemplo estático - en producción podrían venir de una API)
  const proyectosData = [
    {
      id: 1,
      titulo:
        'Inteligencia artificial aplicada a la investigación desarrollada en la Escuela Técnica Superior de Ingenieros Industriales',
      imagen: '/api/placeholder/600/400',
      estado: 'terminado',
      detalles: {
        duracion: '2023-2024',
        financiacion: '3.000 euros',
        participantes:
          'Ángel García Beltrán, Francisco Javier del Álamo Lobo, Javier Rodríguez Vidal y Pablo Manuel Vigara Gallego.',
        codigo: 'ETSII-UPM24-PU03',
        laboratorio: 'LABI',
        investigador: 'Ascensión López Vargas',
        tipo: 'Investigación',
        entidad:
          'Convocatoria de Ayudas de Investigación 2024 de la Escuela Técnica Superior de Ingenieros Industriales de la Universidad Politécnica de Madrid.',
      },
    },
    {
      id: 2,
      titulo:
        'Uso de inteligencias artificiales generativas en el aprendizaje de la programación de ordenadores',
      imagen: '/api/placeholder/600/400',
      estado: 'terminado',
      detalles: {
        duracion: '2023-2024',
        financiacion: '1745 euros',
        participantes:
          'Francisco Javier del Álamo Lobo, Javier Rodríguez Vidal, Pablo Manuel Vigara Gallego, Julio Antonio Martin Erro y Juan Antonio Criado Manso',
        codigo: 'IE24.0504',
        laboratorio: 'LABI',
        investigador: 'Ángel García Beltrán y Ascensión López Vargas',
        tipo: 'Innovación educativa',
        entidad:
          'Convocatoria 2023-2024 de "Proyectos de Innovación Educativa y Mejora de la Calidad de la Enseñanza". Universidad Politécnica de Madrid.',
      },
    },
  ];

  // Filtrar proyectos según el filtro seleccionado
  const proyectosFiltrados = proyectosData.filter((proyecto) => {
    if (filtro === 'todos') return true;
    if (filtro === 'terminados') return proyecto.estado === 'terminado';
    if (filtro === 'noTerminados') return proyecto.estado !== 'terminado';
    return true;
  });

  // Calcular número total de páginas
  const totalPaginas = Math.ceil(
    proyectosFiltrados.length / proyectosPorPagina
  );

  // Obtener proyectos para la página actual
  const proyectosPagina = proyectosFiltrados.slice(
    paginaActual * proyectosPorPagina,
    (paginaActual + 1) * proyectosPorPagina
  );

  // Componente de miniatura del proyecto
  const ProyectoMiniatura = ({ proyecto, onClick }) => {
    return (
      <div
        className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105'
        onClick={onClick}
      >
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className='w-full h-48 object-cover'
        />
        <div className='p-4'>
          <h3 className='font-bold text-lg mb-2 line-clamp-2'>
            {proyecto.titulo}
          </h3>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600 text-sm'>
              {proyecto.detalles.tipo}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                proyecto.estado === 'terminado'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {proyecto.estado === 'terminado' ? 'Terminado' : 'En progreso'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Componente de detalle del proyecto
  const DetalleProyecto = ({ proyecto, onClose }) => {
    if (!proyecto) return null;

    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
        <div className='bg-white rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto'>
          <div className='relative'>
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className='w-full h-64 object-cover'
            />
            <button
              onClick={onClose}
              className='absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>

          <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4 text-blue-900'>
              {proyecto.titulo}
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
              <div className='bg-gray-50 p-3 rounded'>
                <span className='font-bold'>Duración:</span>{' '}
                {proyecto.detalles.duracion}
              </div>
              <div className='bg-gray-50 p-3 rounded'>
                <span className='font-bold'>Financiación:</span>{' '}
                {proyecto.detalles.financiacion}
              </div>
              <div className='bg-gray-50 p-3 rounded'>
                <span className='font-bold'>Código proyecto:</span>{' '}
                {proyecto.detalles.codigo}
              </div>
              <div className='bg-gray-50 p-3 rounded'>
                <span className='font-bold'>Laboratorio:</span>{' '}
                {proyecto.detalles.laboratorio}
              </div>
              <div className='bg-gray-50 p-3 rounded'>
                <span className='font-bold'>Tipo proyecto:</span>{' '}
                {proyecto.detalles.tipo}
              </div>
              <div className='bg-gray-50 p-3 rounded'>
                <span className='font-bold'>Estado:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    proyecto.estado === 'terminado'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {proyecto.estado === 'terminado'
                    ? 'Terminado'
                    : 'En progreso'}
                </span>
              </div>
            </div>

            <div className='mb-6'>
              <h3 className='text-lg font-bold mb-2'>
                Participantes del equipo:
              </h3>
              <p className='bg-gray-50 p-3 rounded'>
                {proyecto.detalles.participantes}
              </p>
            </div>

            <div className='mb-6'>
              <h3 className='text-lg font-bold mb-2'>
                Investigador profesional:
              </h3>
              <p className='bg-gray-50 p-3 rounded'>
                {proyecto.detalles.investigador}
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold mb-2'>Entidad financiadora:</h3>
              <p className='bg-gray-50 p-3 rounded'>
                {proyecto.detalles.entidad}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='relative'>
      <div className='w-full bg-gray-50 py-16 mt-40 relative min-h-[500px] md:min-h-[400px]'>
        <div className='container mx-auto px-4 md:px-8'>
          {/* Encabezado de la sección */}
          <div className='mb-10'>
            <h2 className="font-['Work_Sans'] text-black font-semibold text-3xl md:text-4xl mb-4 text-left">
              Proyectos
            </h2>
            <p className="font-['Open_Sans'] text-black text-lg mb-8 text-left">
              Descubre nuestros proyectos de investigación e innovación.
            </p>
          </div>

          {/* Filtros */}
          <div className='mb-8 flex'>
            <div className='inline-flex rounded-md shadow-sm bg-white'>
              <button
                onClick={() => setFiltro('todos')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filtro === 'todos'
                    ? 'bg-[#A66300] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Ver todos
              </button>
              <button
                onClick={() => setFiltro('terminados')}
                className={`px-4 py-2 text-sm font-medium ${
                  filtro === 'terminados'
                    ? 'bg-[#A66300] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Terminados
              </button>
              <button
                onClick={() => setFiltro('noTerminados')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filtro === 'noTerminados'
                    ? 'bg-[#A66300] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                No terminados
              </button>
            </div>
          </div>

          {/* Grid de proyectos */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {proyectosPagina.map((proyecto) => (
              <ProyectoMiniatura
                key={proyecto.id}
                proyecto={proyecto}
                onClick={() => setProyectoSeleccionado(proyecto)}
              />
            ))}
          </div>

          {/* Paginación */}
          {totalPaginas > 1 && (
            <div className='flex justify-center items-center mt-8'>
              <button
                onClick={() => setPaginaActual((prev) => Math.max(0, prev - 1))}
                disabled={paginaActual === 0}
                className='p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 mr-4'
              >
                <ArrowLeft size={20} />
              </button>

              <div className='text-sm font-medium'>
                Página {paginaActual + 1} de {totalPaginas}
              </div>

              <button
                onClick={() =>
                  setPaginaActual((prev) =>
                    Math.min(totalPaginas - 1, prev + 1)
                  )
                }
                disabled={paginaActual === totalPaginas - 1}
                className='p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 ml-4'
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}

          {/* Si no hay proyectos que mostrar */}
          {proyectosPagina.length === 0 && (
            <div className='text-center py-12'>
              <h3 className='text-xl font-medium text-gray-500'>
                No hay proyectos que coincidan con el filtro seleccionado
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalle del proyecto */}
      {proyectoSeleccionado && (
        <DetalleProyecto
          proyecto={proyectoSeleccionado}
          onClose={() => setProyectoSeleccionado(null)}
        />
      )}
    </div>
  );
};

export default Proyectos;
