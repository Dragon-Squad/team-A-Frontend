import { useProjects } from "@/hooks/use-project";
import React from "react";
import { useNavigate } from "react-router-dom";

type Category = {
  _id: string;
  name: string;
};

const LatestProjectsSection: React.FC = () => {
  const { data: projects, loading, error, refresh } = useProjects();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error}</div>;

  const activeProjects = projects.filter(
    (project) => project.status === "active",
  );

  const handleViewDetails = (id: string) => {
    // Navigate to /details/{_id}
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
              key={project._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.images[0]} // Use the first image as the thumbnail
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Region:</strong> {project.regionId.name}
                </p>

                {/* Display the category names */}
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong>{" "}
                  {project.categoryIds
                    .map((category: Category) => category.name)
                    .join(", ")}
                </p>

                <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Goal, Raised, and Donations */}
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
                    className="absolute top-0 left-0 h-2 bg-primary-orange rounded-full"
                    style={{
                      width: `${(project.raisedAmount / project.goalAmount) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* View Details Button */}
                <button
                  className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                  onClick={() => handleViewDetails(project._id)} // Navigate on click
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
            onClick={refresh} // Refresh data when the button is clicked
          >
            Refresh Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
