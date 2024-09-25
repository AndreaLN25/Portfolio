// src/components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/cv">My CV</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;
