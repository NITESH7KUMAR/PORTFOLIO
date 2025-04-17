import React, { useState } from "react";
import { FileText, Briefcase, GraduationCap, ChevronDown } from "lucide-react";
import "./About.css";

const About = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = (type) => {
    const fileUrl =
      type === "general"
        ? "/files/general_resume.pdf"
        : "/files/specialized_resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowOptions(false); // hide dropdown
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        <div className="about-grid">
          <div className="about-text">
            <p className="paragraph">
              Hello! I'm a passionate software developer...
            </p>
            <p className="paragraph">
              With several years of experience in web development...
            </p>

            <div className="button-group">
              <div className="dropdown-wrapper">
                <button
                  className="resume-button"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  <FileText size={18} /> Download Resume <ChevronDown size={16} />
                </button>

                {showOptions && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => handleDownload("general")}>
                      📄 General CV
                    </div>
                    <div className="dropdown-item" onClick={() => handleDownload("specialized")}>
                      👨‍💻 Specialized CS CV
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="about-cards">

            {/* Education Card */}
            <div className="info-card">
              <div className="icon-container">
                <GraduationCap className="icon" />
              </div>
              <div>
                <h3 className="card-title">Education</h3>
                <p>Bachelor's degree in Computer Science...</p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;