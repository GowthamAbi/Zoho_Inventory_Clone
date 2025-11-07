import React, { useState } from 'react'

export default function AddProduct() {
  const[select,setSelect]=useState(false)
const title=["DOC NO","DATE","JOB ORDER NO","RECORD TYPE","FABRIC GROUP","COLOR NAME","SET NO","S.NO","DC DIA","DIA TYPE",
  "PRCESS NAME","PROCESS DC NO","COMPACT NO","RECD DC NO","RECD DC DATE","RECD DC ROLL","RECD DC WGT"]

  return (
    <section className='bg-white p-4 w-full'>
        <div>
            <h1> New Item </h1>
           <form className='w-full'>
                  {
                    title.map((item,index)=>(
                      <div key={index} className='flex gap-1 space-y-2 justify-center '>
                        <h2 className='text-xl'>{index+1}</h2>
                        <p>.</p>
                        <label className='text-xl w-1/4' >{item}</label>
                        <input className='w-3/4'></input>
                      </div>
                    ))
                  }
                  <button className='text-center border-2 bg-blue-200 text-white text-xl hover:bg-blue-300
                    cursor-pointer p-2 rounded-xl w-full'>SUBMIT</button>
                  </form>
   
        </div>
    </section>
  )
}
