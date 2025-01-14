import React from "react";
import FetchActiveProjectCard from "./Card/FetchActiveProjectCard";

function DonorDashboard() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 overflow-auto">
      <div className="m-10">
        <FetchActiveProjectCard />
      </div>
    </div>
  );
}

export default DonorDashboard;
