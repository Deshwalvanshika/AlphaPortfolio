import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

// Import pages
import Home from "./pages/Home";
import Methodology from "./pages/Methodology";
import Results from "./pages/Results";
import Conclusion from "./pages/Conclusion";

const Navbar = () => (
  <div className="navbar">
    <div className="brand">AlphaPortfolio+</div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/methodology">Methodology</Link>
      <Link to="/results">Results</Link>
      <Link to="/conclusion">Conclusion</Link>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/results" element={<Results />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
