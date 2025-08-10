import React, { useState } from "react";
import img1 from "../../assets/country-icons/afg.png";
import img2 from "../../assets/country-icons/pak.png";
import img3 from "../../assets/country-icons/in.webp";
import img4 from "../../assets/country-icons/s.webp";
import img5 from "../../assets/country-icons/usaa.png";
import backImg from "../../assets/Home/aaa.png";
import { Link } from "react-router-dom";
import { usePostSubscriberMutation } from "../../Pages/redux/api/metaApi";
import { message } from "antd";
const Country = () => {
  const [addSubscriber] = usePostSubscriberMutation();
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      return message.warning("Please enter an email.");
    }

    try {
      const res = await addSubscriber({ email }).unwrap();

      message.success(res?.message || "Subscribed successfully!");
      setEmail(""); // clear input
    } catch (err) {
      console.error(err);
      message.error(err?.data?.message || "Subscription failed");
    }
  };

  const countries = [
    { id: "United States", name: "Afghanistan", image: img1 },
    { id: "United Kingdom", name: "Pakistan", image: img2 },
    { id: "India", name: "India", image: img3 },
    { id: "Spain", name: "Saudi Arabia", image: img4 },
    { id: "United States", name: "United States", image: img5 },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center">
          <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Trending Countries
            </h2>
            <p className="text-gray-600 text-sm md:block hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices lectus sem.
            </p>
          </div>
        </div>
        <a href="#" className="text-blue-500 hover:underline">
          Explore More
        </a>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {countries.map((country) => (
          <Link key={country.id} to={`/search?country=${country.id}`}>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={country.image}
                alt={`${country.name} Flag`}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 shadow-4xl opacity-0 translate-y-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div>
                  <p className="text-white font-semibold text-4xl">120+</p>
                  <p className="text-white text-2xl">Business Available</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="bg-[#0A0D53] lg:text-white mt-20 bg-cover bg-center h-[50vh] flex items-center"
        style={{
          backgroundImage: `url(${backImg})`,
        }}
      >
        <div className="">
          <div className="md:grid grid-cols-2 ">
            <div className="md:pl-20 pl-4">
              <div className="">
                <h1 className="text-5xl pb-4 font-bold">
                  Start Building br for Free
                </h1>
                <p>
                  And because your company is unique, you will need an
                  extensible identity solution.
                </p>
              </div>
            </div>
            <div className="md:flex  pl-4 md:pl-0 md:pt-0 pt-4 justify-end">
              <div className="">
                <h1 className="text-4xl font-bold pb-4 text-black">
                  Subscribe Now
                </h1>
                <div className="flex gap-3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 text-black border-black w-full rounded"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-[#D97706] px-4 py-2 rounded text-white"
                  >
                    Submit
                  </button>
                </div>
                <p className="text-xl pt-3 text-black">
                  you will receive every news and pro tips
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
