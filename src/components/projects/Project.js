import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import "./Project.css";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for online store management with analytics, inventory tracking, and order processing.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality, team collaboration, and deadline tracking.",
      tags: ["React", "Redux", "Node.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Financial Portfolio Tracker",
      description:
        "An application for tracking investment portfolios with real-time data visualization and performance analytics.",
      tags: ["React", "D3.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      demoLink: "#",
      githubLink: "#",
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
