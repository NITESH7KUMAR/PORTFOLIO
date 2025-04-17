import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import Button  from "../ui/button";
import "./Home.css"; // make sure this file exists

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title animate-fade-in">
          Hi, I'm <span className="highlight">Nitesh Kumar</span>
        </h1>
        <h2 className="hero-subtitle animate-fade-in delay-200">
          Software Developer
        </h2>
        <p className="hero-description animate-fade-in delay-400">
          I create user-friendly web applications with modern technologies
          and a focus on performance and accessibility.
        </p>
        <div className="hero-buttons animate-fade-in delay-600">
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Button size="lg" className="custom-btn">View My Work</Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button size="lg" variant="outline" className="custom-btn outline">Contact Me</Button>
          </Link>
        </div>
        <div className="scroll-down">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
            <ArrowDown className="arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
