import React from "react";
import { IconRocket, IconGift, IconGlobe, IconBox } from "@tabler/icons-react"; // Add appropriate icons here

const GallerySection: React.FC = () => {
  const images = [
    "/images/gallery1.jpg", // Replace with actual image paths
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  const stats = [
    {
      value: "1.2k+",
      label: "Projects Completed",
      icon: <IconRocket size={36} className="text-primary-orange" />, // Rocket Icon
    },
    {
      value: "100",
      label: "Monthly Donate",
      icon: <IconBox size={36} className="text-primary-orange" />, // Box Icon
    },
    {
      value: "480",
      label: "Partners Worldwide",
      icon: <IconGlobe size={36} className="text-primary-orange" />, // Globe Icon
    },
    {
      value: "1.4m",
      label: "Donations Received",
      icon: <IconGift size={36} className="text-primary-orange" />, // Gift Icon
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-10 text-black">
          <h2 className="text-3xl font-bold">Our Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>{stat.icon}</div>
              <h3 className="text-2xl font-bold mt-2 text-black">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
