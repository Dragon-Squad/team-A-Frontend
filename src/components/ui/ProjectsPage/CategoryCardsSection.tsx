import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IconApple,
  IconHeart,
  IconBook,
  IconTree,
  IconBuildingChurch,
  IconUsers,
  IconHome,
  IconPlus,
} from "@tabler/icons-react";

const categories = [
  {
    name: "Food",
    description: "Address hunger and ensure food security.",
    icon: <IconApple size={40} color="#FF8A00" />,
  },
  {
    name: "Health",
    description: "Improve health through essential services.",
    icon: <IconHeart size={40} color="#FF8A00" />,
  },
  {
    name: "Education",
    description: "Expand access to quality learning.",
    icon: <IconBook size={40} color="#FF8A00" />,
  },
  {
    name: "Environment",
    description: "Promote sustainability and conservation.",
    icon: <IconTree size={40} color="#FF8A00" />,
  },
  {
    name: "Religion",
    description: "Support faith-based community initiatives.",
    icon: <IconBuildingChurch size={40} color="#FF8A00" />,
  },
  {
    name: "Humanitarian",
    description: "Address crises and support those in need.",
    icon: <IconUsers size={40} color="#FF8A00" />,
  },
  {
    name: "Housing",
    description: "Provide shelter and affordable housing.",
    icon: <IconHome size={40} color="#FF8A00" />,
  },
  {
    name: "Other",
    description: "Support diverse and flexible causes.",
    icon: <IconPlus size={40} color="#FF8A00" />,
  },
];

const CategoryCardsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/project/${categoryName}`);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex justify-center gap-8 flex-wrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center w-60 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleCategoryClick(category.name)}
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
