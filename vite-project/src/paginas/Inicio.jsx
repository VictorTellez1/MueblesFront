import React from 'react'
import { useTitle } from '../hooks/title'
import {Link} from 'react-router-dom'
import Tienda from '../components/Tienda'
import Categorias from '../components/Categorias'
import Nosotros from './Nosotros'
import { useEffect,useState } from 'react'
import clientesAxios from '../../config/axios'
import axios from 'axios';
const Inicio = () => {
    useTitle('Muebles - Inicio')
  return (
    <>
        <div className="hero"></div>
        <Categorias/>
        <Nosotros/>
        <Tienda/>
    </>
  )
}

export default Inicio
