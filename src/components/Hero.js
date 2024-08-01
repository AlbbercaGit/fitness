import React from 'react';
import './Hero.css'; // Si deseas estilos específicos para el Hero
import fondo from "./img/gymfondo.jpg"; // Importa la imagen aquí


function Hero() {
  return (
    <section className="Hero" id="home">
      <h1>Edu Abad</h1>
      <p>Soy Edu, un entrenador personal certificado con más de 10 años de experiencia. Me especializo en entrenamiento funcional, 
        musculación y nutrición deportiva,ofreciendo programas personalizados y basados en evidencia científica.</p>
      {/* <a href="#services" className="Hero-link">Nuestros Servicios</a> */}
    </section>
  );
}

export default Hero;
