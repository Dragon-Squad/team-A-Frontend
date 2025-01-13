import React from "react";
import ProjectCard from "./ProjectCard";

const FetchProjectCard: React.FC = () => {
  const project = {
    id: "1",
    name: "Project A",
    type: "Charity",
    category: ["Education", "Health"],
    region: ["Asia", "Africa"],
  };

  return (
    <div className="flex">
      <ProjectCard
        id={project.id}
        name={project.name}
        type={project.type}
        category={project.category}
        region={project.region}
      />
    </div>
  );
};

export default FetchProjectCard;
