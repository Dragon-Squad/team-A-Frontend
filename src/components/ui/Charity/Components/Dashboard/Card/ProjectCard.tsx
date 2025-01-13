import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@headlessui/react";
import { EditProjectDialog } from "../Dialog/EditProjectDialog";
import { ProjectsCardProps } from "@/types/project";
import { getLocalStorageItem } from "@/utils/helper";
import { Progress } from "@/components/ui/progress";

const ProjectCard: React.FC<ProjectsCardProps> = ({
  project,
  categories,
  regions,
}) => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = getLocalStorageItem<string>("userRole");
    setUserRole(role);
  }, []);

  const progressPercentage = (project.raisedAmount / project.goalAmount) * 100;

  return (
    <Card
      key={project._id}
      className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between"
    >
      <div>
        <img
          src={project.images?.[0] ?? "path/to/fallback.jpg"}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardHeader className="p-6">
          <CardTitle
            className="text-lg font-bold text-black truncate hover:whitespace-normal"
            title={project.title}
          >
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm text-gray-500 mt-1">
            <strong>Region:</strong> {project.region?.name ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600 mt-4 line-clamp-3">
            {project.description ?? "No description available."}
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Goal: ${project.goalAmount.toLocaleString()}</span>
              <span>Raised: ${project.raisedAmount.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </div>
      <div className="p-6">
        <Progress value={progressPercentage} className="mt-2" />
        <Button
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 mt-4"
          onClick={() => (window.location.href = `/details/${project._id}`)}
        >
          View Details
        </Button>
        {userRole === "Charity" && (
          <EditProjectDialog
            triggerClassName="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1 mt-4"
            categories={categories}
            regions={regions}
            project={project}
          />
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
