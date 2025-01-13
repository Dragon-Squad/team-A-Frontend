import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import DonorDashboard from "./DonorDashboard";
import CharityDashboard from "./CharityDashboard";
import DonationRecord from "@/components/ui/Charity/Pages/RecentDonations";
import ProjectStatisticsPage from "@/components/ui/Charity/Pages/ProjectsStatisticsPage";
import Header from "@/components/ui/Charity/Components/Header";
import { showToast } from "@/components/ui/showToast";
import { getLocalStorageItem } from "@/utils/helper";
import DonorSidebar from "./Sidebar/DonorSidebar";
import CharitySidebar from "./Sidebar/CharitySidebar";
import ProjectsPage from "../../Pages/ProjectsPage";

const Dashboard: React.FC = () => {
  const [userRole, setUserRole] = useState<string | null>(
    getLocalStorageItem<string>("userRole"),
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!userRole) {
      const storedRole = getLocalStorageItem<string>("userRole");
      setUserRole(storedRole);
    }
  }, [userRole]);

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

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return userRole === "Donor" ? <DonorDashboard /> : <CharityDashboard />;
      case "Projects":
        return <ProjectsPage />;
      case "Donations Record":
        return <DonationRecord />;
      case "Projects Statistics":
        return <ProjectStatisticsPage />;
      default:
        return <h1 className="text-2xl font-bold">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {renderSidebar()}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className="ml-60 mt-14">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
