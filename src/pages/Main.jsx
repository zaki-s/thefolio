 
import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Proj from '../components/Proj'
import Cont from '../components/Cont'
import "./Main.css"

const Main = () => {
  return (
    <div className="maincont">
        <Navbar />
        <About />
        <Proj />

        <Cont />
    </div>
  )
}

export default Main