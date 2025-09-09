import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // scrolling up
      }

      // Blur effect trigger
      setScrolled(currentScrollY > 50);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className={`navbar ${showNavbar ? 'visible' : 'hidden'} ${scrolled ? 'scrolled' : ''}`}
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
        <motion.a href="/m#aboutme" className="alinks" variants={linkVariant}>
          <span className="roman">01.</span> About
        </motion.a>
        <motion.a href="/m#edu" className="alinks" variants={linkVariant}>
          <span className="roman">02.</span> Education/Experience
        </motion.a>
        <motion.a href="/m#projects" className="alinks" variants={linkVariant}>
          <span className="roman">03.</span> Projects
        </motion.a>
        <motion.a href="/m#contact" className="alinks" variants={linkVariant}>
          <span className="roman">04.</span> Contact
        </motion.a>
        <motion.a
          href="/folio.pdf"
          className="navbtn"
          rel="noopener noreferrer"
          target="_blank"
          variants={linkVariant}
        >
          <span className="navbtntxt">Resume</span>
        </motion.a>
      </motion.div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Links */}
      <motion.div className={`mobile-links ${menuOpen ? 'open' : ''}`}>
        <a href="/m#aboutme" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/m#edu" onClick={() => setMenuOpen(false)}>Education/Experience</a>
        <a href="/m#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="/m#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="/Zaki's Resume.pdf" download="Zaki's Resume.pdf">Resume</a>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const titleVariant = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const linksContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const linkVariant = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
