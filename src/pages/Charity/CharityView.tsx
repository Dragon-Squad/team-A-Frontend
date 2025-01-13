import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "@/components/ui/Charity/Components/Dashboard/Dashboard";
import { showToast } from "@/components/ui/showToast";
import { getLocalStorageItem } from "@/utils/helper";

const DashboardView: React.FC = () => {
  const [userRole, setUserRole] = useState<string | null>(
    getLocalStorageItem<string>("userRole"),
  );

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

  return <Dashboard />;
};

export default DashboardView;
