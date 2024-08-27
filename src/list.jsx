import React from 'react'

export default function list() {
  const array=[
    {name:'sanjay',age:20},
    {name:'ajay',age:22},
    {name:'vijay',age:30},
  ]

  return (
    <div className='flex justify-center'>
      <ol>
        {array.map((data)=><li>the name is {data.name} and age is {data.age}</li>)}
      </ol>

      
    </div>
  )
}
