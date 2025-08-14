import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from './Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunctionComponent/>
    </>
  )
}

export default App
