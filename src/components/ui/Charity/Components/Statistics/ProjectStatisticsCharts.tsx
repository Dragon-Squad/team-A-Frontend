import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

const ProjectStatisticsCharts: React.FC = () => {
  const [barChartData, setBarChartData] = useState<any>(null);
  const [pieChartData, setPieChartData] = useState<any>(null);

  useEffect(() => {
    // Simulate API calls for fetching data
    async function fetchData() {
      // Replace with actual API calls
      const barData = {
        labels: ["Project A", "Project B", "Project C", "Project D"],
        datasets: [
          {
            label: "Funding Progress ($)",
            data: [20000, 35000, 15000, 30000],
            backgroundColor: "rgba(255, 159, 64, 0.8)",
          },
        ],
      };

      const pieData = {
        labels: ["Education", "Health", "Environment", "Food Security"],
        datasets: [
          {
            label: "Donation Categories",
            data: [40, 25, 20, 15],
            backgroundColor: [
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 99, 132, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(255, 205, 86, 0.8)",
            ],
          },
        ],
      };

      setBarChartData(barData);
      setPieChartData(pieData);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {barChartData && (
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Funding Progress
          </h3>
          <Bar data={barChartData} />
        </div>
      )}
      {pieChartData && (
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Donation Categories
          </h3>
          <Pie data={pieChartData} />
        </div>
      )}
    </div>
  );
};

export default ProjectStatisticsCharts;
