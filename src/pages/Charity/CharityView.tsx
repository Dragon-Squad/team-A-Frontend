import React, { useState, useEffect } from "react";
import Sidebar from "@/components/ui/Charity/Components/Sidebar";
import Header from "@/components/ui/Charity/Components/Header";
import Dashboard from "@/components/ui/Charity/Components/Dashboard/Dashboard";
import DonationRecord from "@/components/ui/Charity/Pages/RecentDonations";
import ProjectStatisticsPage from "@/components/ui/Charity/Pages/ProjectsStatisticsPage";
import ProjectDisplayPage from "@/components/ui/Charity/Pages/ProjectDisplayPage";

const DashboardView: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Ensure the default tab is always "Dashboard" when the component mounts
    setActiveTab("Dashboard");
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Projects":
        return <ProjectDisplayPage />;
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
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className=" ml-60 mt-14">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardView;
