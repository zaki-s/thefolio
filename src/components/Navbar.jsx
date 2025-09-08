import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div 
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1 className="title" variants={titleVariant}>
        the1
      </motion.h1>

      {/* Links */}
      <motion.div className="links" variants={linksContainer}>
        <motion.a href="#aboutme" className="alinks" variants={linkVariant}>
          <span className="roman">01.</span> About
        </motion.a>
        <motion.a href="#edu" className="alinks" variants={linkVariant}>
          <span className="roman">02.</span> Education/Experience
        </motion.a>
        <motion.a href="#projects" className="alinks" variants={linkVariant}>
          <span className="roman">03.</span> Projects
        </motion.a>
        <motion.a href="#contact" className="alinks" variants={linkVariant}>
          <span className="roman">04.</span> Contact
        </motion.a>
        <motion.a 
          href="/Zaki's Resume.pdf"
          download="Zaki's Resume.pdf" 
          className="navbtn"
          variants={linkVariant}
        >
          <span className="navbtntxt">Resume</span>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Navbar


// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
}

const titleVariant = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

const linksContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const linkVariant = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}
