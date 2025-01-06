import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProjects } from "@/hooks/use-project";
import { Button } from "@/components/ui/button";
import { useDonate } from "@/hooks/use-donate";

type Category = {
  _id: string;
  name: string;
};

type Region = {
  _id: string;
  name: string;
};

type Project = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  goalAmount: number;
  raisedAmount: number;
  regionId: Region;
  categoryIds: Category[];
};

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { donate } = useDonate();

  const { data: projects, loading, error } = useProjects();
  const [project, setProject] = useState<Project | null>(null); // Use the Project type here

  useEffect(() => {
    if (id && projects) {
      const foundProject = projects.find((project) => project._id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        setProject(null);
      }
    }
  }, [id, projects]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading project: {error}</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-white shadow-lg rounded-lg">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{project.description}</p>

          {/* More detailed information */}
          <p className="text-sm text-gray-500 mt-4">
            <strong>Region:</strong> {project.regionId.name}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Categories:</strong>{" "}
            {project.categoryIds.map((category) => category.name).join(", ")}
          </p>

          {/* Goal, Raised, and Donations */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Goal: ${project.goalAmount.toLocaleString()}</span>
              <span>Raised: ${project.raisedAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="absolute top-0 left-0 h-2 bg-primary-orange rounded-full"
              style={{
                width: `${(project.raisedAmount / project.goalAmount) * 100}%`,
              }}
            ></div>
          </div>
          {/* Progress Bar */}
          <Button
            onClick={() =>
              donate(
                "677b7fed598963ace8c3e6d8",
                100.0,
                "677b8013598963ace8c3e7d3",
                "one-time",
                "",
              )
                .then((response) => {
                  console.log("Donation successful:", response);
                  if (response.checkoutUrl) {
                    window.location.href = response.checkoutUrl;
                  } else {
                    console.error("Checkout URL not found in response");
                  }
                })
                .catch((error) => console.error("Donation failed:", error))
            }
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
