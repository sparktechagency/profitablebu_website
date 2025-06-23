import React from 'react';
import { Navbar } from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../shared/Footer';

export const Root = () => {
  return (
    <div className="bg-[#F5FFFF]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
