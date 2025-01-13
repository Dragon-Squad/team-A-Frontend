import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import DonorSidebar from "../Components/Dashboard/Sidebar/DonorSidebar";
import CharitySidebar from "../Components/Dashboard/Sidebar/CharitySidebar";
import Header from "../Components/Header";
import { getLocalStorageItem } from "@/utils/helper";
import { showToast } from "../../showToast";
import DisplayProject from "../Components/Dashboard/DisplayProject";

const ProjectsPageDashboard: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleFromUrl = queryParams.get("role");

  const [userRole, setUserRole] = useState<string | null>(
    roleFromUrl || getLocalStorageItem<string>("userRole"),
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Projects");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!userRole) {
      const storedRole = getLocalStorageItem<string>("userRole");
      setUserRole(storedRole);
    }
  }, [userRole, location]);

  if (!userRole) {
    showToast(`Please login to access this page`, "destructive");
    return <Navigate to="/signin" />;
  }

  const renderSidebar = () => {
    switch (userRole) {
      case "Donor":
        return (
          <DonorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        );
      case "Charity":
        return (
          <CharitySidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`z-40 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {renderSidebar()}
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-screen w-full bg-gray-100 overflow-auto">
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className="">
          <DisplayProject></DisplayProject>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageDashboard;
