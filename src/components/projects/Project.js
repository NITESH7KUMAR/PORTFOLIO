import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import "./Project.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Salon Website",
      description: "A full-stack salon booking platform with user authentication, admin dashboard, and appointment scheduling.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/files/xalon.png",
      demoLink: "https://xalon.vercel.app/", 
      githubLink: "https://github.com/NITESH7KUMAR/Xalon",
    },
    {
      id: 2,
      title: "Blood Donation Website",
      description: "A platform for donors and recipients to connect, request, and manage blood donations with PHP and MySQL backend.",
      tags: ["React", "PHP", "MySQL"],
      image: "/files/blood.png",
      demoLink: "https://acblood-line-camp.vercel.app/", 
      githubLink: "https://github.com/NITESH7KUMAR/BloodLine-Camp",
    },
    {
      id: 3,
      title: "SpeakX",
      description: "A web application that fetches and displays data from a database using anagram-based search queries, allowing users to discover matches through intelligently scrambled input.",
      tags: ["HTML", "JavaScript", "React","Mongodb"],
      image: "/files/speaks.png",
      demoLink: "https://project-speak-x.vercel.app/",
      githubLink: "https://github.com/NITESH7KUMAR/Project-SpeakX",
    },
    {
      id: 4,
      title: "Sudoku Solver",
      description: "A web-based Sudoku game that uses backtracking algorithm to solve puzzles in real-time.",
      tags: ["HTML", "CSS", "JavaScript", "DSA"],
      image: "/files/sudoku.png",
      demoLink: "https://nitesh7kumar.github.io/Sudoku/",
      githubLink: "https://github.com/NITESH7KUMAR/Sudoku",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">My Projects</h2>
        <div className="heading-underline"></div>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
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
        {!showAll && (
          <div className="view-all">
            <button className="button-outline-lg" onClick={() => setShowAll(true)}>
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;