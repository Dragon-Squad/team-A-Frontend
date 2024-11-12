import React, { useState } from "react";
import { IconHeart, IconMenu3, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button } from "./button";

interface LinkType {
  name: string;
  link: string;
}

const NavigationBar: React.FC = () => {
  const Links: LinkType[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "News", link: "/" },
    { name: "Donate", link: "/" },
    { name: "Volunteer", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-primary-midnight-blue fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-primary-midnight-blue">
        {/* Logo */}
        <div className="flex text-3xl cursor-pointer items-center gap-2">
          <IconHeart className="w-11 h-11 text-white" />
          <span className="font-semibold text-white">Chartian</span>
        </div>
        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <IconX /> : <IconMenu3 />}
        </div>
        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:static absolute left-0 w-full transition-all duration-500 ease-in bg-primary-midnight-blue ${
            isOpen ? "top-12" : "hidden"
          } md:flex-row md:space-x-8 md:z-auto z-[-1] small-mobile:pl-9 small-mobile:pb-10 md:justify-end`}
        >
          {Links.map((link, index) => (
            <li className="font-semibold my-7 md:my-0 md:ml-8" key={index}>
              <a href={link.link} className="text-white">
                {link.name}
              </a>
            </li>
          ))}
          <Button className="bg-white text-primary-midnight-blue py-1 px-3 md:ml-8 hover:text-white hover:bg-primary-steel-blue">
            <Link to="/register">Sign up / Login</Link>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
