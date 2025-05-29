import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <p className="footer-text">
        Made by <strong>Hayder Atiyah</strong> using{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </p>
      <p className="footer-text">
        <strong>Little Lemon</strong> is a fictional restaurant created for
        <a
          href="https://www.coursera.org/professional-certificates/meta-front-end-developer?msockid=235c179d706c6f6c0e72029c71dc6e61"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Meta Front-End Developer Professional Certificate{" "}
        </a>
      </p>
      <div className="footer-Links">
        <a
          href="https://www.linkedin.com/in/hayder-atiyah-07a56a324"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} color="#0A66C2" />
        </a>

        <a
          href="https://github.com/hayderAtiyah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} color="#0A66C2" />
        </a>
      </div>
    </footer>
  );
}
