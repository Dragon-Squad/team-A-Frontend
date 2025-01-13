import React from "react";
import FetchCharityCard from "./Card/FetchCharityCard";

function CharityDashboard() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <div className="m-10">
        <FetchCharityCard />
      </div>
    </div>
  );
}

export default CharityDashboard;
