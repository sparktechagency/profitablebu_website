import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import img from '../../public/role-choose.png';
import { useNavigate } from 'react-router-dom';

function ChooseRole() {
  const data = [
    {
      title: 'Buyer',
      description:
        '“List your business for sale, manage offers, and close deals securely.”',
      state: 'Buyer',
    },
    {
      title: 'Seller',
      description:
        '“Browse businesses for sale, compare options, and connect with sellers.”',
      state: 'Seller',
    },
    {
      title: 'Broker',
      description:
        '“Browse businesses for sale, compare options, and connect with sellers.”',
      state: 'Broker',
    },
    {
      title: 'Franchise Seller',
      description: '“Browse businesses for sale, compare options',
      state: 'Francise Seller',
    },
    {
      title: 'Investor',
      description: '“Browse businesses for sale, compare options',
      state: 'Investor',
    },
    {
      title: 'Business Idea Lister',
      description: '“Browse businesses for sale, compare options',
      state: 'Business Idea Lister',
    },
    {
      title: 'Asset Seller',
      description: '“Browse businesses for sale, compare options',
      state: 'Asset Seller',
    },
  ];
  return (
    <div className="container my-28 px-2 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Choose <span className="text-[#172554] ">Your Role</span> to Get
          Started
        </h1>
        <p className="text-center text-base mt-4 mb-12">
          Select the option that best describes you to personalize your
          experience.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            state={item.state}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ChooseRole;

const Card = ({ title, description, state }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20, backdropFilter: 'blur(100px)' }}
      whileInView={{ scale: 1, opacity: 1, y: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <div className="sm:w-3/5 w-full  sm:block hidden h-[300px]">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </div>
      <div className="sm:w-3/5 w-full h-[200px] mt-12 sm:mt-0 sm:h-full relative">
        <div className="absolute backdrop-blur-sm border border-gray-200 bg-white shadow h-fit py-[42px] px-[20px] sm:right-20 flex items-start justify-center flex-col  top-1/2 transform -translate-y-1/2 w-full rounded">
          <h1 className="font-bold sm:text-4xl text-2xl">
            Become a{' '}
            <span className="text-[#172554] font-bold sm:text-4xl text-2xl">
              {title}
            </span>
          </h1>
          <p className="text-black font-bold text-base">{description}</p>
          <Button
            onClick={() => navigate(`/auth/signUp`, { state })}
            className="mt-4 sm:px-12 sm:py-6 py-4 text-base bg-[#0091FF] text-white hover:!bg-[#0091FF]/80 hover:!text-white border-none font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
