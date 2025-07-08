import { Collapse, ConfigProvider } from 'antd';
import React from 'react';
import {
  FaArrowDown,
  FaArrowUp,
  FaMinusCircle,
  FaPlusCircle,
} from 'react-icons/fa';
import img from '../../assets/Home/cover.png';
import Header from '../AboutUs/Header';
const FaqAsset = () => {
  const items = [
    {
      key: '1',
      label: 'What is included in your Break/Fix services?',
      children: (
        <p>
          We Provide On-Demand Troubleshooting And Repair Services For Hardware
          Failures, Network Outages, And Software Issues. Our Services Include
          Diagnostics, Replacement Of Faulty Components, Configuration
          Adjustments, And Deploying New Solutions If Required. We Ensure
          Minimal Downtime And Tailored Fixes Based On Your Business Needs.
        </p>
      ),
    },
    {
      key: '2',
      label: 'Do you offer remote IT support?',
      children: (
        <p>
          Yes, We Provide Comprehensive Remote IT Support. Our Team Can
          Troubleshoot And Resolve Many Technical Issues Remotely, Including
          Software Configuration, Network Performance Optimization, And Basic
          Troubleshooting. If An On-Site Visit Is Required, Our Team Will
          Schedule It Promptly.
        </p>
      ),
    },
    {
      key: '3',
      label: 'Do you offer remote IT support?',
      children: (
        <p>
          Yes, We Provide Comprehensive Remote IT Support. Our Team Can
          Troubleshoot And Resolve Many Technical Issues Remotely, Including
          Software Configuration, Network Performance Optimization, And Basic
          Troubleshooting. If An On-Site Visit Is Required, Our Team Will
          Schedule It Promptly.
        </p>
      ),
    },
    {
      key: '4',
      label: 'Do you offer remote IT support?',
      children: (
        <p>
          Yes, We Provide Comprehensive Remote IT Support. Our Team Can
          Troubleshoot And Resolve Many Technical Issues Remotely, Including
          Software Configuration, Network Performance Optimization, And Basic
          Troubleshooting. If An On-Site Visit Is Required, Our Team Will
          Schedule It Promptly.
        </p>
      ),
    },
    {
      key: '5',
      label: 'Do you offer remote IT support?',
      children: (
        <p>
          Yes, We Provide Comprehensive Remote IT Support. Our Team Can
          Troubleshoot And Resolve Many Technical Issues Remotely, Including
          Software Configuration, Network Performance Optimization, And Basic
          Troubleshooting. If An On-Site Visit Is Required, Our Team Will
          Schedule It Promptly.
        </p>
      ),
    },
    {
      key: '6',
      label: 'How soon can you deliver network migration services?',
      children: (
        <p>
          Our Network Migration Services Are Planned And Delivered Based On The
          Complexity Of Your Project. For Small-Scale Migrations, We Aim To
          Complete Within 1-2 Weeks. Large-Scale Migrations May Require 3-6
          Weeks, Depending On The Network Size, Data Volume, And Customization
          Required.
        </p>
      ),
    },
  ];
  return (
    <div>
      <div></div>
        <Header
              title="Frequently Asked Questions"
              description="Answers to common questions about buying, selling, and using our platform."
            />

      {/* <div
        className="relative bg-cover bg-center py-36 text-white"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-25"></div>

        <div className="relative z-10 h-full container m-auto">
          <h1 className='text-3xl font-semibold pb-3'>FAQ</h1>
          <p className='flex items-center gap-2'>Home <IoIosArrowForward /> Faq</p>
        </div>
      </div> */}
      <div className=" container m-auto py-11 ">
        <h1 className="text-3xl mb-4 font-bold ">
          {' '}
          FAQ for <span className="text-[#22C55E] ">Business Asset Lister</span>
        </h1>
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                fontHeight: 32,
                fontSize: 20,
                fontHeightLG: 20,
                fontSizeIcon: 20,
              },
            },
          }}
        >
          <Collapse
            defaultActiveKey={['1']}
            items={items}
            style={{ border: 'none' }}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaMinusCircle style={{ fontSize: '16px', color: 'black' }} />
              ) : (
                <FaPlusCircle style={{ fontSize: '16px', color: 'black' }} />
              )
            }
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default FaqAsset;
