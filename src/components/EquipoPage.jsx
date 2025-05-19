import { useState } from "react"

const profesores = [
  {
    id: 1,
    name: "Ángel García Beltrán",
    position: "Profesor Titular",
    grupo: "Profesor Titular",
    image: "/public/Angel_Garcia_Beltran.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España) Profesor Titular de Universidad del Departamento de Automática, Ingeniería Eléctrica y Electrónica e Informática Industrial de la UPM (España) Área: Ciencias de la Computación e Inteligencia Artificial.
    Publicaciones en Archivo Digital UPM (https://oa.upm.es/view/creators/Garc=EDa_Beltr=E1n=3A=C1ngel=3A=3A.html). Su labor docente se ha centrado en la impartición de más de veinte asignaturas del área de Ciencias de la Computación e Inteligencia Artificial (lenguajes de programación, sistemas informáticos, simulación y control…) dentro de las diferentes titulaciones oficiales ofrecidas en la ETSI Industriales (grado, máster y doctorado) y en la dirección de más de 50 trabajos de PFC, TFG o TFM. También ha colaborado con el GATE-UPM en la impartición de asignaturas a distancia mediante videoconferencia. Ha publicado varios cursos en la plataforma OpenCourseWare de la UPM y participado como profesor tutor de alumnos mentores dentro del programa de Gestión de equipos humanos, formación de alumnos mentores de la ETSII-UPM y del Proyecto de Becas de Aprovechamiento Excelente de la CAM. Ha participado como director y/o investigador en numerosos proyectos de I+D nacionales e internacionales en diversas áreas de interés de la Ingeniería Industrial. Codirige el equipo de diseño, desarrollo, validación, puesta en marcha, implantación y diseminación de la plataforma AulaWeb desde su inicio en 1999 y trabaja activamente en el Centro Láser de la UPM como investigador y en el grupo de IE Representación y Evaluación del Aprendizaje de la UPM como director. Es autor de más de un centenar de publicaciones de libros, artículos en revistas y ponencias y comunicaciones en congresos nacionales e internacionales y ha impartido más de 40 cursos sobre innovación educativa, metodología y herramientas multimedia. También ha organizado o participado como miembro del comité organizador en varios congresos de educación universitaria y de tecnologías en la educación e innovación educativa universitaria. A lo largo de su carrera profesional ha recibido varios premios por su labor docente e investigadora como, por ejemplo, el Premio Extraordinario de Doctorado de la UPM, el premio UPM a la Excelencia docente en 2014, el Premio Grupo Endesa para la Investigación científica sobre aplicaciones industriales de la electricidad en los procesos industriales en 1998, el Primer Premio Nuevas Aplicaciones para Internet de la Cátedra Telefónica en la UPM para Internet de Nueva Generación en 2002, el Premio José Morillo y Farfán del la Fundación para el Fomento de la Innovación Industrial en reconocimiento a la labor bibliográfica en materia de la Ingeniería Industrial en 2007 y dos Premios a la Innovación Educativa al profesorado de la UPM (en 1998 y 2007).`, 
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 2,
    name: "Javier Rodriguez Vidal",
    position: "Profesor Permanente Laboral",
    grupo: "Profesor Permanente Laboral",
    image: "/profesores/Javier_Rodriguez_Vidal.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`, 
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 3,
    name: "Ascensión López Vargas",
    position: "Profesor Ayudante Doctor",
    grupo: "Profesor Ayudante Doctor",
    image: "/profesores/Ascension_Lopez_Vargas.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 4,
    name: "Pablo Vigara",
    position: "Profesor Asociado",
    grupo: "Profesor Asociado",
    image: "/profesores/Pablo_Vigara.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 5,
    name: "Julio Antonio Martín Erro",
    position: "PTGAS",
    grupo: "Personal de Administración y Servicios (PAS)",
    image: "/profesores/Julio_Antonio_Martin_Erro.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`, 
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 6,
    name: "Laura de León Torres",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Laura_de_Leon_Torres.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`, 
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 7,
    name: "Fernando Javier García-Mascarque Santillana",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Fernando_Javier_Garcia_Mascarque_Santillana.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 8,
    name: "Alexis Paul Cazorla Pasiche",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Alexis_Paul_Cazorla_Pasiche.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 9,
    name: "Iván Rodrigo González",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Ivan_Rodrigo_Gonzalez.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 10,
    name: "Raúl Martín Millán",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Raul_Martin_Millan.jpg",
    bio: `Doctor Ingeniero Industrial por la Universidad Politécnica de Madrid (España)...`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
]

function agruparPorGrupo(lista) {
  return lista.reduce((acc, prof) => {
    acc[prof.grupo] = acc[prof.grupo] || [];
    acc[prof.grupo].push(prof);
    return acc;
  }, {});
}

export default function EquipoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openGrupo, setOpenGrupo] = useState(null);
  const [selectedProfesor, setSelectedProfesor] = useState(null);

  const filteredProfesores = profesores.filter((profesor) =>
    profesor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grupos = agruparPorGrupo(filteredProfesores);

  if (selectedProfesor) {
    return (
      <div className="min-h-screen bg-[#eaf4f4] p-8 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-[#b3d8d4] rounded-2xl p-8 shadow-lg">
          <button
            className="mb-4 text-2xl"
            onClick={() => setSelectedProfesor(null)}
            title="Volver"
          >
            ←
          </button>
          <h2 className="text-3xl font-bold text-center mb-4">{selectedProfesor.name}</h2>
          <div className="flex flex-col items-center mb-4">
            <img
              src={selectedProfesor.image}
              alt={selectedProfesor.name}
              className="w-28 h-28 rounded-full object-cover mb-2" 
            />
            <div className="text-lg font-semibold">{selectedProfesor.position}</div>
          </div>
          <div className="text-gray-900 mb-6 whitespace-pre-line">{selectedProfesor.bio}</div>
          <div className="text-center font-bold mb-2">RRSS</div>
          <div className="flex justify-center gap-4">
            {selectedProfesor.rrss?.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer">
                <img src={r.icon} alt="icono" className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eaf4f4] p-8">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[#176B87] mb-4">Conoce a nuestro equipo</h1>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Buscar profesor por nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#176B87] text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {Object.entries(grupos).map(([grupo, profs]) => (
          <div key={grupo} className="bg-white rounded-lg shadow">
            <button
              className="w-full text-left px-6 py-3 bg-[#176B87] text-white rounded-t-lg font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => setOpenGrupo(openGrupo === grupo ? null : grupo)}
            >
              <span>{grupo}</span>
              <span>{openGrupo === grupo ? "▲" : "▼"}</span>
            </button>
            {openGrupo === grupo && (
              <div className="p-4 grid grid-cols-1 gap-4">
                {profs.map((profesor) => (
                  <div
                    key={profesor.id}
                    className="bg-[#b3d8d4] rounded-lg overflow-hidden p-4 flex flex-col items-center shadow w-full cursor-pointer hover:bg-[#a0c4c4] transition"
                    onClick={() => setSelectedProfesor(profesor)}
                  >
                    <div className="w-28 h-28 bg-white rounded-lg overflow-hidden mb-2">
                      <img
                        src={profesor.image || "/placeholder.svg"}
                        alt={profesor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=128&width=128"
                        }}
                      />
                    </div>
                    <h3 className="text-center font-semibold text-base">{profesor.name}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}