import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h2>Contact Information</h2>
      <p>Feel free to reach out to me or follow me on social media.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>
        <a href="/cv">Download My CV</a> | <Link to="/contact">Contact Me</Link>
      </p>
      <p className="copyright">© 2024 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
