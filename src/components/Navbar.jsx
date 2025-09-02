

import React from 'react'
import "./Navbar.css" 

const Navbar = () => {
  return (
    <div className="navbar">
        <h1 className="title">the1</h1>
        <div className="links">
            <a href="#aboutme" className="alinks"><span className="roman">01.</span> About</a>
            <a href="#projects" className="alinks"><span className="roman">02.</span> Education/Experience</a>
            <a href="#contact" className="alinks"><span className="roman">03.</span> Projects</a>
            <a href="#contact" className="alinks"><span className="roman">04.</span> Contact</a>
            <a href="/resume.pdf" download="Zaki's Resume.pdf" className="navbtn">
                <span className="navbtntxt">Resume</span>
            </a>
        </div>

    </div>
  )
}

export default Navbar;