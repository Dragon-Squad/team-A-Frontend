import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "../logo";
import { Transition } from "@headlessui/react";
import { IconMenu2, IconX, IconSearch } from "@tabler/icons-react";
import { useFetchUser } from "@/hooks/use-user";

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Retrieve userId from localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    console.log("Retrieved userId:", storedUserId); // Debugging log
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const { user, loading, error } = useFetchUser(userId || "");

  return (
    <div className="w-full bg-black fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-10 py-2">
        {/* Left Section: Logo and Tabs */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <Logo type="logo4" width={110} height="auto" />
          </Link>
          <ul className="hidden md:flex space-x-4 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-primary-orange border-b-2 border-primary-orange pb-1"
                      : "text-gray-300"
                  } hover:text-primary-orange transition`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="hidden md:flex items-center bg-transparent px-4 py-1">
          <IconSearch size={24} className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none text-white placeholder-white bg-transparent w-32 md:w-48"
          />
        </div>

        {/* Right Section: User Info or Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {userId ? (
            <>
              <span className="text-white">
                {loading
                  ? "Loading..."
                  : error
                    ? "Error loading user"
                    : `Hello, ${user?.username || "User"}`}
              </span>
              <Button className="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1">
                <Link to={`/dashboard/${userId}`}>Dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <Button className="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1">
                <Link to="/signin">SIGN IN</Link>
              </Button>
              <Button className="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1">
                <Link to="/signup">SIGN UP</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <Transition
          show={isOpen}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden bg-black text-white">
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? "text-primary-orange"
                        : "text-gray-300"
                    } hover:text-primary-orange transition`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="flex flex-col space-y-2">
                {userId ? (
                  <>
                    <span className="text-white text-center">Hello, User!</span>
                    <Button className="bg-primary-orange text-white hover:bg-orange-600">
                      <Link to={`/dashboard/${userId}`}>Dashboard</Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="bg-primary-orange text-white hover:bg-orange-600">
                      <Link to="/signin">SIGN IN</Link>
                    </Button>
                    <Button className="bg-primary-orange text-white hover:bg-orange-600">
                      <Link to="/signup">SIGN UP</Link>
                    </Button>
                  </>
                )}
              </div>
              <div className="flex items-center px-4 py-1">
                <IconSearch size={24} className="text-white mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:outline-none text-white placeholder-white bg-transparent w-full"
                />
              </div>
            </ul>
          </div>
        </Transition>
      )}
    </div>
  );
};

export default NavigationBar;
