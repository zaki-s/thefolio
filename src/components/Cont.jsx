

import React from 'react'
import "./Cont.css"

const Cont = () => {
  return (
    <div className="contcont">
      <div className="conttext">
        <h1 className="contitle">Get In Touch</h1>
        <p className="coninfo">I'm currently looking for new opportunities</p>
        <p className="coninfo2">Please do get in touch and ill reach back to you as well!</p>
      </div>
        
      <div className="contbtn">
        <a href="mailto:zakijames001@gmail.com" className="contact-btn">
          <span className="btn-glow">Hi, Zaki</span>
        </a>
      </div>

      <div className="footer">
        <p className="footxt"><a href="https://github.com/zaki-s" target="_blank">Designed & built by the1</a></p>
      </div>
    </div>
  )
}

export default Cont