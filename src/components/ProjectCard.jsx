import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Proj.css";

const ProjectCard = ({ image, title, description, tech, liveLink, repoLink, flipped }) => {
  return (
    <div className={`project-card ${flipped ? "flipped" : ""}`}>
      {/* Image */}
      <div className="project-image">
        <img src={image} alt={`${title} screenshot`} />
      </div>

      {/* Info */}
      <div className="project-info">
        <p className="featured">Featured Project</p>
        <h3 className="project-title">{title}</h3>
        <div className="project-desc">
          <p>{description}</p>
        </div>

        {/* Tech stack */}
        <ul className="tech-list">
          {tech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="project-links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
