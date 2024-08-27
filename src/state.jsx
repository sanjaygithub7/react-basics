import React,{useState} from 'react'

export default function state() {
    let initial='Red'
    const [color,setColor]=useState('Red')

  return (
    <div className='flex mt-20 justify-center text-2xl'>
      <h1>the color is:{color}</h1>
      <button className='border border-2'onClick={()=>setColor('Blue')}>Change</button>
      <button className='border border'onClick={()=>setColor(initial)}>Change</button>
    </div>
  )
}
