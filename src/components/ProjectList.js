import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const eachItem = projects.map((item) =>{
    return (item.id)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem key={eachItem} prop={eachItem}/>
      </div>
    </div>
  );
}

export default ProjectList;
