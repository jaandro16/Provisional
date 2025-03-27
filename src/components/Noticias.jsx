import React, { useEffect, useRef, useState } from 'react';

const Noticias = () => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    const titleElement = titleRef.current;
    if (titleElement) {
      observer.observe(titleElement);
    }

    const handleScroll = () => {
      if (titleElement && isVisible) {
        const rect = titleElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportHeight / 2 - elementCenter);
        const maxDistance = viewportHeight / 2;

        const progress = 1 - distanceFromCenter / maxDistance;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className='relative'>
      <img
        src='/mentoria.jpg'
        alt='Background'
        className='absolute right-0 md:right-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 -top-13 h-[250px] sm:h-[350px] md:h-[475px] lg:h-[500px] z-10'
      />

      <div className='w-full bg-[#E6F0F7] h-[600px] md:h-[350px] mt-40 relative'>
        <div className='absolute left-8 md:left-14 lg:left-40 top-[65%] md:top-1/2 -translate-y-1/2 max-w-full md:max-w-[300px] lg:max-w-[400px] flex flex-col px-4 md:px-0 md:pr-16 lg:pr-20'>
          <div ref={titleRef} className='relative inline-block'>
            <h2 className="font-['Work_Sans'] text-black font-semibold text-3xl md:text-4xl mb-4 text-left">
              Noticias
            </h2>
            <div
              className='absolute bottom-[2px] left-0 top-10 h-[2px] bg-[#0063A6] transition-all duration-700 ease-out'
              style={{
                width: `${scrollProgress * 100}%`,
                maxWidth: '48%',
                opacity: scrollProgress,
              }}
            ></div>
          </div>
          <p className="font-['Open_Sans'] text-black text-lg md:text-xl mb-8 text-left whitespace-normal">
            ¿Te gustaría conocer todas las noticias acerca de la Unidad Docente
            de Informática Industrial?
          </p>
          <button className='flex items-center space-x-2 bg-[#0063A6] text-white px-6 py-3 rounded hover:bg-[#0074c4] transition-colors duration-300 w-fit'>
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
