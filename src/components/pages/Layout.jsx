import React from 'react'
import NavBar from '../sections/NavBar'
import { Outlet } from 'react-router'
import Footer from '../sections/Footer'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout


