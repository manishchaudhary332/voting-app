import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Logo */}
        <h1 className="font-bold text-xl">🗳️ Voting App</h1>

        {/* Links */}
        <div className="flex space-x-2">
          <Link
            className="px-3 py-1 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition"
            to="/"
          >
            Login
          </Link>
          <Link
            className="px-3 py-1 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition"
            to="/voting"
          >
            Voting
          </Link>
          <Link
            className="px-3 py-1 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition"
            to="/results"
          >
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
