import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Home/logo2.png';
import backImg from '../assets/Home/footer.png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6';

// Dynamic footer configuration
const footerConfig = {
  company: {
    name: 'P B S F',
    tagline: 'From Listings to Legacy',
    logo: Logo,
    backgroundImage: backImg,
    copyright: '© 2023 PBFS.com',
    description:
      'Your trusted partner in business buying and selling solutions.',
  },

  socialLinks: [
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: 'https://facebook.com/pbfs',
      color: '#1877F2',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/pbfs',
      color: '#1DA1F2',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/pbfs',
      color: '#FF0000',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://linkedin.com/company/pbfs',
      color: '#0077B5',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/pbfs',
      color: '#E4405F',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://tiktok.com/@pbfs',
      color: '#000000',
    },
  ],

  sections: [
    {
      title: 'Our Buyer Services',
      links: [
        { text: 'Buy a Business', to: '/buy-business' },
        { text: 'Buy a Franchise', to: '/buy-franchise' },
        { text: 'Buy a Business Asset', to: '/buy-asset' },
        { text: 'Find a Business Idea', to: '/business-ideas' },
        { text: 'Business Valuation', to: '/business-valuation' },
        { text: 'Business Formation', to: '/business-formation' },
      ],
    },
    {
      title: 'Our Seller Services',
      links: [
        { text: 'Businesses for Sale', to: '/sell-business' },
        { text: 'Business Assets for Sale', to: '/sell-assets' },
        { text: 'Business Ideas for Investors', to: '/investor-ideas' },
        { text: 'Franchises for Sale', to: '/sell-franchise' },
      ],
    },
    {
      title: 'FAQs',
      links: [
        { text: 'Seller FAQs', to: '/faqsSeller' },
        { text: 'Buyer FAQs', to: '/faqs' },
        { text: 'Broker FAQs', to: '/FaqBrokers' },
        { text: 'Investor FAQs', to: '/FaqInvestors' },
        { text: 'Business Idea Lister FAQs', to: '/FaqBusiness' },
        { text: 'Business Asset Lister FAQs', to: '/FaqAsset' },
        { text: 'Franchisor FAQs', to: '/FaqFranchise' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'About Us', to: '/about-us' },
        { text: 'Contact Us', to: '/contact-us' },
        { text: 'Privacy Policy', to: '/privacy-policy' },
        { text: 'Terms of Condition', to: '/terms-and-conditions' },
        {
          text: 'Refund and Cancellation Policy',
          to: '/refund-and-cancellation-policy',
        },
        { text: 'Support', to: '/support' },
        { text: 'Blog', to: '/blog' },
      ],
    },
  ],
};

// Social Media Link Component
const SocialLink = ({ social, className = '' }) => {
  const Icon = social.icon;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(social.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#3758F9] flex justify-center items-center p-2 rounded-full hover:bg-[#2d47e8] hover:scale-110 transition-all duration-300 cursor-pointer group ${className}`}
      aria-label={`Visit our ${social.name} page`}
      title={social.name}
    >
      <Icon className="text-sm sm:text-base group-hover:text-white transition-colors" />
    </button>
  );
};

// Footer Section Component
const FooterSection = ({ section }) => {
  const navigate = useNavigate();

  const handleNavigation = (to, e) => {
    e.preventDefault();
    navigate(to);
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-6 sm:mt-0">
      <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 lg:mb-8 text-[#F59E0B] border-b border-[#F59E0B]/20 pb-2">
        {section.title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              onClick={(e) => handleNavigation(link.to, e)}
              className="text-sm sm:text-base lg:text-lg hover:text-[#F59E0B] transition-all duration-300 hover:translate-x-1 inline-block relative group"
            >
              {link.text}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Footer Component
export const Footer = () => {
  const { company, socialLinks, sections } = footerConfig;

  return (
    <footer
      className="bg-[#0A0D53] text-white pt-6 sm:pt-8 md:pt-10 bg-cover bg-center min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] relative"
      style={{ backgroundImage: `url(${company.backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0A0D53]/80"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-10 relative z-10">
        {/* Grid layout with responsive breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info and Social Media Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="w-10 sm:w-12 md:w-[50px] flex-shrink-0 rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#F59E0B]">
                  {company.name}
                </h1>
                <p className="text-[#F59E0B] text-sm sm:text-base">
                  {company.tagline}
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              {company.description}
            </p>

            <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-400">
              {company.copyright}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.slice(0, 4).map((social, index) => (
                <SocialLink key={index} social={social} />
              ))}
            </div>

            {/* Additional social links for larger screens */}
            <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3 mt-3">
              {socialLinks.slice(4).map((social, index) => (
                <SocialLink key={index + 4} social={social} />
              ))}
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {sections.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              All rights reserved. {company.name} - {company.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-[#F59E0B] transition-colors"
              >
                Sitemap
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-[#F59E0B] transition-colors"
              >
                Accessibility
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-[#F59E0B] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
