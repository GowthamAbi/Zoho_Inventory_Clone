import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Dashboard from '../sidepage/Dashboard'

export default function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path=''>

        </Route>
    </Routes>
    </BrowserRouter>
  )
}
