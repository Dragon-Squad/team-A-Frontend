import React from "react";
import Logo from "@/components/logo";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="flex items-center">
        <div className="bg-black text-white flex flex-col justify-center items-center w-64 h-16">
          <div className="flex items-center">
            <a className="flex flex-row" href="/">
              <Logo type="logo4" width={40} height={40} />
              <span className="ml-2 text-2xl font-bold">CHARITAN</span>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-6 px-6"></div>
      </div>
    </header>
  );
};

export default Header;
