import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'

export default function App() {
  return (
    <div className='color bg-[var(--primary)]'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}
