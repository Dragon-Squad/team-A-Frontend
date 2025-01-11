import React from "react";

import ComparativeAnalysis from "../Components/Statistics/ComparativeAnalysis";
import HistoricalData from "../Components/Statistics/HistoricalData";
import ProjectStatisticsCharts from "../Components/Statistics/ProjectStatisticsCharts";

const ProjectStatisticsPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Project Statistics
      </h1>
      <div className="space-y-8">
        <ProjectStatisticsCharts />
        <ComparativeAnalysis />
        <HistoricalData />
      </div>
    </div>
  );
};

export default ProjectStatisticsPage;
