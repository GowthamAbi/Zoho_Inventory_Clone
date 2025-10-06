import React, { useState } from 'react'
import logo  from '../../assets/logo/inventory-logo-new.svg'

export default function Navbar() {
     const [open, setOpen] = useState(false);
  return (
    <nav >
        <div className=' flex justify-between mx-auto max-w-6xl'>
        {/* Logo and Company Name */}
        <div>
            <a href="/"  >
                <img src={logo} alt="Zoho Logo" className='w-32 '/>
            </a>
        </div>

        {/* Navigation */}
        <ul className='inline-flex gap-4'>
   <li className="flex items-center space-x-1">
  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
 <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 focus:outline-none"
      >
        <span>Features</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      </a>
</li>

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
