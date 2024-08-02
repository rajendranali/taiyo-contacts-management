import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavBar: React.FC = () => {
  return (
    <nav className="bg-gray-400 text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Contacts Forms </h1>
            </div>
            <div className="hidden sm:flex sm:items-center">
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
