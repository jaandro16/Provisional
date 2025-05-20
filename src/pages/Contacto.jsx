import React, { useState } from 'react';

const Contacto = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [asunto, setAsunto] = useState('');

  // Estados para manejar la UI
  const [enviando, setEnviando] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [error, setError] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Validación de email simple
  const esEmailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Manejo del envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    setError('');

    // Validaciones básicas
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError('Por favor completa todos los campos obligatorios.');
      return;
    }

    if (!esEmailValido(email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }

    // Simulación de envío
    setEnviando(true);

    // Simulamos una petición a un servidor (en un caso real esto sería una llamada fetch o axios)
    setTimeout(() => {
      console.log({
        nombre,
        email,
        asunto,
        mensaje,
      });

      // Resetear el formulario
      setNombre('');
      setEmail('');
      setMensaje('');
      setAsunto('');
      setEnviando(false);
      setMensajeEnviado(true);

      // Después de 5 segundos, ocultamos el mensaje de éxito
      setTimeout(() => {
        setMensajeEnviado(false);
        setMostrarFormulario(false);
      }, 5000);
    }, 2000);
  };

  // Función para mostrar el formulario al hacer clic en el botón
  const abrirFormulario = () => {
    setMostrarFormulario(true);
    setMensajeEnviado(false);
  };

  return (
    <div className='relative'>
      <div className='w-full bg-[#F7F0E6] py-16 mt-40 relative min-h-[500px] md:min-h-[400px]'>
        <div className='container mx-auto px-4 md:px-8 flex flex-col md:flex-row'>
          {/* Sección de información */}
          <div className='md:w-1/2 lg:w-2/5 flex flex-col justify-center mb-10 md:mb-0'>
            <h2 className="font-['Work_Sans'] text-black font-semibold text-3xl md:text-4xl mb-4 text-left">
              Contacto
            </h2>
            <p className="font-['Open_Sans'] text-black text-lg mb-8 text-left">
              ¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte.
            </p>

            {/* Información de contacto */}
            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-[#A66300] mr-3 mt-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div>
                  <p className='font-semibold'>Email:</p>
                  <p>secretaria.industriales@upm.es</p>
                </div>
              </div>
              <div className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-[#A66300] mr-3 mt-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <div>
                  <p className='font-semibold'>Teléfono:</p>
                  <p>+34 910 67 67 34</p>
                </div>
              </div>
              <div className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-[#A66300] mr-3 mt-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div>
                  <p className='font-semibold'>Dirección:</p>
                  <p>Escuela Técnica Superior de Ingenieros Industriales,</p>
                  <p>JoséGutiérrez Abascal 2, 28006 Madrid</p>
                </div>
              </div>
            </div>

            {!mostrarFormulario && (
              <button
                onClick={abrirFormulario}
                className='flex items-center space-x-2 bg-[#A66300] text-white px-6 py-3 rounded hover:bg-[#C47400] transition-colors duration-300 w-fit'
              >
                <span className="font-['Open_Sans']">Escríbenos</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Sección de formulario */}
          {mostrarFormulario && (
            <div className='md:w-1/2 lg:w-3/5 md:pl-8 lg:pl-16'>
              {mensajeEnviado ? (
                <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded'>
                  <p className='font-semibold'>¡Mensaje enviado con éxito!</p>
                  <p>Nos pondremos en contacto contigo lo antes posible.</p>
                </div>
              ) : (
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold mb-4'>
                    Envíanos un mensaje
                  </h3>

                  {error && (
                    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded'>
                      <p>{error}</p>
                    </div>
                  )}

                  <div className='mb-4'>
                    <label
                      htmlFor='nombre'
                      className='block text-gray-700 mb-2'
                    >
                      Nombre *
                    </label>
                    <input
                      type='text'
                      id='nombre'
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A66300]'
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A66300]'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      htmlFor='asunto'
                      className='block text-gray-700 mb-2'
                    >
                      Asunto
                    </label>
                    <input
                      type='text'
                      id='asunto'
                      value={asunto}
                      onChange={(e) => setAsunto(e.target.value)}
                      className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A66300]'
                    />
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='mensaje'
                      className='block text-gray-700 mb-2'
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id='mensaje'
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A66300] h-32'
                      rows='4'
                    ></textarea>
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='button'
                      onClick={() => setMostrarFormulario(false)}
                      className='px-4 py-2 text-gray-600 mr-3 hover:text-gray-800'
                      disabled={enviando}
                    >
                      Cancelar
                    </button>
                    <button
                      type='button'
                      onClick={manejarEnvio}
                      className='bg-[#A66300] text-white px-6 py-2 rounded hover:bg-[#C47400] transition-colors duration-300 flex items-center'
                      disabled={enviando}
                    >
                      {enviando ? (
                        <>
                          <svg
                            className='animate-spin -ml-1 mr-2 h-5 w-5 text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar mensaje'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
