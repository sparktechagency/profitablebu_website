import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { MdStar } from "react-icons/md";

// import img1 from "../../assets/home/user1.png";
// import img2 from "../../assets/home/user2.png";
// import img3 from "../../assets/home/user3.png";

const Review = () => {
  const category = [
    {
      // img: img1,
      title: "Earings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      // img: img2,
      title: "Necklaces",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      // img: img3,
      title: "Rings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      // img: img1,
      title: "Earings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      // img: img2,
      title: "Necklaces",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      // img: img3,
      title: "Rings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
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
    <div className=" mt-20">
      <div className="mb-11">
        <div className="text-center max-w-2xl mx-auto mb-6 px-4">
          <h1 className="text-3xl font-semibold">
            What Our Happy Customers Say
          </h1>
          <p className="text-[#2E2E2E] pt-3">
            Real stories of love, elegance, and unforgettable moments—discover
            why our customers trust us for their most precious jewelry.
          </p>
        </div>

        <div className="">
          

          <div className=" w-full">
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
              aria-label="Category Slide"
              className="w-full"
            >
              {category.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="text-center border bg-[#FFFFFF] rounded-2xl p-4 py-8">
                    <div className="flex justify-center">
                      {/* <img
                        className="rounded-full w-20 h-20 object-cover"
                        src={item.img}
                        alt={item.title}
                      /> */}
                    </div>
                    <h1 className="text-xl mt-3">{item.title}</h1>
                    <h2 className="text-lg py-2">{item.location}</h2>
                    <p className="text-sm">{item.review}</p>
                    <div className="flex gap-1 justify-center pt-5 text-yellow-500">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="flex gap-3 justify-center mt-5">
            <div
            className=" bg-[#0091FF] p-2 rounded text-white"
            onClick={handlePrevClick}
          >
            <div className="rounded-full text-2xl  cursor-pointer">
              <SlArrowLeft />
            </div>
          </div>

          <div
            className=" bg-[#0091FF] p-2 rounded text-white "
            onClick={handleNextClick}
          >
            <div className="rounded-full text-2xl  cursor-pointer">
              <SlArrowRight />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
