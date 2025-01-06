import React from "react";
import {
  IconBook,
  IconDroplet,
  IconHeart,
  IconUsers,
} from "@tabler/icons-react";

const categories = [
  {
    name: "Education",
    description: "Expand access to quality learning.",
    icon: <IconBook size={40} color="#FF8A00" />,
  },
  {
    name: "Clean Water",
    description: "Ensure access to safe drinking water.",
    icon: <IconDroplet size={40} color="#FF8A00" />,
  },
  {
    name: "Health Care",
    description: "Improve health through essential services.",
    icon: <IconHeart size={40} color="#FF8A00" />,
  },
  {
    name: "Local Communities",
    description: "Support sustainable local growth.",
    icon: <IconUsers size={40} color="#FF8A00" />,
  },
];

const CategoryCardsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex justify-center gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center w-60"
          >
            {/* Icon */}
            <div className="mb-4">{category.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-bold text-black">{category.name}</h3>
            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCardsSection;
