import React, { useState } from "react";
import AllProjectsCard from "./AllProjectsCard";
import SingleProjectCard from "./SingleprojectCard";
import DonationsChart from "./DonationsChart";
import RecentProjects from "./RecentProjects";
import RecentDonationsTable from "./RecentDonationsTable";
import ActionButtons from "./ActionButtons";

const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState({
    name: "Improve Education",
    targetAchieved: "$1,800,000",
    target: "$2,000,000",
    progress: 90,
    date: "8 Dec 2024",
  });

  return (
    <div className="bg-gray-50 min-h-screen p-8 space-y-8 text-black">
      <div className="text-black font-bold text-2xl">Statistics</div>

      {/* Top Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* All Projects Card */}
        <AllProjectsCard onProjectSelect={setSelectedProject} />

        {/* Single Project Card */}
        <SingleProjectCard
          name={selectedProject.name}
          targetAchieved={selectedProject.targetAchieved}
          target={selectedProject.target}
          progress={selectedProject.progress}
          date={selectedProject.date}
        />

        {/* Recent Projects */}
        <RecentProjects />
      </div>

      {/* User Donations Chart */}
      <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          User Donations
        </h2>
        <DonationsChart />
      </div>

      {/* Recent Donations and Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 md:col-span-2">
          <RecentDonationsTable />
        </div>
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col space-y-4">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
