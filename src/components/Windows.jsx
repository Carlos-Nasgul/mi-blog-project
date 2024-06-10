import React from "react";
import "../estilos/Body.css";

export function WindowOne({ title, description }) {
  // Asegúrate de usar destructuring para las props
  return (
    <div className="ventana-uno cuerpo-secundario align-items-center">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

//export default WindowOne;

export function WindowTwo({ title, description }) {
  // Asegúrate de usar destructuring para las props
  return (
    <div className="ventana-uno cuerpo-secundario align-items-center">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

//export default WindowTwo;
