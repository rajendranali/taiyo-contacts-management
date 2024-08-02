import React, { useState, ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header with logo and toggle button */}
      <div className="bg-white p-4 shadow-md flex justify-between items-center md:hidden">
        <div className="text-lg font-bold">Logo</div>
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar for both mobile and larger screens */}
        <div
          className={`fixed inset-y-0 left-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:flex md:flex-shrink-0`}
        >
          <Sidebar />
        </div>

        {/* Content */}
        <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Layout;
