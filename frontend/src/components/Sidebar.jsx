// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({isSidebarOpen}) => {
  console.log(isSidebarOpen)
  return (
    <div
      className={`h-screen w-44 bg-gray-700 text-white fixed top-0 left-0 shadow-lg flex flex-col justify-between transition-transform duration-500 ease-in-out ${
        isSidebarOpen ? "translate-x-0 w-44" : "-translate-x-full w-44"
      }`}
    >
      <div className="p-8 text-2xl font-bold border-b border-gray-800">
        MyApp
      </div>
      <nav className="flex flex-1 flex-col p-5 gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Home
        </Link>
        <Link to="/about" className="hover:bg-gray-700 p-2 rounded">
          About
        </Link>
        <Link to="/blogs" className="hover:bg-gray-700 p-2 rounded">
          Blogs
        </Link>
        <Link to="/contact" className="hover:bg-gray-700 p-2 rounded">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
