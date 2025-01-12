import React from "react";
import { useProjects } from "@/hooks/use-project";
import { useNavigate } from "react-router-dom";

const LatestProjectsSection: React.FC = () => {
  const { data: projects, loading, error, refresh } = useProjects();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error}</div>;

  // Filter active projects
  const activeProjects = projects.filter(
    (project) => project.status === "active",
  );

  const handleViewDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-left mb-10">
          <h2 className="text-3xl font-bold text-black">Latest Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              {/* If you really need an image, provide a fallback or remove this */}
              <img
                src={project.images?.[0] ?? "path/to/fallback.jpg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Region:</strong> {project.region?.name ?? "N/A"}
                </p>
                {/* Display the category names */}
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong>{" "}
                  {project.categories?.map((cat) => cat.name).join(", ") ??
                    "N/A"}
                </p>
                <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                  {project.description ?? "No description available."}
                </p>
                {/* Goal, (Raised?), and Donations */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Goal: ${project.goalAmount.toLocaleString()}</span>

                    <span>
                      Raised: ${project.raisedAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
                {/* Progress Bar (only if you have raisedAmount) */}l
                {/* View Details Button */}
                <button
                  className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                  onClick={() => handleViewDetails(project.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
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

export default LatestProjectsSection;
