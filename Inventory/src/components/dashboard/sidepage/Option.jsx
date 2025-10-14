import React from 'react'
import Nav from '../option/Nav'
import Sidebar from '../option/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Option() {
  return (
        <section>
        <Nav/>
        <div className='flex'>
         <Sidebar/>
        <Outlet/>
        </div>
    </section>
  )
}


