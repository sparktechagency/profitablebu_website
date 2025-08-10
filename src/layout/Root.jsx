import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../shared/Footer';
import Navbar from '../shared/Navbar';

export const Root = () => {
  return (
    <div className="bg-[#F5FFFF] flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};
