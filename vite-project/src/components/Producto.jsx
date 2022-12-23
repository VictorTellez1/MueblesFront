import React from 'react'
import {Link} from 'react-router-dom'
const Producto = ({producto}) => {
  const {nombre,descripcion,precio,categoria,imagen}=producto
  return (
      <div className='producto'>
        <img src={imagen} alt="Imagen Producto"/>
        <div className='texto-producto'>
          <h3>{nombre}</h3>
          <p className='truncate'>
            {descripcion}
          </p>
          <p className='precio'>${precio}</p>
          <Link className="btn" to="#">Agregar al carrito</Link>
        </div>
      </div>
  )
}

export default Producto
