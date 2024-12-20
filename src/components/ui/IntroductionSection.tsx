import React from "react";
import {
  IconHeart,
  IconDonate,
  IconProject,
  IconBell,
} from "@tabler/icons-react"; // Replace with your preferred icons

const IntroductionSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/volunteers.jpg" // Replace with your image path
            alt="Volunteers"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Text and Steps */}
        <div className="w-full md:w-1/2">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Transforming Good Intentions into Good Actions
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Charitan is about bridging the gap between wanting to make a
            difference and taking meaningful steps to create change. It’s about
            turning empathy and compassion into impactful efforts that benefit
            communities and causes in need. Together, we can transform kind
            thoughts into powerful actions that shape a better world.
          </p>

          {/* Steps */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="bg-primary-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                1
              </div>
              <p className="ml-4 text-gray-700">
                <strong>Choose your favorite Project</strong>
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="bg-primary-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                2
              </div>
              <p className="ml-4 text-gray-700">
                <strong>Donate the amount you like</strong>
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="bg-primary-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                3
              </div>
              <p className="ml-4 text-gray-700">
                <strong>Register on our website</strong>
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex items-center">
              <div className="bg-primary-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                4
              </div>
              <p className="ml-4 text-gray-700">
                <strong>Stay tuned about the Project</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
