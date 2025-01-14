import React from "react";
import {
  IconHeartHandshake,
  IconPlus,
  IconWorld,
  IconMoon,
} from "@tabler/icons-react"; // Import matching icons

const LatestNewsAndBlogSection: React.FC = () => {
  const newsItems = [
    {
      title: "Where to Give Now",
      date: "June 20, 2024",
      description: "Discover impactful causes in urgent need of support.",
      image: "/images/news1.jpg", // Replace with actual image paths
      link: "#",
    },
    {
      title: "Popular Charities",
      date: "June 22, 2024",
      description:
        "Explore trusted organizations making a difference worldwide.",
      image: "/images/news2.jpg",
      link: "#",
    },
    {
      title: "Childcare Crisis",
      date: "June 24, 2024",
      description: "Understand the challenges families face and how to help.",
      image: "/images/news3.jpg",
      link: "#",
    },
  ];

  const icons = [
    {
      icon: <IconHeartHandshake size={48} className="text-gray-700" />,
      label: "",
    },
    { icon: <IconPlus size={48} className="text-gray-700" />, label: "" },
    { icon: <IconWorld size={48} className="text-gray-700" />, label: "" },
    { icon: <IconMoon size={48} className="text-gray-700" />, label: "" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black">
            Latest News and Blog
          </h2>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              {/* News Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    "public/img/default-fallback-image.png")
                }
              />
              {/* News Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <a
                  href={item.link}
                  className="text-primary-orange font-medium mt-4 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More News Button */}
        <div className="text-center mt-10">
          <button className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-100">
            More News
          </button>
        </div>

        {/* Icons */}
        <div className="mt-16 flex justify-center space-x-12">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              {icon.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsAndBlogSection;
