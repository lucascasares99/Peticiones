import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peticion } from './Componente/Peticion'
import { Condicion } from './Componente/Condicion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Peticion/>
      <Condicion age={19}/>
    </>
  )
}

export default App
