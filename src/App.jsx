import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CompactHeader from './components/CompactHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import Hero from './components/Hero';
import './App.css';
import Contacto from './pages/Contacto';

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
          <Route path='/contacto' element={<Contacto />} />
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
