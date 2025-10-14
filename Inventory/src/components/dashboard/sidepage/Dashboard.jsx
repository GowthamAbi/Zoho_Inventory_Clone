import React from 'react'
import Nav from '../option/Nav'
import Sidebar from '../option/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <section>
        <Nav/>
        <Sidebar/>
        <Outlet/>
    </section>
  )
}
