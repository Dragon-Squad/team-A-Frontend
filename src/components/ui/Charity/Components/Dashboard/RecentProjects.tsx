import React, { useState } from "react";
import {
  IconSchool,
  IconHome,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

const RecentProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const projects = [
    {
      name: "Improve Education",
      organization: "RMIT VN",
      value: "$2,000,000",
      date: "8 Dec 2024",
      icon: <IconSchool size={24} className="text-gray-500" />,
    },
    {
      name: "End Hunger",
      organization: "SHOPEE",
      value: "$1,000,000",
      date: "17 Nov 2024",
      icon: <IconHome size={24} className="text-gray-500" />,
    },
    {
      name: "Donation for Homeless",
      organization: "WHO",
      value: "$1,200,000",
      date: "21 Oct 2024",
      icon: <IconBuildingSkyscraper size={24} className="text-gray-500" />,
    },
  ];

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Projects</h3>
        <button className="text-sm text-gray-500 hover:underline">
          View All
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab("Active")}
          className={`text-sm font-medium pb-2 ${
            activeTab === "Active"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveTab("Inactive")}
          className={`text-sm font-medium pb-2 ${
            activeTab === "Inactive"
              ? "text-gray-500 border-b-2 border-gray-400"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Inactive
        </button>
      </div>

      {/* Project List */}
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100">
                {project.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {project.name}
                </p>
                <p className="text-xs text-gray-500">{project.organization}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium text-gray-800">
                {project.value}
              </p>
              <p className="text-xs text-gray-500">{project.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProjects;
