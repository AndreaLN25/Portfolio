// src/components/AboutMe.jsx
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function AboutMe() {
  return (
    <section id="about-me">
      <div>
        <h1>Hi, I'm Andrea</h1>
        <h2>
          I am a
          <TypeAnimation
            sequence={[
              'FullStack Developer',
              1000,
              'Coder',
              1000,
              'Tech Enthusiast',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            style={{ fontSize: '1.5em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
        </h2>
        <div className="social-links">
          <a href='https://www.linkedin.com/in/andrea-lopez-/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href='https://github.com/AndreaLN25' target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
