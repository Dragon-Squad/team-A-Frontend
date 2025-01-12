import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import DonorDashboard from "./DonorDashboard";
import CharityDashboard from "./CharityDashboard";

const DashboardView: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleFromUrl = queryParams.get("role");

  const [userRole, setUserRole] = useState<string | null>(roleFromUrl);

  useEffect(() => {
    if (!userRole) {
      const storedRole = localStorage.getItem("userRole");
      setUserRole(storedRole);
    }
  }, [userRole]);

  if (!userRole) {
    return <Navigate to="/signin" />;
  }

  const renderDashboard = () => {
    switch (userRole) {
      case "Donor":
        return <DonorDashboard />;
      case "Charity":
        return <CharityDashboard />;
      default:
        return <h1 className="text-2xl font-bold">Access Denied</h1>;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      {renderDashboard()}
    </div>
  );
};

export default DashboardView;
