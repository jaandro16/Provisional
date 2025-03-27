import React from 'react';

const Presentacion = () => {
  return (
    <div className='container mx-auto px-4 py-12 mt-20'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div className='flex-1 ml-3 mr-3 md:ml-8 lg:ml-3 md:mr-0'>
          <div className='text-left text-black'>
            <p className="font-['Open_Sans'] text-[16px] md:text-[22px] mb-8">
              La{' '}
              <span className='font-semibold'>
                Escuela Técnica Superior de Ingenieros Industriales
              </span>{' '}
              (ETSII) de la{' '}
              <span className='font-semibold'>
                Universidad Politécnica de Madrid
              </span>
              , fundada en 1845, es una institución de referencia en la
              formación de ingenieros industriales en España.
            </p>
            <p className="font-['Open_Sans'] text-[16px] md:text-[22px]">
              A lo largo de su historia, la ETSII ha evolucionado para adaptarse
              a los avances tecnológicos y a las necesidades de la industria. En
              este contexto, la{' '}
              <span className='font-semibold'>
                Unidad Docente de Informática Industrial
              </span>
              desempeña un papel fundamental, integrando tecnologías de la
              información y la automatización en la formación de ingenieros, y
              contribuyendo al desarrollo de soluciones innovadoras en el ámbito
              industrial.
            </p>
          </div>
        </div>
        <div className='md:flex-1 flex justify-center'>
          <img
            src='/src/assets/EscUpmIng-removebg-preview.png'
            alt='ETSII UPM'
            className='w-[180px] h-[145px] md:w-[215px] md:h-[180px] object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
