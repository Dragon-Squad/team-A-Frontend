import React, { useState } from "react";

const ProjectsByRegionSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState("Central Africa");

  const regions = [
    "Central Africa",
    "Eastern Europe",
    "Southeast Asia",
    "Central America",
  ];
  const regionDetails = {
    "Central Africa": ["Project A", "Project B", "Project C"],
    "Eastern Europe": ["Project D", "Project E"],
    "Southeast Asia": ["Project F", "Project G", "Project H"],
    "Central America": ["Project I", "Project J"],
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black">Projects by Region</h2>
          <p className="text-gray-600 mt-2">
            Explore initiatives tailored to specific regions, addressing local
            challenges and driving impactful solutions for communities
            worldwide.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex justify-center space-x-6 mb-8">
          {regions.map((region, index) => (
            <button
              key={index}
              onClick={() => setActiveRegion(region)}
              className={`text-lg font-medium ${
                activeRegion === region
                  ? "text-primary-orange border-b-2 border-primary-orange"
                  : "text-gray-600"
              } hover:text-primary-orange`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-full h-96 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/world-map.jpg')", // Replace with your map image
            }}
          >
            {/* Example Markers */}
            <div className="absolute left-1/3 top-1/4 bg-primary-orange w-4 h-4 rounded-full border-2 border-white"></div>
            <div className="absolute left-1/2 top-1/3 bg-primary-orange w-4 h-4 rounded-full border-2 border-white"></div>
            <div className="absolute right-1/4 top-1/2 bg-primary-orange w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
        </div>

        {/* Active Region Details */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-black">{activeRegion}</h3>
          <ul className="mt-4 space-y-2">
            {regionDetails[activeRegion].map((project, index) => (
              <li key={index} className="text-gray-700 text-sm">
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsByRegionSection;
