import React from "react";

const LatestProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Clean Water for All",
      region: "Sub-Saharan Africa, South Asia",
      category: "Water & Sanitation",
      description:
        "Ensure access to clean drinking water to improve public health and support communities.",
      goal: "$12,000",
      raised: "$8,000",
      donations: 14,
      image: "/images/project1.jpg", // Replace with actual image paths
    },
    {
      title: "Improve Education",
      region: "Global",
      category: "Education",
      description:
        "Expand access to quality education for underserved children and communities.",
      goal: "$15,000",
      raised: "$12,000",
      donations: 25,
      image: "/images/project2.jpg",
    },
    {
      title: "End Hunger",
      region: "East Africa, South Asia, Latin America",
      category: "Food Security & Nutrition",
      description:
        "Combat hunger through food aid and sustainable agricultural practices.",
      goal: "$20,000",
      raised: "$8,000",
      donations: 6,
      image: "/images/project3.jpg",
    },
    {
      title: "Reduce Homelessness",
      region: "North America, Europe, Urban Asia",
      category: "Housing & Urban Development",
      description:
        "Provide housing and resources to reduce homelessness in communities.",
      goal: "$60,000",
      raised: "$32,000",
      donations: 12,
      image: "/images/project4.jpg",
    },
    {
      title: "Immigration and Refugees",
      region: "Middle East, Europe, North America",
      category: "Human Rights & Social Justice",
      description:
        "Assist refugees with housing, jobs, and legal support in their new homes.",
      goal: "$220,000",
      raised: "$60,000",
      donations: 24,
      image: "/images/project5.jpg",
    },
    {
      title: "Climate Change Mitigation",
      region: "Global",
      category: "Environment & Sustainability",
      description:
        "Promote clean energy and reforestation to fight climate change worldwide.",
      goal: "$120,000",
      raised: "$80,000",
      donations: 8,
      image: "/images/project6.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-left mb-10">
          <h2 className="text-3xl font-bold text-black">Latest Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1 ">
                  <strong>Region:</strong> {project.region}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong> {project.category}
                </p>
                <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Goal, Raised, and Donations */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Goal: {project.goal}</span>
                    <span>Raised: {project.raised}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {project.donations} donations
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative mt-4 bg-gray-200 rounded-full h-2">
                  <div
                    className="absolute top-0 left-0 h-2 bg-primary-orange rounded-full"
                    style={{
                      width: `${
                        (parseInt(project.raised.replace(/\D/g, "")) /
                          parseInt(project.goal.replace(/\D/g, ""))) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>

                {/* View Details Button */}
                <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-10">
          <button className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-100">
            More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
