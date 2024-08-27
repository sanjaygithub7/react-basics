import React from 'react'

// props
export default function cr(props) {

  const{data}=props
  const {name,color}=data
  
  return (
    <div>
      <h1>the name of the car is:{name} and color is:{color}</h1>
      

      
    </div>
  )
}
