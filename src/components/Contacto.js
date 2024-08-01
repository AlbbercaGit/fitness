import React from 'react';
import './Contacto.css'; // Asegúrate de que este archivo exista y tenga los estilos necesarios
import contactoIcon from './img/edu.PNG'; // Cambia esta ruta a la imagen del ícono que prefieras

function Contacto() {
  return (
    <section className="Contacto" id="contacto">
      <div className="Contacto-header">
        <h1>Contacto</h1>
        <p>Puedes ponerte en contacto con Edu utilizando la siguiente información:</p>
      </div>
      <div className="Contacto-grid">
        <div className="Contacto-item">
          <h2>Datos de Contacto</h2>
          <div className="Contacto-content">
            <div className="Contacto-icon">
              <img src={contactoIcon} alt="Ícono de contacto" />
            </div>
            <div className="Contacto-text">
              <p><strong>Nombre:</strong> Edu</p>
              <p><strong>Teléfono:</strong> +123 456 7890</p>
              <p><strong>Email:</strong> edu@example.com</p>
              <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
