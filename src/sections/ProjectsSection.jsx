import React from "react";
import "../styles/ProjectsSection.css";
import Cards from "../components/ProjectsCard.jsx";
import HexButton from "../components/HexButton.jsx";

import Project1 from "../assets/Project-1.png"
import Project2 from "../assets/Project-2.png"
import Project3 from "../assets/Project-3.png"
import Project4 from "../assets/Project-4.png"

const ProjectsSection = () => {
  const projects = [
    {
      backgroundImage: Project1,
      title: "SoleSphere",
      description: "Modern UI design for a stylish footwear e-commerce store.",
      link: "/projects/granite-wonder"
    },
    {
      backgroundImage: Project2,
      title: "BrickNest",
      description: "Clean and responsive UI for a modern real estate website.",
      link: "/projects/monumental-design"
    },
    {
      backgroundImage: Project3,
      title: "MediCare Awareness",
      description: "Eye-catching poster design promoting health and wellness.",
      link: "/projects/architectural-elegance"
    },
    {
      backgroundImage: Project4,
      title: "BiteBuddy",
      description: "Sleek mobile UI for fast and easy food ordering.",
      link: "/projects/modern-marble"
    }
  ];

  return (
    <section className="projects-section">
      <div className="section-intro">
        <h2 className="section-heading">Crafted Interfaces, Real Results</h2>
        <p className="section-subtext">
          Explore our selected works that blend function and beauty.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${index % 2 === 0 ? "card-top" : "card-bottom"}`}
          >
            <Cards
              backgroundImage={project.backgroundImage}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <p className="view-more-text">Want to see more design stories?</p>
        <HexButton>View More Projects</HexButton>
      </div>
    </section>
  );
};

export default ProjectsSection;
