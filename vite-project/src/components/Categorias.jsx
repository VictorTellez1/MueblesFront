import React from 'react'
import {Link} from 'react-router-dom'
const Categorias = () => {
  return (
    <section className='contenedor'>
        <h2 className='categorias'>Categorias de Productos</h2>
        <div className='listado-categorias'>
          <div className='categoria'>
            <img src="img/categoria1.jpg" alt="Imagen categoria"  />
            <Link to="/Oficina">Oficina</Link>
          </div>
          <div className='categoria'>
            <img src="img/categoria2.jpg" alt="Imagen categoria"  />
            <Link to="/Hogar">Hogar</Link>
          </div>
          <div className='categoria'>
            <img src="img/categoria3.jpg" alt="Imagen categoria"  />
            <Link to="/Cocina">Cocina</Link>
          </div>
        </div>
    </section>
  )
}

export default Categorias
