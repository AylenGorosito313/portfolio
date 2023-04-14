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
              <a className="Link-proyecto"  target="_blank"  href={link}>
                <p className="title-proyect">{titulo}</p>
              
              </a>
      
            </div>
           
            <div className="style-text">

              <div className="div-parrafo">         
                 <p className="p-proyect">{tecno}</p>
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
