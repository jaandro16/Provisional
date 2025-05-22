import React from 'react';
import { Link } from 'react-router-dom';

const Investigacion = () => {
  return (
    <div className='relative md:mt-20'>
      <img
        src='/Investigacion2.png'
        alt='Background'
        className='absolute right-0 md:left-0 left-1/2 md:right-auto -translate-x-1/2 md:translate-x-0 top-20 h-[250px] sm:h-[350px] md:h-[475px] lg:h-[500px] z-10 max-[913px]:block hidden'
      />
      <img
        src='/Investigacion1.png'
        alt='Background'
        className='absolute right-0 md:left-0 left-1/2 md:right-auto -translate-x-1/2 md:translate-x-0 top-20 h-[250px] sm:h-[350px] md:h-[475px] lg:h-[500px] z-10 min-[913px]:block hidden'
      />

      <div className='w-full bg-[#E6F0F7] h-[500px] md:h-[350px] mt-40 relative'>
        <div className='absolute left-8 sm:left-14 md:left-auto md:right-14 lg:right-40 top-[65%] md:top-1/2 -translate-y-1/2 max-w-full md:max-w-[300px] lg:max-w-[400px] flex flex-col px-4 md:px-0 md:pl-16 lg:pl-20'>
          <h2 className="font-['Work_Sans'] text-black font-semibold text-3xl md:text-4xl mb-4 text-left">
            Investigación
          </h2>
          <p className="font-['Open_Sans'] text-black text-lg md:text-xl mb-8 text-left whitespace-normal">
            Conoce todo acerca de la investigación en la Unidad Docente de
            Informática Industrial
          </p>
          <Link 
            to='/investigacion'
            className='flex items-center space-x-2 bg-[#0063A6] text-white px-6 py-3 rounded hover:bg-[#0074c4] transition-colors duration-300 w-fit'
          >
            <span className="font-['Open_Sans']">Conocer más</span>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Investigacion;