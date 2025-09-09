import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import BootScreen from "./pages/BootScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./pages/Main";
import Edu from "./components/Edu";
import Proj from "./components/Proj";
import Cont from "./components/Cont";
import TiltedCard from "./components/TiltedCard";
import ProjectCard from "./components/ProjectCard";

// BootScreenWrapper is defined outside App for cleanliness
function BootScreenWrapper() {
  const navigate = useNavigate();
  return <BootScreen onFinish={() => navigate("/m")} />;
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BootScreenWrapper />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/m" element={<Main />} />
        <Route path="/a" element={<About />} />
        <Route path="/e" element={<Edu />} />
        <Route path="/p" element={<Proj />} />
        <Route path="/c" element={<Cont />} />
        <Route path="/t" element={<TiltedCard />} />
        <Route path="/pc" element={<ProjectCard />} />
      </Routes>
    </Router>
  );
};

export default App;
