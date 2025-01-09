import React, { useState } from "react";
import { IconBell, IconSearch } from "@tabler/icons-react";
import Logo from "@/components/logo";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="flex items-center">
        {/* Black Section (Logo) */}
        <div className="bg-black text-white flex flex-col justify-center items-center w-64 h-16">
          <div className="flex items-center">
            <Logo type="logo4" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold">CHARITAN</span>
          </div>
        </div>

        {/* White Section */}
        <div className="flex-1 flex justify-end items-center space-x-6 px-6">
          {/* Notification Bell */}
          <button className="relative text-gray-700 hover:text-black focus:outline-none">
            <IconBell size={24} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-80">
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full text-sm placeholder-gray-500 text-gray-800 focus:outline-none"
            />
            <IconSearch size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
