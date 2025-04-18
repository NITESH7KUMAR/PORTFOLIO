import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import "./Project.css";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Blood Donation Website",
      description:
        "A comprehensive dashboard for online store management with analytics, inventory tracking, and order processing.",
      tags: ["React", "Redux", "PHP"],
      image: "/files/blood.png",
      demoLink: "https://acblood-line-camp.vercel.app/", // ✅ Fixed here
      githubLink: "https://github.com/NITESH7KUMAR/BloodLine-Camp",
    },
    {
      id: 2,
      title: "Arogaya Care",
      description:
        "A Kanban-style task management application with drag-and-drop functionality, team collaboration, and deadline tracking.",
      tags: ["Html", "CSS", "Node.js"],
      image: "/files/arogaya.png",
      demoLink: "https://nitesh7kumar.github.io/Arogya-Website/",
      githubLink: "https://github.com/NITESH7KUMAR/Arogya-Website",
    },
    {
      id: 3,
      title: "Sudoku Solver",
      description:
        "An application for tracking investment portfolios with real-time data visualization and performance analytics.",
      tags: ["Html", "JavaScript", "DSA"],
      image: "/files/sudoku.png",
      demoLink: "https://nitesh7kumar.github.io/Sudoku/",
      githubLink: "https://github.com/NITESH7KUMAR/Sudoku",
    },
    {
      id: 4,
      title: "SpeakX",
      description:
        "An application for tracking investment portfolios with real-time data visualization and performance analytics.",
      tags: ["Html", "JavaScript", "React","Redux"],
      image: "/files/speaks.png",
      demoLink: "https://project-speak-x.vercel.app/",
      githubLink: "https://github.com/NITESH7KUMAR/Project-SpeakX",
    },
    
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">My Projects</h2>
        <div className="heading-underline"></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-content">
                <p>{project.description}</p>
              </div>
              <div className="card-footer">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-filled"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button className="button-outline-lg">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;