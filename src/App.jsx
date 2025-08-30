
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import BootScreen from "./pages/BootScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BootScreen />} />
      </Routes>
    </Router>
  )
}

export default App