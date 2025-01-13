import React from "react";
import { useNavigate } from "react-router-dom";

const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateNewProject = () => {
    navigate("/create-project"); // Navigate to the create project page
  };

  const handleManageProjects = () => {
    navigate("/manage-projects"); // Navigate to the manage projects page
  };

  return (
    <div className="flex flex-col space-y-6 h-full justify-center">
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg shadow-lg text-lg"
        onClick={handleCreateNewProject}
      >
        Create New Project
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg shadow-lg text-lg"
        onClick={handleManageProjects}
      >
        Manage Existing Projects
      </button>
    </div>
  );
};

export default ActionButtons;
