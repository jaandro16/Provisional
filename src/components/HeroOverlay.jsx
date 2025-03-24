const HeroOverlay = () => {
  return (
    <div className='mx-auto px-4 absolute inset-0 pt-14 md:pt-0'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='w-full md:w-1/2 '>
          <p className='text-[16px] md:text-lg text-gray-800 md:ml-20 text-left font-["Work_Sans"] opacity-80 mb-1 md:mb-2 ml-6'>
            Universidad Politécnica de Madrid
          </p>
          <h1 className='text-[12px] md:text-4xl font-semibold text-gray-800 md:ml-26 text-left font-["Work_Sans"]'>
            <span className='md:hidden text-[29px] leading-[1] block ml-12'>
              Unidad Docente de Informática Industrial
              <br />
              ETSII
            </span>
            <span className='hidden md:block'>
              Unidad Docente
              <br />
              de Informática
              <br />
              Industrial
              <br />
              ETSII
            </span>
          </h1>
          <hr className='h-1 w-24 md:w-48 bg-[#0063A6] border-0 mt-2 md:mt-4 ml-6 md:ml-20 rounded-full' />
        </div>
        <div className='flex justify-center md:justify-end md:mr-6 mt-10 md:mt-0'>
          <img
            src='calidadAumentada.jpg'
            alt='Overlay'
            className='w-auto h-[190px] md:h-[450px] z-10 md:mt-27'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
