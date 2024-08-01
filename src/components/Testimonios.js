import React from 'react';
import './Testimonios.css'; // Asegúrate de que este archivo exista y tenga los estilos necesarios
import icono1 from "./img/icon1.jpg"; // Importa la imagen aquí
import icono2 from "./img/icon2.jpg"; // Importa la imagen aquí
import icono3 from "./img/icon3.jpg"; // Importa la imagen aquí
import icono4 from "./img/icon4.jpg"; // Importa la imagen aquí
import icono5 from "./img/icon5.jpg"; // Importa la imagen aquí
import icono6 from "./img/icon6.jpg"; // Importa la imagen aquí


function Testimonios() {
  return (
    <section className="Testimonios" id="testimonios">
      <div className="Testimonios-header">
        <h1>Testimonios</h1>
        <p>Aquí podrás encontrar las opiniones de algunos alumnos</p>
      </div>
      <div className="Testimonios-grid">
        <div className="Testimonios-item">
          <h2>“Un cambio radical”</h2>
          <div className="Testimonios-content">
            <div className="Testimonios-icon">
              <img src={icono1} alt="Icono 1" />
            </div>
            <div className="Testimonios-text">
              <h3>Perfecto para un cambio</h3>
              <p>El mejor entrenador con el que he trabajado. Mis resultados superaron todas mis expectativas.</p>
            </div>
          </div>
        </div>

        <div className="Testimonios-item">
          <h2>“Recomendado al 100%”</h2>
          <div className="Testimonios-content">
            <div className="Testimonios-icon">
              <img src={icono2} alt="Icono 2" />
            </div>
            <div className="Testimonios-text">
              <h3>Entrenamientos efectivos</h3> {/* Añadido */}
              <p>Entrenamientos personalizados que realmente funcionan. ¡Estoy muy contento con los resultados!</p>
            </div>
          </div>
        </div>

        <div className="Testimonios-item">
          <h2>“Excelente experiencia”</h2>
          <div className="Testimonios-content">
            <div className="Testimonios-icon">
              <img src={icono3} alt="Icono 3" />
            </div>
            <div className="Testimonios-text">
              <h3>Experiencia única</h3> {/* Añadido */}
              <p>Una experiencia de entrenamiento única. Profesional, motivador y siempre disponible para ayudar.</p>
            </div>
          </div>
        </div>

        <div className="Testimonios-item">
          <h2><strong>“Testimonio Extra”</strong></h2>
          <div className="Testimonios-content">
            <div className="Testimonios-icon">
              <img src={icono4} alt="Icono Extra" />
            </div>
            <div className="Testimonios-text">
              <h3>Información adicional</h3> {/* Añadido */}
              <p>Una sección adicional que proporciona información extra sobre el entrenamiento y su impacto.</p>
            </div>
          </div>
        </div>

        <div className="Testimonios-item">
          <h2>“Transformación increíble”</h2>
          <div className="Testimonios-content">
            <div className="Testimonios-icon">
              <img src={icono5} alt="Icono 4" />
            </div>
            <div className="Testimonios-text">
              <h3>Resultados sorprendentes</h3> {/* Añadido */}
              <p>Gracias a Edu, he logrado cambiar mi vida de manera significativa. Los resultados son impresionantes.</p>
            </div>
          </div>
        </div>

        <div className="Testimonios-item">
          <h2>“La mejor inversión”</h2>
          <div className="Testimonios-content">
            <div className="Testimonios-icon">
              <img src={icono6} alt="Icono 5" />
            </div>
            <div className="Testimonios-text">
              <h3>Decisión acertada</h3> {/* Añadido */}
              <p>El entrenamiento ha sido una de las mejores decisiones que he tomado. Altamente recomendado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
