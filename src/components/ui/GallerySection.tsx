import React from "react";
import { IconRocket, IconGift, IconGlobe, IconBox } from "@tabler/icons-react";

const GallerySection: React.FC = () => {
  const images = [
    "https://cfs3.monicavinader.com/images/original/11640370-8675797-mv-nov19-lp-wfwi-lhs-what-desktop.jpg",
    "https://image.vietnamnews.vn/uploadvnnews/Article/2022/6/21/224504_8.jpg",
    "https://www.globalgiving.org/pfil/8508/ph_8508_27790.jpg",
    "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/10/17/4535344-166121227.jpg?itok=I4RN6mhr",
    "https://sapa-usa.org/wp-content/uploads/2024/06/top-10-charity-organizations-in-the-world.jpg",
    "https://media.licdn.com/dms/image/v2/C4D12AQEnQIOpQeDHwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1619521100922?e=2147483647&v=beta&t=ZeweZx8UesPcNHHipG9Wsc-ZQRAUNH8m07hKrmLCL_I",
  ];

  const stats = [
    {
      value: "1.2k+",
      label: "Projects Completed",
      icon: <IconRocket size={36} className="text-primary-orange" />,
    },
    {
      value: "100",
      label: "Monthly Donations",
      icon: <IconBox size={36} className="text-primary-orange" />,
    },
    {
      value: "480",
      label: "Partners Worldwide",
      icon: <IconGlobe size={36} className="text-primary-orange" />,
    },
    {
      value: "1.4m",
      label: "Donations Received",
      icon: <IconGift size={36} className="text-primary-orange" />,
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
              <a href={image} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </a>
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
