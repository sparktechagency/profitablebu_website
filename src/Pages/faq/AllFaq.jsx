import React from "react";
import faq1 from "../../assets/Home/faq1.png";
import faq2 from "../../assets/Home/faq2.png";
import faq3 from "../../assets/Home/faq3.png";
import faq4 from "../../assets/Home/faq4.png";
import faq5 from "../../assets/Home/faq5.png";
import faq6 from "../../assets/Home/faq6.png";
import faq7 from "../../assets/Home/faq7.png";
import img from "../../assets/Home/cover.png";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";
import Header from "../AboutUs/Header";
const faqs = [
  { img: faq1, text: "FAQ for Buyers", link: "/faqs" },
  { img: faq2, text: "FAQ for Sellers", link: "/faqsSeller" },
  { img: faq3, text: "FAQ for Brokers", link: "/FaqBrokers" },
  { img: faq4, text: "FAQ for Franchise Owners", link: "/FaqFranchise" },
  { img: faq5, text: "FAQ for Investors", link: "/FaqInvestors" },
  { img: faq6, text: "FAQ for Business Idea Listers", link: "/FaqBusiness" },
  { img: faq7, text: "FAQ for Business Asset Lister", link: "/FaqAsset" },
];

const AllFaq = () => {
  return (
    <div>
      <Header
        title="Frequently Asked Questions"
        description="Answers to common questions about buying, selling, and using our platform."
      />
      <div className="min-h-screen py-10 px-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl w-full">
          {faqs.map((faq, index) => (
            <Link
              to={faq.link}
              key={index}
              className="flex items-center gap-4 border border-[#dbeafe] rounded-lg p-4 bg-white hover:shadow cursor-pointer transition"
            >
              <img
                src={faq.img}
                alt={faq.text}
                className="w-16 h-16 object-contain"
              />
              <p className="text-gray-800 text-base font-medium">{faq.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFaq;
