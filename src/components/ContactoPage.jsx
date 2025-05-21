import React, { useState } from 'react';

const ContactoPage = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [asunto, setAsunto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [error, setError] = useState('');

  const esEmailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setError('');
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError('Por favor completa todos los campos obligatorios.');
      return;
    }
    if (!esEmailValido(email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }
    setEnviando(true);
    setTimeout(() => {
      setNombre('');
      setEmail('');
      setMensaje('');
      setAsunto('');
      setEnviando(false);
      setMensajeEnviado(true);
      setTimeout(() => setMensajeEnviado(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#eaf4f4] p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl p-8 shadow-lg mx-auto">
        <h1 className="text-4xl font-bold text-[#176B87] mb-6 text-center">
          Contacto
        </h1>
        <p className="font-['Open_Sans'] text-black text-lg mb-8 text-center">
          ¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte.
        </p>
        <div className="flex flex-col items-center mb-8">
          <div className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span>{' '}
            secretaria.industriales@upm.es
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-semibold">Teléfono:</span> +34 910 67 67 34
          </div>
          <div className="text-gray-700">
            <span className="font-semibold">Dirección:</span>{' '}
            Escuela Técnica Superior de Ingenieros Industriales, José Gutiérrez
            Abascal 2, 28006 Madrid
          </div>
        </div>
        {mensajeEnviado ? (
          <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded text-center'>
            <p className='font-semibold'>¡Mensaje enviado con éxito!</p>
            <p>Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={manejarEnvio}>
            {error && (
              <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded text-center'>
                <p>{error}</p>
              </div>
            )}
            <input
              type='text'
              id='nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder='Nombre *'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#176B87] bg-gray-100'
            />
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email *'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#176B87] bg-gray-100'
            />
            <input
              type='text'
              id='asunto'
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              placeholder='Asunto'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#176B87] bg-gray-100'
            />
            <textarea
              id='mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder='Mensaje *'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#176B87] bg-gray-100 h-32'
              rows='4'
            ></textarea>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-[#176B87] text-white px-6 py-2 rounded hover:bg-[#2186b6] transition-colors duration-300 flex items-center'
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
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactoPage;
