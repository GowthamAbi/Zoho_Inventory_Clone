import React, { useState } from 'react'

export default function AddProduct() {
  const[select,setSelect]=useState(false)
  return (
    <section className='bg-white p-4 w-full'>
        <div>
            <h1> New Item </h1>

            <div>
              <form className='flex gap-2' >
                
                <h2>Type</h2>
                <div className='flex gap-2'>
                <input type="radio" id='goods' name='type' value='goods' checked={select === 'goods'} className='cursor-pointer'  onChange={(e)=>setSelect(e.target.value) }/>
                <label htmlFor="goods">Goods</label>
                <input type="radio" id='services' value='services' checked={select === 'services'} className='cursor-pointer'  onChange={(e)=>setSelect(e.target.value)}/>
                <label htmlFor="services">Services</label>
                </div>

                <label htmlFor="">Name</label>
                <input type="text" value="name" name='name'/>
              </form>
            </div>
        </div>
    </section>
  )
}
