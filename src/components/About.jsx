

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaDiscord 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiFlask 
} from "react-icons/si";
import TiltedCard from './TiltedCard'
import the1 from '../assets/images/the1.jpg'
import "./About.css"

const About = () => {
  return (
    <div className="abt">
    <div className="abtcont">
        <div className="abttext">
            <h3>Hi, my name is</h3><br></br>
            <h1>Zaki James.</h1><br></br>
            <h2>I love creating stuff!!</h2>
            <p>I am a full stack software engineer who loves building</p>
            <p>and creating digital experiences. I also love the whole essence</p>
            <p>of creating, in any aspect! And i love comics and cars!!</p>
        </div>
        <TiltedCard
            imageSrc={the1}
            altText="zaki james"
            captionText="Zaki James - Software Engineer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
            <p className="tilted-card-demo-text">
            the1
            </p>
            }
        />
    </div>
    <div className="abtyap">
        <div className="abtech">
        <h3>Technologies I use:</h3>
          <div className="tech-icons">
            <FaHtml5 className="icon html" />
            <FaCss3Alt className="icon css" />
            <SiJavascript className="icon js" />
            <FaReact className="icon react" />
            <SiTailwindcss className="icon tailwind" />
            <FaNodeJs className="icon node" />
            <FaPython className="icon python" />
            <SiFlask className="icon flask" />
            <SiPostgresql className="icon postgres" />
            <FaGithub className="icon github" />
          </div>

  <div className="abtsocials">
    <h3>Find me on:</h3>
    <div className="social-icons">
      <a href="https://github.com/zaki-s" target="_blank" rel="">
        <FaGithub className="icon github" />
      </a>
      <a href="https://instagram.com/_zaki_s" target="_blank" rel="">
        <FaInstagram className="icon insta" />
      </a>
      <a href="https://www.linkedin.com/in/zaki-james/" target="_blank" rel="">
        <FaLinkedin className="icon linkedin" />
      </a>
      <a href="https://x.com/_jzaki_s?t=nJTIOLvBXdzJefSsoNe0Yw&s=09" target="_blank" rel="">
        <FaTwitter className="icon twitter" />
      </a>
      <a href="https://discord.com/users/_zaki_s" target="_blank" rel="">
        <FaDiscord className="icon discord" />
      </a>
    </div>
  </div>
      </div>
      
      <div className="yap">
        <p>My journey into tech started with curiosity about how games are built. I was a Mech.Eng major but it didn't quite spark the fire in me, see i prefer tech, influenced by comics games and movies. I left Mech and started learning Software.dev on my own using free resources.</p>
        <p>After a year of learning by myself i decided to better my skills and also network as well, I got into Moringa School to do that! and that was really insightfull. I learned lots of things there.</p>
        <p>Tech is not just my career path, it’s how I explore, experiment, and build the future I want. And i just love creating! Films, Stories... I just love it</p>
      </div>
    </div>
    </div>
  )
}

export default About