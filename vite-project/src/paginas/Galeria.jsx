import React from 'react'
import { useTitle } from '../hooks/title'
import {Link} from 'react-router-dom'
const Galeria = () => {
  useTitle('Muebles - Galeria')
  return (
    <div className='contenedor'>
      <h2 className='text-center'>Galeria</h2>
      <ul className='galeria'>
        <li>
          <a href="/public/img/galeria_01.jpg">
            <img src="img/galeria_01.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_02.jpg">
            <img src="img/galeria_02.jpg" alt="Galeria 2"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_03.jpg">
            <img src="img/galeria_03.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_04.jpg">
            <img src="img/galeria_04.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_05.jpg">
            <img src="img/galeria_05.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_06.jpg">
            <img src="img/galeria_06.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_07.jpg">
            <img src="img/galeria_07.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_08.jpg">
            <img src="img/galeria_08.jpg" alt="Galeria 1"/>
          </a>
        </li>
        <li>
          <a href="/public/img/galeria_09.jpg">
            <img src="img/galeria_09.jpg" alt="Galeria 1"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Galeria
