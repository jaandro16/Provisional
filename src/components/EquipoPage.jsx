import { useState } from "react"

const profesores = [
  {
    id: 1,
    name: "Ángel García Beltrán",
    position: "Profesor Titular",
    grupo: "Profesor Titular",
    image: "/profesores/Angel_Garcia_Beltran.jpg",
  },
  {
    id: 2,
    name: "Javier Rodriguez Vidal",
    position: "Profesor Permanente Laboral",
    grupo: "Profesor Permanente Laboral",
    image: "/profesores/Javier_Rodriguez_Vidal.jpg",
  },
  {
    id: 3,
    name: "Ascensión López Vargas",
    position: "Profesor Ayudante Doctor",
    grupo: "Profesor Ayudante Doctor",
    image: "/profesores/Ascension_Lopez_Vargas.jpg",
  },
  {
    id: 4,
    name: "Pablo Vigara",
    position: "Profesor Asociado",
    grupo: "Profesor Asociado",
    image: "/profesores/Pablo_Vigara.jpg",
  },
  {
    id: 5,
    name: "Julio Antonio Martín Erro",
    position: "PTGAS",
    grupo: "Personal de Administración y Servicios (PAS)",
    image: "/profesores/Julio_Antonio_Martin_Erro.jpg",
  },
  {
    id: 6,
    name: "Laura de León Torres",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Laura_de_Leon_Torres.jpg",
  },
  {
    id: 7,
    name: "Fernando Javier García-Mascarque Santillana",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Fernando_Javier_Garcia_Mascarque_Santillana.jpg",
  },
  {
    id: 8,
    name: "Alexis Paul Cazorla Pasiche",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Alexis_Paul_Cazorla_Pasiche.jpg",
  },
  {
    id: 9,
    name: "Iván Rodrigo González",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Ivan_Rodrigo_Gonzalez.jpg",
  },
  {
    id: 10,
    name: "Raúl Martín Millán",
    position: "Colaborador Externo",
    grupo: "Colaborador Externo",
    image: "/profesores/Raul_Martin_Millan.jpg",
  },
]

// Agrupa profesores por grupo
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

  const filteredProfesores = profesores.filter((profesor) =>
    profesor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grupos = agruparPorGrupo(filteredProfesores);

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
                    className="bg-[#b3d8d4] rounded-lg overflow-hidden p-4 flex flex-col items-center shadow w-full"
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