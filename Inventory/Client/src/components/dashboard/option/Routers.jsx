import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Dashboard from '../sidepage/Dashboard'
import Option from './Option'
import Products from '../sidepage/Products'
import Orders from '../sidepage/Orders'
import Reports from '../sidepage/Reports'

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Option/>}>   
          <Route index path='dashboard' element={<Dashboard/>}/>
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='reports' element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
