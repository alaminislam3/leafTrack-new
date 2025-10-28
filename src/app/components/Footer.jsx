import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-100 to-lime-200 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 ">🍃 LeafTrack</h2>
          <p className="mt-2 text-sm">
            Your smart assistant for tracking and caring for your indoor and outdoor plants.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:support@leaftrack.com" className="">support@leaftrack.com</a></p>
          <p>Phone: +880 1234-567890</p>
          <p>Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            {/* <a href="mailto:support@leaftrack.com" className="hover:text-green-700">
              <FaEnvelope />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t border-green-200 text-sm">
        © {new Date().getFullYear()} LeafTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;