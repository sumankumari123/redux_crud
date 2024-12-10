import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className=" mx-auto  text-center w-full h-auto box-border">
        <Signup/>
      </section>
    </>
  )
}

export default App
