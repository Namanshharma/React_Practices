import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Black");

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <h1 className='m-10'>Hello world</h1>
        <button className='mx-4' onClick={() => { setColor("red") }}>Red</button>
        <button className='mx-4' onClick={() => { setColor("green") }}>green</button>
        <button className='mx-4' onClick={() => { setColor("blue") }}>blue</button>
        <button className='mx-4' onClick={() => { setColor("yellow") }}>yellow</button>
        <button className='mx-4' onClick={() => { setColor("orange") }}>orange</button>
      </div>
    </>
  )
}

export default App