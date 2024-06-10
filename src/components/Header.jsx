import React from "react";
import "../estilos/Header.css";
import "../imagenes/icono.svg";
import Icono from "./Icono";

// Puedes usar iconos de FontAwesome, por ejemplo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between p-3">
      <Icono className="icono-portada" />
      <div className="d-flex">
        <button className="boton-menu">Noticias</button>
        <button className="boton-menu">Relax</button>
        <button className="boton-menu">Videos</button>
        <button className="boton-menu">Contacto</button>
      </div>
      <div className="d-flex align-items-center social-links">
        <a
          href="https://www.facebook.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.twitter.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </header>
  );
}

export default Header;
