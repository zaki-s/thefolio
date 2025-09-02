

import React from 'react'
import "./Navbar.css" 

const Navbar = () => {
  return (
    <div className="navbar">
        <h1 className="title">the1</h1>
        <div className="links">
            <a href="#aboutme">I.About</a>
            <a href="#projects">II.Education/Experience</a>
            <a href="#contact">III.Projects</a>
            <a href="#contact">IV.Contact</a>    
            <a href="/resume.pdf" download="Zaki's Resume.pdf" className="navbtn">
           Resume
        </a>
        </div>
    </div>
  )
}

export default Navbar;