import React, { useState } from 'react';
import './Entrenos.css'; // Asegúrate de que este archivo exista y tenga los estilos necesarios
import entrenamiento1 from "./img/1.jpg"; // Importa la imagen aquí
import entrenamiento2 from "./img/2.jpg"; // Importa la imagen aquí
import entrenamiento3 from "./img/3.jpg"; // Importa la imagen aquí

function Entrenos() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="Entrenos" id="entrenos">
      <div className="Entrenos-header">
        <h1>Entrenos</h1>
        <p>Aquí podrás encontrar los diferentes tipos de entrenamientos que ofrecemos</p>
      </div>
      <div className="Entrenos-grid">
        {[{
          img: entrenamiento1,
          title: "Entrenamiento de baja intensidad",
          description: "Ejercicios suaves y controlados para mejorar la movilidad y la resistencia sin sobrecargar el cuerpo.",
        }, {
          img: entrenamiento2,
          title: "Entrenamiento funcional",
          description: "Ejercicios diseñados para mejorar la funcionalidad y el rendimiento en actividades diarias.",
        }, {
          img: entrenamiento3,
          title: "Entrenamiento  de alta intensidad",
          description: "Ejercicios intensos para quemar calorías y aumentar la fuerza rápidamente.",
        }].map((item, index) => (
          <div
            key={index}
            className={`Entrenos-item ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.img} alt={`Entrenamiento ${index + 1}`} />
            <div className="Entrenos-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Entrenos;
