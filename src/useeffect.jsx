import React, { useEffect,useState } from 'react'

export default function useeffect() {              
    
    const[count,setCount]=useState(0)

    useEffect(()=>{                                               // Example for useffect with the set time out function
        console.log("Screen Rendered")
        check()                                                    //this code is about executing render on screen every 1 

        setTimeout(()=>{
          setCount(()=>count+1)
        },1000)
    })

    function check(){
      if(count>10){
        console.log("Reached max renders!")
        setCount(1);
      }
    }

    function update(){
        setCount(()=>count+1)
    }


  return (
    <div>
        <h1>The  screen is rendered {count}times</h1>
        <button className='border-2' onClick={update}>Increase</button>
      </div>

)
}


