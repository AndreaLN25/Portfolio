import React from "react";

function ProjectCard({ imgSrc, description }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={description} />
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
