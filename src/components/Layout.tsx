import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavbar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <TopNavBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
