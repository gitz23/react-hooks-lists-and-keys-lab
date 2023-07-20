import React from "react";

function ProjectItem(props) { 
  const {name, about, technologies} = props
  const technologieS = technologies.map((tech, index) => {
    return <span key={index}>{tech}</span>

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
