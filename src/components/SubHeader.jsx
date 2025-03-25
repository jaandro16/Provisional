import { useState } from 'react';

const SubHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInvestigacionOpen, setIsInvestigacionOpen] = useState(false);
  const [isDocenciaOpen, setIsDocenciaOpen] = useState(false);

  return (
    <div className='container mx-auto px-2 sm:px-4 relative'>
      <div
        className={`h-16
          w-full md:w-[680px]
          bg-white
          md:bg-gray-100
          rounded-none md:rounded-[10px]
          ml-auto
          relative
          float-right
          md:-mt-8
          md:-mb-8
          z-50
        `}
      >
        {/* Search overlay for mobile */}
        <div
          className={`absolute right-0 top-0 h-full transition-all duration-300 ease-in-out bg-white flex items-center
            ${isSearchOpen ? 'w-full' : 'w-0 overflow-hidden'}
            md:rounded-[10px] z-50
          `}
        >
          <div className='w-full flex items-center px-4'>
            <input
              type='text'
              placeholder='¿Qué deseas buscar?'
              className='w-full h-10 pl-4 pr-10 text-gray-700 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
        </div>

        <div className='w-full h-full flex items-center justify-center px-2 sm:px-4'>
          <ul className='flex items-center space-x-6 xs:space-x-3 sm:space-x-4 md:space-x-15 font-["Open_Sans"] text-sm sm:text-base'>
            <li>
              <a href='/equipo' className='text-gray-700 hover:text-gray-900'>
                Equipo
              </a>
            </li>
            <li className='flex flex-col relative'>
              <div
                className='flex items-center space-x-1 cursor-pointer'
                onClick={() => setIsInvestigacionOpen(!isInvestigacionOpen)}
              >
                <span className='text-gray-700 hover:text-gray-900'>
                  Investigación
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-black h-3 w-3 sm:h-4 sm:w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>

              {/* Dropdown menu for small screens */}
              <div
                className={`
                  fixed left-0
                  w-full
                  bg-white
                  shadow-lg
                  transition-all duration-300 ease-in-out
                  md:hidden
                  ${isInvestigacionOpen ? 'max-h-64' : 'max-h-0'}
                  overflow-hidden
                `}
                style={{
                  top: '221px', // altura del header
                }}
              >
                <div className='py-2'>
                  <a
                    href='/investigacion/proyectos'
                    className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 mr-3'
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
                    <span>Proyectos</span>
                  </a>

                  <div className='w-full h-[1px] bg-gray-200'></div>

                  <a
                    href='/investigacion/publicaciones'
                    className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 mr-3'
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
                    <span>Publicaciones</span>
                  </a>

                  <div className='w-full h-[1px] bg-gray-200'></div>

                  <a
                    href='/investigacion/lineas'
                    className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 mr-3'
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
                    <span>Líneas de Investigación</span>
                  </a>
                </div>
              </div>
            </li>
            <li className='flex flex-col relative'>
              <div
                className='flex items-center space-x-1 cursor-pointer'
                onClick={() => setIsDocenciaOpen(!isDocenciaOpen)}
              >
                <span className='text-gray-700 hover:text-gray-900'>
                  Investigación
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-black h-3 w-3 sm:h-4 sm:w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>

              <div
                className={`
                  fixed left-0
                  w-full
                  bg-white
                  shadow-lg
                  transition-all duration-300 ease-in-out
                  md:hidden
                  ${isDocenciaOpen ? 'max-h-64' : 'max-h-0'}
                  overflow-hidden
                `}
                style={{
                  top: '221px',
                }}
              >
                <div className='py-2'>
                  <a
                    href='/docencia/tfg'
                    className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 mr-3'
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
                    <span>TFG/TFM</span>
                  </a>

                  <div className='w-full h-[1px] bg-gray-200'></div>

                  <a
                    href='/docencia/grado'
                    className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 mr-3'
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
                    <span>Grado</span>
                  </a>

                  <div className='w-full h-[1px] bg-gray-200'></div>

                  <a
                    href='/docencia/innovacion'
                    className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 mr-3'
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
                    <span>Innovación educativa</span>
                  </a>
                </div>
              </div>
            </li>
            <div className='h-6 w-[1px] bg-gray-300'></div>
            {isSearchOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-700 hover:text-gray-900 z-51 mr-4 md:rounded-[10px]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={() => setIsSearchOpen(false)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-700 hover:text-gray-900'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={() => setIsSearchOpen(true)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
