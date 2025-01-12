import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProjectByIdDetail } from "@/types/project";
import { useState } from "react";

function ProjectCard({ title }: ProjectByIdDetail) {
  // const { updateProject } = useUpdateProject();
  const [projectData] = useState({
    title,
  });

  // const handleSaveChanges = (
  //   title: string,
  // ) => {
  //   const updatedProjectData = {title};
  //   updateProject(updatedProjectData);
  //   setProjectData(updateProject);
  // }
  return (
    <Card className="p-4 shadow-md border rounded-lg w-72 mx-2 mb-4">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-gray-800 truncate">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Charity Name
            </Label>
            <Input
              id="name"
              value={projectData.title}
              disabled
              className="mt-1"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
