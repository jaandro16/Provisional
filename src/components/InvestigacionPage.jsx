import React, { useState } from 'react';
import {
  Search,
  FileText,
  Users,
  Lightbulb,
  Award,
  Calendar,
  ArrowRight,
  Download,
  ExternalLink,
  Eye,
  Star,
  GitBranch,
  BookOpen,
  Target,
  TrendingUp,
} from 'lucide-react';

const InvestigacionSection = () => {
  const [activeTab, setActiveTab] = useState('proyectos');

  const proyectos = [
    {
      id: 1,
      titulo: 'Sistema de IA para Diagnóstico Médico',
      investigadorPrincipal: 'Dr. María González',
      duracion: '2023-2026',
      presupuesto: '150.000€',
      estado: 'En curso',
      organizacion: 'Ministerio de Ciencia',
      descripcion:
        'Desarrollo de algoritmos de machine learning para el diagnóstico temprano de enfermedades cardiovasculares.',
      participantes: [
        'Dr. María González',
        'Dr. Juan Pérez',
        'Dra. Ana López',
        'Ing. Carlos Ruiz',
      ],
      publicaciones: 3,
      lineasRelacionadas: ['Inteligencia Artificial', 'Salud Digital'],
    },
    {
      id: 2,
      titulo: 'Ciberseguridad en IoT Industrial',
      investigadorPrincipal: 'Dr. Pedro Martín',
      duracion: '2024-2027',
      presupuesto: '200.000€',
      estado: 'En curso',
      organizacion: 'Unión Europea - Horizonte Europa',
      descripcion:
        'Implementación de protocolos de seguridad avanzados para dispositivos IoT en entornos industriales.',
      participantes: [
        'Dr. Pedro Martín',
        'Dra. Laura Sánchez',
        'Ing. Miguel Torres',
        'Dr. Francisco Vila',
      ],
      publicaciones: 2,
      lineasRelacionadas: ['Ciberseguridad', 'Internet de las Cosas'],
    },
    {
      id: 3,
      titulo: 'Blockchain para Trazabilidad Alimentaria',
      investigadorPrincipal: 'Dra. Carmen Jiménez',
      duracion: '2022-2025',
      presupuesto: '120.000€',
      estado: 'Finalizado',
      organizacion: 'Junta de Andalucía',
      descripcion:
        'Sistema descentralizado para el seguimiento de la cadena alimentaria mediante tecnología blockchain.',
      participantes: [
        'Dra. Carmen Jiménez',
        'Dr. Roberto García',
        'Ing. Sofía Morales',
      ],
      publicaciones: 5,
      lineasRelacionadas: ['Blockchain', 'Sistemas Distribuidos'],
    },
    {
      id: 4,
      titulo: 'Computación Cuántica Aplicada',
      investigadorPrincipal: 'Dr. Alejandro Ruiz',
      duracion: '2024-2028',
      presupuesto: '300.000€',
      estado: 'En curso',
      organizacion: 'Ministerio de Ciencia',
      descripcion:
        'Investigación en algoritmos cuánticos para optimización de problemas complejos en logística.',
      participantes: [
        'Dr. Alejandro Ruiz',
        'Dra. Isabel Fernández',
        'Dr. David Castro',
      ],
      publicaciones: 1,
      lineasRelacionadas: ['Computación Cuántica', 'Optimización'],
    },
  ];

  const publicaciones = [
    {
      id: 1,
      titulo: 'Deep Learning Approaches for Early Disease Detection',
      autores: ['M. González', 'J. Pérez', 'A. López'],
      revista: 'Nature Machine Intelligence',
      año: 2024,
      impacto: 'Q1',
      citas: 45,
      tipo: 'Artículo de revista',
      enlace: '#',
      resumen:
        'Nuevo enfoque de deep learning que mejora la precisión del diagnóstico temprano en un 15%.',
    },
    {
      id: 2,
      titulo: 'Security Protocols for Industrial IoT Networks',
      autores: ['P. Martín', 'L. Sánchez', 'M. Torres'],
      revista: 'IEEE Transactions on Industrial Informatics',
      año: 2024,
      impacto: 'Q1',
      citas: 32,
      tipo: 'Artículo de revista',
      enlace: '#',
      resumen:
        'Protocolo innovador que reduce vulnerabilidades en redes IoT industriales.',
    },
    {
      id: 3,
      titulo: 'Blockchain-Based Food Traceability System',
      autores: ['C. Jiménez', 'R. García', 'S. Morales'],
      revista: 'Food Control',
      año: 2023,
      impacto: 'Q1',
      citas: 78,
      tipo: 'Artículo de revista',
      enlace: '#',
      resumen:
        'Sistema completo de trazabilidad alimentaria con eficiencia del 98%.',
    },
    {
      id: 4,
      titulo: 'Quantum Algorithms for Logistics Optimization',
      autores: ['A. Ruiz', 'I. Fernández'],
      revista: 'Quantum Information Processing',
      año: 2024,
      impacto: 'Q2',
      citas: 12,
      tipo: 'Artículo de revista',
      enlace: '#',
      resumen:
        'Algoritmos cuánticos que optimizan rutas logísticas con ventaja cuántica demostrada.',
    },
    {
      id: 5,
      titulo: 'AI Ethics in Healthcare Applications',
      autores: ['M. González', 'P. Martín', 'C. Jiménez'],
      revista: 'Proceedings of ICML 2024',
      año: 2024,
      impacto: 'Conferencia A*',
      citas: 23,
      tipo: 'Conferencia',
      enlace: '#',
      resumen:
        'Marco ético para la implementación de IA en aplicaciones médicas.',
    },
    {
      id: 6,
      titulo: 'Edge Computing for Real-time Data Processing',
      autores: ['L. Sánchez', 'M. Torres', 'F. Vila'],
      revista: 'ACM Computing Surveys',
      año: 2023,
      impacto: 'Q1',
      citas: 89,
      tipo: 'Survey',
      enlace: '#',
      resumen:
        'Revisión exhaustiva de técnicas de edge computing para procesamiento en tiempo real.',
    },
  ];

  const lineasInvestigacion = [
    {
      id: 1,
      nombre: 'Inteligencia Artificial y Machine Learning',
      responsable: 'Dr. María González',
      miembros: 8,
      proyectosActivos: 3,
      descripcion:
        'Desarrollo de algoritmos avanzados de IA para aplicaciones en salud, industria y sociedad.',
      sublineas: [
        'Deep Learning',
        'Computer Vision',
        'Procesamiento de Lenguaje Natural',
        'IA Explicable',
      ],
      colaboraciones: ['Hospital Universitario', 'IBM Research', 'Google AI'],
      logros: [
        'Premio Nacional de Investigación 2023',
        '5 patentes registradas',
        '25 publicaciones Q1',
      ],
    },
    {
      id: 2,
      nombre: 'Ciberseguridad y Privacidad',
      responsable: 'Dr. Pedro Martín',
      miembros: 6,
      proyectosActivos: 2,
      descripcion:
        'Investigación en protocolos de seguridad, criptografía y privacidad de datos.',
      sublineas: [
        'Criptografía Post-Cuántica',
        'Seguridad en IoT',
        'Análisis de Vulnerabilidades',
        'Blockchain Security',
      ],
      colaboraciones: ['INCIBE', 'Europol', 'Microsoft Security'],
      logros: [
        'Certificación ISO 27001',
        '3 spin-offs creadas',
        '15 publicaciones Q1',
      ],
    },
    {
      id: 3,
      nombre: 'Sistemas Distribuidos y Blockchain',
      responsable: 'Dra. Carmen Jiménez',
      miembros: 5,
      proyectosActivos: 2,
      descripcion:
        'Desarrollo de sistemas descentralizados y aplicaciones blockchain.',
      sublineas: [
        'Consenso Distribuido',
        'Smart Contracts',
        'DeFi Applications',
        'Escalabilidad Blockchain',
      ],
      colaboraciones: ['Ethereum Foundation', 'ConsenSys', 'R3 Consortium'],
      logros: [
        '2 protocolos estandarizados',
        '10 DApps desarrolladas',
        '20 publicaciones Q1-Q2',
      ],
    },
    {
      id: 4,
      nombre: 'Computación Cuántica',
      responsable: 'Dr. Alejandro Ruiz',
      miembros: 4,
      proyectosActivos: 1,
      descripcion:
        'Investigación en algoritmos cuánticos y sus aplicaciones prácticas.',
      sublineas: [
        'Algoritmos de Optimización',
        'Simulación Cuántica',
        'Criptografía Cuántica',
        'Computación Híbrida',
      ],
      colaboraciones: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum'],
      logros: [
        'Acceso a 5 computadores cuánticos',
        '1 algoritmo patentado',
        '8 publicaciones Q1',
      ],
    },
  ];

  const tabs = [
    { id: 'proyectos', label: 'Proyectos de Investigación', icon: Search },
    { id: 'publicaciones', label: 'Publicaciones', icon: FileText },
    { id: 'lineas', label: 'Líneas de Investigación', icon: GitBranch },
  ];

  const renderProyectos = () => (
    <div className='space-y-6'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Proyectos de Investigación
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Nuestros proyectos abordan los desafíos tecnológicos más relevantes
          de la actualidad, con impacto real en la sociedad.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
          >
            <div className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold text-gray-800 pr-4'>
                  {proyecto.titulo}
                </h3>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                    proyecto.estado === 'En curso'
                      ? 'bg-blue-100 text-blue-800'
                      : proyecto.estado === 'Finalizado'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {proyecto.estado}
                </span>
              </div>

              <p className='text-gray-600 mb-4'>{proyecto.descripcion}</p>

              <div className='space-y-3 mb-4'>
                <div className='flex items-center gap-2'>
                  <Users size={16} className='text-gray-500' />
                  <span className='text-sm text-gray-700'>
                    <strong>IP:</strong> {proyecto.investigadorPrincipal}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar size={16} className='text-gray-500' />
                  <span className='text-sm text-gray-700'>
                    <strong>Duración:</strong> {proyecto.duracion}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Award size={16} className='text-gray-500' />
                  <span className='text-sm text-gray-700'>
                    <strong>Financiación:</strong> {proyecto.organizacion}
                  </span>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-4 mb-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-600'>
                    {proyecto.presupuesto}
                  </div>
                  <div className='text-sm text-gray-500'>Presupuesto</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>
                    {proyecto.participantes.length}
                  </div>
                  <div className='text-sm text-gray-500'>Investigadores</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-purple-600'>
                    {proyecto.publicaciones}
                  </div>
                  <div className='text-sm text-gray-500'>Publicaciones</div>
                </div>
              </div>

              <div className='mb-4'>
                <h4 className='font-semibold text-gray-700 mb-2'>
                  Líneas relacionadas:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {proyecto.lineasRelacionadas.map((linea, idx) => (
                    <span
                      key={idx}
                      className='bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full'
                    >
                      {linea}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex gap-3'>
                <button className='flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'>
                  <Eye size={16} />
                  Ver Detalle
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

  const renderPublicaciones = () => (
    <div className='space-y-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Publicaciones</h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Nuestras contribuciones científicas en las principales revistas y
          conferencias internacionales.
        </p>
      </div>

      {/* Estadísticas */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
        <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center'>
          <div className='text-3xl font-bold text-blue-600 mb-2'>156</div>
          <div className='text-sm text-gray-600'>Total Publicaciones</div>
        </div>
        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center'>
          <div className='text-3xl font-bold text-green-600 mb-2'>89</div>
          <div className='text-sm text-gray-600'>Artículos Q1</div>
        </div>
        <div className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center'>
          <div className='text-3xl font-bold text-purple-600 mb-2'>1.245</div>
          <div className='text-sm text-gray-600'>Total Citas</div>
        </div>
        <div className='bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center'>
          <div className='text-3xl font-bold text-orange-600 mb-2'>7.8</div>
          <div className='text-sm text-gray-600'>h-index Promedio</div>
        </div>
      </div>

      {/* Lista de Publicaciones */}
      <div className='space-y-4'>
        {publicaciones.map((pub, idx) => (
          <div
            key={pub.id}
            className='bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300'
          >
            <div className='flex justify-between items-start mb-3'>
              <h3 className='text-lg font-bold text-gray-800 pr-4'>
                {pub.titulo}
              </h3>
              <div className='flex gap-2 flex-shrink-0'>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    pub.impacto === 'Q1'
                      ? 'bg-green-100 text-green-800'
                      : pub.impacto === 'Q2'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {pub.impacto}
                </span>
                <span className='bg-gray-100 text-gray-700 text-xs px-2.5 py-0.5 rounded-full'>
                  {pub.tipo}
                </span>
              </div>
            </div>

            <div className='mb-3'>
              <p className='text-gray-600 mb-2'>
                <strong>Autores:</strong> {pub.autores.join(', ')}
              </p>
              <p className='text-gray-600 mb-2'>
                <strong>Revista/Conferencia:</strong> {pub.revista} ({pub.año})
              </p>
              <p className='text-gray-600 text-sm'>{pub.resumen}</p>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-6'>
                <div className='flex items-center gap-1'>
                  <Star size={16} className='text-yellow-500' />
                  <span className='text-sm text-gray-600'>
                    {pub.citas} citas
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <Calendar size={16} className='text-gray-500' />
                  <span className='text-sm text-gray-600'>{pub.año}</span>
                </div>
              </div>

              <div className='flex gap-2'>
                <button className='bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm'>
                  <ExternalLink size={14} />
                  Ver
                </button>
                <button className='border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1 text-sm'>
                  <Download size={14} />
                  PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLineas = () => (
    <div className='space-y-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Líneas de Investigación
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          Nuestras áreas de especialización cubren los campos más avanzados de
          la informática y la tecnología.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {lineasInvestigacion.map((linea) => (
          <div
            key={linea.id}
            className='bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300'
          >
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-xl font-bold text-gray-800 pr-4'>
                {linea.nombre}
              </h3>
              <div className='bg-blue-100 rounded-lg p-2 flex-shrink-0'>
                <GitBranch className='text-blue-600' size={20} />
              </div>
            </div>

            <div className='mb-4'>
              <p className='text-gray-600 mb-3'>{linea.descripcion}</p>
              <div className='flex items-center gap-2 text-sm text-gray-700'>
                <Users size={16} className='text-gray-500' />
                <span>
                  <strong>Responsable:</strong> {linea.responsable}
                </span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div className='text-center bg-blue-50 rounded-lg p-3'>
                <div className='text-2xl font-bold text-blue-600'>
                  {linea.miembros}
                </div>
                <div className='text-sm text-gray-600'>Investigadores</div>
              </div>
              <div className='text-center bg-green-50 rounded-lg p-3'>
                <div className='text-2xl font-bold text-green-600'>
                  {linea.proyectosActivos}
                </div>
                <div className='text-sm text-gray-600'>Proyectos Activos</div>
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-gray-700 mb-2'>
                  Sublíneas de investigación:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {linea.sublineas.map((sublinea, idx) => (
                    <span
                      key={idx}
                      className='bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full'
                    >
                      {sublinea}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className='font-semibold text-gray-700 mb-2'>
                  Colaboraciones:
                </h4>
                <div className='space-y-1'>
                  {linea.colaboraciones.map((colab, idx) => (
                    <div key={idx} className='flex items-center gap-2'>
                      <ArrowRight size={14} className='text-blue-600' />
                      <span className='text-sm text-gray-700'>{colab}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className='font-semibold text-gray-700 mb-2'>
                  Principales logros:
                </h4>
                <div className='space-y-1'>
                  {linea.logros.map((logro, idx) => (
                    <div key={idx} className='flex items-center gap-2'>
                      <Award size={14} className='text-yellow-600' />
                      <span className='text-sm text-gray-700'>{logro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-6 flex gap-3'>
              <button className='flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'>
                <Target size={16} />
                Ver Proyectos
              </button>
              <button className='flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
                <BookOpen size={16} />
                Publicaciones
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Métricas Generales */}
      <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200'>
        <h3 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
          Impacto de Nuestra Investigación
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <TrendingUp className='text-blue-600' size={24} />
            </div>
            <div className='text-2xl font-bold text-gray-800 mb-1'>4.2M€</div>
            <h4 className='font-semibold text-gray-700'>
              Financiación Captada
            </h4>
            <p className='text-sm text-gray-600 mt-1'>Últimos 5 años</p>
          </div>

          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <Award className='text-green-600' size={24} />
            </div>
            <div className='text-2xl font-bold text-gray-800 mb-1'>12</div>
            <h4 className='font-semibold text-gray-700'>Patentes</h4>
            <p className='text-sm text-gray-600 mt-1'>Registradas</p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <Users className='text-purple-600' size={24} />
            </div>
            <div className='text-2xl font-bold text-gray-800 mb-1'>23</div>
            <h4 className='font-semibold text-gray-700'>Investigadores</h4>
            <p className='text-sm text-gray-600 mt-1'>Equipo total</p>
          </div>

          <div className='text-center'>
            <div className='bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
              <Lightbulb className='text-orange-600' size={24} />
            </div>
            <div className='text-2xl font-bold text-gray-800 mb-1'>8</div>
            <h4 className='font-semibold text-gray-700'>Spin-offs</h4>
            <p className='text-sm text-gray-600 mt-1'>Empresas creadas</p>
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
          <h1 className='text-4xl font-bold text-gray-900'>Investigación</h1>
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
        {activeTab === 'proyectos' && renderProyectos()}
        {activeTab === 'publicaciones' && renderPublicaciones()}
        {activeTab === 'lineas' && renderLineas()}
      </div>
    </div>
  );
};

export default InvestigacionSection;