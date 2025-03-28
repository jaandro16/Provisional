import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CompactHeader from './components/CompactHeader';
import Hero from './components/Hero';
import Presentacion from './components/Presentacion';
import Noticias from './components/Noticias';
import Investigacion from './components/Investigacion';
import ImageOverlay from './components/ImagenOverlay';
import Footer from './components/Footer';

function App() {
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const showThreshold = 175; // Punto donde aparece
      const hideThreshold = 200; // Punto donde desaparece (más arriba)

      if (currentScrollY > showThreshold) {
        setShowCompactHeader(true);
      } else if (currentScrollY < hideThreshold) {
        setShowCompactHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className='app'>
      <Header />
      <SubHeader />
      <CompactHeader isVisible={showCompactHeader} />
      <Hero />
      <Presentacion />
      <Noticias />
      <Investigacion />
      <ImageOverlay />
      <Footer />
      <main>
        <h1 className='text-3xl text-black font-bold underline mt-200'>.</h1>
      </main>
    </div>
  );
}

export default App;
