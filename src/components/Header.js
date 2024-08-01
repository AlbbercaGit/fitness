import React from "react";
import "./Header.css"; // Si deseas estilos específicos para el Header
import logo from "./img/gym.png"; // Importa la imagen aquí
import logo2 from "./img/gymwhite.png"; // Importa la imagen aquí

function Header() {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const offset = isMobile ? 0 : 50; // Asegúrate de que este valor coincide con el usado en ScrollNavigation
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="App-header">
        <div className="logo">
          <img src={logo2} alt="Logo" className="logo-icon" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={(event) => handleSmoothScroll(event, "home")}>
                Quién Soy
              </a>
            </li>
            <li>
              <a href="#testimonios" onClick={(event) => handleSmoothScroll(event, "testimonios")}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#entrenos" onClick={(event) => handleSmoothScroll(event, "entrenos")}>
                Entrenos
              </a>
            </li>
            <li>
              <a href="#tarifas" onClick={(event) => handleSmoothScroll(event, "tarifas")}>
                Tarifas
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={(event) => handleSmoothScroll(event, "contacto")}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
