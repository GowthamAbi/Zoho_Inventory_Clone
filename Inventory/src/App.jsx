import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}
