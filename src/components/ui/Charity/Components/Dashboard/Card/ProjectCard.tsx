import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProjectResponseObject } from "@/types/project";
// import { useUpdateProject } from "@/hooks/use-project";
// import { EditProjectDialog } from "../EditProjectDialog";

function ProjectCard({
  id,
  name,
  type,
  category,
  region,
}: updateProjectResponseObject) {
  // const { updateProject } = useUpdateProject();

  const [projectData] = useState({
    name,
    type,
    category,
    region,
  });

  // const handleSaveChanges = (
  //   name: string,
  //   type: string,
  //   category: string[],
  //   region: string[],
  // ) => {
  //   const updatedProjectData = { name, type, category, region };
  //   // updateProject(updatedProjectData);

  //   setProjectData(updatedProjectData);
  // };

  return (
    <Card
      key={id}
      className="p-6 shadow-md border rounded-lg w-full max-w-3xl mx-auto"
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-800">
          Project Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </Label>
            <Input
              id="name"
              value={projectData.name}
              disabled
              className="mt-1"
            />
          </div>
          <div>
            <Label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </Label>
            <Input
              id="type"
              value={projectData.type}
              disabled
              className="mt-1"
            />
          </div>
          <div>
            <Label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categories
            </Label>
            <Input
              id="category"
              value={projectData.category.join(", ")}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              Regions
            </Label>
            <Input
              id="region"
              value={projectData.region.join(", ")}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex">
            {/* <EditProjectDialog
              buttonText="Edit Project"
              title="Edit Project"
              buttonStyle="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1"
              submitButtonStyle="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1"
              name={projectData.name}
              type={projectData.type}
              category={projectData.category}
              region={projectData.region}
              onSaveChanges={handleSaveChanges}
            /> */}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
