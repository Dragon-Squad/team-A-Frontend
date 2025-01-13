import React from "react";
import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/use-project";

const FetchActiveProjectCard: React.FC = () => {
  const { data: projects, error } = useProjects();
  if (error) return <div>Error loading projects</div>;

  const activeProjects = projects.filter(
    (project) => project.status === "active",
  );

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
