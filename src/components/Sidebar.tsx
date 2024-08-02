import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAddressBook, FaChartLine, FaMapMarkedAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-56 h-screen bg-gray-800 text-gray-200 flex flex-col">
      {/* <div className="p-6 text-2xl font-bold text-center bg-gray-900">
        MyApp
      </div> */}
      <nav className="mt-4 flex-grow">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors ${
              isActive ? 'bg-gray-700 text-white' : ''
            }`
          }
          end
        >
          <FaAddressBook className="mr-3 text-xl" />
          Contacts
        </NavLink>
        <NavLink
          to="/charts"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors ${
              isActive ? 'bg-gray-700 text-white' : ''
            }`
          }
        >
          <FaChartLine className="mr-3 text-xl" />
          Charts
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 text-lg text-gray-200 hover:bg-gray-700 hover:text-white transition-colors ${
              isActive ? 'bg-gray-700 text-white' : ''
            }`
          }
        >
          <FaMapMarkedAlt className="mr-3 text-xl" />
          Map
        </NavLink>
      </nav>
      <div className="p-4 text-center text-gray-400">
        © 2024 MyApp
      </div>
    </div>
  );
};

export default Sidebar;
