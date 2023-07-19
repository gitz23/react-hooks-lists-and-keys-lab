import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologieS = technologies.map((tech, name) => {
    return <span key={name}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologieS}
      </div>
    </div>
  );
}

export default ProjectItem;
