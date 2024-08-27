import React, { useState } from 'react'

export default function form() {
    
    // const [name,setName]=useState("")
    // const [age,setAge]=useState("")                             ------> In this example all input fields are taken as 
    // const [email,setEmail]=useState("")                                 induvitual states

    const [input,setInput]=useState({phoneno:'+91',email:'@gmail.com',country:'India'});          // ------> In this example all input fields are taken as 
                                                                                  //        as single state        
    function handleSubmit(e){
      e.preventDefault();                                                      // this function is used for avoiding refresh of screen
      console.log("Form Submitted !")
      alert("Thanks for filling the form")
      console.log("current state:",input)
    }

  function handlechange(e){
    const name=e.target.name                      // creating event as e for finding name
    const value=e.target.value                     // creating event as e for finding value
    setInput((previousstate)=>{
      return{...previousstate,[name]:value }       //creating a new property as [name]:value
    })
  }


  return (
   <form action="" onSubmit={handleSubmit} className=''>
    <h1 className='text-3xl'>TEST FORM</h1>
    <label>Enter your name: <input className='border-2 border-gray-900' type="text" name="name" onChange={handlechange} /></label><br />
    <label>Enter your age: <input className='border-2 border-gray-900' type="text" name="age" onChange={handlechange}/></label><br />
    <label>Enter your email: <input className='border-2 border-gray-900' type="email" name="email" onChange={handlechange} value={input.email} /></label><br />
    <label>Enter your phoneno: <input className='border-2 border-gray-900' type="text" name="phoneno" onChange={handlechange} value={input.phoneno} /></label><br />
    <label htmlFor="country">Enter your country:</label>
            <select className='border-2 border-black' onChange={handlechange} id="country" name="country" value={input.country}>
                <option value=" ">Select</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
            </select>
    <br />
    
    <input type="submit" value="submit" className='border-2' />
   </form>
  )
}
