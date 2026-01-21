import { useState } from 'react'
import './App.css'
import  { App1 } from './components/sample1.jsx' 
import  {CafeMenu} from './components/cafemenu.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <App1></App1>
      <CafeMenu/>

    </>
  )
}

export default App
