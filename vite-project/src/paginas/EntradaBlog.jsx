import React from 'react'
import { useTitle } from '../hooks/title'
import EntradaBlogTemplate from '../components/EntradaBlogTemplate'
const EntradaBlog = () => {
    useTitle('Muebles - EntradaBlog')
  return (
    <section className='contenido-principal contenedor'>
        <h2 className='text-center'>Entrada Blog</h2>
        <div className='contenido-entrada-blog'>
            <EntradaBlogTemplate/>
        </div>
    </section>
  )
}

export default EntradaBlog
