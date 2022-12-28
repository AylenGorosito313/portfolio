import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="select-layout">
      <div className="select-container">
        <Link className="link-menu" to={"/"}>
          <div className="option-container">
            <p className="option-name"> Sobre mi </p>
          </div>
        </Link>
        <Link className="link-menu" to={"/proyects"}>
          <div className="option-container">
            <p className="option-name">Proyectos</p>
          </div>
        </Link>
        <Link className="link-menu" to={"/contact"}>
          <div className="option-container">
            <p className="option-name">Contacto</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
