import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-blue-800 py-12 text-white'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between px-4'>
        {/* Left side - Space for the map (will be added separately) */}
        <div className='md:w-1/2'>
          {/* This space is reserved for the map */}
        </div>
        
        {/* Right side - All content moved here */}
        <div className='md:w-1/2 flex flex-col items-center md:items-end gap-6'>
          <img src='/LogoETSII-blanco.png' alt='Logo UDII' className='h-20 mb-2' />
          
          <div className='text-right'>
            <div className='font-bold'>Dirección</div>
            <div>Escuela Técnica Superior de Ingenieros Industriales,</div>
            <div>José Gutiérrez Abascal 2, 28006 Madrid</div>
          </div>
          
          <div className='text-right'>
            <div className='font-bold'>Teléfono</div>
            <div>910 67 67 343</div>
          </div>
          
          <div className='text-right'>
            <div className='font-bold mb-1'>RRSS</div>
            <div className='flex gap-3 mb-2 justify-end'>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-7 h-7" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-7 h-7" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-7 h-7" />
              </a>
            </div>
          </div>
          
          <a href="/sobre-nosotros" className="underline text-white font-semibold">Sobre nosotros</a>
          
          <div className="text-xs text-gray-200 text-right mt-2">
            Sitio Web creado por Javier Herrera y Sergio Berigüete
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer