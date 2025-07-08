import React from "react";
import Logo from "../assets/Home/logo.png";
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
          <img src={Logo} alt="Logo" className="w-[200px] mb-4" />
          <p className="text-sm">© 2023 PBFS.com</p>
          <div className="flex space-x-3 mt-4">
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
          <h3 className="font-semibold mb-5">Our Buyer Services</h3>
          <ul className="space-y-1 ">
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
          <h3 className="font-semibold mb-5">Our Seller Services</h3>
          <ul className="space-y-1">
            <li>Businesses for Sale</li>
            <li>Business Assets for Sale</li>
            <li>Business Ideas for Investors</li>
            <li>Franchises for Sale</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5">FAQs</h3>
          <ul className="space-y-3">
            <Link to={'/faqsSeller'}><li>Seller FAQs</li></Link>
            <Link to={'/faqs'}><li>Buyer FAQs</li></Link>
            <Link to={'/FaqBrokers'}><li>Broker FAQs</li></Link>
            <Link to={'/FaqInvestors'}><li>Investor FAQs</li></Link>
            <Link to={'/FaqBusiness'}><li>Business Idea Lister FAQs</li></Link>
            <Link to={'/FaqAsset'}><li>Business Asset Lister FAQs</li></Link>
            <Link to={'/FaqFranchise'}><li>Franchisor FAQs</li></Link>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-1">
            <Link to={'/about-us'}><li>About Us</li></Link>
            <Link to={'/contact-us'}><li>Contact Us</li></Link>
            <Link to={'/privacy-policy'}><li>Privacy Policy</li></Link>
            <Link to={'/terms-and-conditions'}><li>Terms of Condition</li></Link>
            <Link to={'/refund-and-cancellation-policy'}><li>Refund and cancellation Policy</li></Link>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
