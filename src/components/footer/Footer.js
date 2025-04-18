import { Github, Linkedin, Mail, } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-title">Nitesh Kumar</h3>
          <p className="footer-text">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com/NITESH7KUMAR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="icon-wrapper">
              <Github className="icon" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh7kumar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="icon-wrapper">
              <Linkedin className="icon" />
            </div>
          </a>
          <a
            href="mailto:nitesh7kumar.dev@gmail.com"
            aria-label="Email"
          >
            <div className="icon-wrapper">
              <Mail className="icon" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
