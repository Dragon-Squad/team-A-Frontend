import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "@/hooks/use-project";

const ProjectsGrid: React.FC = () => {
  const { data: projects, loading, error, refresh } = useProjects();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-500">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-red-500">Error loading projects: {error}</p>
      </div>
    );
  }

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      !selectedCategory ||
      project.categoryIds.some((cat) => cat.name === selectedCategory);
    const matchesRegion =
      !selectedRegion || project.regionId.name === selectedRegion;

    return matchesCategory && matchesRegion;
  });

  const handleViewDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-black">All Projects</h2>
          <p className="text-gray-600">
            Browse and support impactful projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2 bg-white text-black"
          >
            <option value="">All Categories</option>
            {/* Categories from requirements */}
            {[
              "Food",
              "Health",
              "Education",
              "Environment",
              "Religion",
              "Humanitarian",
              "Housing",
              "Other",
            ].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Region Filter */}
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border border-gray-300 rounded-md p-2  bg-white text-black"
          >
            <option value="">All Regions</option>

            {[
              "Asia",
              "Africa",
              "Antarctica",
              "Australia",
              "Europe",
              "North America",
              "South America",
              "Global",
            ].map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg text-black"
            >
              {/* Project Image */}
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-black ">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Region:</strong> {project.regionId.name}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong>{" "}
                  {project.categoryIds.map((cat) => cat.name).join(", ")}
                </p>
                <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Goal and Raised */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Goal: ${project.goalAmount.toLocaleString()}</span>
                    <span>
                      Raised: ${project.raisedAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative mt-4 bg-gray-200 rounded-full h-2">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-400 rounded-full"
                    style={{
                      width: `${(project.raisedAmount / project.goalAmount) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* View Details Button */}
                <button
                  className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                  onClick={() => handleViewDetails(project._id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Refresh Button */}
        <div className="text-center mt-10">
          <button
            className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-100"
            onClick={refresh}
          >
            Refresh Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
