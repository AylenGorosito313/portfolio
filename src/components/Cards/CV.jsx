import React from 'react'
import style from "./Cv.module.css"
import cv_img from "./cvvv.png"
import cv_pdf from "./GorositoAylen_CV.pdf"
export default function CV() {
  return (
    <>  <a href={cv_pdf} className={style.a} download="Curriculun_AylenGorosito.pdf">
     <div className={style.container}>
        <img className={style.img} src={cv_img } alt='curriculum' />

     
       <p className={style.text}>Descargar Curriculum </p>
      
        
    </div> </a>
    </>
   
  )
}
