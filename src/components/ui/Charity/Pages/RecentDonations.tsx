import React, { useState } from "react";
import {
  IconEdit,
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons-react";

interface Donation {
  id: string;
  name: string;
  project: string;
  date: string;
  paymentMethod: string;
  amount: string;
}

const RecentDonationsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const donationsPerPage = 13;

  const donations: Donation[] = [
    {
      id: "D14",
      name: "Maya",
      project: "A",
      date: "10 Dec, 2024",
      paymentMethod: "Credit Card",
      amount: "$300,000",
    },
    {
      id: "D15",
      name: "Shirin",
      project: "B",
      date: "10 Dec, 2024",
      paymentMethod: "PayPal",
      amount: "$250,000",
    },
    {
      id: "D16",
      name: "Mathew",
      project: "C",
      date: "11 Dec, 2024",
      paymentMethod: "Bank Transfer",
      amount: "$150,000",
    },
    {
      id: "D17",
      name: "Judi",
      project: "A",
      date: "11 Dec, 2024",
      paymentMethod: "Cash",
      amount: "$400,000",
    },
    {
      id: "D18",
      name: "Ahmad",
      project: "B",
      date: "12 Dec, 2024",
      paymentMethod: "Credit Card",
      amount: "$200,000",
    },
    {
      id: "D19",
      name: "Maya",
      project: "C",
      date: "12 Dec, 2024",
      paymentMethod: "PayPal",
      amount: "$100,000",
    },
    {
      id: "D20",
      name: "Shirin",
      project: "A",
      date: "13 Dec, 2024",
      paymentMethod: "Bank Transfer",
      amount: "$350,000",
    },
    {
      id: "D21",
      name: "Mathew",
      project: "B",
      date: "13 Dec, 2024",
      paymentMethod: "Credit Card",
      amount: "$180,000",
    },
    {
      id: "D22",
      name: "Judi",
      project: "C",
      date: "14 Dec, 2024",
      paymentMethod: "PayPal",
      amount: "$300,000",
    },
    {
      id: "D23",
      name: "Ahmad",
      project: "A",
      date: "14 Dec, 2024",
      paymentMethod: "Bank Transfer",
      amount: "$250,000",
    },
    {
      id: "D24",
      name: "Maya",
      project: "B",
      date: "15 Dec, 2024",
      paymentMethod: "Cash",
      amount: "$200,000",
    },
    {
      id: "D25",
      name: "Shirin",
      project: "C",
      date: "15 Dec, 2024",
      paymentMethod: "Credit Card",
      amount: "$400,000",
    },
    {
      id: "D26",
      name: "Mathew",
      project: "A",
      date: "16 Dec, 2024",
      paymentMethod: "PayPal",
      amount: "$250,000",
    },
    {
      id: "D27",
      name: "Judi",
      project: "B",
      date: "16 Dec, 2024",
      paymentMethod: "Bank Transfer",
      amount: "$150,000",
    },
    {
      id: "D28",
      name: "Ahmad",
      project: "C",
      date: "17 Dec, 2024",
      paymentMethod: "Cash",
      amount: "$300,000",
    },
    {
      id: "D29",
      name: "Maya",
      project: "A",
      date: "17 Dec, 2024",
      paymentMethod: "Credit Card",
      amount: "$180,000",
    },
    {
      id: "D30",
      name: "Shirin",
      project: "B",
      date: "18 Dec, 2024",
      paymentMethod: "PayPal",
      amount: "$200,000",
    },
  ];

  // Helper functions
  const cleanAmount = (amount: string) =>
    parseInt(amount.replace(/[^0-9.-]+/g, ""), 10);
  const parseDate = (date: string) => new Date(date).getTime();

  // Filter and sort logic
  let filteredDonations = donations.filter((donation) => {
    if (filter === "all") return true;
    if (filter === "date")
      return donation.date.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "amount")
      return cleanAmount(donation.amount) >= parseInt(searchQuery || "0", 10);
    if (filter === "donor")
      return donation.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "project")
      return donation.project.toLowerCase().includes(searchQuery.toLowerCase());
    return true;
  });

  if (sortConfig !== null) {
    filteredDonations = filteredDonations.sort((a, b) => {
      let aKey: any = a[sortConfig.key];
      let bKey: any = b[sortConfig.key];

      if (sortConfig.key === "amount") {
        aKey = cleanAmount(a.amount);
        bKey = cleanAmount(b.amount);
      } else if (sortConfig.key === "date") {
        aKey = parseDate(a.date);
        bKey = parseDate(b.date);
      }

      if (aKey < bKey) return sortConfig.direction === "asc" ? -1 : 1;
      if (aKey > bKey) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Pagination logic
  const indexOfLastDonation = currentPage * donationsPerPage;
  const indexOfFirstDonation = indexOfLastDonation - donationsPerPage;
  const currentDonations = filteredDonations.slice(
    indexOfFirstDonation,
    indexOfLastDonation,
  );

  const totalPages = Math.ceil(filteredDonations.length / donationsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Recent Donations</h3>
        <div className="flex space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
          >
            <option value="all">All</option>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="donor">Donor</option>
            <option value="project">Project</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${filter === "all" ? "donations" : filter}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th
                className={`py-2 cursor-pointer ${sortConfig?.key === "name" ? "text-orange-500" : ""}`}
                onClick={() => handleSort("name")}
              >
                Name - ID
                {sortConfig?.key === "name" &&
                  (sortConfig.direction === "asc" ? (
                    <IconArrowUp size={16} />
                  ) : (
                    <IconArrowDown size={16} />
                  ))}
              </th>
              <th
                className={`py-2 cursor-pointer ${sortConfig?.key === "project" ? "text-orange-500" : ""}`}
                onClick={() => handleSort("project")}
              >
                Project
                {sortConfig?.key === "project" &&
                  (sortConfig.direction === "asc" ? (
                    <IconArrowUp size={16} />
                  ) : (
                    <IconArrowDown size={16} />
                  ))}
              </th>
              <th
                className={`py-2 cursor-pointer ${sortConfig?.key === "date" ? "text-orange-500" : ""}`}
                onClick={() => handleSort("date")}
              >
                Date
                {sortConfig?.key === "date" &&
                  (sortConfig.direction === "asc" ? (
                    <IconArrowUp size={16} />
                  ) : (
                    <IconArrowDown size={16} />
                  ))}
              </th>
              <th
                className={`py-2 cursor-pointer ${sortConfig?.key === "amount" ? "text-orange-500" : ""}`}
                onClick={() => handleSort("amount")}
              >
                Amount
                {sortConfig?.key === "amount" &&
                  (sortConfig.direction === "asc" ? (
                    <IconArrowUp size={16} />
                  ) : (
                    <IconArrowDown size={16} />
                  ))}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDonations.map((donation) => (
              <tr key={donation.id} className="text-sm text-gray-700 border-b">
                <td className="py-3">
                  {donation.name} - {donation.id}
                </td>
                <td className="py-3">{donation.project}</td>
                <td className="py-3">{donation.date}</td>
                <td className="py-3">{donation.amount}</td>
                <td className="py-3 text-right space-x-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-1">
          <button
            onClick={handlePreviousPage}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? "text-gray-300"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            disabled={currentPage === 1}
          >
            <IconChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-300"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            disabled={currentPage === totalPages}
          >
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentDonationsTable;
