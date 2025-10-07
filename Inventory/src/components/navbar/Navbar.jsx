import React, { useState } from 'react'
import logo  from '../../assets/logo/inventory-logo-new.svg'

export default function Navbar() {
     const [open, setOpen] = useState(false);
  return (
    <nav >
        <div className=' flex justify-between mx-auto max-w-6xl p-2 '>
        {/* Logo and Company Name */}
        <div>
            <a href="/"  >
                <img src={logo} alt="Zoho Logo" className='w-32 '/>
            </a>
        </div>

        {/* Navigation */}
        <ul className=' hidden md:flex gap-4 text-center items-center '>
        <li className="flex items-center space-x-1 relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>

            <button  className='flex text-center space-x-2 focus:outline-none hover:text-red-500'>
              <span>Features</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 transform transition-transform duration-300 ${open?'rotate-180':'rotate-0'}`} 
               fill="none"
                viewBox="0 0 24 24"
                 strokeWidth="1.5" 
                 stroke="currentColor"
                  >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Option */}
           {open &&(<ul className=' bg-white rounded-lg absolute top-full left-0 mt-5 flex shadow-2xl w-full flex-wrap '>
                <li>Option 1</li>
                <li>Option 2</li>
           </ul>)}
            </li>

        <li>Solution</li>
        <li>Pricing</li>
        <li>Customers</li>
        <li>Integration</li>
        <li>Resources</li>

        </ul>

        {/* Mobile Screen Setting */}
        <div className=' md:hidden '>
            {!open?<svg xmlns="http://www.w3.org/2000/svg"
             fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth="1.5" 
             stroke="currentColor"
             className='w-8 h-8 relative'
             onClick={()=>setOpen(!open)}
              >
           <path strokeLinecap="round" 
           strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>:
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
             className='w-8 h-8 relative '
             onClick={()=>setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            }

            {/* Menu Bar */}
            {open && <ul className='absolute w-3/4 bg-white text-center right-0 mt-3 rounded-lg shadow-2xl p-2 '>
              <li className='border-b-2 border-gray-100  '>1</li>
              <li className='border-b-2 border-gray-100'>2</li>
              <li className='border-b-2 border-gray-100'>3</li>
              <li className='border-b-2 border-gray-100'>4</li>
              <li>5</li>
            </ul>}

       </div>

        </div>
    </nav>
  )
}
