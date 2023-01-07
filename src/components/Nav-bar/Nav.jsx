import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu.jsx";
import {useState } from "react";
import "./Nav.css";
import img from "../../assets/img.png"
import Burguer from "../../svg/burguer"
function Nav() {
const [Open, setOpen] = useState(false)
const toggleMenu =()=>{
setOpen(!Open)
}


  return (
    <div className="div-nav-container">
    <div className="div-nav">
      <div className="mi-carita-div">
      <img  className="mi-carita-nav" src={img} alt="micarita"/>
      </div>
   
      <div className="header-nav">
       
        <h1 className="h1-name-nav">Aylen Gorosito </h1> <p>    / Full-Stack Developer</p>
      </div>
      <div>
        <div  className="burguer-menu" onClick ={toggleMenu}>
        < Burguer/>
        </div>
       {Open &&  <Menu/>}
        <Link className="Link" to={"/"}>
          Sobre mi{" "}
        </Link>
       
        <Link className="Link" to={"/proyects"}>
          Proyectos{" "}
        </Link>
        {/* <Link className="Link" to={"/contact"}>
          {" "}
          Contacto{" "}
        </Link> */}
      </div>
    </div>
    </div>
  );
}

export default Nav;
