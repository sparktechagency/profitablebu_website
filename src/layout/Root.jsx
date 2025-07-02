import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../shared/Footer';
import Navbar from '../shared/Navbar';

export const Root = () => {
  return (
    <div className="bg-[#F5FFFF]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
