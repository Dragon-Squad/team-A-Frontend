// ProjectsPage.tsx
import React, { useState } from "react";
import CreateProjectForm from "../Components/Projects/CreateProjectForm";
import ProjectList from "../Components/Projects/ProjectList";
import EditProjectForm from "../Components/Projects/EditProjectForm";

const ProjectsPage: React.FC = () => {
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  const handleCreateProject = (projectData: any) => {
    console.log("Project created", projectData);
  };

  const handleEditProject = (projectId: string) => {
    setEditingProjectId(projectId);
  };

  const handleUpdateProject = (updatedData: any) => {
    console.log("Project updated", updatedData);
    setEditingProjectId(null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Projects</h1>
      {editingProjectId ? (
        <EditProjectForm
          projectId={editingProjectId}
          onUpdateProject={handleUpdateProject}
        />
      ) : (
        <>
          <CreateProjectForm onCreateProject={handleCreateProject} />
          <div className="mt-8">
            <ProjectList onEdit={handleEditProject} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
