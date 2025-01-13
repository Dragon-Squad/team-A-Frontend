import React from "react";
import { IconEdit, IconTrophy, IconTarget } from "@tabler/icons-react";

interface SingleProjectCardProps {
  name: string;
  targetAchieved: number; // Numeric value for calculation
  target: number; // Numeric value for calculation
  date: string;
}

const SingleProjectCard: React.FC<SingleProjectCardProps> = ({
  name,
  targetAchieved,
  target,
  date,
}) => {
  // Calculate progress percentage
  const progress = Math.min((targetAchieved / target) * 100, 100); // Ensure progress doesn't exceed 100%

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
          <IconEdit size={16} className="text-gray-600" />
        </button>
      </div>
      <p className="text-sm text-gray-500 italic">{date}</p>

      {/* Content */}
      <div className="border-t border-gray-200 mt-4 pt-4">
        {/* Target Achieved */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <IconTrophy size={16} className="text-orange-500" />
            <p className="text-sm text-gray-500">Target Achieved</p>
          </div>
          <p className="text-lg font-bold text-gray-800">
            ${targetAchieved.toLocaleString()}
          </p>
        </div>

        {/* Target */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <IconTarget size={16} className="text-gray-600" />
            <p className="text-sm text-gray-500">Target</p>
          </div>
          <p className="text-lg font-bold text-gray-800">
            ${target.toLocaleString()}
          </p>
        </div>

        {/* Progress (Circular Gauge) */}
        <div className="relative flex flex-col items-center justify-center mt-4">
          {/* Outer Circle */}
          <div className="relative w-24 h-24">
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="#E5E7EB"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="#FB923C"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="251.2" // Circumference of the circle
                strokeDashoffset={`${251.2 - (251.2 * progress) / 100}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold text-orange-500">
                {Math.round(progress)}
                <span className="text-sm">%</span>
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Target vs Achievement
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
