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
      { icon: "/public/GoogleScholar.png", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 2,
    name: "Javier Rodriguez Vidal",
    position: "Profesor Permanente Laboral",
    grupo: "Profesor Permanente Laboral",
    image: "/public/Javier_Rodriguez_Vidal.jpg",
    bio: `Javier Rodríguez Vidal received his B.Sc. degree in Computer Science (2010) and an M.Sc. degree in Computer Science Research (2011) from Universidad Complutense de Madrid (UCM), along with a Ph.D. in Intelligent Systems (2019) from Universidad Nacional de Educación a Distancia (UNED). From 2011-2015 he worked as a Junior Programmer and Solutions Assistant at Everis S.L.U. Transitioning to Academia, he achieved a pre-doctoral contract (FPI) to complete his Ph.D. Also, he worked as a post-doctoral researcher in the MEDAL group at the Center for Biomedical Tecnhology of the Universidad Politécnica de Madrid (UPM) from 2020 to 2021. Afterwards, he attained an Assistant Professor position at the Escuela Técnica Superior de Ingenieros Industriales of the UPM, where he is currently. His research interests include Online Reputation Management, Automatic Summarization, Information Retrieval, Machine Learning, BioNLP and more recently, Additive Manufacturing. He has also been a visiting researcher at University of Amsterdam (Netherlands) for 3 months. He has 8 publications in these areas in international refereed journals and 3 conference proceedings. `, 
    rrss: [
      { icon: "/public/GoogleScholar.png", url: "https://scholar.google.com/citations?user=8VDqxXoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 3,
    name: "Ascensión López Vargas",
    position: "Profesor Ayudante Doctor",
    grupo: "Profesor Ayudante Doctor",
    image: "/public/Ascension_Lopez_Vargas.jpg",
    bio: `ASCENSIÓN LÓPEZ VARGAS es Profesora Ayudante Doctora en la Escuela Técnica Superior de Ingenieros Industriales (ETSII) de la Universidad Politécnica de Madrid. Obtuvo los títulos de Ingeniería Técnica de Telecomunicaciones, Máster Oficial en Tecnologías de la Información y las Comunicaciones y Máster Oficial en Investigación Aeroespacial con la calificación de ‘Notable’ por la Universidad de Alcalá en 2010, 2012 y 2015, respectivamente. En 2019, obtuvo el título de Doctora en Energías Renovables (cum laude con mención internacional) por la Universidad de Jaén. Ese mismo año, realizó una estancia de investigación de 5 meses de duración en el Laboratorio de Ingeniería Sostenible Quadracci de la Universidad de Columbia, en Nueva York, EE. UU. (nº3 en el ranking de universidades en 2019).  Su carrera profesional comenzó en 2011, cuando fue seleccionada para formar parte del programa internacional ESAC Trainee Project de la Agencia Espacial Europea en el área de tratamiento de datos. En 2011-2015 trabajó como ingeniera de telecomunicaciones en el sector privado, participando en varios proyectos tanto nacionales como internacionales formando parte de APTICA, Nokia Siemens Networks y Roche Farma Informatics. Desde 2015, Ascensión trabajó como investigadora en IMDEA Agua y Universidad Carlos III de Madrid durante sus años pre y posdoctorales, respectivamente.  Sus principales intereses de investigación se centran en la aplicación del IoT y la IA en el contexto del desarrollo sostenible. Ascensión (h9, i10-9), ha publicado 10 artículos de alto impacto (Q1/Q2) en los últimos 5 años, 8 de primera autora. Ha participado en 2 proyectos de investigación internacionales, 4 proyectos de convocatorias competitivas y 2 convenios con entidades públicas. Ha tutorizado más de 10 trabajos de investigación de estudiantes (TFG/TFM) y ha impartido clase en varias titulaciones técnicas de Grado y Máster, en castellano y en inglés. Ha participado en actividades de divulgación científica de su área de investigación y ha sido invitada como ponente en la Universidad Autónoma Benito Juárez de Oaxaca (México, 2017) y en la Universidad Americana (Nicaragua, 2023). Tiene 5 comunicaciones en conferencias, 4 de ellas en congresos internacionales (WCPEC. Hawáii, EE. UU.). Ascensión es evaluadora de proyectos para la Agencia Estatal de Investigación (AEI), ha formado parte del clúster de Sostenibilidad en Inteligencia Artificial de la Comunidad de Madrid (2023) y ha participado en tribunales de TGFs, TFMs y tesis doctorales. Entre otros méritos, cabe destacar que en 2022 obtuvo el primer premio en el ‘Concurso de Iniciativas Vinculación Sociedad-UC3M’ del Consejo Social de la Universidad Carlos III de Madrid`,
    rrss: [
      { icon: "/public/GoogleScholar.png", url: "https://scholar.google.com/citations?user=tucSUMwAAAAJ&hl=en" }
    ]
  },
  {
    id: 4,
    name: "Pablo Vigara",
    position: "Profesor Asociado",
    grupo: "Profesor Asociado",
    image: "/public/Pablo_Vigara.jpg",
    bio: `Graduado en ingeniero de organización por la Escuela Técnica Superior de Ingenieros Industriales de la UPM. Posee estudios en matemática computacional y aplicada y un máster en formación del profesorado en matemáticas. Es funcionario como profesor de matemáticas en educación secundaria y bachillerato, y también es empresario.  Fundador y director general de acaKER, una consultora tecnológica, y del Instituto Superior de Formación Profesional Vigara, se especializa en el desarrollo de ERPs y sistemas de información. Ha impartido docencia en la Universidad Carlos III de Madrid y la Universidad CEU San Pablo. Actualmente, realiza sus estudios de doctorado en ingeniería mecánica, enfocándose en la aplicación de inteligencias artificiales a diversos procesos y datos.`,
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 5,
    name: "Julio Antonio Martín Erro",
    position: "PTGAS",
    grupo: "Personal de Administración y Servicios (PAS)",
    image: "/public/Julio_Antonio_Martin_Erro.jpg",
    bio: `Es desde 1993 Oficial de Laboratorio en la Unidad Docente de Informática Industrial de la Escuela Técnica Superior de Ingenieros Industriales de la Universidad Politécnica de Madrid. Actualmente, desde mayo de 2022, es miembro del equipo directivo de dicha Escuela, como Delegado del Director para Artes gráficas e Imagen. Es ilustrador, diseñador gráfico y director de arte por el CDC (Centro de Diseño y Comunicación, dependiente del CEV Centro Estudios del Vídeo). Ha realizado estudios de aerografía y especialización de retrato con artistas de renombre mundial como Ramón González Teja, Dru Blair y Marissa Oosterlee. Comienza su carrera profesional en 1986 con el desarrollo de videojuegos para computadoras de 8bits, formando parte de empresas como Dinamic, Topo Soft o DDM, y colaborando en proyectos con Indescomp. De 1989 a 1992 desarrolla diseño gráfico para Phillips Informática, Caja Madrid, Caja España, Caja Alicante, Banesto, Infoservicios, Banco Popular, TSAI (Telefónica Sistemas avanzados de Información), COSAI y TCS (Tecnología Consulting y Servicios) entre otros. El año 1993 realiza el grafismo de las etapas contrarreloj de la vuelta ciclista a España, así como el diseño del control de cámara para partidos de golf, así como el diseño de carátulas televisivas de partidos de baloncesto, combates de boxeo y las variaciones según deportes de la mascota de las Olimpiadas de la Commonwealth celeradas ese año en Canadá. Además realiza trabajos de render y de efectos especiales para una serie de dibujos animados en la empresa Alfonso Productions. Entre 1994 y 2002 colabora en desarrollo de multimedia y realiza diseño gráfico para el grupo IBEROFÓN, y para la empresa URALITA. Entre 1999 y 2001 realiza el diseño gráfico de varios multimedia para la empresa Forimagen. En 2002 realiza el diseño de una tienda de libros online para el Instituto Nacional de Administraciones Públicas a través de la empresa Reycom. Diseño gráfico de una aplicación multimedia para la empresa HIARES en un proyecto de dicha empresa con la Unidad Docente de Informática Industrial de la ETSII. Colaborador en 4 revistas del grupo Prensa Técnica, realizando artículos mensuales sobre dibujo por ordenador de 1994 a 2000. Colaborador-Profesor de 1998 a 2012 para el Instituto de Ciencias de la Educación, en la Escuela Técnica Superior de Ingenieros de Caminos, impartiendo cursos de retoque y tratamiento digital de imágenes. En la Universidad Politécnica de Madrid, pertenece al Grupo de Investigación Ciencias de la Computación en la Educación y en la Representación del Conocimiento. Participación en Proyectos de I+D financiados en Convocatorias públicas. (nacionales y/o internacionales): ·      AulaWeb: Un Sistema de Seguimiento de Asignaturas ·      WEBTUTOR ·      AulaWeb 2002 ·      Módulo de grupos de trabajo colaborativo en la plataforma AulaWeb ·      DIGITAG (2010) ·      Sistema Transaccional Inalámbrico de Datos ·      Optimización de la distribución de Residuos Tóxicos Participación en contratos de I+D de especial relevancia con Empresas y/o Administraciones (nacionales y/ o internacionales): ·      La magia de las letras Empresa/Administración financiadora:Ate net Entidades participantes:FFII, Fomento de centros de enseñanza ·      Webbits Empresa/Administración financiadora: Ate net Entidades participantes: FFII, Fomento de centros de enseñanza ·          Utilización de la Telemática como Instrumento de Apoyo y Tutoría a Distancia Aplicada a la Formación en las Organizaciones Sociales (C-0386) Tipo de contrato: Colaboración Empresa/Administración financiadora FORCEM / Fondo Social Europeo / UGT Entidades participantes: ETSI Industriales - UPM ·      Programas de Intervención para el Desarrollo de Capacidades en Trabajadores Semicualificados y No Cualificados (C-0504). Tipo de contrato: Colaboración Empresa/Administración financiadora FORCEM / Fondo Social Europeo / UGT Entidades participantes: ETSI Industriales - UPM ·      Validación Experimental de la Herramienta Telemática como Instrumento de Apoyo y Aprendizaje Individualizado (C-0507). Tipo de contrato: Colaboración Empresa/Administración financiadora FORCEM / Fondo Social Europeo / UGT Entidades participantes: ETSI Industriales - UPM ·          Diseño y Validación de Materiales Innovadores para la Formación en Organizaciones Sociales (C-0508). Tipo de contrato: Colaboración Empresa/Administración financiadora FORCEM / Fondo Social Europeo / UGT Entidades participantes: ETSI Industriales - UPM ·          Creación y Desarrollo de un Sistema de Información como Herramienta para la Formación de Trabajadores (C-0509) Tipo de contrato: Colaboración Empresa/Administración financiadora FORCEM / Fondo Social Europeo / UGT Entidades participantes: ETSI Industriales - UPM Contribuciones a Congresos: ·      Alcance de las Nuevas Tecnologías en la Nueva Era Digital ·      Jornada de Nuevas Tecnologías en la Innovación Educativa ·      Desarrollo de aplicaciones informáticas para la educación ·      Conferencia Internacional de Tecnología, Educación y Desarrollo Sostenible, EDUTEC 2001 Ha colaborado en las presentaciones y diseño gráfico de los distintos Proyectos fin de Carrera, Trabajos Fin de Grado realizados en la Unidad Docente de Informática Industrial.`, 
    rrss: [
      { icon: "/icons/google-scholar.svg", url: "https://scholar.google.com/citations?user=MqQGmWoAAAAJ&hl=en&oi=ao" }
    ]
  },
  {
    id: 6,
    name: "Laura de León Torres",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/public/Laura_de_Leon_Torres.jpg",
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
    image: "/public/Fernando_Javier_Garcia_Mascarque_Santillana.jpg",
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
    image: "/public/Alexis_Paul_Cazorla_Pasiche.jpg",
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
    image: "/public/Ivan_Rodrigo_Gonzalez.jpg",
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
    image: "/public/Raul_Martin_Millan.jpg",
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