// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Testimonios from './components/Testimonios';
// import Hero from './components/Hero';
// import Tarifas from './components/Tarifas';
// import Entrenos from './components/Entrenos';
// import Contacto from './components/Contacto';
// import ScrollNavigation from './components/ScrollNavigation';
// import './App.css';

// <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>


// function App() {
//   const [showScrollNav, setShowScrollNav] = useState('none');

//   const handleScroll = () => {
//     const headerHeight = document.querySelector('header')?.offsetHeight || 0;
//     const scrollPosition = window.scrollY;
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;

//     if (isMobile) {
//       if (scrollPosition > headerHeight) {
//         setShowScrollNav('both'); // Mostrar ambas flechas si se está en una sección después del header
//       } else {
//         setShowScrollNav('none'); // Mostrar solo la flecha hacia abajo en el header
//       }
//     } else {
//       setShowScrollNav('none'); // Ocultar las flechas en pantallas grandes
//     }
//   };

//   useEffect(() => {
//     handleScroll(); // Llamar a handleScroll al montar el componente para manejar el estado inicial
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <Testimonios />
//       <Entrenos />
//       <Tarifas />
//       <Contacto />

//       <Footer />
//       {showScrollNav !== 'none' && <ScrollNavigation mode={showScrollNav} />}
//     </div>
//   );
// }

// export default App;


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

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionElements = document.querySelectorAll('section');
      const offsets = Array.from(sectionElements).map(el => el.offsetTop);
      const index = offsets.findIndex((offset, i) => scrollTop < offset || i === offsets.length - 1);
      setCurrentIndex(index === -1 ? sectionElements.length - 1 : index - 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll('section');
    if (sectionElements[index]) {
      window.scrollTo({
        top: sectionElements[index].offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero id="home" />
      <Testimonios id="testimonios" />
      <Entrenos id="entrenos" />
      <Tarifas id="tarifas" />
      <Contacto id="contacto" />
      <Footer id="footer" />

      <ScrollNavigation
        scrollToPrevSection={() => scrollToSection(Math.max(currentIndex - 1, 0))}
        scrollToNextSection={() => scrollToSection(Math.min(currentIndex + 1, document.querySelectorAll('section').length - 1))}
        showUpArrow={currentIndex > 0}
        showDownArrow={currentIndex < document.querySelectorAll('section').length - 1}
      />
    </div>
  );
};

export default App;
