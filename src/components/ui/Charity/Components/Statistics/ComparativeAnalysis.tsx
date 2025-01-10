import React, { useEffect, useState } from "react";

const ComparativeAnalysis: React.FC = () => {
  const [comparisonData, setComparisonData] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API call for fetching comparative data
    async function fetchComparativeData() {
      // Replace with actual API endpoint
      const data = [
        { name: "Project A", value: "$20,000" },
        { name: "Project B", value: "$35,000" },
        { name: "Project C", value: "$15,000" },
        { name: "Project D", value: "$30,000" },
      ];
      setComparisonData(data);
    }

    fetchComparativeData();
  }, []);

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Comparative Analysis
      </h3>
      <ul className="space-y-4">
        {comparisonData.map((project, index) => (
          <li
            key={index}
            className="flex justify-between items-center border border-gray-200 rounded-lg p-4"
          >
            <p className="text-sm font-medium text-gray-800">{project.name}</p>
            <p className="text-sm font-bold text-orange-500">{project.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparativeAnalysis;
