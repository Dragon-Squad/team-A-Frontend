import React from "react";
import ProjectCard from "./ProjectCard";
import { useProjectByCharityId } from "@/hooks/use-project";
import { getLocalStorageItem } from "@/utils/helper";

const FetchProjectCard: React.FC = () => {
  const charityId: string = getLocalStorageItem("charityId") ?? "";
  const { data: projects, error } = useProjectByCharityId(charityId);
  if (error) return <div>Error loading projects</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default FetchProjectCard;
