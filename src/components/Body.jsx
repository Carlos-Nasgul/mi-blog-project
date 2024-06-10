import React from "react";
import "../estilos/Body.css";
import dibuCohete from "../imagenes/pexels-therato-1933317.jpg"; // Asegúrate de usar la ruta correcta
import { WindowOne, WindowTwo } from "./Windows";

function Body() {
  return (
    <div className="cuerpo-principal">
      {dibuCohete}
      <div className="cuerpo-secundario">
        <WindowOne
          className="ventana-uno"
          title={"Hola Chavales"}
          description={"Probando una breve muestra del poder de React"}
        />
        <WindowTwo
          className="ventana-uno ventana-dos"
          title={"Hola Chavales"}
          description={"Probando una breve muestra del poder de React"}
        />
      </div>
    </div>
  );
}

export default Body;
