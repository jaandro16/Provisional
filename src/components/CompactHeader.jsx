import { useState, useEffect, useRef } from 'react';

const CompactHeader = ({ isVisible }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isInvestigacionOpen, setIsInvestigacionOpen] = useState(false);
  const [isDocenciaOpen, setIsDocenciaOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef();

  // Cerrar menú cuando el header se oculta
  useEffect(() => {
    if (!isVisible) {
      setMenuOpen(false);
    }
  }, [isVisible]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`w-full bg-[#0063A6] text-white h-[80px] fixed top-0 left-0 transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Desktop Header */}
      <div className='hidden md:block h-[80px]'>
        <div className='container mx-auto px-4 h-full'>
          <nav className='flex items-center justify-between h-full'>
            <div className='flex items-center'>
              <a href='/'>
                <img
                  src='logo.png'
                  alt='Logo'
                  className='h-16 cursor-pointer'
                />
              </a>
            </div>
            <div className='flex items-center space-x-8'>
              <ul className='flex items-center space-x-8 font-["Open_Sans"]'>
                <li>
                  <a
                    href='/equipo'
                    className='!text-white hover:!text-gray-300 text-base'
                  >
                    Equipo
                  </a>
                </li>
                <li className='flex items-center space-x-1 cursor-pointer'>
                  <a
                    href='/investigacion'
                    className='!text-white hover:!text-gray-300 text-base'
                  >
                    Investigación
                  </a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white h-4 w-4 mt-[2px]'
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
                </li>
                <li className='flex items-center space-x-1 cursor-pointer'>
                  <a
                    href='/docencia'
                    className='!text-white hover:!text-gray-300 text-base'
                  >
                    Docencia
                  </a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white h-4 w-4 mt-[2px]'
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
                </li>
                <li>
                  <a
                    href='/'
                    className='!text-white hover:!text-gray-300 text-base'
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='!text-white hover:!text-gray-300 text-base'
                  >
                    Contacto
                  </a>
                </li>
                <div className='h-6 w-[1px] bg-gray-300'></div>
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
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='block md:hidden h-[60px]' ref={menuRef}>
        <div className='container mx-auto px-4 h-full'>
          <nav className='flex items-center justify-between h-full'>
            <div className='flex items-center px-2 mt-5'>
              <a href='/'>
                <img
                  src='logo.png'
                  alt='Logo'
                  className='h-12 cursor-pointer'
                />
              </a>
            </div>
            {/* Menú hamburguesa */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className='md:hidden focus:outline-none mr-2 mt-5 border-0 bg-transparent p-0'
            >
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 transform ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 transform ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </button>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-[60px] left-0 w-full transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{
            height: isMenuOpen ? 'calc(100vh - 60px)' : '0',
            overflow: 'hidden',
          }}
        >
          <div className='bg-[#0063A6]/95 backdrop-blur-sm'>
            <div className='container mx-auto px-4 py-4'>
              <ul className='flex flex-col font-["Open_Sans"] divide-y divide-gray-400/20'>
                <li className='py-4'>
                  <a
                    href='/'
                    className='flex items-center justify-between text-white hover:text-gray-300'
                  >
                    <span className='text-lg ml-4'>Inicio</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-white mr-4'
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
                  </a>
                </li>
                <li className='py-4'>
                  <a
                    href='/'
                    className='flex items-center justify-between text-white hover:text-gray-300'
                  >
                    <span className='text-lg ml-4'>Equipo</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-white mr-4'
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
                  </a>
                </li>
                <li className='py-4'>
                  <div
                    onClick={() => setIsInvestigacionOpen(!isInvestigacionOpen)}
                    className='flex items-center justify-between text-white hover:text-gray-300 cursor-pointer'
                  >
                    <span className='text-lg ml-4'>Investigación</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-4 w-4 text-white mr-4 transition-transform duration-300 ${
                        isInvestigacionOpen ? 'rotate-90' : ''
                      }`}
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
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isInvestigacionOpen ? 'max-h-40 mt-2' : 'max-h-0'
                    }`}
                  >
                    <ul className='flex flex-col space-y-2 pl-8'>
                      <li>
                        <a
                          href='/investigacion/proyectos'
                          className='text-white hover:text-gray-300 text-base block py-1 ml-4 flex items-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white mr-2'
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
                      </li>
                      <li>
                        <a
                          href='/investigacion/publicaciones'
                          className='text-white hover:text-gray-300 text-base block py-1 ml-4 flex items-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white mr-2'
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
                      </li>
                      <li>
                        <a
                          href='/investigacion/lineas'
                          className='text-white hover:text-gray-300 text-base block py-1 ml-4 flex items-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white mr-2'
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
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='py-4'>
                  <div
                    onClick={() => setIsDocenciaOpen(!isDocenciaOpen)}
                    className='flex items-center justify-between text-white hover:text-gray-300 cursor-pointer'
                  >
                    <span className='text-lg ml-4'>Docencia</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-4 w-4 text-white mr-4 transition-transform duration-300 ${
                        isDocenciaOpen ? 'rotate-90' : ''
                      }`}
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
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isDocenciaOpen ? 'max-h-40 mt-2' : 'max-h-0'
                    }`}
                  >
                    <ul className='flex flex-col space-y-2 pl-8'>
                      <li>
                        <a
                          href='/investigacion/proyectos'
                          className='text-white hover:text-gray-300 text-base block py-1 ml-4 flex items-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white mr-2'
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
                      </li>
                      <li>
                        <a
                          href='/investigacion/publicaciones'
                          className='text-white hover:text-gray-300 text-base block py-1 ml-4 flex items-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white mr-2'
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
                      </li>
                      <li>
                        <a
                          href='/investigacion/lineas'
                          className='text-white hover:text-gray-300 text-base block py-1 ml-4 flex items-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white mr-2'
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
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='py-4'>
                  <a
                    href='/'
                    className='flex items-center justify-between text-white hover:text-gray-300'
                  >
                    <span className='text-lg ml-4'>Contacto</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-white mr-4'
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
                  </a>
                </li>
                <li className='pt-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4 ml-4'>
                      {/* Instagram Icon */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5V7.5A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z'
                        />
                      </svg>
                      {/* Twitter Icon */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
                        />
                      </svg>
                    </div>
                    {/* User Icon */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-white mr-4'
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CompactHeader;
