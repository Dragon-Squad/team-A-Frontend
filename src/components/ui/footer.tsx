import React from "react";
import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Logo from "../logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 px-6">
        {/* Left Section - About Charitan */}
        <div>
          <Logo type="logo4" width={130} height="auto" />
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Charitan Foundation is a modern donation platform designed to
            connect donors with meaningful causes. It strengthens communities
            through impactful giving.
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> (69) 696-6969
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 69 Huynh Tan Phat, Ho Chi Minh, 700000
          </p>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/causes" className="hover:text-gray-300">
                Causes
              </Link>
            </li>
            <li>
              <Link to="/volunteers" className="hover:text-gray-300">
                Volunteers
              </Link>
            </li>
            <li>
              <Link to="/partners" className="hover:text-gray-300">
                Partners
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-gray-300">
                F.A.Q
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-gray-300">
                News
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-gray-300">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-300">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex justify-center space-x-6">
        <Link to="#" className="hover:text-gray-300">
          <IconBrandFacebook size={24} />
        </Link>
        <Link to="#" className="hover:text-gray-300">
          <IconBrandTwitter size={24} />
        </Link>
        <Link to="#" className="hover:text-gray-300">
          <IconBrandInstagram size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
