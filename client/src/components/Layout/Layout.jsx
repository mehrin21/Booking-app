import React from 'react'
import Hearder from '../Header/Hearder'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <div style={{background:"var(--black)", overflow:"hidden"}}>
    <Hearder/>
    <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

export default Layout
