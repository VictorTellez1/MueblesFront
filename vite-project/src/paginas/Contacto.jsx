import React from 'react'
import { useTitle } from '../hooks/title'
const Contacto = () => {
  useTitle('Muebles - Contacto')
  return (
    <div className='contenido-principal contenedor'>
      <h2 className='text-center'>Contacto</h2>
      <form className='formulario'>
        <fieldset>
          <legend>Tus datos</legend>
          <div className='campo'>
            <label for="nombre">Nombre:</label>
            <input 
              type="text"
              placeholder='Tu nombre'
              id="nombre"
              class="input"
            />
          </div>
          <div className='campo'>
            <label for="asunto">Asunto</label>
            <input
              id="asunto"
              placeholder='Tu asunto'
              type="text"
              class="input"
            />
          </div>
          <div className='campo'>
            <label for="telefono">Telefono</label>
            <input
              id="telefono"
              placeholder='Tu telefono'
              type="number"
              className="input"
            />
          </div>
          <div className='campo'>
            <label for="email">Email</label>
            <input
              id="email"
              placeholder='Tu email'
              type="email"
              className="input"
            />
          </div>
          <div className='campo'>
            <label>Mensaje</label>
            <textarea className='input'></textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>País</legend>
          <div className='campo'>
            <label for="pais">País</label>
            <select id="pais">
              <option disabled>-- Seleccione --</option>
              <option value="MX">México</option>
              <option value="PR">Perú</option>
              <option value="CO">Colombia</option>
              <option value="AR">Argentina</option>
              <option value="ES">España</option>
              <option value="CL">Chile</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Informacion Extra</legend>
          <div className='campo'>
            <label for="cliente">Cliente</label>
            <input 
              type="radio"
              id="cliente"
              name="tipo"
              value="cliente"
            />
          </div>
          <div className='campo'>
            <label for="provedor">Provedor</label>
            <input 
              type="radio"
              id="provedor"
              name="tipo"
              value="provedor"
            />
          </div>
          <div className='campo'>
            <label for="categoria">Categoria de Interes</label>
            <input list="categorias" name="categorias"/>
            <datalist id="categorias">
              <option value="Cocina"/>
              <option value="Exterior"/>
              <option value="Recamaras"/>
              <option value="Oficina"/>
              <option value="Television"/>
            </datalist>
          </div>
        </fieldset>
        <input
          type="submit"
          value="Enviar Formulario"
          className='btn'
        />
      </form>
    </div>
  )
}

export default Contacto
