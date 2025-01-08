import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

export default function Layout() {
  return (
    <div className=' min-h-screen  w-full'>
      
      <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
