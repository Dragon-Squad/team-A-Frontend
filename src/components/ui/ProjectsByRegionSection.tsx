import { useProjects } from "@/hooks/use-project";
import { useRegion } from "@/hooks/use-region";
import React, { useState } from "react";

const ProjectsByRegionSection: React.FC = () => {
  const { data: regions } = useRegion();
  const [activeRegion, setActiveRegion] = useState(regions ? regions[0]._id : "");
  const { data: projects } = useProjects(undefined, undefined, undefined, activeRegion);

  // const regions = [
  //   "Asia",
  //   "Africa",
  //   "Antarctica",
  //   "Australia",
  //   "Europe",
  //   "North America",
  //   "South America",
  //   "Global",
  // ];

  // const regionDetails = {
  //   Asia: ["Project A", "Project B", "Project C"],
  //   Africa: ["Project D", "Project E", "Project F"],
  //   Antarctica: ["Project G"],
  //   Australia: ["Project H", "Project I"],
  //   Europe: ["Project J", "Project K"],
  //   "North America": ["Project L", "Project M"],
  //   "South America": ["Project N", "Project O"],
  //   Global: ["Project P", "Project Q", "Project R", "Project S"],
  // };

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
          {regions?.map((region) => (
            <button
              key={region._id}
              onClick={() => setActiveRegion(region._id)}
              className={`text-lg font-medium ${
                activeRegion === region._id
                  ? "text-primary-orange border-b-2 border-primary-orange"
                  : "text-gray-600"
              } hover:text-primary-orange`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-full h-96 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')", // Free world map
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
          <h3 className="text-2xl font-bold text-black">{regions?.find(region => region._id === activeRegion)?.name}</h3>
          <ul className="mt-4 space-y-2">
            {/* {projects?.map((project, index) => (
              <>
              {project.region.id === activeRegion && (
              <li key={index} className="text-gray-700 text-sm">
                {project.title}
              </li>
            )}
            </>
            )) || (
              <li className="text-gray-700 text-sm">
                No projects available for this region.
              </li>
            )} */}
            {projects && projects.length > 0 ? (
              <>
                {projects.map((project, index) => (
                  <>
                    {project.region.id === activeRegion && (
                      <li key={`${project.region.id}-${index}`} className="text-gray-700 text-sm">
                        {project.title}
                      </li>
                    )}
                  </>
                ))}
              </>
            ) : (
              <li className="text-gray-700 text-sm">
                No projects available for this region.
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsByRegionSection;
