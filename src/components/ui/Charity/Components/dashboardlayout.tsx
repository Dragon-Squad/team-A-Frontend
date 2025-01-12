import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";

export function DashboardLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <AppSidebar />

      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
