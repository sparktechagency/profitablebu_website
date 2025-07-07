import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Globe, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Home/logo.png';
import { menuItems } from '../dummy-data/DummyData';
import BusinessIcon from './nav-icons/BusinessIcon';
import MessageIcon from './nav-icons/MessageIcon';
import BelIcon from './nav-icons/BelIcon';
import CrownIcon from './nav-icons/CrownIcon';
import SettingIcon from './nav-icons/SettingIcon';
import NdaIcon from './nav-icons/NdaIcon';
import HelpIcon from './nav-icons/HelpIcon';
import InfoIcon from './nav-icons/InfoIcon';
import { message } from 'antd';
const countryFlags = {
  US: 'https://flagcdn.com/w20/us.png',
  GB: 'https://flagcdn.com/w20/gb.png',
  IN: 'https://flagcdn.com/w20/in.png',
  ES: 'https://flagcdn.com/w20/es.png',
  AE: 'https://flagcdn.com/w20/ae.png',
};

const countries = [
  { name: 'United States', code: 'US', flag: countryFlags.US },
  { name: 'United Kingdom', code: 'GB', flag: countryFlags.GB },
  { name: 'India', code: 'IN', flag: countryFlags.IN },
  { name: 'Spain', code: 'ES', flag: countryFlags.ES },
  { name: 'UAE', code: 'AE', flag: countryFlags.AE },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [scrolled, setScrolled] = useState(false);
  const token = localStorage.getItem('user');
  const user = token === null;

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = (key) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navItems = [
    { key: 'home', label: 'Home', path: '/' },
    {
      key: 'selling',
      label: 'Selling',
      submenu: menuItems.selling,
      state: menuItems.selling[0].state,
    },
    { key: 'buying', label: 'Buying', submenu: menuItems.buying },
    { key: 'valuation', label: 'Valuation', submenu: menuItems.valuation },
    {
      key: 'business',
      label: 'Business Formation',
      path: '/business-formation',
    },
    { key: 'resources', label: 'Resources', path: '/blog' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md  border-b border-gray-100'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <Link to="/">
              <div className="flex items-center space-x-4">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
              </div>
            </Link>
            <button className="w-fit hidden md:block px-4 py-2 bg-[#22C55E] text-white text-center rounded-lg font-medium">
              <Link
                to="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                List Your Business
              </Link>
            </button>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center py-4">
            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-8"
              ref={dropdownRef}
            >
              {navItems.map((item) => (
                <div key={item?.key} className="relative">
                  {item?.submenu ? (
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors group"
                      onMouseEnter={() => handleDropdownEnter(item?.key)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <span>{item?.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item?.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item?.path}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item?.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item?.submenu && activeDropdown === item?.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        onMouseEnter={() => handleDropdownEnter(item?.key)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-2">
                          {item?.submenu.map((subitem) => (
                            <Link
                              key={subitem?.name}
                              to={subitem?.path}
                              state={subitem?.state}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {subitem?.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCountryModalOpen(true)}
                className="flex items-center space-x-1 text-gray-600"
              >
                <Globe className="w-5 h-5" />{' '}
                <span className="text-[#28A745]">INT</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
              {/* CTA Buttons */}
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link to="/auth/login">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-[#0091FF] text-white rounded transition-colors">
                      <User className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center rounded-full space-x-2 p-2 bg-[#0091FF] text-white transition-colors"
                  >
                    {profileMenuOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <img src={Logo} alt="Logo" className="h-8" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <MobileNavItem
                      key={item?.key}
                      item={item}
                      onClose={() => setMobileMenuOpen(false)}
                    />
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  <Link
                    to="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Login</span>
                  </Link>
                  <Link
                    to="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full md:hidden bg-[#22C55E] text-white text-center py-3 rounded-lg font-medium"
                  >
                    List Your Business
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Profile Menu */}
      <AnimatePresence>
        {profileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setProfileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <button
                onClick={() => setProfileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                {/* Profile Header */}
                <div className="flex flex-col items-start space-y-2 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">Sardor</span>
                        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded">
                          Buyer
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">sardor@mail.com</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-4">
                  {[
                    {
                      icon: BusinessIcon,
                      label: 'Contacted Businesses',
                      path: '/myBusiness/details',
                    },
                    { icon: MessageIcon, label: 'Message', path: '/chat' },
                    {
                      icon: BelIcon,
                      label: 'Notification',
                      path: '/notification',
                    },
                    {
                      icon: CrownIcon,
                      label: 'Subscription',
                      path: '/subscription',
                    },
                    {
                      icon: SettingIcon,
                      label: 'Profile Settings',
                      path: '/profilePage',
                    },
                    { icon: NdaIcon, label: 'NDA', path: '/Seller' },
                    {
                      icon: HelpIcon,
                      label: 'Help & Support',
                      path: '/contact-us',
                    },
                    { icon: InfoIcon, label: 'FAQs', path: '/faqs' },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex cursor-pointer items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Sign Out */}
                <div className="border-t border-gray-200 mt-6 pt-4">
                  <div
                    onClick={() => {
                      setProfileMenuOpen(false);
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                      message.success('You have been logged out');
                    }}
                    className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <LogOut className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium">Sign Out</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Country Selection Modal */}
      <AnimatePresence>
        {countryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setCountryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Choose Your Region
                  </h2>
                  <button
                    onClick={() => setCountryModalOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountryModalOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        selectedCountry.code === country.code
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                      <span className="font-medium">{country.name}</span>
                      {selectedCountry.code === country.code && (
                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-24 lg:h-32" />
    </>
  );
};

const MobileNavItem = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item?.submenu) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium">{item?.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pl-4 py-2 space-y-1">
                {item?.submenu.map((subitem) => (
                  <Link
                    key={subitem?.name}
                    to={subitem?.path}
                    onClick={onClose}
                    className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {subitem?.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item?.path}
      onClick={onClose}
      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
    >
      {item?.label}
    </Link>
  );
};

export default Navbar;
