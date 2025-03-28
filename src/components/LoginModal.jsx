import { useEffect } from 'react';
import LoginForm from './LoginForm';
import { enableScreenshotProtection } from '../utils/screenshotProtection';

const LoginModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    let cleanup;

    if (isOpen) {
      // Prevenir capturas de pantalla
      document.documentElement.style.webkitUserSelect = 'none';
      document.documentElement.style.webkitTouchCallout = 'none';
      document.documentElement.style.mozUserSelect = 'none';
      document.documentElement.style.msUserSelect = 'none';
      document.documentElement.style.userSelect = 'none';

      document.body.classList.add('prevent-screenshots');

      // Habilitar protección adicional
      cleanup = enableScreenshotProtection();
    }

    return () => {
      if (cleanup) cleanup();
      // Restaurar comportamiento normal
      document.documentElement.style.webkitUserSelect = '';
      document.documentElement.style.webkitTouchCallout = '';
      document.documentElement.style.mozUserSelect = '';
      document.documentElement.style.msUserSelect = '';
      document.documentElement.style.userSelect = '';

      // Remover clase
      document.body.classList.remove('prevent-screenshots');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center'
      style={{
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      <div
        className='absolute inset-0 bg-black/30 backdrop-blur-sm'
        onClick={onClose}
      ></div>
      <div className='relative z-10 w-full max-w-2xl mx-4'>
        <div className='bg-white/75 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden'>
          <div className='p-8 space-y-8'>
            <div className='bg-yellow-50/90 border-l-4 border-yellow-400 p-4'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-5 w-5 text-yellow-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='ml-3'>
                  <h3 className='text-base font-medium text-yellow-800'>
                    Acceso Restringido
                  </h3>
                  <div className='mt-2 text-sm text-yellow-700'>
                    <p className='leading-relaxed'>
                      Este es un Inicio de Sesión protegido y restringido.
                      Cualquier intento de inicio de sesión fallido será
                      registrado. No intentes iniciar sesión si no posees unas
                      credenciales facilitadas por la Unidad Docente de
                      Informática Industrial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white/50 backdrop-blur-sm rounded-lg p-6'>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className='mt-4 flex justify-start'>
          <button
            onClick={onClose}
            className='flex items-center px-4 py-2 text-[#0063A6] hover:bg-[#0063A6] 
                    hover:text-white rounded-lg transition-all duration-200 
                    border-2 border-[#0063A6] group'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <span className='font-medium'>Volver</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
