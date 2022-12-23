import React from 'react'
import { useTitle } from '../hooks/title'
import {Link} from 'react-router-dom'
import EntradaBlogTemplate from '../components/EntradaBlogTemplate'
const Blog = () => {
  useTitle('Muebles - Blog')
  return (
    <section>
      <h2 className='text-center'>Nuestro Blog</h2>
      <div className='contenedor-blog contenedor'>
        <div className='blog'>
          <article className='entrada'>
            <EntradaBlogTemplate/>
            <Link to="/entrada-blog" className='btn-blog btn max-width-30'>Leer</Link>
          </article>
          <article className='entrada'>
            <EntradaBlogTemplate/>
            <Link to="/entrada-blog" className='btn-blog btn max-width-30'>Leer</Link>
          </article>

        </div>
        <aside>
          <h3>Otras entradas de blog</h3>
          <ul>
            <li>
              <Link to="/entrada-blog" >Guia de colores</Link>
            </li>
            <li>
              <Link to="/entrada-blog" >Nuevos Modelos</Link>
            </li>
            <li>
              <Link to="/entrada-blog" >Guia para diseño de interiores</Link>
            </li>
            <li>
              <Link to="/entrada-blog" >Guia para diseño de exteriores</Link>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Blog
