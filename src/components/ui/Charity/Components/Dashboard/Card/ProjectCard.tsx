import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@headlessui/react";
import { EditProjectDialog } from "../Dialog/EditProjectDialog";
import { ProjectsCardProps } from "@/types/project";
import { getLocalStorageItem } from "@/utils/helper";
import { Progress } from "@/components/ui/progress";
import {
  useHaltProject,
  useResumeProject,
  useDeleteProject,
} from "@/hooks/use-project";

const ProjectCard: React.FC<ProjectsCardProps> = ({
  project,
  categories,
  regions,
}) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const {
    data: haltData,
    loading: haltLoading,
    error: haltError,
    haltProject,
  } = useHaltProject(project.id);
  const {
    data: resumeData,
    loading: resumeLoading,
    error: resumeError,
    resumeProject,
  } = useResumeProject(project.id);
  const {
    loading: deleteLoading,
    error: deleteError,
    deleteProject,
  } = useDeleteProject(project.id);

  useEffect(() => {
    const role = getLocalStorageItem<string>("userRole");
    setUserRole(role);
  }, []);

  const handleHaltProject = async () => {
    await haltProject();
  };

  const handleResumeProject = async () => {
    await resumeProject();
  };

  const handleDeleteProject = async () => {
    await deleteProject();
  };

  const progressPercentage = (project.raisedAmount / project.goalAmount) * 100;
  console.log(project.status);

  return (
    <Card
      key={project._id}
      className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between"
    >
      <div>
        <img
          src={project.images?.[0] ?? "public/img/default-fallback-image.png"}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg sm:h-64 md:h-72 lg:h-80"
          onError={(e) =>
            (e.currentTarget.src = "public/img/default-fallback-image.png")
          }
        />
        <CardHeader className="p-4 sm:p-6">
          <CardTitle
            className="text-lg font-bold text-black truncate hover:whitespace-normal"
            title={project.title}
          >
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <p className="text-sm text-gray-500 mt-1">
            <strong>Charity Name:</strong> {project.charity.name ?? "N/A"}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <strong>Region:</strong> {project.region?.name ?? "N/A"}
          </p>
          {project?.country && (
            <p className="text-sm text-gray-500 mt-1">
              <strong>Country:</strong> {project.country}
            </p>
          )}
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
      <div className="p-4 sm:p-6">
        <Progress value={progressPercentage} className="mt-2" />
        {userRole === "Donor" && (
          <Button
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 mt-4"
            onClick={() => (window.location.href = `/details/${project.id}`)}
          >
            View Details
          </Button>
        )}
        {userRole === "Charity" && (
          <div>
            <EditProjectDialog
              triggerClassName="bg-primary-orange text-white hover:bg-orange-600 ml-0 mt-4"
              categories={categories}
              regions={regions}
              project={project}
            />
            <Button
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-800 mt-4"
              onClick={handleHaltProject}
              disabled={haltLoading}
            >
              {haltLoading ? "Halting..." : "Halt Project"}
            </Button>
            {haltError && (
              <p className="text-red-500 mt-2">
                {haltError === "Project not found"
                  ? "Cannot halt non active project"
                  : haltError}
              </p>
            )}
            {project.status !== "active" && (
              <>
                <Button
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 mt-4"
                  onClick={handleResumeProject}
                  disabled={resumeLoading}
                >
                  {resumeLoading ? "Resuming..." : "Resume Project"}
                </Button>
                {resumeError && (
                  <p className="text-red-500 mt-2">
                    {resumeError === "Project not found"
                      ? "Cannot resume active project"
                      : resumeError}
                  </p>
                )}
                <Button
                  className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-800 mt-4"
                  onClick={handleDeleteProject}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? "Deleting..." : "Delete Project"}
                </Button>
                {deleteError && (
                  <p className="text-red-500 mt-2">
                    {deleteError === "Project not found"
                      ? "Cannot delete non-existent project"
                      : deleteError}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
