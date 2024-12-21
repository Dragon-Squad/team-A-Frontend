import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-image.jpg')", // Replace with your image path
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center items-start h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Give Hope, <br /> Save Lives
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
          Join the Charitan Foundation to connect with impactful projects and
          make a difference. Our platform fosters trust, transparency, and
          community-driven change, empowering donors to support meaningful
          initiatives with confidence.
        </p>

        {/* Donation Stats */}
        <div className="mt-8 flex space-x-8 text-lg md:text-xl">
          <div>
            <span className="text-primary-orange font-bold">$1,234,567</span>
            <p className="text-gray-300 text-sm">Donation</p>
          </div>
          <div>
            <span className="text-primary-orange font-bold">69,696</span>
            <p className="text-gray-300 text-sm">People Helped</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
