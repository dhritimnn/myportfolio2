import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
    </>
  )
}

export default App
