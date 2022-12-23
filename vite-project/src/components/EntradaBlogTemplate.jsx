import React from 'react'
import {Link} from 'react-router-dom'
const EntradaBlogTemplate = () => {
  return (
    <>
        <header>
            <h2>Guía de colores</h2>
        </header>
        <div className='imagen'>
            <img src="img/nosotros.jpg" alt="Imagen nosotros"/>
        </div>
        <div className='entrada-meta'>
            <p>Fecha: <span>22 de Octubre de 2022</span></p>
            <p>Escrito por: <span>Tienda Muebles</span></p>
        </div>
        <div className='entrada-blog'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas veritatis magnam saepe consequuntur 
            recusandae nemo fuga ex nesciunt consectetur vero dolorem ad sint optio, quidem enim illum sit eaque.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas veritatis magnam saepe consequuntur 
            recusandae nemo fuga ex nesciunt consectetur vero dolorem ad sint optio, quidem enim illum sit eaque.
            </p>
        </div>
    </>
  )
}

export default EntradaBlogTemplate
