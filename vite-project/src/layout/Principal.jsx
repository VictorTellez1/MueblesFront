import React from 'react'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
export const Principal = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}
