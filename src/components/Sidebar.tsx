import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      {/* <div className="p-4 text-2xl font-bold">App Name</div> */}
      <nav className="mt-4">
        <NavLink
          to="/"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          end
        >
          Contacts
        </NavLink>
        <NavLink
          to="/charts"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Charts
        </NavLink>
        <NavLink
          to="/map"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Map
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
