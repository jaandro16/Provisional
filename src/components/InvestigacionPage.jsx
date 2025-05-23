import React, { useState } from 'react';

const InvestigacionInformaticaIndustrial = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const investigacionAreas = [
    {
      id: 1,
      titulo: "Sistemas de comunicaciones",
      descripcion: "Desarrollo de protocolos de comunicación industrial, redes de sensores y sistemas de comunicación inalámbrica para aplicaciones industriales.",
      detalles: "Investigación en protocolos de comunicación industrial (Modbus, Profibus, EtherCAT), desarrollo de redes de sensores inalámbricas (WSN), comunicaciones M2M, y arquitecturas de comunicación para Industry 4.0. Estudio de latencia, fiabilidad y seguridad en comunicaciones industriales.",
      proyectos: ["Protocolos de comunicación industrial avanzados", "Redes de sensores inalámbricas para industria", "Comunicaciones 5G en entornos industriales", "Optimización de latencia en sistemas críticos"],
      icono: "📡",
      color: "bg-blue-100 border-blue-300",
      investigadores: "Dr. García Martínez, Dra. López Fernández, Prof. Rodríguez Silva"
    },
    {
      id: 2,
      titulo: "Sistemas de información",
      descripcion: "Arquitecturas de información empresarial, gestión de bases de datos industriales y sistemas de información integrados.",
      detalles: "Desarrollo de sistemas de información para la gestión industrial, integración de sistemas ERP/MES/SCADA, arquitecturas de datos industriales, sistemas de gestión de la información de productos (PLM), y plataformas de Business Intelligence para la industria.",
      proyectos: ["Integración de sistemas empresariales", "Arquitecturas de datos industriales", "Sistemas PLM avanzados", "Business Intelligence industrial"],
      icono: "🗄️",
      color: "bg-green-100 border-green-300",
      investigadores: "Prof. Martín González, Dr. Jiménez Castro, Dra. Morales Vega"
    },
    {
      id: 3,
      titulo: "Aplicaciones en Android",
      descripcion: "Desarrollo de aplicaciones móviles para supervisión y control de procesos industriales en plataformas Android.",
      detalles: "Investigación en desarrollo de aplicaciones móviles para monitorización remota de procesos industriales, interfaces de usuario adaptativas para dispositivos móviles, realidad aumentada aplicada a mantenimiento industrial, y desarrollo de soluciones IoT móviles para la industria.",
      proyectos: ["Apps de monitorización industrial", "Realidad aumentada para mantenimiento", "Interfaces móviles adaptativas", "Soluciones IoT móviles"],
      icono: "📱",
      color: "bg-purple-100 border-purple-300",
      investigadores: "Dra. Sánchez Ruiz, Prof. Torres Mendoza, Dr. Vázquez Serrano"
    },
    {
      id: 4,
      titulo: "Aplicaciones industriales",
      descripcion: "Desarrollo de software especializado para control y supervisión de procesos industriales complejos.",
      detalles: "Investigación en desarrollo de aplicaciones SCADA personalizadas, sistemas de control distribuido (DCS), interfaces hombre-máquina (HMI) avanzadas, y software para automatización de procesos industriales. Integración con sistemas de visión artificial y control de calidad.",
      proyectos: ["Sistemas SCADA avanzados", "Interfaces HMI inteligentes", "Software de control de calidad", "Aplicaciones de automatización flexible"],
      icono: "🏭",
      color: "bg-yellow-100 border-yellow-300",
      investigadores: "Dr. Ortega Flores, Dra. Navarro López, Prof. Delgado Martín"
    },
    {
      id: 5,
      titulo: "Aplicaciones de educación",
      descripcion: "Desarrollo de plataformas educativas y simuladores para la enseñanza de conceptos de informática industrial.",
      detalles: "Investigación en tecnologías educativas aplicadas a la ingeniería, desarrollo de simuladores virtuales para procesos industriales, plataformas de e-learning especializadas, laboratorios virtuales remotos, y herramientas de gamificación para el aprendizaje técnico.",
      proyectos: ["Simuladores educativos industriales", "Laboratorios virtuales remotos", "Plataformas de e-learning técnico", "Gamificación en ingeniería"],
      icono: "🎓",
      color: "bg-red-100 border-red-300",
      investigadores: "Prof. Herrera Díaz, Dr. Campos Ruiz, Dra. Castro Jiménez"
    },
    {
      id: 6,
      titulo: "Análisis de datos",
      descripcion: "Técnicas de big data y analytics aplicadas al procesamiento de información industrial y toma de decisiones.",
      detalles: "Investigación en algoritmos de análisis de grandes volúmenes de datos industriales, técnicas de machine learning para predicción y optimización, procesamiento de datos en tiempo real, y desarrollo de sistemas de soporte a la decisión basados en datos.",
      proyectos: ["Big Data industrial", "Machine Learning predictivo", "Procesamiento en tiempo real", "Sistemas de soporte a decisiones"],
      icono: "📊",
      color: "bg-indigo-100 border-indigo-300",
      investigadores: "Dr. Ruiz Moreno, Prof. Morales Sánchez, Dra. Jiménez López"
    },
    {
      id: 7,
      titulo: "Modelos de simulación",
      descripcion: "Desarrollo de modelos matemáticos y simuladores para análisis y optimización de sistemas industriales complejos.",
      detalles: "Investigación en modelado y simulación de procesos industriales, desarrollo de gemelos digitales, simulación de eventos discretos, simulación Monte Carlo para análisis de riesgos, y optimización de sistemas mediante técnicas de simulación avanzadas.",
      proyectos: ["Gemelos digitales industriales", "Simulación de eventos discretos", "Modelos de optimización", "Simulación de riesgos industriales"],
      icono: "🥽",
      color: "bg-teal-100 border-teal-300",
      investigadores: "Dra. Vega Sánchez, Prof. Muñoz García, Dr. López Martín"
    },
    {
      id: 8,
      titulo: "Diseño y desarrollos software",
      descripcion: "Metodologías de ingeniería de software aplicadas al desarrollo de sistemas industriales y arquitecturas software especializadas.",
      detalles: "Investigación en metodologías de desarrollo de software para sistemas críticos, arquitecturas software para aplicaciones industriales, testing y validación de software industrial, metodologías ágiles adaptadas a proyectos industriales, y desarrollo de frameworks especializados.",
      proyectos: ["Arquitecturas software industriales", "Testing de sistemas críticos", "Metodologías ágiles industriales", "Frameworks especializados"],
      icono: "💻",
      color: "bg-pink-100 border-pink-300",
      investigadores: "Prof. Serrano Díaz, Dra. Ruiz Hernández, Dr. Gómez Pérez"
    }
  ];

  const lineasTransversales = [
    {
      nombre: "Industria 4.0 y Transformación Digital",
      descripcion: "Integración de tecnologías digitales emergentes en sistemas de control y automatización industrial"
    },
    {
      nombre: "Sostenibilidad y Eficiencia Energética",
      descripcion: "Desarrollo de sistemas de control y automatización orientados a la eficiencia energética y sostenibilidad"
    },
    {
      nombre: "Transferencia Tecnológica",
      descripcion: "Colaboración con empresas del sector para la transferencia de conocimiento en informática industrial"
    }
  ];

  const colaboraciones = [
    "Siemens España - Sistemas de automatización",
    "Schneider Electric - Soluciones de control industrial",
    "ABB - Robótica y automatización",
    "Rockwell Automation - Sistemas de control",
    "Endesa - Sistemas energéticos inteligentes",
    "Repsol - Automatización de procesos petroquímicos"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-600 text-white py-6 px-8 rounded-lg mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Investigación en Informática Industrial
            </h1>
            <p className="text-xl opacity-90">
              Unidad Docente de Informática Industrial - ETSII UPM
            </p>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Desarrollamos investigación de vanguardia en las tecnologías de la información aplicadas 
            a la industria, abarcando desde sistemas de control inteligente hasta ciberseguridad industrial
          </p>
        </div>

        {/* Líneas transversales */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Líneas de Investigación Transversales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lineasTransversales.map((linea, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-lg">{linea.nombre}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{linea.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de áreas de investigación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {investigacionAreas.map((area) => (
            <div
              key={area.id}
              className={`${area.color} border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105`}
              onClick={() => setSelectedArea(area)}
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-3 block">{area.icono}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {area.titulo}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center mb-4">
                {area.descripcion}
              </p>
              <div className="text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalles */}
        {selectedArea && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{selectedArea.icono}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedArea.titulo}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedArea(null)}
                    className="text-gray-500 hover:text-gray-700 text-3xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Descripción Detallada</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedArea.detalles}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Proyectos de Investigación</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedArea.proyectos.map((proyecto, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="text-gray-700 text-sm">• {proyecto}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Equipo de Investigación</h3>
                    <p className="text-gray-600">{selectedArea.investigadores}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Contactar Grupo
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Ver Publicaciones
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      Solicitar Colaboración
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sección de colaboración */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Colaboración Industrial y Transferencia Tecnológica
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              La Unidad Docente de Informática Industrial mantiene estrechas colaboraciones con empresas 
              líderes del sector para desarrollar soluciones innovadoras y transferir conocimiento especializado.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Principales Colaboradores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {colaboraciones.map((colaboracion, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
                  <span className="text-blue-800 font-medium text-sm">{colaboracion}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Proponer Colaboración
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Ver Proyectos Activos
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Contacto Investigación
              </button>
            </div>
          </div>
        </div>

        {/* Footer de contacto */}
        <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <p className="text-gray-300 mb-2">
            Unidad Docente de Informática Industrial - ETSII UPM
          </p>
          <p className="text-gray-300 text-sm">
            informática.industrial@upm.es | +34 910 67 67 34
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestigacionInformaticaIndustrial;