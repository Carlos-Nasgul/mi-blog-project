import React from "react";
import "../estilos/Footer.css";

function Footer({ email }) {
  return (
    <div className="footer-principal d-flex align-items-center justify-content-center">
      © 2024 • Charlie DeBris | digitalProjects_® | {email}
    </div>
  );
}

export default Footer;
