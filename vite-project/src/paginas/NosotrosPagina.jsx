import React from 'react'
import { useTitle } from '../hooks/title'
const NosotrosPagina = () => {
    useTitle('Muebles - Nosotros')
  return (
    <section>
        <h2 className='text-center'>Sobre Nosotros</h2>
        <div className='contenedor nosotros'>
            <img src="img/nosotros.jpg" alt="Imagen nosotros"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur voluptatibus, esse quae 
                beatae ipsa, atque rerum aliquam eaque facere facilis consequuntur perspiciatis vero ad 
                labore iste soluta voluptatem quasi.
            </p>
        </div>
    </section>
  )
}

export default NosotrosPagina
