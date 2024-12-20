import React from "react";
import { IconPlayerPlay } from "@tabler/icons-react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Testimonial Text */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-primary-orange text-5xl font-bold leading-none">
              “
            </span>
            <h2 className="text-3xl font-bold ml-4 leading-tight text-black">
              Together, we can change lives for the better
            </h2>
          </div>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Together, we can change lives for the better by turning compassion
            into action. Every donation, no matter the size, makes a meaningful
            difference—bringing clean water, education, healthcare, and support
            to those in need. By uniting our efforts, we create opportunities,
            uplift communities, and build a brighter, more equitable future for
            all.
          </p>
          <p className="mt-6 text-gray-800 font-medium">Sean Nguyen</p>
          <p className="text-sm text-gray-500">Donor</p>

          {/* Carousel Dots */}
          <div className="mt-8 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary-orange"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Right Section: Video Placeholder */}
        <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
          {/* Video Play Button */}
          <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
            <IconPlayerPlay size={32} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
