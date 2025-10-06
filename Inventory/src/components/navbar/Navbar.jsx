import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='color bg-[var(--primary)]'>
        {/* Logo and Company Name */}
        <div>
            <a href="Inventory\src\assets\logo\inventory-logo-new.svg" ></a>
        </div>

        {/* Navigation */}
        <ul>
        <li>Features</li>
        <li>Solution</li>
        <li>Pricing</li>
        <li>Customers</li>
        <li>Integration</li>
        <li>Resources</li>
        </ul>
        </div>
    </nav>
  )
}
