import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect,useState } from 'react'
import clientesAxios from '../../config/axios'
import Producto from '../components/Producto'
const ProductosCategoria = () => {
    const {categoria}=useParams()
    const [productos,setProductos]=useState([])
    useEffect(()=>{
        const obtenerProductosCategoria=async()=>{
            const {data}=await clientesAxios(`muebles/productos-categoria/${categoria}`)
            setProductos(data.productos)
        }
        obtenerProductosCategoria()
    },[categoria])
  return (
    <section className='contenido-principal contenedor'>
      <h2 className='text-center'>Nuestros productos</h2>
      <h3 className='text-center'>{categoria}</h3>
      <div className='listado-productos'>
          { productos?.map(mueble=>(
            <Producto key={mueble._id} producto={mueble}/>
          ))}
      </div>
    </section>
  )
}

export default ProductosCategoria
