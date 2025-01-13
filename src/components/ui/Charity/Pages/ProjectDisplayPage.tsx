import React from "react";
import FetchProjectCard from "../Components/Dashboard/Card/FetchProjectCard";

function ProjectDisplayPage() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <div className="m-10">
        <FetchProjectCard />
      </div>
    </div>
  );
}

export default ProjectDisplayPage;
