import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Behance from "../../svg/behance";
import Git from "../../svg/git";
import Linkedin from "../../svg/linkedin";
import Proyects from "../proyects/Proyects";
import img from "../../assets/img.png";
import tecnologias from "../../assets/Group 5.png"
import CV from "../../components/Cards/CV";
function Home() {
  return (
    <>
      <div className="div-container-home">
        <div className="div-central-home">
          <div className="profile-img">
            <div className="decoration-img">
              <img className="img" src={img} alt="profile" />
              <h1 className="h1-name">Aylen Gorosito</h1>
              <hr className="hr"></hr>
              <h1 className="h1-name-title"> Full-Stack Developer</h1>
              <div className="div-redes-sociales">
                <div>
                  {" "}
                  <a target="_blank" href="https://www.behance.net/aylengorosito">
                    <Behance className="be" />
                  </a>
                </div>
                <div>
                  {" "}
                  <a target="_blank" href="https://www.linkedin.com/in/aylen-gorosito-a252a5243/">
                    <Linkedin className="be" />
                  </a>
                </div>
                <div>
                  <a  target="_blank" href="https://github.com/AylenGorosito313">
                    <Git className="be" />
                  </a>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="container-hola-parrafo">
            <h1 className="h1-name-hola">Hola ! 👋</h1>
            <h2 className="text-h2">Esto soy y esto es lo que hago</h2>
            <div className="buttons-div">
              <div className="div-btn-1">
                {/* <button  className="buttons">Proyectos</button> */}
              </div>
            </div>

            <p className="parrafo">
              Soy una apasionada de la tecnología y el desarrollo web.
              Me encanta trabajar en proyectos que me permiten aprender y crecer
              como profesional, siempre estoy buscando nuevos retos y
              oportunidades para mejorar mis habilidades. 
            </p>
            <CV/>
          </div>
        </div>
      </div>
      <div className="home-proyects-div">
        <div className="div-size-img">
          <h1> Tecnologias</h1>
          <img className="size-img" src={tecnologias} alt="alt"/>
        </div>
       
        <Proyects />
      </div>
    <Footer/>
    </>
  );
}

export default Home;
