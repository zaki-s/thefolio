
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import BootScreen from "./pages/BootScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BootScreen />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/m" element={<Main />} />
        <Route path="/a" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App