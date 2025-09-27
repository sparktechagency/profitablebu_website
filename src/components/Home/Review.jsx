import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import profile from "../../assets/Home/pr.png"; 
import img1 from '../../assets/Home/mm.jpg'
import img2 from '../../assets/Home/ss.jpg'
import img3 from '../../assets/Home/vv.jpg'
import img4 from '../../assets/Home/user.png'
import { MdStar } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Review = () => {
  const testimonials = [
    {
      name: "Ahmed K.",
      role: "Café Owner",
      img: img1,
      review:
        "ProfitableBusinessesForSale.com made selling my café so much easier. Within weeks of listing, I started getting genuine inquiries. Highly recommended!",
    },
    {
      name: "Sophie L.",
      role: "Small Business Owner",
      img: img2,
      review:
        "I was worried about finding buyers, but PBFS gave my business the right exposure. Their Premium Seller package was worth every penny.",
    },
    {
      name: "Raj P.",
      role: "Entrepreneur",
      img: img3,
      review:
        "The valuation service helped me price my business correctly. I closed a deal in 4 months—faster than expected!",
    },
    {
      name: "Maria G.",
      role: "Franchise Owner",
      img: img4,
      review:
        "Listing our franchise on PBFS gave us international visibility. We received inquiries from investors in three different countries!",
    },
    {
      name: "John S.",
      role: "Franchise Seller",
      img: profile,
      review:
        "The franchise package was simple to use and provided real exposure. The dashboard makes tracking leads so easy.",
    },
    {
      name: "Fatima A.",
      role: "Franchisor",
     img: img4,
      review:
        "Great platform for franchisors! The social media spotlight and priority placement really boosted our brand visibility.",
    },
    {
      name: "Omar R.",
      role: "Salon Owner",
    img: img4,
      review:
        "I listed my salon equipment here and got it sold in less than two weeks. The inquiry alerts kept me updated instantly.",
    },
    {
      name: "Elena M.",
      role: "Asset Seller",
      img: img3,
      review:
        "Excellent platform for selling business assets. Easy to list, professional visibility, and I could manage everything from one dashboard.",
    },
    {
      name: "Carlos D.",
      role: "Business Broker",
      img: img4,
      review:
        "As a broker, I needed a place to list multiple businesses. PBFS is the perfect platform with strong lead tracking and premium visibility options.",
    },
    {
      name: "Noor S.",
      role: "Broker",
      img: profile,
      review:
        "The broker package gives me everything I need—multiple listings, team access, and high-quality buyer inquiries.",
    },
    {
      name: "David B.",
      role: "Startup Founder",
      img: img1,
      review:
        "I uploaded my startup idea for free and quickly connected with investors. This platform is perfect for early-stage entrepreneurs.",
    },
    {
      name: "Aisha M.",
      role: "Innovator",
      img: img2,
      review:
        "The Business Idea Lister gave me credibility and visibility with serious investors. Great way to showcase innovation for free.",
    },
    {
      name: "Michael T.",
      role: "Investor",
      img: img4,
      review:
        "The investor subscription is worth it. I discovered fresh ideas and had early access to listings before anyone else.",
    },
  ];

  const splideRef = useRef(null);

  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  return (
    <div className="mt-20">
      <div className="mb-11">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium mb-2">Our Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're buying or selling, our platform makes the process
            seamless and straightforward. Here’s how it works according to our
            satisfied users:
          </p>
        </div>

        <div className="w-full">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 3,
              gap: "1rem",
              arrows: false,
              pagination: false,
              breakpoints: {
                1724: { perPage: 3 },
                968: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
            aria-label="Testimonials"
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SplideSlide key={index}>
                <div className="shadow-lg bg-[#FFFFFF] rounded-2xl p-4 py-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex pb-3 text-yellow-500">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <p className="-mt-1 pl-2 text-gray-600">(5.0)</p>
                    </div>
                    <p className="text-sm mt-1 text-gray-700 italic">
                      {item?.review}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    <img
                      className="rounded-full w-[60px] h-[60px] object-cover"
                      src={item?.img}
                      alt={item?.name}
                    />
                    <div>
                      <h1 className="font-semibold text-gray-900">
                        {item?.name}
                      </h1>
                      <h2 className="text-sm text-gray-500">{item?.role}</h2>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Custom Arrows */}
        <div className="flex gap-3 justify-center mt-5">
          <button
            className="bg-[#0091FF] p-2 rounded text-white"
            onClick={handlePrevClick}
          >
            <HiArrowNarrowLeft className="text-2xl" />
          </button>
          <button
            className="bg-[#0091FF] p-2 rounded text-white"
            onClick={handleNextClick}
          >
            <HiArrowNarrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
