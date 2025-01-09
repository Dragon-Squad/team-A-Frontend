import React, { useState } from "react";
import { IconTrophy, IconTarget } from "@tabler/icons-react";

interface Project {
  id: string;
  name: string;
  targetAchieved: number; // Numeric for calculation
  target: number; // Numeric for calculation
  date: string;
}

interface AllProjectsCardProps {
  onProjectSelect: (project: Project) => void;
}

const AllProjectsCard: React.FC<AllProjectsCardProps> = ({
  onProjectSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "1",
      name: "Improve Education",
      targetAchieved: 1800000,
      target: 2000000,
      date: "8 Dec 2024",
    },
    {
      id: "2",
      name: "End Hunger",
      targetAchieved: 90000,
      target: 1000000,
      date: "17 Nov 2024",
    },
    {
      id: "3",
      name: "Donation for Homeless",
      targetAchieved: 1000000,
      target: 1200000,
      date: "21 Oct 2024",
    },
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    onProjectSelect(projects[nextIndex]); // Pass selected project
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    onProjectSelect(projects[prevIndex]); // Pass selected project
  };

  const currentProject = projects[currentIndex];
  const progress = Math.min(
    (currentProject.targetAchieved / currentProject.target) * 100,
    100,
  );

  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
      {/* Total Projects */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">All Projects</h3>
        <p className="text-2xl font-extrabold text-orange-500">
          {projects.length} Projects
        </p>
      </div>

      {/* Project Details */}
      <div className="border-t border-gray-200 pt-4 space-y-4">
        {/* Current Project Name */}
        <div className="text-center">
          <p className="text-xl font-bold text-gray-800">
            {currentProject.name}
          </p>
          <p className="text-sm text-gray-500 italic">{currentProject.date}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className="text-sm text-orange-500 hover:underline"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="text-sm text-orange-500 hover:underline"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProjectsCard;
