import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../shared/Footer";
import Navbar from "../shared/Navbar";

export const Root = () => {
  const location = useLocation();

  // Footer hide হবে যদি path '/chat' বা '/chat/:id' হয়
  const hideFooter =
    location.pathname.startsWith("/chat");

  return (
    <div className="bg-[#F5FFFF] flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer conditionally render */}
      {!hideFooter && <Footer />}
    </div>
  );
};
