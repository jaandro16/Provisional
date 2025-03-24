const SubHeader = () => {
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
        <div className='w-full h-full flex items-center justify-center px-2 sm:px-4'>
          <ul className='flex items-center space-x-6 xs:space-x-3 sm:space-x-4 md:space-x-15 font-["Open_Sans"] text-sm sm:text-base'>
            <li>
              <a href='/equipo' className='text-gray-700 hover:text-gray-900'>
                Equipo
              </a>
            </li>
            <li className='flex items-center space-x-1 cursor-pointer'>
              <a
                href='/investigacion'
                className='text-gray-700 hover:text-gray-900'
              >
                Investigación
              </a>
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
            </li>
            <li className='flex items-center space-x-1 cursor-pointer'>
              <a href='/docencia' className='text-gray-700 hover:text-gray-900'>
                Docencia
              </a>
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
            </li>
            <div className='h-6 w-[1px] bg-gray-300'></div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-700 hover:text-gray-900'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
