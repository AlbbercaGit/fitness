import React from 'react';
import './Tarifas.css'; // Asegúrate de que este archivo CSS esté correctamente vinculado

function Tarifas() {
  return (
    <section className="Tarifas" id="tarifas">
      <div className="Tarifas-header">
        <h1>Nuestras Tarifas</h1>
        <p>Elige el plan que mejor se adapte a tus necesidades</p>
      </div>
      <div className="Tarifas-grid">
        {/* Primer plan */}
        <div className="Tarifas-item">
          <h2>Plan Básico</h2>
          <div className="Tarifas-price">
            <h1>200€</h1>
            <p>/ Mes</p>
          </div>
          <p className="Tarifas-info">2 Entrenamientos semanales</p>
          <ul className="Tarifas-features">
            <li>Mejora gradual de la condición física</li>
            <li>Plan de entrenamiento personalizado</li>
            <li>Acceso a consejos de nutrición básicos</li>
            <li>Evaluación inicial de estado físico</li>
            <li>Precio mensual reducido comparado con sesiones individuales</li>
          </ul>
        </div>

        {/* Segundo plan */}
        <div className="Tarifas-item">
          <h2>Plan Intermedio</h2>
          <div className="Tarifas-price">
            <h1>350€</h1>
            <p>/ Mes</p>
          </div>
          <p className="Tarifas-info">4 Entrenamientos semanales</p>
          <ul className="Tarifas-features">
            <li>Mejora rápida de la condición física</li>
            <li>Plan de entrenamiento personalizado</li>
            <li>Asesoramiento nutricional avanzado</li>
            <li>Evaluación continua de progreso</li>
            <li>Acceso a sesiones grupales</li>
          </ul>
        </div>

        {/* Tercer plan */}
        <div className="Tarifas-item">
          <h2>Plan Premium</h2>
          <div className="Tarifas-price">
            <h1>500€</h1>
            <p>/ Mes</p>
          </div>
          <p className="Tarifas-info">6 Entrenamientos semanales</p>
          <ul className="Tarifas-features">
            <li>Mejora intensiva de la condición física</li>
            <li>Plan de entrenamiento totalmente personalizado</li>
            <li>Asesoramiento nutricional completo</li>
            <li>Evaluación mensual de estado físico</li>
            <li>Acceso a todas las instalaciones y clases</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tarifas;
