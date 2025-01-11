import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const HistoricalData: React.FC = () => {
  const [lineChartData, setLineChartData] = useState<any>(null);

  useEffect(() => {
    // Simulate API call for fetching historical data
    async function fetchHistoricalData() {
      // Replace with actual API endpoint
      const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Donation Growth ($)",
            data: [1000, 2500, 5000, 7000, 12000, 15000],
            borderColor: "rgba(75, 192, 192, 0.8)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            tension: 0.3,
          },
        ],
      };

      setLineChartData(data);
    }

    fetchHistoricalData();
  }, []);

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Donation Growth Over Time
      </h3>
      {lineChartData && <Line data={lineChartData} />}
    </div>
  );
};

export default HistoricalData;
