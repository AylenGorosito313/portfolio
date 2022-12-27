import React from "react";
import "./Proyects.css";
import imgRankA from "../../assets/Captura.png";
import pedia from "../../assets/pedia.png";
export default function Proyects() {
  return (
    <div className="container-gneral">
      <div className="div-proyect">
        <div className="card-pro">
            <div className="div-logo">

            <img className="logo" src={imgRankA} alt="app" />
            </div>
         
          <div className="div-titul-p">
            {" "}
            <a className="Link-proyecto" href="https://animerankig.vercel.app">
              {" "}
              <p className="title-proyect">AnimeRank</p>
            </a>
            <p className="p-proyect">Frondtend, API REST</p>
            <div>
              <p className="parrafo-proyecto ">
                Primer proyecto en el cual consumo una api de animes para
                obtener un listado del cual obtener un ranking.Tambien hago uso
                de React para el front y manejo de Redux para estados globales{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-proyect">
        <div className="card-pro">
        <div className="div-logo-pedia">
        <img className="logo-pedia" src={pedia} alt="app" />
        </div>
         
          <div className="div-titul-p">
            {" "}
            <a className="Link-proyecto" href="https://pi-henry-front.vercel.app/">
              <p className="title-proyect">CountryPedia</p>
            </a>
            <p className="p-proyect">Frondtend , Backend y Bases de datos</p>
            <div>
              {" "}
              <p className="parrafo-proyecto ">
                Primer proyecto en el cual implemento una base de datos, express
                y sequelize en Backend. En utilizo React y Redux . Proyecto
                realizado como trabajo indiviudal de Henry{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
