import React from "react";
import {
  IconBook,
  IconDroplet,
  IconHeartbeat,
  IconUsers,
} from "@tabler/icons-react"; // Replace with your preferred icons

const ImpactAreasSection: React.FC = () => {
  const impactAreas = [
    {
      icon: <IconBook size={40} className="text-primary-orange" />,
      title: "Education",
      description: "Expand access to quality learning.",
    },
    {
      icon: <IconDroplet size={40} className="text-primary-orange" />,
      title: "Clean Water",
      description: "Ensure access to safe drinking water.",
    },
    {
      icon: <IconHeartbeat size={40} className="text-primary-orange" />,
      title: "Health Care",
      description: "Improve health through essential services.",
    },
    {
      icon: <IconUsers size={40} className="text-primary-orange" />,
      title: "Local Communities",
      description: "Support sustainable local growth.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4">{area.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreasSection;
