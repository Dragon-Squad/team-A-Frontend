import React from "react";

const RecentDonationsTable: React.FC = () => {
  const donations = [
    {
      name: "Phat - D06",
      project: "A",
      date: "9 Dec 2024",
      method: "Credit Card",
      amount: "$100,000",
    },
    {
      name: "Dung - D07",
      project: "B",
      date: "9 Dec 2024",
      method: "Credit Card",
      amount: "$200,000",
    },
    {
      name: "Cuong - D08",
      project: "C",
      date: "9 Dec 2024",
      method: "Credit Card",
      amount: "$50,000",
    },
  ];

  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-black ">
      <h3 className="text-lg font-bold mb-4">Recent Donations</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th>Name</th>
            <th>Project</th>
            <th>Date</th>
            <th>Payment Method</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index} className="border-b">
              <td>{donation.name}</td>
              <td>{donation.project}</td>
              <td>{donation.date}</td>
              <td>{donation.method}</td>
              <td>{donation.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentDonationsTable;
