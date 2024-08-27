import React from 'react'

function result(props) {
  const{secretnum,input}=props                     // importing data from the game.jsx

  let result;

  if(input){
    if (secretnum>input) {
      result='you guessed LOWER';
  
    }else if(secretnum <input){
      result='you guessed HIGHER';                // game logic
  
    }else if(secretnum==input){
      result='CORRECT ANSWER!'
  
    }else{
      result='Invalid Input'
    }

  }

  


  return <h3 className=' text-xl font-bold'>{result}</h3>
}
export default result;
