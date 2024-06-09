import React from "react";
import "../estilos/Header.css";

function Header() {
  return (
    <header>
      <div className="container-boton">
        <button className="boton-menu">Noticias</button>
        <button className="boton-menu">Relax</button>
        <button className="boton-menu">Contacto</button>
      </div>
    </header>
  );
}

export default Header;
