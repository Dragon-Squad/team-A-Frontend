import React, { useState, useEffect } from "react";
import Sidebar from "@/components/ui/Charity/Components/Sidebar";
import Header from "@/components/ui/Charity/Components/Header";

const CharityView: React.FC = () => {
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
        return (
          <h1 className="text-2xl font-bold">Dashboard Content Goes Here</h1>
        );
      case "Projects":
        return (
          <h1 className="text-2xl font-bold">Projects Content Goes Here</h1>
        );
      case "Donations Record":
        return (
          <h1 className="text-2xl font-bold">
            Donations Record Content Goes Here
          </h1>
        );
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
        <div className="mt-16 p-6 mr-16 ml-60">{renderContent()}</div>
      </div>
    </div>
  );
};

export default CharityView;
