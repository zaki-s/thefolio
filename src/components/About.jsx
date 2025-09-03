

import React from 'react'
import Tilt from 'react-parallax-tilt'
import "./About.css"

const About = () => {
  return (
    <div>
        <div className="abttext">
            <h3>Hi, my name is</h3><br></br>
            <h1>Zaki James</h1><br></br>
            <h2>I love creating stuff!!</h2>
            <p>I am a full stack software engineer who loves building</p>
            <p>and creating digital experiences. I also love the whole essence</p>
            <p>of creating, in ay aspect! And i love comics and cars!!</p>
        </div>
        <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.05} transitionSpeed={2500}>
        <div className="abtfoto">
          <img src="../assets/images/the1.png" alt="Zaki" />
        </div>
      </Tilt>
    </div>
  )
}

export default About