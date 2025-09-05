 
import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Cont from '../components/Cont'
import "./Main.css"

const Main = () => {
  return (
    <div className="maincont">
        <Navbar />
        <About />

        <Cont />
    </div>
  )
}

export default Main