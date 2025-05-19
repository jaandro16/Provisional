import { useState } from "react"

const profesores = [
  {
    id: 1,
    name: "Ángel García Beltrán",
    position: "Profesor Titular",
    image: "/profesores/Angel_Garcia_Beltran.jpg",
  },
  {
    id: 2,
    name: "Javier Rodriguez Vidal",
    position: "Profesor permanente laboral",
    image: "/profesores/Javier_Rodriguez_Vidal.jpg",
  },
  {
    id: 3,
    name: "Ascensión López Vargas",
    position: "Profesor Ayudante Doctor",
    image: "/profesores/Ascension_Lopez_Vargas.jpg",
  },
  {
    id: 4,
    name: "Pablo Vigara",
    position: "Profesor Asociado",
    image: "/profesores/Pablo_Vigara.jpg",
  },
  {
    id: 5,
    name: "Julio Antonio Martín Erro",
    position: "PTGAS",
    image: "/profesores/Julio_Antonio_Martin_Erro.jpg",
  },
  {
    id: 6,
    name: "Laura de León Torres",
    position: "Colaborador Externo",
    image: "/profesores/Laura_de_Leon_Torres.jpg",
  },
  {
    id: 7,
    name: "Fernando Javier García-Mascarque Santillana",
    position: "Colaborador Externo",
    image: "/profesores/Fernando_Javier_Garcia_Mascarque_Santillana.jpg",
  },
  {
    id: 8,
    name: "Alexis Paul Cazorla Pasiche",
    position: "Colaborador Externo",
    image: "/profesores/Alexis_Paul_Cazorla_Pasiche.jpg",
  },
  {
    id: 9,
    name: "Iván Rodrigo González",
    position: "Colaborador Externo",
    image: "/profesores/Ivan_Rodrigo_Gonzalez.jpg",
  },
  {
    id: 10,
    name: "Raúl Martín Millán",
    position: "Colaborador Externo",
    image: "/profesores/Raul_Martin_Millan.jpg",
  },
]

export default function EquipoPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProfesores = profesores.filter((profesor) =>
    profesor.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#eaf4f4] p-8">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[#176B87] mb-4">Nuestro Equipo Docente</h1>
        <p className="text-[#04364A] text-lg">Conoce a los profesores que te guiarán durante tu formación</p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProfesores.map((profesor) => (
          <div
            key={profesor.id}
            className="bg-[#b3d8d4] rounded-lg overflow-hidden p-4 flex flex-col items-center shadow-md"
          >
            <div className="w-32 h-32 bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={profesor.image || "/placeholder.svg"}
                alt={profesor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=128&width=128"
                }}
              />
            </div>
            <h3 className="text-center font-semibold text-lg">{profesor.name}</h3>
            <p className="text-center text-sm text-gray-700">{profesor.position}</p>
            <p className="text-center text-sm text-gray-600 italic">{profesor.asignatura}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#176B87] text-white rounded-full text-lg font-semibold hover:bg-[#104e65] transition"
        >
          ¡Conoce más!
        </a>
      </div>
    </div>
  )
}
