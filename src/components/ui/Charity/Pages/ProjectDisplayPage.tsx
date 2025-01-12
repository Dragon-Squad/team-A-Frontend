import React from "react";
import FetchProjectCard from "../Components/Dashboard/Card/FetchProjectCard";

function ProjectDisplayPage() {
  return (
    <div className="fixed ml-4 flex flex-col h-full w-full bg-gray-100">
      <div className="mt-10">
        <FetchProjectCard />
      </div>
    </div>
  );
}

export default ProjectDisplayPage;
