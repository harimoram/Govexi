import React from "react";
import "../styles/ProjectsCards.css";
import HexButton from "./HexButton.jsx";

const ProjectsCard = ({ backgroundImage, title, description, link }) => (
  <div
    className="card"
    tabIndex="0"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-body">{description}</p>
      <HexButton href={link} className="button">
        View More
      </HexButton>
    </div>
  </div>
);

export default ProjectsCard;
