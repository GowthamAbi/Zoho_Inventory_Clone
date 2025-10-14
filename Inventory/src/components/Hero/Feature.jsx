import React from 'react'
import data from '../../../public/data.jsx'


export default function Feature() {
  return (
<div className='grid grid-cols-1 md:grid-cols-3  mx-auto max-w-6xl'>
      {data.map(item => (
        <div key={item.id} className='bg-gray-300 mx-4 my-2 p-4 rounded-lg'>
          <h2 className='font-bold text-lg'>{item.title}</h2>
          <div className='my-2'>{item.icon}</div>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}





