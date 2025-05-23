import React, { useState } from 'react';
import {
  GraduationCap,
  FileText,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  Calendar,
  ArrowRight,
  Download,
  ExternalLink,
} from 'lucide-react';

const DocenciaSection = () => {
  const [activeTab, setActiveTab] = useState('grados');

  const grados = [
    {
      id: 1,
      nombre: 'Grado en Ingeniería Informática',
      creditos: 240,
      duracion: '4 años',
      modalidad: 'Presencial',
      plazas: 120,
      descripcion:
        'Formación integral en desarrollo de software, sistemas y tecnologías de la información.',
      competencias: [
        'Programación',
        'Bases de datos',
        'Redes',
        'Inteligencia Artificial',
      ],
    },
    {
      id: 2,
      nombre: 'Grado en Ciencia de Datos',
      creditos: 240,
      duracion: '4 años',
      modalidad: 'Presencial',
      plazas: 80,
      descripcion:
        'Especialización en análisis de datos, machine learning y visualización de información.',
      competencias: ['Estadística', 'Python/R', 'Big Data', 'Visualización'],
    },
    {
      id: 3,
      nombre: 'Grado en Ciberseguridad',
      creditos: 240,
      duracion: '4 años',
      modalidad: 'Presencial',
      plazas: 60,
      descripcion:
        'Formación especializada en seguridad informática y protección de sistemas.',
      competencias: [
        'Ethical Hacking',
        'Criptografía',
        'Auditoría',
        'Forense Digital',
      ],
    },
    {
      id: 4,
      nombre: 'Grado en Sistemas de Información',
      creditos: 240,
      duracion: '4 años',
      modalidad: 'Semipresencial',
      plazas: 100,
      descripcion:
        'Gestión y administración de sistemas de información empresariales.',
      competencias: [
        'ERP',
        'Business Intelligence',
        'Gestión de Proyectos',
        'Consultoría',
      ],
    },
  ];

  const tfgTfmData = {
    tfg: {
      descripcion:
        'Los Trabajos Fin de Grado permiten a los estudiantes aplicar los conocimientos adquiridos en un proyecto de investigación o desarrollo.',
      lineas: [
        'Desarrollo de Software',
        'Inteligencia Artificial',
        'Ciberseguridad',
        'Ciencia de Datos',
        'Sistemas Distribuidos',
      ],
      documentos: [
        { nombre: 'Normativa TFG', tipo: 'PDF' },
        { nombre: 'Plantilla Memoria', tipo: 'DOCX' },
        { nombre: 'Rúbrica Evaluación', tipo: 'PDF' },
      ],
    },
    tfm: {
      descripcion:
        'Los Trabajos Fin de Máster profundizan en áreas específicas con mayor nivel de especialización e investigación.',
      lineas: [
        'Machine Learning Avanzado',
        'Arquitecturas de Software',
        'Seguridad Avanzada',
        'Computación Cuántica',
        'IoT y Edge Computing',
      ],
      documentos: [
        { nombre: 'Normativa TFM', tipo: 'PDF' },
        { nombre: 'Plantilla Memoria', tipo: 'DOCX' },
        { nombre: 'Guía Metodológica', tipo: 'PDF' },
      ],
    },
  };

  const innovacionProyectos = [
    {
      titulo: 'Aulas Virtuales Inmersivas',
      descripcion:
        'Implementación de realidad virtual para prácticas de laboratorio',
      estado: 'En desarrollo',
      participantes: 8,
    },
    {
      titulo: 'Gamificación en Programación',
      descripcion:
        'Sistema de logros y competiciones para motivar el aprendizaje',
      estado: 'Completado',
      participantes: 12,
    },
    {
      titulo: 'IA para Evaluación Automática',
      descripcion: 'Herramientas de corrección automática de código',
      estado: 'Piloto',
      participantes: 5,
    },
  ];

  const tabs = [
    { id: 'grados', label: 'Grados y Estudios', icon: GraduationCap },
    { id: 'tfg-tfm', label: 'TFG/TFM', icon: FileText },
    { id: 'innovacion', label: 'Innovación Educativa', icon: Lightbulb },
  ];

  const renderGrados = () => (
    <div className='space-y-6'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Grados Ofertados
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Nuestro departamento ofrece una formación de calidad en las áreas más
          demandadas de la tecnología actual.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {grados.map((grado) => (
          <div
            key={grado.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
          >
            <div className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold text-gray-800'>
                  {grado.nombre}
                </h3>
                <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  {grado.modalidad}
                </span>
              </div>

              <p className='text-gray-600 mb-4'>{grado.descripcion}</p>

              <div className='grid grid-cols-3 gap-4 mb-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-600'>
                    {grado.creditos}
                  </div>
                  <div className='text-sm text-gray-500'>Créditos</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>
                    {grado.duracion}
                  </div>
                  <div className='text-sm text-gray-500'>Duración</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-purple-600'>
                    {grado.plazas}
                  </div>
                  <div className='text-sm text-gray-500'>Plazas</div>
                </div>
              </div>

              <div className='mb-4'>
                <h4 className='font-semibold text-gray-700 mb-2'>
                  Competencias principales:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {grado.competencias.map((comp, idx) => (
                    <span
                      key={idx}
                      className='bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full'
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex gap-3'>
                <button className='flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'>
                  <BookOpen size={16} />
                  Plan de Estudios
                </button>
                <button className='flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
                  <ExternalLink size={16} />
                  Más Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTFGTFM = () => (
    <div className='space-y-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Trabajos Fin de Estudios
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Culmina tu formación con un proyecto que demuestre tus competencias y
          conocimientos adquiridos.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* TFG */}
        <div className='bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='bg-blue-600 rounded-lg p-2'>
              <GraduationCap className='text-white' size={24} />
            </div>
            <h3 className='text-2xl font-bold text-gray-800'>
              Trabajo Fin de Grado
            </h3>
          </div>

          <p className='text-gray-700 mb-6'>{tfgTfmData.tfg.descripcion}</p>

          <div className='space-y-4'>
            <div>
              <h4 className='font-semibold text-gray-800 mb-2'>
                Líneas de Investigación:
              </h4>
              <div className='space-y-2'>
                {tfgTfmData.tfg.lineas.map((linea, idx) => (
                  <div key={idx} className='flex items-center gap-2'>
                    <ArrowRight size={16} className='text-blue-600' />
                    <span className='text-gray-700'>{linea}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className='font-semibold text-gray-800 mb-2'>Documentos:</h4>
              <div className='space-y-2'>
                {tfgTfmData.tfg.documentos.map((doc, idx) => (
                  <button
                    key={idx}
                    className='flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors'
                  >
                    <Download size={16} />
                    <span>{doc.nombre}</span>
                    <span className='text-xs bg-gray-200 px-2 py-1 rounded'>
                      {doc.tipo}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TFM */}
        <div className='bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 border border-purple-200'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='bg-purple-600 rounded-lg p-2'>
              <Award className='text-white' size={24} />
            </div>
            <h3 className='text-2xl font-bold text-gray-800'>
              Trabajo Fin de Máster
            </h3>
          </div>

          <p className='text-gray-700 mb-6'>{tfgTfmData.tfm.descripcion}</p>

          <div className='space-y-4'>
            <div>
              <h4 className='font-semibold text-gray-800 mb-2'>
                Líneas de Investigación:
              </h4>
              <div className='space-y-2'>
                {tfgTfmData.tfm.lineas.map((linea, idx) => (
                  <div key={idx} className='flex items-center gap-2'>
                    <ArrowRight size={16} className='text-purple-600' />
                    <span className='text-gray-700'>{linea}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className='font-semibold text-gray-800 mb-2'>Documentos:</h4>
              <div className='space-y-2'>
                {tfgTfmData.tfm.documentos.map((doc, idx) => (
                  <button
                    key={idx}
                    className='flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors'
                  >
                    <Download size={16} />
                    <span>{doc.nombre}</span>
                    <span className='text-xs bg-gray-200 px-2 py-1 rounded'>
                      {doc.tipo}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendario */}
      <div className='bg-white rounded-xl shadow-lg p-6 border border-gray-100'>
        <div className='flex items-center gap-3 mb-4'>
          <Calendar className='text-orange-600' size={24} />
          <h3 className='text-xl font-bold text-gray-800'>
            Calendario Académico
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-orange-50 p-4 rounded-lg'>
            <h4 className='font-semibold text-orange-800'>
              Convocatoria Ordinaria
            </h4>
            <p className='text-sm text-gray-600 mt-1'>Junio 2025</p>
            <p className='text-xs text-gray-500 mt-2'>Entrega: 15 de mayo</p>
          </div>
          <div className='bg-green-50 p-4 rounded-lg'>
            <h4 className='font-semibold text-green-800'>
              Convocatoria Extraordinaria
            </h4>
            <p className='text-sm text-gray-600 mt-1'>Septiembre 2025</p>
            <p className='text-xs text-gray-500 mt-2'>
              Entrega: 1 de septiembre
            </p>
          </div>
          <div className='bg-blue-50 p-4 rounded-lg'>
            <h4 className='font-semibold text-blue-800'>
              Asignación de Directores
            </h4>
            <p className='text-sm text-gray-600 mt-1'>Marzo 2025</p>
            <p className='text-xs text-gray-500 mt-2'>
              Solicitud hasta: 15 de marzo
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInnovacion = () => (
    <div className='space-y-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Innovación Educativa
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Mejoramos continuamente nuestras metodologías docentes para ofrecer
          una educación de vanguardia.
        </p>
      </div>

      {/* Proyectos Activos */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {innovacionProyectos.map((proyecto, idx) => (
          <div
            key={idx}
            className='bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300'
          >
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-lg font-bold text-gray-800'>
                {proyecto.titulo}
              </h3>
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  proyecto.estado === 'Completado'
                    ? 'bg-green-100 text-green-800'
                    : proyecto.estado === 'En desarrollo'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {proyecto.estado}
              </span>
            </div>

            <p className='text-gray-600 mb-4'>{proyecto.descripcion}</p>

            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <Users size={16} />
              <span>{proyecto.participantes} participantes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Metodologías */}
      <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200'>
        <h3 className='text-2xl font-bold text-gray-800 mb-6'>
          Metodologías Implementadas
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <Lightbulb className='text-green-600' size={24} />
            </div>
            <h4 className='font-semibold text-gray-800'>
              Aprendizaje Basado en Proyectos
            </h4>
            <p className='text-sm text-gray-600 mt-1'>
              Proyectos reales para aplicar conocimientos
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <Users className='text-blue-600' size={24} />
            </div>
            <h4 className='font-semibold text-gray-800'>
              Trabajo Colaborativo
            </h4>
            <p className='text-sm text-gray-600 mt-1'>
              Equipos multidisciplinarios
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <BookOpen className='text-purple-600' size={24} />
            </div>
            <h4 className='font-semibold text-gray-800'>Flipped Classroom</h4>
            <p className='text-sm text-gray-600 mt-1'>
              Teoría en casa, práctica en clase
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <Award className='text-orange-600' size={24} />
            </div>
            <h4 className='font-semibold text-gray-800'>Gamificación</h4>
            <p className='text-sm text-gray-600 mt-1'>
              Elementos de juego para motivar
            </p>
          </div>
        </div>
      </div>

      {/* Recursos */}
      <div className='bg-white rounded-xl shadow-lg p-6 border border-gray-100'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>
          Recursos y Herramientas
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='bg-blue-100 rounded p-2'>
              <ExternalLink className='text-blue-600' size={16} />
            </div>
            <div>
              <h4 className='font-medium text-gray-800'>Plataforma Virtual</h4>
              <p className='text-sm text-gray-600'>Moodle personalizado</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='bg-green-100 rounded p-2'>
              <Download className='text-green-600' size={16} />
            </div>
            <div>
              <h4 className='font-medium text-gray-800'>
                Repositorio de Recursos
              </h4>
              <p className='text-sm text-gray-600'>Materiales descargables</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='bg-purple-100 rounded p-2'>
              <Users className='text-purple-600' size={16} />
            </div>
            <div>
              <h4 className='font-medium text-gray-800'>Comunidad Docente</h4>
              <p className='text-sm text-gray-600'>
                Intercambio de experiencias
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='bg-orange-100 rounded p-2'>
              <Calendar className='text-orange-600' size={16} />
            </div>
            <div>
              <h4 className='font-medium text-gray-800'>
                Eventos y Seminarios
              </h4>
              <p className='text-sm text-gray-600'>Formación continua</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 py-6'>
          <h1 className='text-4xl font-bold text-gray-900'>Docencia</h1>
          <p className='text-lg text-gray-600 mt-2'>
            Departamento de Informática y Tecnología
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <nav className='flex space-x-8'>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {activeTab === 'grados' && renderGrados()}
        {activeTab === 'tfg-tfm' && renderTFGTFM()}
        {activeTab === 'innovacion' && renderInnovacion()}
      </div>
    </div>
  );
};

export default DocenciaSection;
