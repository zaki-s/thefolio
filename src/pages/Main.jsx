 
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

        <div id="aboutme">
          <About />
        </div>

        <div id="projects">
          <Proj />
        </div>

        <div id="contact">
          <Cont />
        </div>
    </div>
  )
}

export default Main