import { Card, CardContent } from "../ui/card";
import { Code, Database, Layout, PenTool, Server, Share2 } from "lucide-react";
import "./Skills.css"; // Link the CSS file

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="skill-icon" />,
      items: ["React", "JavaScript", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend Development",
      icon: <Server className="skill-icon" />,
      items: ["Node.js", "Express", "REST APIs",  "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps & Tools",
      icon: <Share2 className="skill-icon" />,
      items: ["Git", "GitHub", "Docker", "CI/CD",  "Vercel"]
    },
    {
      category: "Programming Languages",
      icon: <Code className="skill-icon" />,
      items: ["JavaScript",  "Java", "C++", "SQL"]
    },
    {
      category: "Database & Storage",
      icon: <Database className="skill-icon" />,
      items: ["PostgreSQL", "MongoDB", "MySQL", ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-underline"></div>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="skill-card-content">
                <div className="skill-header">
                  {skillGroup.icon}
                  <h3 className="skill-title">{skillGroup.category}</h3>
                </div>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
