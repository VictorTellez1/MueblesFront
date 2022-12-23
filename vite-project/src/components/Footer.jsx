import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='grid-footer contenedor'>
        <div className='footer-flex'>
          <h3>Categorias</h3>
          <nav className='footer-navegacion'>
            <Link to="/Cocina">Cocina</Link>
            <Link to="/Oficina">Oficina</Link>
            <Link to="/Hogar">Hogar</Link>
          </nav>
        </div>
        <div className='footer-flex'>
          <h3>Sobre Nosotros</h3>
          <nav className='footer-navegacion'>
            <Link to="#">Nuestra Historia</Link>
            <Link to="#">Mision,Vision y Valores</Link>
            <Link to="#">Carreras</Link>
            <Link to="#">Politica de Privacidad</Link>
            <Link to="#">Terminos de Servicio</Link>
          </nav>
        </div>
        <div className='footer-flex'>
          <h3>Soporte</h3>
          <nav className='footer-navegacion'>
            <Link to="#">Preguntas Frecuentes</Link>
            <Link to="#">Ayuda en Linea</Link>
            <Link to="#">Confianza y seguridad</Link>
          </nav>
        </div>
      </div>
      <p className='derechos'>Todos los derechos Reservados, TiendaMuebles</p>
    </footer>
  )
}

export default Footer
