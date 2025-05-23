import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CompactHeader from './components/CompactHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import Hero from './components/Hero';
import './App.css';
import ContactoPage from './components/ContactoPage';
import Proyectos from './pages/Proyectos';
import EquipoPage from './components/EquipoPage';
import InvestigacionPage from './components/InvestigacionPage';
import NoticiasPage from './components/NoticiasPage';
import DocenciaSection from './pages/Docencia';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const showThreshold = 175;
      const hideThreshold = 200;

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
    <div className='flex flex-col min-h-screen relative'>
      <ScrollToTop />
      <div className='z-40 relative'>
        <Header onLoginClick={() => setIsLoginModalOpen(true)} />
        <SubHeader />
        <CompactHeader
          isVisible={showCompactHeader}
          onLoginClick={() => setIsLoginModalOpen(true)}
        />
        <Hero />
      </div>
      <main className='flex-grow relative'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/equipo' element={<EquipoPage />} />
          <Route path='/investigacion' element={<InvestigacionPage />} />
          <Route path='/noticias' element={<NoticiasPage />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/docencia' element={<DocenciaSection />} />
        </Routes>
      </main>
      <Footer className='relative z-40' />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}

export default App;
