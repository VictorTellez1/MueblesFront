import clientesAxios from '../../config/axios'
import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import { useTitle } from '../hooks/title'
import Producto from '../components/Producto'
const Tienda = () => {
  useTitle("Muebles - Tienda")
  const [productos,setProductos]=useState([])
  useEffect(()=>{
    const obtenerProductos=async()=>{
      try {
        const {data}=await clientesAxios('muebles/productos')
        setProductos(data.productos)
      } catch (error) {
        console.log(error.message)
      }
    }
    obtenerProductos()
  },[])
  
  return (
    <section className='contenido-principal contenedor'>
        <h2 className='text-center'>Nuestros productos</h2>
        <div className='listado-productos'>
            { productos?.map(mueble=>(
              <Producto key={mueble._id} producto={mueble}/>
            ))}
        </div>
    </section>
  )
}

export default Tienda
