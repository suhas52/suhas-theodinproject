import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './message'
import Greeting from './greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <Message />
    </>
  )
}

export default App
