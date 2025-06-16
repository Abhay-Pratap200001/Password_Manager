import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Navbar/>
 <div className='text-red-500'>My ui</div>
 </>
  )
}

export default App
