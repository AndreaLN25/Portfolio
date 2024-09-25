// src/App.jsx
import React from "react";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects.jsx";
import Cv from "./components/Cv"
import './App.css';
import Contact from "./components/Contact.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Nav />
      <AboutMe />
      <Work />
      <Projects />
      <Cv />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
