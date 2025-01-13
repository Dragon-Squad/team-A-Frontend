import React from "react";
import FetchProjectCard from "./Card/FetchProjectCard";

const DisplayProject: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-gray-100 overflow-auto">
      <div className="m-10">
        <FetchProjectCard></FetchProjectCard>
      </div>
    </div>
  );
};

export default DisplayProject;
