import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    username:"Alfiya",
    id:"123abc"
  }

  return (
    <>
     <h1 className='bg-blue-400 text-black p-4 rounded-4xl mb-5'>Tailwind Test</h1>
     <Card username="Alfiya Heba" btnText="29/01/2025"/>
     <Card username="Alan"/>
     
    </>
  )
}

export default App
