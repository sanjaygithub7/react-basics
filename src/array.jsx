import React,{useState} from 'react'

export default function array() {
    const [item,setItem]=useState([]);
    const [count,setCount]=useState(1)

    function additem(){
        const itemname='Item'+' '+count

        setItem((previousitem)=>{
            return [...previousitem,itemname] 
        })

        setCount((previouscount) =>{
            {return previouscount+1}
        })
    }

 console.log('current state',item)
  return (
    <div className='ml-60'>
        <h1>ITEM LIST</h1>
        <button className='border border-2' onClick={additem}>Add Item</button>
        {/* <button  className='border border-2' onClick={remove} >Remove item</button> */}
        <ul>
            {item.map((val,index)=><li key={index}>{val}</li>)}
        </ul>
       
      
    </div>
  )
}
