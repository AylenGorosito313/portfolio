import React from "react";
import "./Proyects.css";
import Cards from "../../components/Cards/Cards";
import imgRankA from "../../assets/Screenshot_1.png"
import pedia from "../../assets/Screenshot_3.png";
export default function Proyects() {
  return (
    <div className="container">
    
      <div className="container-gneral">
     
        <Cards 
          titulo = "CountryPedia"
          tecno = "Frondtend , Backend y Bases de datos"
          parrafo = "En este proyecto, implementé una base de datos relacional utilizando SQL y utilicé Node, Express y Sequelize en el backend. Para el frontend, utilicé React y Redux. Este proyecto fue realizado como trabajo individual por Henry. "
          img = { pedia}
          link ="https://pi-henry-front.vercel.app/"
        
        />
     
        <Cards 
        titulo = "AnimeRank"
        tecno = "Frondtend, API Anime"
        parrafo = "El proyecto consiste en consumir una API de animes para obtener una lista de animes y poder realizar búsquedas y obtener un ranking de los mismos. Además, se hace uso de React en el front-end y Redux para la gestión de estados globales. "
        img = {imgRankA}
        link ="https://animerankig-shya.vercel.app/"
        />
      </div>
    </div>
  );
}
