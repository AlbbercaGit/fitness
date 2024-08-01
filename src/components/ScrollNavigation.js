// import React from 'react';
// import './ScrollNavigation.css';
// import arrowDown from './img/arrowdown.png';
// import arrowUp from './img/arrowup.png';

// const ScrollNavigation = ({ mode }) => {
//     const sections = ["header", "hero", "testimonios", "entrenos", "tarifas","contacto","footer"];

//     const handleSmoothScroll = (event, targetId) => {
//         event.preventDefault();
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//             const isMobile = window.matchMedia("(max-width: 768px)").matches; 
//             const offset = isMobile ? 0 : 50; // Mismo valor que en Header
//             const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: "smooth"
//             });
//         }
//     };

//     const scrollToNextSection = () => {
//         const currentIndex = sections.findIndex(id => document.getElementById(id)?.getBoundingClientRect().top >= 0);
//         if (currentIndex !== -1) {
//             const nextIndex = (currentIndex + 1) % sections.length;
//             handleSmoothScroll({ preventDefault: () => {} }, sections[nextIndex]);
//         }
//     };

//     const scrollToPreviousSection = () => {
//         const currentIndex = sections.findIndex(id => document.getElementById(id)?.getBoundingClientRect().top >= 0);
//         if (currentIndex !== -1) {
//             const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
//             handleSmoothScroll({ preventDefault: () => {} }, sections[prevIndex]);
//         }
//     };

//     return (
//         <nav className="scroll-nav">
//             {mode === 'both' && (
//                 <>
//                     <a href="#top" onClick={(event) => { event.preventDefault(); scrollToPreviousSection(); }}>
//                         <img src={arrowUp} alt="Scroll Up" className="scroll-icon" />
//                     </a>
//                     <a href="#bottom" onClick={(event) => { event.preventDefault(); scrollToNextSection(); }}>
//                         <img src={arrowDown} alt="Scroll Down" className="scroll-icon" />
//                     </a>
//                 </>
//             )}
//             {mode === 'down' && (
//                 <a href="#bottom" onClick={(event) => { event.preventDefault(); scrollToNextSection(); }}>
//                     <img src={arrowDown} alt="Scroll Down" className="scroll-icon" />
//                 </a>
//             )}
//         </nav>
//     );
// }

// export default ScrollNavigation;

import React from 'react';
import './ScrollNavigation.css';
import arrowDown from './img/arrowdown.png';
import arrowUp from './img/arrowup.png';

const ScrollNavigation = ({ scrollToPrevSection, scrollToNextSection, showUpArrow, showDownArrow }) => {
  return (
    <nav className="scroll-nav">
      {showUpArrow && (
        <a href="#top" onClick={(event) => { event.preventDefault(); scrollToPrevSection(); }}>
          <img src={arrowUp} alt="Scroll Up" className="scroll-icon" />
        </a>
      )}
      {showDownArrow && (
        <a href="#bottom" onClick={(event) => { event.preventDefault(); scrollToNextSection(); }}>
          <img src={arrowDown} alt="Scroll Down" className="scroll-icon" />
        </a>
      )}
    </nav>
  );
}

export default ScrollNavigation;

