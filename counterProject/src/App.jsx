import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  const[message,setMessage]=useState("");
  //let counter=5

  const addValue=()=>{
   if(counter<20){
    
    setCounter(counter+1);
    setMessage("");
   }
   else{
    setMessage("Counter has reached Limit of 20!!");
   }
  };

  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1);
    setMessage("");
    }else{
      setMessage("Counter cannot go below 0!")
    }
  };
   
  return (
    <>
    <h1>Alfiya Heba | React</h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addValue}
    >Add value</button>
    {message && <p style={{color:"red"}}>{message}</p>}
    <br></br>
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  );
}

export default App;
