import React from 'react'

export default function AddProduct() {
  return (
    <section className='bg-white p-4 w-full'>
        <div>
            <h1> New Item </h1>

            <div>
              <form >
                
                <h2>Type</h2>
                <div className='flex'>
                <input type="radio" id='goods'/>
                <label htmlFor="goods">Goods</label>
                <input type="radio" id='services'/>
                <label htmlFor="goods">Services</label>
                </div>
              </form>
            </div>
        </div>
    </section>
  )
}
