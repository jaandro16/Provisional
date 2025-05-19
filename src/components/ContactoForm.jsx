import React from 'react';

const Contacto = () => {
  return (
    <div className='relative'>
      <img
        src='/contacto-decor1.png'
        alt='Decoración'
        className='absolute right-0 top-20 h-[250px] z-10 min-[413px]:block hidden'
      />
      <img
        src='/contacto-decor2.png'
        alt='Decoración'
        className='absolute left-0 top-20 h-[250px] z-10 min-[913px]:block hidden'
      />

      <div className='w-full bg-[#F7F0E6] h-[500px] md:h-[350px] mt-40 relative'>
        <div className='absolute left-8 md:left-14 lg:left-40 top-[65%] md:top-1/2 -translate-y-1/2 max-w-full md:max-w-[300px] lg:max-w-[400px] flex flex-col px-4 md:px-0 md:pr-12 lg:pr-16'>
          <h2 className="font-['Work_Sans'] text-black font-semibold text-3xl md:text-4xl mb-4 text-left">
            Contacto
          </h2>
          <p className="font-['Open_Sans'] text-black text-lg md:text-xl mb-8 text-left whitespace-normal">
            ¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte.
          </p>
          <button className='flex items-center space-x-2 bg-[#A66300] text-white px-6 py-3 rounded hover:bg-[#C47400] transition-colors duration-300 w-fit'>
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
        </div>
      </div>
    </div>
  );
};

export default Contacto;
