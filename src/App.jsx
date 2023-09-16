import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Course Registration</h2>
      <Home></Home>
      
    </>
  )
}

export default App
