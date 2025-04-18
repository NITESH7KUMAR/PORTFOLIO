import React, { useState } from "react";
import { FileText, GraduationCap, ChevronDown } from "lucide-react";
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
    setShowOptions(false);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        <div className="about-grid">
          {/* Text and Resume Section */}
          <div className="about-text">
            <p className="paragraph">
              Hello! I'm a passionate software developer with a strong
              foundation in web technologies and problem-solving.
            </p>
            <p className="paragraph">
              With several years of experience in front-end and back-end
              development, I enjoy creating responsive and user-friendly
              applications.
            </p>

            <div className="button-group">
              <div className="dropdown-wrapper">
                <button
                  className="resume-button"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  <FileText size={18} /> Download Resume{" "}
                  <ChevronDown size={16} />
                </button>

                {showOptions && (
                  <div className="dropdown-menu">
                    <div
                      className="dropdown-item"
                      onClick={() => handleDownload("general")}
                    >
                      📄 General CV
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => handleDownload("specialized")}
                    >
                      👨‍💻 Specialized CS CV
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Education Card Below Resume */}
            <div className="info-card education-card">
              <div className="icon-container">
                <GraduationCap className="icon" />
              </div>
              <div>
                <h3 className="card-title">Education</h3>
                <ul className="education-list">
                  <li>
                    <strong>B.Tech in Computer Science and Engineering</strong>
                    <br />
                    Lovely Professional University (LPU), Punjab
                    <br />
                    <em>CGPA: 7.8 | 2022 – Present</em>
                  </li>
                  <li>
                    <strong>Senior Secondary (Class 12th)</strong>
                    <br />
                    Jawahar Navodaya Vidyalaya
                    <br />
                    <em>Percentage: 88.2% | Passed in 2022</em>
                  </li>
                  <li>
                    <strong>Secondary (Class 10th)</strong>
                    <br />
                    Jawahar Navodaya Vidyalaya
                    <br />
                    <em>Percentage: 84.2% | Passed in 2020</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
