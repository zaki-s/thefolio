
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import BootScreen from "./pages/BootScreen";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BootScreen />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </Router>
  )
}

export default App