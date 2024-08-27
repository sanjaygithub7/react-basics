import React,{useState} from 'react'

export default function Car() {
const [car,setCar]=useState({
    name:'tesla',
    color:'black',
    year:2023,
    model:'Model S'

  }

)
//For updating multiple states using USESTATE in React
   function update(){
    setCar((updation)=>{
      return { ...updation,model:'Model X',year:2021}   //Implemented using SPREAD operator in JS
                                              //and used updation as a parameter in setcolor()
    })

   }

    
  

  return (
    <div>
      <h1>Car Info</h1>
      <p>The name of the car is:{car.name}</p>
      <p>The color of the car is:{car.color}</p>
      <p>The launched year is:{car.year}</p>
      <p>The model is:{car.model}</p>
      <button className='border border-2' onClick={update}> change model</button>
      
    </div>
  )
}


