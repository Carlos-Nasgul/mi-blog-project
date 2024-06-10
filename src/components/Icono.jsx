import React from "react";
import "../imagenes/icono.svg";

const Icono = () => {
  return (
    <div className="icono-portada">
      <a
        href="http://localhost:4321/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-brilliance icono-portada">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-brilliance"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
          </svg>
        </i>
      </a>
    </div>
  );
};

export default Icono;
