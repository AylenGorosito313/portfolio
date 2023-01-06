import React from "react";

function Cards({ titulo, tecno, parrafo, img, link }) {
  return (
    <>
      <div className="div-proyect">
     
        <div className="card-pro">
          <div className="div-logo-pedia">
            <img className="logo-pedia" src={img} alt="app" />
          </div>
          <div className="text-container">
            <div className="div-titul-p">
              {" "}
              <a className="Link-proyecto" href={link}>
                <p className="title-proyect">{titulo}</p>
              </a>
              
            </div>
            {/* <p className="p-proyect">{tecno}</p> */}
            <div className="style-text">
              <div className="div-parrafo">
                <p className="parrafo-proyecto ">{parrafo}</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
}

export default Cards;
