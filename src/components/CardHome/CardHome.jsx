import { Typography } from "@mui/material";
import React from "react";
import style from "./CardHome.module.css";
import imgg from "../../assets/Screenshot_6.png";

const ProyectosRecientes = [
  {
    titulo: "MiCole",
    img: "https://res.cloudinary.com/dj8p0rdxn/image/upload/v1681475224/qs0xx7ypkkof5bsxv56b.jpg",
    description: "Busca, compara y escoge el mejor colegio para tus hijos",
    link: "https://micole.vercel.app/",
  },
  {
    titulo: "Star Wars",
    img: "https://res.cloudinary.com/dj8p0rdxn/image/upload/v1681475668/v5a7yebjoyrrty454mr2.png",
    description:
      " Star Wars - random battle , es una prueba tecnica  que realicé para desarrollador front-end ",
    link: "https://star-wars-challenge-one.vercel.app/",
  },
  {
    titulo: "Adrian Hidráulica",
    img: "https://res.cloudinary.com/dj8p0rdxn/image/upload/v1681475614/hjsrmhziep376bvqez7m.png",
    description: "Sistema de gestion de inventario , trabajos y empleados",
    link: "",
  },

];

export default function CardHome() {
  return (
    <>
      <div
        style={{
          background: "#ffff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom:'2vh',
          paddingTop:'2vh'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontFamily: "Poppins",
            fontSize: "3vh",
            color: "#0D263B",
          }}
        >
          Proyectos recientes
        </Typography>
      </div>
      <div className={style.layout}>
        {ProyectosRecientes.map((p) => {
          return (
            <>
              <div className={style.container}>
                <div>
                  <img
                    src={p.img}
                    style={{ width: "100%", height: "20vh" }}
                    alt={p.titulo}
                  />
                </div>
                <div style={{ padding: "1vh" }}>
                  <a
                    style={{ textDecoration: "none", color: "#0D263B" }}
                    target="_blank"
                    href={p.link}
                  >
                    <h1 style={{ fontSize: "1", margin: "0" }}>{p.titulo}</h1>
                  </a>

                  <p>{p.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
