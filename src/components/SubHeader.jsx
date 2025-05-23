import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInvestigacionOpen, setIsInvestigacionOpen] = useState(false);
  const [isDocenciaOpen, setIsDocenciaOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const menuRef = useRef(null);

  const closeAllDropdowns = (callback = null) => {
    setIsScrolling(true);
    setIsTransitioning(true);
    setIsInvestigacionOpen(false);
    setIsDocenciaOpen(false);

    // Wait for animation to complete
    setTimeout(() => {
      setIsScrolling(false);
      setIsTransitioning(false);
      if (callback) callback();
    }, 300); // Match the duration-300 from the transition
  };

  const handleInvestigacionClick = () => {
    if (isTransitioning) return;

    if (isSearchOpen) {
      setIsSearchOpen(false);
      setTimeout(() => {
        setIsScrolling(false);
        if (isDocenciaOpen) setIsDocenciaOpen(false);
        setIsInvestigacionOpen(true);
      }, 300);
    } else {
      setIsScrolling(false);
      if (isDocenciaOpen) {
        closeAllDropdowns(() => setIsInvestigacionOpen(true));
      } else {
        setIsInvestigacionOpen(!isInvestigacionOpen);
      }
    }
  };

  const handleDocenciaClick = () => {
    if (isTransitioning) return;

    if (isSearchOpen) {
      setIsSearchOpen(false);
      setTimeout(() => {
        setIsScrolling(false);
        if (isInvestigacionOpen) setIsInvestigacionOpen(false);
        setIsDocenciaOpen(true);
      }, 300);
    } else {
      setIsScrolling(false);
      if (isInvestigacionOpen) {
        closeAllDropdowns(() => setIsDocenciaOpen(true));
      } else {
        setIsDocenciaOpen(!isDocenciaOpen);
      }
    }
  };

  const handleSearchClick = () => {
    if (isTransitioning) return;

    if (isInvestigacionOpen || isDocenciaOpen) {
      closeAllDropdowns(() => setIsSearchOpen(true));
    } else {
      setIsSearchOpen(!isSearchOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isInvestigacionOpen || isDocenciaOpen || isSearchOpen) {
        closeAllDropdowns();
        setIsSearchOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isInvestigacionOpen || isDocenciaOpen) {
          closeAllDropdowns();
        }
        if (isSearchOpen) {
          setIsSearchOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInvestigacionOpen, isDocenciaOpen, isSearchOpen]);

  return (
    <div className='container mx-auto px-2 sm:px-4 relative'>
      <div
        ref={menuRef}
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
          ${
            isInvestigacionOpen || isDocenciaOpen
              ? 'border-b border-gray-200 md:border-b-0'
              : ''
          }
        `}
      >
        {/* Search overlay for mobile */}
        <div
          className={`
            absolute right-0 top-0 
            h-full
            transition-all duration-300 ease-in-out 
            bg-white
            flex items-center
            overflow-hidden
            md:rounded-[10px] 
            z-50
            ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <div
            className={`
            w-full 
            flex items-center 
            px-4
            transition-opacity duration-200 ease-in-out
            ${isSearchOpen ? 'opacity-100' : 'opacity-0'}
          `}
          >
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
              <Link to='/equipo' className='text-gray-700 hover:text-gray-900'>
                Equipo
              </Link>
            </li>
            <li className='flex flex-col relative'>
              <div
                className='flex items-center space-x-1 cursor-pointer'
                onClick={handleInvestigacionClick}
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
                  fixed left-0 md:absolute
                  w-screen md:w-[680px]
                  bg-white md:bg-gray-100
                  shadow-lg
                  ${
                    isScrolling
                      ? 'transition-all duration-75'
                      : 'transition-transform duration-300'
                  }
                  ease-in-out
                  ${
                    isInvestigacionOpen
                      ? 'transform-none'
                      : 'transform scale-y-0'
                  }
                  origin-top
                  border-t border-gray-200
                  md:rounded-b-[10px]
                  md:top-9
                  md:left-[50%]
                  md:-translate-x-[37%]
                `}
                style={{
                  top:
                    menuRef.current &&
                    !window.matchMedia('(min-width: 768px)').matches
                      ? `${menuRef.current.getBoundingClientRect().bottom}px`
                      : undefined,
                }}
              >
                <div className='py-2'>
                  <a
                    href='/proyectos'
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
                onClick={handleDocenciaClick}
              >
                <span className='text-gray-700 hover:text-gray-900'>
                  Docencia
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
                  fixed left-0 md:absolute
                  w-screen md:w-[680px]
                  bg-white md:bg-gray-100
                  shadow-lg
                  ${
                    isScrolling
                      ? 'transition-all duration-75'
                      : 'transition-transform duration-300'
                  }
                  ease-in-out
                  ${isDocenciaOpen ? 'transform-none' : 'transform scale-y-0'}
                  origin-top
                  border-t border-gray-200
                  md:rounded-b-[10px]
                  md:top-9
                  md:left-[51%]
                  md:-translate-x-[61%]
                `}
                style={{
                  top:
                    menuRef.current &&
                    !window.matchMedia('(min-width: 768px)').matches
                      ? `${menuRef.current.getBoundingClientRect().bottom}px`
                      : undefined,
                }}
              >
                <div className='py-2'>
                  <a
                    href='/docencia'
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
                    href='/docencia'
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
            <div className='h-6 w-[1px] bg-gray-300 z-51'></div>
            {isSearchOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-700 hover:text-gray-900 z-51 mr-4 md:rounded-[10px]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={handleSearchClick}
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
                onClick={handleSearchClick}
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
