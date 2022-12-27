import React from "react";
import "./Proyects.css";
import imgRankA from "../../assets/animerank.png";
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
              <p className="p-proyect">Frondtend, API REST</p>
            </a>
            <div>
              <p className="parrafo-proyecto ">
                Proyecto en el cual consumo una api de animes para
                obtener un listado del cual obtener un ranking y realizar busquedas . Tambien hago uso
                de React para el front y Redux para estados globales{" "}
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
            <a
              className="Link-proyecto"
              href="https://pi-henry-front.vercel.app/"
            >
              <p className="title-proyect">CountryPedia</p>
            </a>
            <p className="p-proyect">Frondtend , Backend y Bases de datos</p>
            <div>
              {" "}
              <p className="parrafo-proyecto ">
                En este proyecto  implemento una base de datos relacional SQL, Express
                y Sequelize en Backend. En utilizo React y Redux . Proyecto
                realizado como trabajo indiviudal de Henry{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
