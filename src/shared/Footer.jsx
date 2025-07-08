import React from "react";
import Logo from "../assets/Home/logo2.png";
import backImg from '../assets/Home/footer.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="bg-[#0A0D53] text-white pt-10 bg-cover bg-center lg:h-[50vh]"
      style={{ backgroundImage: `url(${backImg})`}}
    >
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-6 pb-10">

        <div>
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-[50px]" />
            <div>
              <h1 className="text-2xl font-bold text-[#F59E0B] ">P B S F</h1>
              <p className="text-[#F59E0B]">From Listings to Legacy</p>
            </div>
          </div>
          <p className="text-sm pt-6">© 2023 PBFS.com</p>
          <div className="flex space-x-3 mt-3">
            <div className="bg-[#3758F9] flex justify-center items-center p-2 rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-[#3758F9] flex justify-center items-center p-2 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-[#3758F9] flex justify-center items-center p-2 rounded-full">
              <FaYoutube />
            </div>
            <div className="bg-[#3758F9] flex justify-center items-center p-2 rounded-full">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-11">Our Buyer Services</h3>
          <ul className="space-y-3 text-lg">
            <li>Buy a Business</li>
            <li>Buy a Franchise</li>
            <li>Buy a Business Asset</li>
            <li>Find a Business Idea</li>
            <li>Buy a Franchise</li>
            <li>Business Valuation</li>
            <li>Business Formation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-11">Our Seller Services</h3>
          <ul className="space-y-3 text-lg">
            <li>Businesses for Sale</li>
            <li>Business Assets for Sale</li>
            <li>Business Ideas for Investors</li>
            <li>Franchises for Sale</li>
          </ul>
        </div>
{/* rk branch */}
        <div>
          <h3 className="font-semibold mb-11 text-xl">FAQs</h3>
          <ul className="space-y-3 text-lg">
            <li><Link to={'/faqsSeller'}>Seller FAQs</Link></li>
            <li><Link to={'/faqs'}>Buyer FAQs</Link></li>
            <li><Link to={'/FaqBrokers'}>Broker FAQs</Link></li>
            <li><Link to={'/FaqInvestors'}>Investor FAQs</Link></li>
            <li><Link to={'/FaqBusiness'}>Business Idea Lister FAQs</Link></li>
            <li><Link to={'/FaqAsset'}>Business Asset Lister FAQs</Link></li>
            <li><Link to={'/FaqFranchise'}>Franchisor FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-11">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li><Link to={'/about-us'}>About Us</Link></li>
            <li><Link to={'/contact-us'}>Contact Us</Link></li>
            <li><Link to={'/<li>Privacy Policy</li>'}>Privacy Policy</Link></li>
            <li><Link to={'/terms-and-conditions'}>Terms of Condition</Link></li>
            <li><Link to={'/refund-and-cancellation-policy'}>Refund and cancellation Policy</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
