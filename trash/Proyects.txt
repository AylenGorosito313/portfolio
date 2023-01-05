import React from "react";
import "./Proyects.css";
import Cards from "../../components/Cards/Cards";
import imgRankA from "../../assets/Screenshot_1.png"
import pedia from "../../assets/Screenshot_3.png";
export default function Proyects() {
  return (
    <div className="container">
     
      <div className="container-gneral">
      <h1 className="title-head">Proyectos</h1>
        <Cards 
          titulo = "CountryPedia"
          tecno = "Frondtend , Backend y Bases de datos"
          parrafo = " En este proyecto implemento una base de datos relacional  SQL, Node , Express y Sequelize en Backend. En el front  utilizo React y Redux . Proyecto realizado como trabajo indiviudal de Henr "
          img = { pedia}
          link ="https://pi-henry-front.vercel.app/"
        
        />
     
        <Cards 
        titulo = "AnimeRank"
        tecno = "Frondtend, API REST"
        parrafo = "Proyecto en el cual consumo una api de animes para obtener un listado del cual obtener un ranking y realizar busquedas .Tambien hago uso de React para el front y Redux para estados globales "
        img = {imgRankA}
        link ="https://animerankig-shya.vercel.app/"
        />
      </div>
    </div>
  );
}
