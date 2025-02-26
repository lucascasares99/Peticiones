import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peticion } from './Componente/Peticion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Peticion/>
    </>
  )
}

export default App
