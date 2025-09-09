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
import ScrollToTop from "./components/ScrollToTop"; // make sure you have this component

// BootScreenWrapper is defined outside App for cleanliness
function BootScreenWrapper() {
  const navigate = useNavigate();
  return <BootScreen onFinish={() => navigate("/m")} />;
}

const PageWrapper = ({ Component }) => (
  <>
    <Navbar />
    <Component />
    <ScrollToTop />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* BootScreen shows only once */}
        <Route path="/" element={<BootScreenWrapper />} />

        {/* All other pages get Navbar + ScrollToTop */}
        <Route path="/m" element={<PageWrapper Component={Main} />} />
        <Route path="/a" element={<PageWrapper Component={About} />} />
        <Route path="/e" element={<PageWrapper Component={Edu} />} />
        <Route path="/p" element={<PageWrapper Component={Proj} />} />
        <Route path="/c" element={<PageWrapper Component={Cont} />} />
        <Route path="/t" element={<PageWrapper Component={TiltedCard} />} />
        <Route path="/pc" element={<PageWrapper Component={ProjectCard} />} />

        {/* Optional catch-all route */}
        <Route path="*" element={<PageWrapper Component={Main} />} />
      </Routes>
    </Router>
  );
};

export default App;
