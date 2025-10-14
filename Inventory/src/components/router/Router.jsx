import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import HeroSection from '../Hero/HeroSection'
import Navbar from '../navbar/Navbar'
import Dashboard from '../dashboard/sidepage/Dashboard'
import Option from '../dashboard/sidepage/Option'

export default function Router() {
  return (
    

        <Routes>
            <Route path='/' element={<>
            <Navbar/>
            <HeroSection/></>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin' element={<Option/>} />
        </Routes>
 
  )
}
