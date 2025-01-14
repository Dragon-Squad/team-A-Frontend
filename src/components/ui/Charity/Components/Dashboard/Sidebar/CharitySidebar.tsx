import React from "react";
import { Link } from "react-router-dom";
import {
  IconLayoutDashboard,
  IconFolder,
  IconChartBar,
  IconLogout,
  IconDotsVertical,
} from "@tabler/icons-react";
import { useFetchUser } from "@/hooks/use-user";
import useLogout from "@/hooks/use-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CharitySidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { user, loading, error } = useFetchUser();
  const { logout } = useLogout();

  const navLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <IconLayoutDashboard size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <IconFolder size={20} />,
    },
    {
      name: "Projects Statistics",
      path: "/statistics_charity",
      icon: <IconChartBar size={20} />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-700 to-orange-900 w-64 h-screen flex flex-col text-white shadow-lg">
      {/* Logo */}
      <div className="p-6">
        <Link to="/">
          <div className="text-white text-2xl font-bold">CHARITAN</div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex-grow">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>
                <button
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === link.name
                      ? "bg-orange-500 text-white shadow-lg rounded-r-full"
                      : "hover:bg-orange-800"
                  } transition`}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button
          className="flex items-center w-full px-4 py-3 text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition rounded-lg"
          onClick={logout}
        >
          <IconLogout size={20} />
          <span className="ml-3">Logout</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="border-t border-orange-600 mt-auto p-4 flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="ml-3">
          <p className="text-sm font-medium">
            {loading
              ? "Loading..."
              : error
                ? "Error"
                : user?.username || "Guest"}
          </p>
          <Link to="/profile" className="text-xs text-gray-300">
            View profile
          </Link>
        </div>
        <button className="ml-auto">
          <IconDotsVertical size={20} className="text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default CharitySidebar;
