import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">App Name</h1>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <NavLink
                to="/contact-form"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                
              >
                Contact Form
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
