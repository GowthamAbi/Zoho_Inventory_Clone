import React from 'react'

export default function HeroSection() {
  return (
    <section>
        <div className='flex mx-auto max-w-2xl flex-col px-8 py-8 md:py-16'>
            <h1 className='text-xl text-gray-600 md:text-3xl text-center font-bold pb-4'>Inventory management software designed for Indian businesses</h1>
            <p className=' text-center pb-8'>Manage orders. Track inventory. Handle GST billing. Oversee warehouses. 
                One inventory management software to run all your inventory operations.</p>
          <div className='flex space-x-4 justify-center'>
          <button className='bg-red-500 hover:bg-red-600 rounded-lg  px-6 py-2 text-white font-bold '>SIGN UP -IT'S FREE</button>
          <button className=' border border-red-500 hover:bg--600 text-red-600 hover:color bg-[var(--primary)]/60 cursor-pointer rounded-lg  px-6 py-2  font-bold '>EXPLORE DEMO ACCOUNT</button>
          </div>
        </div>
    </section>
  )
}
