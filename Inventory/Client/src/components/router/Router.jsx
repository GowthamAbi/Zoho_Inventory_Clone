import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Login from '../Authentication/Login.jsx'
import Register from '../Authentication/Register.jsx'
import HeroSection from '../Hero/HeroSection.jsx'
import Navbar from '../navbar/Navbar.jsx'
import Dashboard from '../dashboard/sidepage/Dashboard.jsx'
import Products from '../dashboard/sidepage/Products.jsx'
import Orders from '../dashboard/sidepage/Orders.jsx'
import Reports from '../dashboard/sidepage/Reports.jsx'
import Option from '../dashboard/option/Option.jsx'
import Suppliers from '../dashboard/sidepage/Suppliers.jsx'
import Sales from '../dashboard/sidepage/Sales.jsx'
import Settings from '../dashboard/sidepage/Settings.jsx'

export default function Router() {
  return (
    

        <Routes>

          {/* Home pages */}
            <Route path='/' element={<>
            <Navbar/>
            <HeroSection/></>}/>

            {/* Authentication pages */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            {/* After login pages */}
            <Route path='/admin' element={<Option/>} >
            <Route index path='dashboard' element={<Dashboard/>}/>
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
            <Route path='sales' element={<Sales />} />
            <Route path='suppliers' element={<Suppliers />} />
            <Route path='reports' element={<Reports />} />
            <Route path='settings' element={<Settings />} />
            </Route>

            {/*  */}
            
        </Routes>
 
  )
}


