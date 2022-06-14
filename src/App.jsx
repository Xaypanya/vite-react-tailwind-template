import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-700 min-h-screen">
      <div className='flex h-screen justify-center items-center'>
       <h1 className='text-8xl text-white font-pops'>hello babi</h1>
      </div>
    </div>
  )
}

export default App
