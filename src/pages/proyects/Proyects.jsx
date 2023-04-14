import React from "react";
import "./Proyects.css";
import Cards from "../../components/Cards/Cards";
import imgRankA from "../../assets/Screenshot_1.png";
import Andromeda from "../../assets/Screenshot_5.png";
import pedia from "../../assets/Screenshot_3.png";
import StarWars from "../../assets/Screenshot_6.png"

export default function Proyects() {
  return (
    <>
    <Cards
        titulo="Star Wars Challenge"
        tecno="React / CSS Modules / JavaScript"
        parrafo="Desafío técnico de front-end. Fue realizado utilizando las tecnologías de React, JavaScript y CSS.   "
        img={StarWars}
        link="https://star-wars-challenge-one.vercel.app/"
      />
      <Cards
        titulo="Andromeda Games"
        tecno="React / Redux / Toolkit/ Node / Express / PostgreSQL"
        parrafo="Andromeda Games  es un proyecto enfocado a la venta de juegos indies. Esta plataforma promociona e incentiva a creadores independientes a publicar y vender sus juegos . "
        img={Andromeda}
        link="https://andromedagames.netlify.app/"
      />

      <Cards
        titulo="CountryPedia"
        tecno="Frondtend / Backend / Bases de datos"
        parrafo="En este proyecto, implementé una base de datos relacional utilizando SQL y utilicé Node, Express y Sequelize en el backend. Para el frontend, utilicé React y Redux. Este proyecto fue realizado como trabajo individual por Henry. "
        img={pedia}
        link="https://pi-henry-front.vercel.app/"
      />

      <Cards
        titulo="AnimeRank"
        tecno="React / Redux / API Anime"
        parrafo="El proyecto consiste en consumir una API de animes para obtener una lista de animes y poder realizar búsquedas y obtener un ranking de los mismos. Además, se hace uso de React en el front-end y Redux para la gestión de estados globales. "
        img={imgRankA}
        link="https://animerankig-shya.vercel.app/"
      />
  
      
    </>
  );
}
