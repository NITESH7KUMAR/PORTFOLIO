import React from "react";
import { FileText, Briefcase, GraduationCap } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        <div className="about-grid">
          <div className="about-text">
            <p className="paragraph">
              Hello! I'm a passionate software developer with a strong focus on creating
              beautiful, functional, and user-friendly applications. I enjoy solving 
              complex problems and turning ideas into reality through code.
            </p>
            <p className="paragraph">
              With several years of experience in web development, I specialize in React,
              TypeScript, and modern frontend technologies. I'm constantly learning
              and exploring new tools to improve my craft.
            </p>
            <div className="button-group">
              <button className="resume-button">
                <FileText size={18} /> Download Resume
              </button>
            </div>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <div className="icon-container">
                <Briefcase className="icon" />
              </div>
              <div>
                <h3 className="card-title">Experience</h3>
                <p>5+ years of professional experience in software development with a focus on web technologies</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-container">
                <GraduationCap className="icon" />
              </div>
              <div>
                <h3 className="card-title">Education</h3>
                <p>Bachelor's degree in Computer Science with specialization in software engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
