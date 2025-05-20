import React from 'react';

const Header = ({ onLoginClick }) => {
  return (
    <header className='w-full bg-[#0063A6] text-white h-auto md:h-[159px]'>
      <div className='container mx-auto px-4 py-3 h-full'>
        <nav className='flex flex-col md:flex-row items-center justify-between h-full gap-4 md:gap-0'>
          <div className='flex items-center justify-center w-full md:w-auto'>
            <a href='/'>
              <img
                src='/logo.png'
                alt='Logo'
                className='h-22 md:h-22 cursor-pointer'
              />
            </a>
          </div>
          <div className='flex items-center space-x-6'>
            <ul className='flex items-center space-x-6 font-["Open_Sans"]'>
              <li className='relative'>
                <a
                  href='/'
                  className='!text-white hover:!text-gray-300 text-lg relative group hidden md:block'
                >
                  <span>Inicio</span>
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a
                  href='/'
                  className='!text-white hover:!text-gray-300 text-lg md:hidden'
                >
                  Inicio
                </a>
              </li>
              <li className='relative'>
                <a
                  href='/contacto?showForm=true'
                  className='!text-white hover:!text-gray-300 text-lg relative group hidden md:block'
                >
                  <span>Contacto</span>
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a
                  href='/contacto?showForm=true'
                  className='!text-white hover:!text-gray-300 text-lg md:hidden'
                >
                  Contacto
                </a>
              </li>
            </ul>
            <div className='h-6 w-[1px] bg-gray-300'></div>
            <button onClick={onLoginClick} className='hover:opacity-80'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 cursor-pointer hover:!text-gray-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
