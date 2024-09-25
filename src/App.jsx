import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={
            <div>
              <AboutMe />
              <Work />
              <Projects />
            </div>
          } />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
