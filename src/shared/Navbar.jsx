import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer } from "antd";
import Logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMenuClick = e => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const itemss = [
    {
      label: 'Clicking me will not close the menu.',
      key: '1',
    },
    {
      label: 'Clicking me will not close the menu also.',
      key: '2',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '3',
    },
  ];

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const dropdownItemsCompany = [
    {
      label: (
        <Link to="/company/about-us" rel="noopener noreferrer">
          About Us
        </Link>
      ),
      key: "about-us",
    },
    {
      label: (
        <Link to="/company/tech-pertners" rel="noopener noreferrer">
          Tech Partners
        </Link>
      ),
      key: "techPartners",
    },
  ];

  const dropdownItemsServices = [
    {
      label: (
        <Link to="/services/Structure-Cabling" rel="noopener noreferrer">
          Structure Cabling (Copper And Fiber)
        </Link>
      ),
      key: "structured",
    },
    {
      label: (
        <Link to="/services/Break-FixServices" rel="noopener noreferrer">
          Break/Fix Services
        </Link>
      ),
      key: "BreakFixServices",
    },
  ];

  const dropdownItemsProfile = [
    {
      label: (
        <Link to="/profilePage" rel="noopener noreferrer">
          Profile
        </Link>
      ),
      key: "profilepage",
    },
    {
      label: (
        <Link to="/profilePage/ongoing-tickets" rel="noopener noreferrer">
          Ongoing Tickets
        </Link>
      ),
      key: "ongoing",
    },
  ];

  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "company",
      label: (
        <Dropdown menu={{ items: dropdownItemsCompany }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Company
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
    {
      key: "services",
      label: (
        <Dropdown menu={{ items: dropdownItemsServices }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Services
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
    {
      key: "contactUs",
      label: <Link to="/contactUs">Contact Us</Link>,
    },
    {
      key: "blog",
      label: <Link to="/blog">Blog</Link>,
    },
    {
      key: "submitTicket",
      label: <Link to="/submit-a-ticket">Submit A Ticket</Link>,
    },

  ];

  return (
    <div className="container m-auto">
      <div className="flex justify-between">
        <img className="" src={Logo} alt="Logo" />
        <button className="bg-[#22C55E] px-4 py-2 rounded text-white">List your Business</button>
      </div>
      {/* Desktop Navbar */}
      <nav className="flex items-center  justify-between gap-28 py-3">

        <ul className="hidden md:flex lg:space-x-16 space-x-6">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </button>
        <div className="flex gap-3 items-center">
          <div>
            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick,
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  INT

                </Space>
              </a>
            </Dropdown>
          </div>
          <button className="bg-[#0091FF] px-5 py-2 text-white rounded">Login</button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer title="" placement="right" onClose={onClose} open={drawerOpen}>
        <ul className="flex flex-col space-y-4">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};
