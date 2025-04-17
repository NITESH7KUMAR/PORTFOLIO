import React from "react";
import Navbar from '../navbar/navbar'; 
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Project";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

import "./Index.css";

const Index = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
