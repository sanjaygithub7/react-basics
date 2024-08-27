import React from 'react'
import Cr from './cr.jsx'

// example for props
export default function App() {
     const data=[
     {name:'bmw',color:'black'},
     {name:'ford',color:'red'},
     {name:'bmw',color:'white'},
     ]
   //const data={}

 
  
  return (
    <div>
   <ul>
    {/* list props */}
        {data.map((data)=><li><Cr data={data}/></li>)}
    
    </ul>  
      
      
      
    </div>
  )
}
