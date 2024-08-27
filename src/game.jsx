import React, { useState } from 'react'
import Result from './result'
const secretnum=Math.floor(Math.random()*10 )+1 


export default function game() {
 

  const [input,setInput]=useState("")

  function handleChange(e){
    setInput(e.target.value)
    console.log('value',input)
  }


  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
        <div className='px-12 py-6 border-4 border-white rounded-md flex flex-col space-x-2 '>

          <label className='text-xl font-bold items-center' htmlFor="input">Guess the number from 1-10</label>
          <input className='px-72 py-2 rounded-md focus:bg-gray-100' type="text" name='input' onChange={handleChange}/>

          <Result secretnum={secretnum} input={input} />

        </div>
      
    </div>
  )
}
