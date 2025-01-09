import React from "react";

const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 h-full justify-center">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg shadow-lg text-lg">
        Create New Project
      </button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg shadow-lg text-lg">
        Manage Existing Projects
      </button>
    </div>
  );
};

export default ActionButtons;
