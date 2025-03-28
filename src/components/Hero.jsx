import HeroOverlay from './HeroOverlay';

const Hero = () => {
  return (
    <div className='w-full relative mt-15 md:-mt-8'>
      <img
        src='/etsii_upm_cover.png'
        alt='Hero'
        className='md:hidden w-full h-[350px] object-cover opacity-30' // Added opacity-80 (80% opacity)
      />
      <img
        src='/etsii_upm_cover_antigua.png'
        alt='Hero'
        className='hidden md:block w-full h-[500px] object-cover opacity-30 ' // Added opacity-80 (80% opacity)
      />
      <HeroOverlay />
    </div>
  );
};

export default Hero;
