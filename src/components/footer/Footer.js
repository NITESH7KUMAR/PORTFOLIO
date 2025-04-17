import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-title">Portfolio</h3>
          <p className="footer-text">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="icon-wrapper">
              <Github className="icon" />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="icon-wrapper">
              <Linkedin className="icon" />
            </div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <div className="icon-wrapper">
              <Twitter className="icon" />
            </div>
          </a>
          <a
            href="mailto:youremail@example.com"
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
