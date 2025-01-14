import React from "react";
import ProjectCard from "./ProjectCard";

interface FetchActiveProjectCardProps {
  activeProjects: any;
}

const FetchActiveProjectCard: React.FC<FetchActiveProjectCardProps> = ({
  activeProjects,
}) => {
  if (!activeProjects) return <div>Loading...</div>;
  if (activeProjects.length === 0) return <div>No projects found</div>;
  console.log(activeProjects);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {activeProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          categories={[]}
          regions={[]}
        />
      ))}
    </div>
  );
};

export default FetchActiveProjectCard;
