import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonios from './components/Testimonios';
import Hero from './components/Hero';
import Tarifas from './components/Tarifas';
import Entrenos from './components/Entrenos';
import Contacto from './components/Contacto';
import ScrollNavigation from './components/ScrollNavigation';
import './App.css';

<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>


function App() {
  const [showScrollNav, setShowScrollNav] = useState('none');

  const handleScroll = () => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const scrollPosition = window.scrollY;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      if (scrollPosition > headerHeight) {
        setShowScrollNav('both'); // Mostrar ambas flechas si se está en una sección después del header
      } else {
        setShowScrollNav('none'); // Mostrar solo la flecha hacia abajo en el header
      }
    } else {
      setShowScrollNav('none'); // Ocultar las flechas en pantallas grandes
    }
  };

  useEffect(() => {
    handleScroll(); // Llamar a handleScroll al montar el componente para manejar el estado inicial
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Testimonios />
      <Entrenos />
      <Tarifas />
      <Contacto />

      <Footer />
      {showScrollNav !== 'none' && <ScrollNavigation mode={showScrollNav} />}
    </div>
  );
}

export default App;
